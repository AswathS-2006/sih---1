import { GoogleGenAI } from '@google/genai';
import { ENV } from '../config/env';
import { TriageUrgency } from '../models/types';

export interface TriageInput {
  patientId: string;
  symptoms: string;
  symptomsList?: string[];
  duration?: string;
  language?: 'en' | 'hi' | 'mr';
  vitals?: {
    bpSystolic?: number;
    bpDiastolic?: number;
    heartRate?: number;
    spo2?: number;
    temperatureF?: number;
  };
}

export interface TriageResult {
  urgency: TriageUrgency;
  reasons: string[];
  warningSigns: string[];
  recommendedAction: string;
  confidenceScore: number;
  aiClinicalSummary: string;
  specialistNeeded?: string;
  requiredDiagnostics?: string[];
  disclaimer: string;
}

// Transparent clinical red flag dictionary (Multilingual keywords)
const RED_FLAG_KEYWORDS = [
  // English
  'chest pain', 'chest heaviness', 'chest pressure', 'radiating pain', 'difficulty breathing',
  'shortness of breath', 'breathlessness', 'dyspnea', 'unconscious', 'fainting', 'syncope',
  'severe bleeding', 'hemorrhage', 'stroke', 'paralysis', 'slurred speech', 'facial droop',
  'seizure', 'convulsion', 'cyanosis', 'severe head injury', 'cardiac arrest', 'crushing pain',
  // Hindi
  'छाती में दर्द', 'सीने में दर्द', 'सांस लेने में तकलीफ', 'सांस फूलना', 'बेहोश', 'खून बहना',
  'दौरा', 'पक्षाघात', 'लकवा', 'अत्यधिक पसीना',
  // Marathi
  'छातीत दुखणे', 'छातीवर दाब', 'श्वास घेण्यास त्रास', 'दम लागणे', 'बेशुद्ध', 'रक्तस्राव',
  'झटका', 'पक्षाघात', 'अर्धांगवायू', 'गार घाम'
];

const ORANGE_FLAG_KEYWORDS = [
  // English
  'high fever', 'persistent vomiting', 'severe abdominal pain', 'pregnancy bleeding',
  'pregnancy headache', 'severe asthma', 'fracture', 'deep wound', 'burns', 'dehydration',
  'altered sensorium', 'blood in urine', 'blood in stool',
  // Hindi
  'तेज बुखार', 'लगातार उल्टी', 'पेट में तेज दर्द', 'गर्भावस्था में दर्द', 'चक्कर आना',
  // Marathi
  'तीव्र ताप', 'सतत उलट्या', 'पोटात तीव्र वेदना', 'गरोदरपणातील त्रास', 'चक्कर येणे'
];

export async function evaluateTriage(input: TriageInput): Promise<TriageResult> {
  const textLower = (input.symptoms || '').toLowerCase();
  const symptomsList = input.symptomsList || [];
  const vitals = input.vitals || {};

  const reasons: string[] = [];
  const warningSigns: string[] = [];
  let urgency: TriageUrgency = 'GREEN';
  let specialistNeeded = 'General Medicine';
  const requiredDiagnostics: string[] = [];

  // 1. Vital Signs Evaluation
  if (vitals.spo2 && vitals.spo2 < 92) {
    urgency = 'RED';
    reasons.push(`Critical hypoxemia: Oxygen saturation (SpO2) is dangerously low at ${vitals.spo2}% (< 92%).`);
    warningSigns.push('Acute respiratory failure risk; requires supplemental oxygen and emergency stabilization.');
  } else if (vitals.spo2 && vitals.spo2 <= 94) {
    urgency = 'ORANGE';
    reasons.push(`Sub-optimal oxygen saturation: SpO2 measured at ${vitals.spo2}% (borderline).`);
  }

  if (vitals.bpSystolic && (vitals.bpSystolic >= 180 || (vitals.bpDiastolic && vitals.bpDiastolic >= 110))) {
    urgency = 'RED';
    reasons.push(`Hypertensive crisis: Blood pressure ${vitals.bpSystolic}/${vitals.bpDiastolic} mmHg exceeds critical threshold.`);
    warningSigns.push('Risk of hypertensive encephalopathy, aortic dissection, or acute heart failure.');
  } else if (vitals.bpSystolic && vitals.bpSystolic <= 85) {
    urgency = 'RED';
    reasons.push(`Hypotensive shock state: Systolic BP ${vitals.bpSystolic} mmHg (< 85 mmHg).`);
    warningSigns.push('Risk of organ hypoperfusion and hemodynamic collapse.');
  }

  if (vitals.heartRate && (vitals.heartRate > 120 || vitals.heartRate < 45)) {
    if (urgency !== 'RED') urgency = 'ORANGE';
    reasons.push(`Significant cardiac dysrhythmia: Heart rate abnormal at ${vitals.heartRate} bpm.`);
  }

  if (vitals.temperatureF && vitals.temperatureF >= 103) {
    if (urgency !== 'RED') urgency = 'ORANGE';
    reasons.push(`Hyperpyrexia: Body temperature measured at ${vitals.temperatureF}°F.`);
  }

  // 2. Red Flag Symptom Keyword Matching
  let matchedRedKeywords = RED_FLAG_KEYWORDS.filter(k => textLower.includes(k));
  if (matchedRedKeywords.length > 0) {
    urgency = 'RED';
    reasons.push(`Emergency clinical red-flag indicators detected: "${matchedRedKeywords.slice(0, 3).join('", "')}".`);
    warningSigns.push('Potential Acute Coronary Syndrome, severe cardiovascular event, or acute organ compromise.');
    specialistNeeded = 'Cardiology';
    requiredDiagnostics.push('12-Lead ECG', 'Troponin-I Biomarker', 'Chest X-Ray');
  }

  // 3. Orange Flag Keyword Matching (if not already RED)
  if (urgency !== 'RED') {
    const matchedOrangeKeywords = ORANGE_FLAG_KEYWORDS.filter(k => textLower.includes(k));
    if (matchedOrangeKeywords.length > 0) {
      urgency = 'ORANGE';
      reasons.push(`Priority clinical signs detected: "${matchedOrangeKeywords.slice(0, 3).join('", "')}".`);
      warningSigns.push('Requires same-day clinical assessment by a medical officer or specialist.');
      if (textLower.includes('pregnant') || textLower.includes('pregnancy') || textLower.includes('गर्भाव') || textLower.includes('गरोदर')) {
        specialistNeeded = 'Obstetrics/Gynecology';
        requiredDiagnostics.push('Ultrasound Obstetric', 'Complete Blood Count');
      } else if (textLower.includes('child') || textLower.includes('infant') || textLower.includes('बाळ')) {
        specialistNeeded = 'Pediatrics';
      }
    }
  }

  // 4. Default Green Routine case
  if (urgency === 'GREEN') {
    reasons.push('Symptoms align with routine, non-emergency conditions without critical red flags.');
    warningSigns.push('Monitor for any onset of breathing trouble, chest discomfort, or severe dehydration.');
    requiredDiagnostics.push('Routine Clinical Vitals Examination');
  }

  // Determine recommended action
  let recommendedAction = '';
  if (urgency === 'RED') {
    recommendedAction = 'CRITICAL (HIGH RISK): Immediate emergency referral to Big Hospital (Tertiary Medical College / District Hospital such as CMCH, PSG Hospital, KMCH, or Ganga Trauma Center) with 24x7 Emergency Resuscitation, ICCU, and on-duty specialists. Initiate 108 ambulance transfer immediately.';
  } else if (urgency === 'ORANGE') {
    recommendedAction = 'MODERATE RISK: Priority clinical evaluation required within 4 to 6 hours at a Sub-District Hospital (SDH) or Community Health Centre (CHC) with diagnostic observation beds.';
  } else {
    recommendedAction = 'LOW RISK: Routine outpatient evaluation at nearest Primary Care Clinic / Ayushman Arogya Mandir (e.g., Kinathukadavu Family Clinic, Othakkalmandapam Clinic) or PHC. Vitals check, symptom management, and medicine dispensation can be handled locally without big hospital emergency crowding.';
  }

  // Optional Gemini API Enhancement for clinical natural language reasoning
  let aiSummary = urgency === 'RED'
    ? 'High-risk acute clinical red-flags identified. AI clinical protocol recommends immediate referral to Big Tertiary Hospital with 24x7 Emergency Trauma & ICCU.'
    : urgency === 'ORANGE'
    ? 'Moderate-risk priority symptoms identified. AI clinical protocol recommends secondary evaluation at Sub-District Hospital / CHC within 4-6 hours.'
    : 'Low-risk routine symptoms identified. AI clinical protocol recommends local Primary Care Clinic or Ayushman Arogya Mandir for convenient OPD consultation.';

  if (ENV.GEMINI_API_KEY && ENV.GEMINI_API_KEY !== 'MY_GEMINI_API_KEY') {
    try {
      const ai = new GoogleGenAI({
        apiKey: ENV.GEMINI_API_KEY,
        httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: `You are an AI clinical triage assistant for CareGrid public health platform.
Evaluate these patient symptoms concisely:
Symptoms: "${input.symptoms}"
Vitals: ${JSON.stringify(vitals)}
Current rule-engine classification: ${urgency}

Key Referral Guidelines:
- If urgency is GREEN (low risk): Specifically recommend evaluating at a local primary clinic or Ayushman Arogya Mandir (Health & Wellness Clinic) rather than overwhelming a big tertiary hospital.
- If urgency is RED (high risk): Specifically recommend urgent emergency transfer to a big tertiary hospital (Medical College / District Hospital) equipped with 24x7 emergency resuscitation, ICU, and specialist care.
- If urgency is ORANGE (moderate risk): Recommend a Community Health Centre (CHC) or Sub-District Hospital.

Provide a 2-sentence clinical synthesis explaining why this case is ${urgency}, which facility tier (Local Clinic for low risk vs Big Hospital for high risk) is clinically appropriate, and what warning signs the health worker should monitor. Do not diagnose. Keep it objective, safe, and helpful for rural health workers.`
      });

      if (response && response.text) {
        aiSummary = response.text.trim();
      }
    } catch (err) {
      console.warn('[TriageService] Gemini API call skipped or errored, using rule engine summary:', err);
    }
  }

  return {
    urgency,
    reasons,
    warningSigns,
    recommendedAction,
    confidenceScore: urgency === 'RED' ? 0.98 : urgency === 'ORANGE' ? 0.92 : 0.88,
    aiClinicalSummary: aiSummary,
    specialistNeeded,
    requiredDiagnostics,
    disclaimer: 'AI-assisted triage. Final clinical decision must be confirmed by an authorized healthcare professional.'
  };
}
