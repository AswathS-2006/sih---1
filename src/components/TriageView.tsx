import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import { Patient, TriageRecord, TriageUrgency } from '../types';
import { VoiceInputButton } from './VoiceInputButton';
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Heart,
  Activity,
  ArrowRight,
  ShieldAlert,
  FileCheck2,
  HelpCircle,
  Stethoscope,
  User,
  Users,
  UserCheck,
  Plus,
  Building2,
  Sparkles,
  MapPin,
  Search,
  X
} from 'lucide-react';

interface TriageViewProps {
  onNavigateToRouting: (urgency: TriageUrgency, specialty?: string, patient?: Patient) => void;
}

export const TriageView: React.FC<TriageViewProps> = ({ onNavigateToRouting }) => {
  const { user, t, language, isOffline, setPendingOfflineActionsCount, translate } = useAuth();

  // Patient Selection States
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatientId, setSelectedPatientId] = useState<string>('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [patientSearch, setPatientSearch] = useState('');
  const [loadingPatients, setLoadingPatients] = useState(false);

  // New Patient Registration Modal
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [newPatientName, setNewPatientName] = useState('');
  const [newPatientDob, setNewPatientDob] = useState('1988-06-15');
  const [newPatientGender, setNewPatientGender] = useState<'MALE' | 'FEMALE' | 'OTHER'>('FEMALE');
  const [newPatientVillage, setNewPatientVillage] = useState('Kinathukadavu Village');
  const [newPatientPhone, setNewPatientPhone] = useState('+91 94421 88990');
  const [newPatientCondition, setNewPatientCondition] = useState('');
  const [registering, setRegistering] = useState(false);

  // Triage Inputs
  const [symptoms, setSymptoms] = useState('Crushing chest pain radiating to left shoulder and mild breathlessness for 45 minutes');
  const [duration, setDuration] = useState('45 minutes');
  const [bpSystolic, setBpSystolic] = useState<number | ''>(168);
  const [bpDiastolic, setBpDiastolic] = useState<number | ''>(98);
  const [heartRate, setHeartRate] = useState<number | ''>(102);
  const [spo2, setSpo2] = useState<number | ''>(94);
  const [temperatureF, setTemperatureF] = useState<number | ''>(98.6);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ triage: TriageRecord; evaluation: any } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [confirmNotes, setConfirmNotes] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  // Load registered patients on mount
  useEffect(() => {
    const fetchPatients = async () => {
      setLoadingPatients(true);
      try {
        const list = await api.getPatients();
        setPatients(list);

        // Preselect patient if logged in as patient
        if (user?.role === 'PATIENT' && user.patientId) {
          const matched = list.find(p => p.id === user.patientId) || list[0];
          if (matched) {
            setSelectedPatientId(matched.id);
            setSelectedPatient(matched);
          }
        } else if (list.length > 0) {
          // Preselect first village patient for ASHA / health workers
          setSelectedPatientId(list[0].id);
          setSelectedPatient(list[0]);
        }
      } catch (err) {
        console.error('Failed to load patient directory:', err);
      } finally {
        setLoadingPatients(false);
      }
    };
    fetchPatients();
  }, [user]);

  const handlePatientSelect = (patientId: string) => {
    setSelectedPatientId(patientId);
    const found = patients.find(p => p.id === patientId) || null;
    setSelectedPatient(found);
    setError(null);
  };

  const handleRegisterNewPatient = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPatientName.trim()) return;

    setRegistering(true);
    try {
      const created = await api.registerPatient({
        name: newPatientName.trim(),
        dateOfBirth: newPatientDob,
        gender: newPatientGender,
        addressVillage: newPatientVillage,
        district: 'Coimbatore',
        state: 'Tamil Nadu',
        pincode: '642109',
        latitude: 10.825,
        longitude: 77.021,
        conditions: newPatientCondition ? [newPatientCondition] : [],
        allergies: [],
        medications: []
      });

      // Update state and select the newly registered patient
      setPatients(prev => [created, ...prev]);
      setSelectedPatientId(created.id);
      setSelectedPatient(created);
      setIsRegisterOpen(false);

      // Reset form
      setNewPatientName('');
      setNewPatientCondition('');
    } catch (err: any) {
      alert('Failed to register patient: ' + err.message);
    } finally {
      setRegistering(false);
    }
  };

  // Quick preset test scenarios for easy ASHA evaluation
  const handleApplyLowRiskPreset = () => {
    setSymptoms('Mild runny nose, sneezing, low-grade fever, and slight headache for 2 days. No breathing difficulty or chest pain.');
    setDuration('2 days');
    setBpSystolic(120);
    setBpDiastolic(78);
    setHeartRate(76);
    setSpo2(99);
    setTemperatureF(99.4);
    setError(null);
  };

  const handleApplyHighRiskPreset = () => {
    setSymptoms('Crushing substernal chest pain radiating down left arm, acute breathlessness, profuse sweating (diaphoresis), and lightheadedness for 45 minutes.');
    setDuration('45 minutes');
    setBpSystolic(174);
    setBpDiastolic(106);
    setHeartRate(114);
    setSpo2(92);
    setTemperatureF(98.6);
    setError(null);
  };

  const quickSymptoms = [
    'Crushing chest pain',
    'Severe breathlessness',
    'High fever (>102°F)',
    'Profuse sweating & nausea',
    'Sudden weakness or slurred speech',
    'Severe abdominal pain',
    'Mild persistent cough',
    'Joint pain & stiffness'
  ];

  const handleAddSymptom = (chip: string) => {
    if (symptoms.trim()) {
      setSymptoms(prev => `${prev}, ${chip}`);
    } else {
      setSymptoms(chip);
    }
  };

  const handleVoiceTranscript = (text: string) => {
    setSymptoms(prev => (prev ? `${prev} ${text}` : text));
  };

  const handleEvaluate = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check patient selection for ASHA / Health Workers
    if (user?.role !== 'PATIENT' && !selectedPatient) {
      setError('Please select which patient you are performing digital triage for.');
      return;
    }

    if (!symptoms.trim()) {
      setError('Please provide patient symptoms to perform triage.');
      return;
    }

    setLoading(true);
    setError(null);
    setConfirmed(false);

    const targetPatientId = selectedPatient?.id || (user?.role === 'PATIENT' ? user.id : 'pat-1');

    // If simulated offline, provide offline rule-based triage
    if (isOffline) {
      setTimeout(() => {
        const lower = symptoms.toLowerCase();
        const isRed =
          lower.includes('chest pain') ||
          lower.includes('breath') ||
          (bpSystolic && bpSystolic >= 160) ||
          (spo2 && spo2 < 95);

        const offlineRecord: TriageRecord = {
          id: 'trg-offline-' + Date.now(),
          patientId: targetPatientId,
          symptoms,
          symptomsList: [symptoms],
          duration,
          vitals: {
            bpSystolic: Number(bpSystolic) || undefined,
            bpDiastolic: Number(bpDiastolic) || undefined,
            heartRate: Number(heartRate) || undefined,
            spo2: Number(spo2) || undefined,
            temperatureF: Number(temperatureF) || undefined
          },
          urgency: isRed ? 'RED' : 'ORANGE',
          reasons: [
            isRed
              ? 'Acute chest symptoms with elevated systolic BP (>160 mmHg) or SpO2 < 95%'
              : 'Symptom duration requires secondary clinical evaluation',
            'Evaluated via Offline Clinical Protocol Rule-Engine'
          ],
          warningSigns: isRed ? ['Risk of Acute Coronary Syndrome (ACS)', 'Hypoxia SpO2 < 95%'] : [],
          recommendedAction: isRed
            ? 'Immediate referral to Big Hospital / Medical College with 24x7 Emergency Room, ICU and ECG'
            : 'Refer to Primary Care Clinic or Community Health Centre for outpatient clinical assessment',
          confidenceScore: 92,
          humanConfirmed: false,
          aiClinicalSummary: 'Assessment conducted using embedded offline clinical protocols. Queued for server synchronization once connectivity resumes.',
          createdAt: new Date().toISOString()
        };

        setResult({
          triage: offlineRecord,
          evaluation: offlineRecord
        });

        // Store in localStorage offline actions queue
        const queue = JSON.parse(localStorage.getItem('caregrid_offline_queue') || '[]');
        queue.push({
          id: 'action-' + Date.now(),
          type: 'RECORD_TRIAGE',
          payload: offlineRecord,
          clientTimestamp: new Date().toISOString()
        });
        localStorage.setItem('caregrid_offline_queue', JSON.stringify(queue));
        setPendingOfflineActionsCount(queue.length);
        setLoading(false);
      }, 300);
      return;
    }

    try {
      const res = await api.assessTriage({
        patientId: targetPatientId,
        symptoms,
        duration,
        vitals: {
          bpSystolic: bpSystolic ? Number(bpSystolic) : undefined,
          bpDiastolic: bpDiastolic ? Number(bpDiastolic) : undefined,
          heartRate: heartRate ? Number(heartRate) : undefined,
          spo2: spo2 ? Number(spo2) : undefined,
          temperatureF: temperatureF ? Number(temperatureF) : undefined
        },
        language
      });
      setResult(res);
    } catch (err: any) {
      setError(err.message || 'Failed to complete triage assessment');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async () => {
    if (!result?.triage) return;
    try {
      await api.confirmTriage(result.triage.id, undefined, confirmNotes);
      setConfirmed(true);
      result.triage.humanConfirmed = true;
      result.triage.confirmedByWorkerName = user?.name || 'Sunita Gaikwad (ASHA)';
    } catch (err: any) {
      alert('Error confirming triage: ' + err.message);
    }
  };

  const urgencyColors = {
    RED: {
      bg: 'bg-rose-50 border-rose-300 text-rose-900',
      badge: 'bg-rose-600 text-white',
      border: 'border-rose-500',
      icon: AlertTriangle
    },
    ORANGE: {
      bg: 'bg-amber-50 border-amber-300 text-amber-900',
      badge: 'bg-amber-600 text-white',
      border: 'border-amber-500',
      icon: Clock
    },
    GREEN: {
      bg: 'bg-emerald-50 border-emerald-300 text-emerald-900',
      badge: 'bg-emerald-600 text-white',
      border: 'border-emerald-500',
      icon: CheckCircle2
    }
  };

  const filteredPatients = patients.filter(p =>
    p.name.toLowerCase().includes(patientSearch.toLowerCase()) ||
    (p.abhaId && p.abhaId.includes(patientSearch)) ||
    p.addressVillage.toLowerCase().includes(patientSearch.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto py-6 px-4 space-y-6">
      {/* Title & Clinical Protocol Disclaimer */}
      <div>
        <div className="flex items-center gap-2">
          <Stethoscope className="w-6 h-6 text-teal-600" />
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">{t.triage.title}</h1>
        </div>
        <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-2.5 text-xs text-blue-900 leading-relaxed">
          <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <strong>Clinical Safety Protocol:</strong> {t.triage.disclaimer}
          </div>
        </div>
      </div>

      {/* PATIENT SELECTION SECTION: Required for ASHA Workers and Clinical Staff */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs">
              <Users className="w-4 h-4 text-teal-700" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                {user?.role === 'PATIENT' ? 'Patient Identification' : 'Which patient are you doing digital triage for?'}
              </h2>
              <p className="text-2xs text-slate-500">
                {user?.role === 'PATIENT'
                  ? 'Personal health profile verified via ABHA'
                  : 'Select or register a community member to bind clinical assessment & risk referral'}
              </p>
            </div>
          </div>

          {user?.role !== 'PATIENT' && (
            <button
              type="button"
              id="btn-register-new-patient"
              onClick={() => setIsRegisterOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-xl transition shadow-2xs self-start sm:self-auto"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>+ Register New Patient</span>
            </button>
          )}
        </div>

        {user?.role === 'PATIENT' ? (
          <div className="p-3 bg-teal-50/70 border border-teal-200 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                {user.name.charAt(0)}
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                  <span>{user.name}</span>
                  <span className="text-2xs font-semibold text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-teal-600" />
                    ABHA Verified
                  </span>
                </div>
                <div className="text-2xs text-slate-600 mt-0.5">
                  Logged-in Patient Account • Kinathukadavu Village, Coimbatore
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {/* Quick-select Patient Chips */}
            <div>
              <span className="text-2xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                Quick Select Village Patient:
              </span>
              <div className="flex flex-wrap gap-2">
                {patients.map(p => {
                  const isSelected = selectedPatientId === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handlePatientSelect(p.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition border ${
                        isSelected
                          ? 'bg-teal-600 text-white border-teal-600 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <User className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                      <span>{p.name}</span>
                      <span className={`text-2xs ${isSelected ? 'text-teal-100' : 'text-slate-400'}`}>
                        ({p.gender === 'MALE' ? 'M' : 'F'})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Patient Search & Dropdown Picker */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-1">
              <div className="sm:col-span-12">
                <label htmlFor="triage-patient-select" className="text-xs font-semibold text-slate-700 block mb-1">
                  Active Patient Record <span className="text-rose-500">*</span>
                </label>
                <select
                  id="triage-patient-select"
                  value={selectedPatientId}
                  onChange={e => handlePatientSelect(e.target.value)}
                  className="w-full text-xs sm:text-sm rounded-xl border-slate-300 bg-white shadow-2xs focus:border-teal-500 focus:ring-teal-500 p-2.5"
                >
                  <option value="">-- Choose a patient --</option>
                  {patients.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.gender}, DOB: {p.dateOfBirth}) - ABHA: {p.abhaId || 'Pending'} - {p.addressVillage}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Selected Patient Banner with Medical Context */}
            {selectedPatient && (
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-teal-600" />
                    <span className="text-xs font-bold text-slate-900">
                      Triage Target: {selectedPatient.name}
                    </span>
                    <span className="text-2xs font-semibold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">
                      ABHA: {selectedPatient.abhaId || '91-4421-8812-7654'}
                    </span>
                  </div>
                  <span className="text-2xs text-slate-500">
                    Location: {selectedPatient.addressVillage}, {selectedPatient.district}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-2xs text-slate-600">
                  <span>
                    <strong>Known Conditions:</strong>{' '}
                    {selectedPatient.conditions.length > 0
                      ? selectedPatient.conditions.join(', ')
                      : 'No chronic history recorded'}
                  </span>
                  {selectedPatient.medications.length > 0 && (
                    <>
                      <span>•</span>
                      <span>
                        <strong>Medications:</strong> {selectedPatient.medications.join(', ')}
                      </span>
                    </>
                  )}
                </div>

                {/* Quick Symptom Simulation Triggers for ASHA worker */}
                <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center gap-2">
                  <span className="text-2xs font-semibold text-slate-500">Quick Test Cases:</span>
                  <button
                    type="button"
                    onClick={handleApplyLowRiskPreset}
                    className="px-2.5 py-1 text-2xs font-semibold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-200/70 border border-emerald-300 rounded-lg transition"
                  >
                    🟢 Load Low Risk (Clinic Referral: Mild Cough & Fever)
                  </button>
                  <button
                    type="button"
                    onClick={handleApplyHighRiskPreset}
                    className="px-2.5 py-1 text-2xs font-semibold text-rose-800 bg-rose-100/70 hover:bg-rose-200/70 border border-rose-300 rounded-lg transition"
                  >
                    🔴 Load High Risk (Big Hospital Referral: Acute Chest Pain & BP 174/106)
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Triage Input Form */}
        <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
          <form onSubmit={handleEvaluate} className="space-y-4">
            {/* Symptoms Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="symptoms-input" className="text-xs font-semibold text-slate-700">
                  {t.triage.symptomsLabel} <span className="text-rose-500">*</span>
                </label>
                <VoiceInputButton onTranscript={handleVoiceTranscript} language={language} />
              </div>
              <textarea
                id="symptoms-input"
                rows={3}
                value={symptoms}
                onChange={e => setSymptoms(e.target.value)}
                placeholder={t.triage.symptomsPlaceholder}
                className="w-full text-sm rounded-xl border-slate-300 shadow-2xs focus:border-teal-500 focus:ring-teal-500 p-3"
              />
            </div>

            {/* Quick symptom pills */}
            <div>
              <span className="text-2xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">
                {t.triage.quickSymptomsLabel}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {quickSymptoms.map(chip => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => handleAddSymptom(translate(chip))}
                    className="px-2.5 py-1 text-xs rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
                  >
                    + {translate(chip)}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label htmlFor="duration-input" className="text-xs font-semibold text-slate-700 block mb-1">
                {t.triage.durationLabel}
              </label>
              <input
                id="duration-input"
                type="text"
                value={duration}
                onChange={e => setDuration(e.target.value)}
                placeholder="e.g. 45 minutes, 2 days"
                className="w-full text-sm rounded-lg border-slate-300 shadow-2xs focus:border-teal-500 focus:ring-teal-500 p-2"
              />
            </div>

            {/* Vitals Section */}
            <div className="pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-800 block mb-2 flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-500" />
                <span>{t.triage.vitalsHeader}</span>
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div>
                  <label htmlFor="bp-systolic" className="text-2xs font-semibold text-slate-600 block mb-1">
                    {t.triage.bpSystolic}
                  </label>
                  <input
                    id="bp-systolic"
                    type="number"
                    value={bpSystolic}
                    onChange={e => setBpSystolic(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="120"
                    className="w-full text-xs rounded-lg border-slate-300 p-2"
                  />
                </div>

                <div>
                  <label htmlFor="bp-diastolic" className="text-2xs font-semibold text-slate-600 block mb-1">
                    {t.triage.bpDiastolic}
                  </label>
                  <input
                    id="bp-diastolic"
                    type="number"
                    value={bpDiastolic}
                    onChange={e => setBpDiastolic(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="80"
                    className="w-full text-xs rounded-lg border-slate-300 p-2"
                  />
                </div>

                <div>
                  <label htmlFor="heart-rate" className="text-2xs font-semibold text-slate-600 block mb-1">
                    {t.triage.heartRate}
                  </label>
                  <input
                    id="heart-rate"
                    type="number"
                    value={heartRate}
                    onChange={e => setHeartRate(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="75"
                    className="w-full text-xs rounded-lg border-slate-300 p-2"
                  />
                </div>

                <div>
                  <label htmlFor="spo2" className="text-2xs font-semibold text-slate-600 block mb-1">
                    {t.triage.spo2}
                  </label>
                  <input
                    id="spo2"
                    type="number"
                    value={spo2}
                    onChange={e => setSpo2(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="98"
                    className="w-full text-xs rounded-lg border-slate-300 p-2"
                  />
                </div>

                <div>
                  <label htmlFor="temperature" className="text-2xs font-semibold text-slate-600 block mb-1">
                    {t.triage.temperature}
                  </label>
                  <input
                    id="temperature"
                    type="number"
                    step="0.1"
                    value={temperatureF}
                    onChange={e => setTemperatureF(e.target.value === '' ? '' : Number(e.target.value))}
                    placeholder="98.6"
                    className="w-full text-xs rounded-lg border-slate-300 p-2"
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{error}</span>
              </div>
            )}

            {/* Evaluate Button */}
            <button
              type="submit"
              id="btn-evaluate-triage"
              disabled={loading}
              className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 transition disabled:opacity-50 shadow-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>{t.triage.evaluating}</span>
              ) : (
                <>
                  <Activity className="w-4 h-4" />
                  <span>{t.triage.evaluateButton}</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Triage Evaluation Results */}
        <div className="lg:col-span-5 space-y-4">
          {result ? (
            <div
              id="triage-result-card"
              className={`p-5 rounded-2xl border-2 shadow-sm space-y-4 ${
                urgencyColors[result.triage.urgency].bg
              } ${urgencyColors[result.triage.urgency].border}`}
            >
              {/* Target Patient Badge & Urgency */}
              <div className="flex flex-col gap-1.5 pb-2.5 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      urgencyColors[result.triage.urgency].badge
                    }`}
                  >
                    {result.triage.urgency === 'RED' && t.triage.redEmergency}
                    {result.triage.urgency === 'ORANGE' && t.triage.orangePriority}
                    {result.triage.urgency === 'GREEN' && t.triage.greenRoutine}
                  </span>
                  <span className="text-2xs font-semibold text-slate-500">
                    {t.triage.confidenceLabel}: {result.triage.confidenceScore}%
                  </span>
                </div>

                {selectedPatient && (
                  <div className="text-2xs font-bold text-slate-700 flex items-center gap-1.5 mt-1">
                    <User className="w-3.5 h-3.5 text-teal-600" />
                    <span>
                      Patient: {selectedPatient.name} • ABHA: {selectedPatient.abhaId || 'Pending'}
                    </span>
                  </div>
                )}
              </div>

              {/* AI Tier Referral Directive (Low Risk -> Clinic, High Risk -> Big Hospital) */}
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Building2 className="w-4 h-4 text-teal-600" />
                  <span>
                    {result.triage.urgency === 'GREEN'
                      ? 'AI Referral Policy: Local Primary Care Clinic'
                      : result.triage.urgency === 'RED'
                      ? 'AI Referral Policy: Big Tertiary / District Hospital'
                      : 'AI Referral Policy: Community Health Centre / SDH'}
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {result.triage.urgency === 'GREEN' && (
                    <>
                      <strong>Low Risk Triage:</strong> Recommend nearest Primary Clinic or Ayushman Arogya Mandir (e.g. Kinathukadavu Clinic / Othakkalmandapam Clinic) for routine OPD consultation, basic lab check, and free essential medicine dispensation. <em>Avoid emergency tertiary hospital visits to prevent overcrowding.</em>
                    </>
                  )}
                  {result.triage.urgency === 'RED' && (
                    <>
                      <strong>High Risk Emergency:</strong> Immediate referral to Big Hospital (Tertiary Medical College / District Hospital like CMCH, PSG, KMCH, or Ganga) with 24x7 Emergency Trauma, ICU Resuscitation, and specialists. <em>Local primary clinics lack ICU capabilities and should be bypassed.</em>
                    </>
                  )}
                  {result.triage.urgency === 'ORANGE' && (
                    <>
                      <strong>Priority Secondary Care:</strong> Referral to Community Health Centre (CHC) or Sub-District Hospital within 4-6 hours for specialist review.
                    </>
                  )}
                </p>
              </div>

              {/* Clinical Reasons */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 mb-1.5">
                  {t.triage.reasonsTitle}:
                </h4>
                <ul className="space-y-1">
                  {result.triage.reasons.map((r, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                      <span className="text-teal-600 font-bold">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning Signs */}
              {result.triage.warningSigns && result.triage.warningSigns.length > 0 && (
                <div className="p-2.5 bg-rose-100/70 border border-rose-200 rounded-xl">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900 mb-1">
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                    <span>{t.triage.warningSignsTitle}:</span>
                  </div>
                  <ul className="space-y-0.5">
                    {result.triage.warningSigns.map((w, i) => (
                      <li key={i} className="text-2xs text-rose-800">
                        ⚠ {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Recommended Next Action */}
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span className="text-2xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  {t.triage.nextActionTitle}:
                </span>
                <p className="text-xs font-medium text-slate-800 leading-relaxed">
                  {result.triage.recommendedAction}
                </p>
              </div>

              {/* AI Clinical Summary */}
              {result.triage.aiClinicalSummary && (
                <div className="text-2xs text-slate-600 italic bg-white/60 p-2.5 rounded-lg border border-slate-200">
                  <strong>Clinical Synthesis:</strong> {result.triage.aiClinicalSummary}
                </div>
              )}

              {/* Human Clinical Confirmation Section */}
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">
                    {t.triage.confirmButton}:
                  </span>
                  {result.triage.humanConfirmed || confirmed ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-2xs font-bold bg-emerald-100 text-emerald-800">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {t.triage.humanConfirmedBadge}
                    </span>
                  ) : (
                    <span className="text-2xs text-amber-700 font-medium">{t.journey.inProgress}</span>
                  )}
                </div>

                {!result.triage.humanConfirmed && !confirmed && (
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder={t.triage.enterNotesPlaceholder}
                      value={confirmNotes}
                      onChange={e => setConfirmNotes(e.target.value)}
                      className="w-full text-xs rounded-lg border-slate-300 p-2"
                    />
                    <button
                      type="button"
                      id="btn-confirm-triage"
                      onClick={handleConfirm}
                      className="w-full py-1.5 px-3 rounded-lg text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs flex items-center justify-center gap-1.5"
                    >
                      <FileCheck2 className="w-3.5 h-3.5 text-teal-600" />
                      <span>{t.triage.confirmButton}</span>
                    </button>
                  </div>
                )}
              </div>

              {/* 1-Click CTA to Intelligent Facility Routing */}
              <button
                type="button"
                id="btn-route-facility"
                onClick={() =>
                  onNavigateToRouting(
                    result.triage.urgency,
                    result.triage.urgency === 'RED' ? 'Cardiology' : 'General Medicine',
                    selectedPatient || undefined
                  )
                }
                className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition shadow-sm flex items-center justify-center gap-2"
              >
                <span>{t.triage.routeButton}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center space-y-3">
              <Activity className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-sm font-bold text-slate-700">Awaiting Triage Assessment</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
                {user?.role === 'ASHA_WORKER'
                  ? 'Confirm which patient you are evaluating above, enter their symptoms and vitals, then evaluate urgency. The AI will route low-risk cases to local clinics and high-risk emergencies to big hospitals.'
                  : 'Enter symptoms and optional vitals on the left, then click Evaluate Triage Urgency. CareGrid will apply clinical safety rules and clinical AI synthesis to classify urgency.'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Inline Register Patient Modal */}
      {isRegisterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-teal-600" />
                <h3 className="text-base font-bold text-slate-900">Register Village Patient</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsRegisterOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleRegisterNewPatient} className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={newPatientName}
                  onChange={e => setNewPatientName(e.target.value)}
                  placeholder="e.g. Muthulakshmi K."
                  className="w-full text-xs rounded-lg border-slate-300 p-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={newPatientDob}
                    onChange={e => setNewPatientDob(e.target.value)}
                    className="w-full text-xs rounded-lg border-slate-300 p-2"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Gender
                  </label>
                  <select
                    value={newPatientGender}
                    onChange={e => setNewPatientGender(e.target.value as any)}
                    className="w-full text-xs rounded-lg border-slate-300 p-2"
                  >
                    <option value="FEMALE">Female</option>
                    <option value="MALE">Male</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Village / Habitation
                </label>
                <input
                  type="text"
                  value={newPatientVillage}
                  onChange={e => setNewPatientVillage(e.target.value)}
                  placeholder="e.g. Kinathukadavu Village"
                  className="w-full text-xs rounded-lg border-slate-300 p-2"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Mobile Phone
                </label>
                <input
                  type="text"
                  value={newPatientPhone}
                  onChange={e => setNewPatientPhone(e.target.value)}
                  className="w-full text-xs rounded-lg border-slate-300 p-2"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Known Chronic Condition (Optional)
                </label>
                <input
                  type="text"
                  value={newPatientCondition}
                  onChange={e => setNewPatientCondition(e.target.value)}
                  placeholder="e.g. Hypertension, Type 2 Diabetes, ANC (3rd Trimester)"
                  className="w-full text-xs rounded-lg border-slate-300 p-2"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsRegisterOpen(false)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={registering}
                  className="px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 disabled:opacity-50"
                >
                  {registering ? 'Registering...' : 'Register & Select'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
