import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import { Patient, ScoredFacility, TriageUrgency } from '../types';
import {
  ShieldCheck,
  MapPin,
  Clock,
  UserCheck,
  Building2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Stethoscope,
  Filter,
  CheckCircle2,
  AlertTriangle,
  User,
  HeartPulse
} from 'lucide-react';

interface FacilityRoutingViewProps {
  initialUrgency?: TriageUrgency;
  initialSpecialty?: string;
  patient?: Patient;
  onInitiateReferral: (facilityId: string, facilityName: string) => void;
  onOpenAddHospital?: () => void;
}

export const FacilityRoutingView: React.FC<FacilityRoutingViewProps> = ({
  initialUrgency = 'ORANGE',
  initialSpecialty = 'Cardiology',
  patient,
  onInitiateReferral,
  onOpenAddHospital
}) => {
  const { user, t, translate } = useAuth();
  const canAccessReferrals =
    user?.role !== 'PATIENT' &&
    user?.role !== 'ASHA_WORKER' &&
    user?.role !== 'HEALTH_WORKER';

  const [urgency, setUrgency] = useState<TriageUrgency>(initialUrgency);
  const [specialty, setSpecialty] = useState<string>(initialSpecialty);
  const [requiredDiagnostics, setRequiredDiagnostics] = useState<string[]>([
    '12-Lead ECG',
    'Cardiac Enzymes'
  ]);
  const [facilityFilter, setFacilityFilter] = useState<'ALL' | 'CLINIC' | 'HOSPITAL'>('ALL');
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<ScoredFacility[]>([]);
  const [selectedFacility, setSelectedFacility] = useState<ScoredFacility | null>(null);

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const res = await api.recommendFacilities({
        patientId: patient?.id,
        patientLatitude: patient?.latitude,
        patientLongitude: patient?.longitude,
        urgency,
        requiredSpecialty: specialty,
        requiredDiagnostics
      });
      setRecommendations(res.recommendations);
      if (res.recommendations.length > 0) {
        setSelectedFacility(res.recommendations[0]);
      }
    } catch (err) {
      console.error('Failed to load facility recommendations:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, [urgency, specialty, requiredDiagnostics, patient]);

  const handleScenario2Preset = () => {
    setUrgency('RED');
    setSpecialty('Cardiology');
    setRequiredDiagnostics(['12-Lead ECG', 'Cardiac Enzymes (Troponin)']);
  };

  const handleLowRiskPreset = () => {
    setUrgency('GREEN');
    setSpecialty('General Medicine');
    setRequiredDiagnostics(['Complete Blood Count']);
  };

  // Filter recommendations by Clinic vs Big Hospital
  const filteredRecommendations = recommendations.filter(rec => {
    const isClinic = rec.facility.type === 'Clinic' || rec.facility.type === 'PHC';
    const isBigHospital =
      rec.facility.type === 'District Hospital' ||
      rec.facility.type === 'Specialist Medical College' ||
      rec.facility.type === 'Tertiary Hospital' ||
      (rec.facility.totalBeds && rec.facility.totalBeds >= 250);

    if (facilityFilter === 'CLINIC') return isClinic;
    if (facilityFilter === 'HOSPITAL') return isBigHospital;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 space-y-6">
      {/* Header & Scenario Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-teal-600" />
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              {t.routing.title}
            </h1>
          </div>
          <p className="text-xs text-slate-500 mt-1 max-w-2xl">{t.routing.subtitle}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          {onOpenAddHospital && (
            <button
              id="btn-feed-hospital-routing"
              type="button"
              onClick={onOpenAddHospital}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl transition shadow-2xs"
            >
              <Building2 className="w-4 h-4" />
              <span>{translate('+ Feed Facility Data')}</span>
            </button>
          )}

          {/* Quick Preset Buttons */}
          <button
            id="btn-test-low-risk"
            type="button"
            onClick={handleLowRiskPreset}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition shadow-2xs"
          >
            <span>🟢 Test Low Risk (Clinics)</span>
          </button>

          <button
            id="btn-scenario-2-preset"
            type="button"
            onClick={handleScenario2Preset}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-rose-900 bg-rose-50 hover:bg-rose-100 border border-rose-300 rounded-xl transition shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>🔴 Test High Risk (Big Hospitals)</span>
          </button>
        </div>
      </div>

      {/* Patient Context Banner when routed from triage */}
      {patient && (
        <div className="p-3.5 bg-teal-50 border border-teal-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs font-bold text-teal-950 flex items-center gap-2">
                <span>Active Referral Target: {patient.name}</span>
                <span className="text-2xs font-semibold text-teal-800 bg-teal-100 px-2 py-0.5 rounded-full">
                  ABHA: {patient.abhaId || '91-4421-8812-7654'}
                </span>
                <span className="text-2xs text-teal-700">({patient.gender}, {patient.dateOfBirth})</span>
              </div>
              <div className="text-2xs text-teal-800 mt-0.5">
                Location: {patient.addressVillage}, {patient.district} • GPS coordinates ({patient.latitude.toFixed(3)}, {patient.longitude.toFixed(3)}) applied for transit calculation
              </div>
            </div>
          </div>
          <div className="self-start sm:self-auto">
            <span className={`px-2.5 py-1 rounded-full text-2xs font-bold uppercase tracking-wider ${
              urgency === 'RED'
                ? 'bg-rose-600 text-white'
                : urgency === 'ORANGE'
                ? 'bg-amber-600 text-white'
                : 'bg-emerald-600 text-white'
            }`}>
              {urgency === 'RED' ? 'High-Risk Hospital Tier' : urgency === 'GREEN' ? 'Low-Risk Clinic Tier' : 'Priority Secondary'}
            </span>
          </div>
        </div>
      )}

      {/* AI Clinical Directive Banner (Low Risk -> Clinic, High Risk -> Big Hospital) */}
      {urgency === 'GREEN' ? (
        <div className="p-3.5 bg-emerald-50 border border-emerald-300 rounded-xl flex items-start gap-2.5 text-xs text-emerald-950">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>AI Low-Risk Directive Active:</strong> Primary Care Clinics and Ayushman Arogya Mandirs are prioritized. These centers provide fast outpatient consults, baseline vitals, and essential free medicines with minimal wait times (~5–10 mins), reserving big tertiary hospitals for critical emergencies.
          </div>
        </div>
      ) : urgency === 'RED' ? (
        <div className="p-3.5 bg-rose-50 border border-rose-300 rounded-xl flex items-start gap-2.5 text-xs text-rose-950">
          <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>AI High-Risk Directive Active:</strong> Big Hospitals (Tertiary Medical Colleges & District Hospitals with 24x7 Emergency Trauma, ICU Resuscitation, and specialists) are prioritized. Local primary clinics lack ICU beds and emergency surgical teams and should not be used for acute emergencies.
          </div>
        </div>
      ) : (
        <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2.5 text-xs text-amber-900">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">{t.routing.nearestWarning}</div>
        </div>
      )}

      {/* Interactive Criteria Filter Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <Filter className="w-3.5 h-3.5 text-slate-500" />
          <span>Active Clinical Routing Criteria</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Urgency selection */}
          <div>
            <label htmlFor="select-urgency" className="text-2xs font-semibold text-slate-600 block mb-1">
              Patient Urgency Tier
            </label>
            <select
              id="select-urgency"
              value={urgency}
              onChange={e => setUrgency(e.target.value as TriageUrgency)}
              className="w-full text-xs rounded-lg border-slate-300 p-2"
            >
              <option value="RED">RED - Emergency Trauma / Resuscitation (Big Hospitals)</option>
              <option value="ORANGE">ORANGE - Urgent Secondary Care (CHCs / Sub-District)</option>
              <option value="GREEN">GREEN - Routine Primary OPD (Local Clinics)</option>
            </select>
          </div>

          {/* Specialty selection */}
          <div>
            <label htmlFor="select-specialty" className="text-2xs font-semibold text-slate-600 block mb-1">
              Required Medical Specialty
            </label>
            <select
              id="select-specialty"
              value={specialty}
              onChange={e => setSpecialty(e.target.value)}
              className="w-full text-xs rounded-lg border-slate-300 p-2"
            >
              <option value="General Medicine">General Medicine / Medical Officer</option>
              <option value="Cardiology">Cardiology (Heart Care)</option>
              <option value="High-Risk Obstetrics & Gynaecology">High-Risk Obstetrics & Gynaecology</option>
              <option value="Pediatrics">Pediatrics (Child Health)</option>
              <option value="Orthopaedics & Trauma">Orthopaedics & Trauma Surgery</option>
            </select>
          </div>

          {/* Diagnostic tests required */}
          <div>
            <label htmlFor="select-diagnostics" className="text-2xs font-semibold text-slate-600 block mb-1">
              Key Diagnostic Prerequisite
            </label>
            <select
              id="select-diagnostics"
              value={requiredDiagnostics[0] || ''}
              onChange={e => setRequiredDiagnostics([e.target.value])}
              className="w-full text-xs rounded-lg border-slate-300 p-2"
            >
              <option value="12-Lead ECG">12-Lead ECG & Cardiac Markers</option>
              <option value="Ultrasound Sonography">Ultrasound Sonography (USG / Doppler)</option>
              <option value="Digital X-Ray">Digital X-Ray</option>
              <option value="Complete Blood Count">Complete Blood Count (CBC) & Basic Lab</option>
            </select>
          </div>
        </div>
      </div>

      {/* Facilities Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: List of Scored Facilities */}
        <div className="lg:col-span-7 space-y-3">
          {/* Facility Tier Filter Tabs */}
          <div className="flex items-center justify-between gap-2 flex-wrap pb-1">
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setFacilityFilter('ALL')}
                className={`px-3 py-1 rounded-lg transition ${
                  facilityFilter === 'ALL' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Facilities ({recommendations.length})
              </button>
              <button
                type="button"
                onClick={() => setFacilityFilter('CLINIC')}
                className={`px-3 py-1 rounded-lg transition flex items-center gap-1 ${
                  facilityFilter === 'CLINIC' ? 'bg-teal-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Clinics & Arogya Mandirs</span>
              </button>
              <button
                type="button"
                onClick={() => setFacilityFilter('HOSPITAL')}
                className={`px-3 py-1 rounded-lg transition flex items-center gap-1 ${
                  facilityFilter === 'HOSPITAL' ? 'bg-indigo-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Big Hospitals & Tertiary</span>
              </button>
            </div>

            <span className="text-2xs font-semibold text-slate-500">
              {filteredRecommendations.length} Shown
            </span>
          </div>

          {loading ? (
            <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-xs text-slate-500">
              Evaluating multi-criteria algorithms & hospital capacity metrics...
            </div>
          ) : filteredRecommendations.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-xs text-slate-500">
              No facilities match the selected filter. Try selecting "All Facilities".
            </div>
          ) : (
            filteredRecommendations.map((rec, index) => {
              const isSelected = selectedFacility?.facility.id === rec.facility.id;
              const isTop = index === 0 && facilityFilter === 'ALL';
              const isClinic = rec.facility.type === 'Clinic' || rec.facility.type === 'PHC';
              const isBigHospital =
                rec.facility.type === 'District Hospital' ||
                rec.facility.type === 'Specialist Medical College' ||
                rec.facility.type === 'Tertiary Hospital' ||
                (rec.facility.totalBeds && rec.facility.totalBeds >= 250);

              return (
                <div
                  key={rec.facility.id}
                  id={`facility-card-${rec.facility.id}`}
                  onClick={() => setSelectedFacility(rec)}
                  className={`p-4 rounded-xl border-2 transition cursor-pointer relative bg-white shadow-2xs ${
                    isSelected
                      ? 'border-teal-600 ring-1 ring-teal-500'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {isTop && (
                    <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full text-2xs font-bold uppercase bg-teal-600 text-white shadow-xs">
                      ★ Top Clinically Matched Facility
                    </span>
                  )}

                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5">
                        <h3 className="text-sm font-bold text-slate-900">{rec.facility.name}</h3>
                        {isClinic ? (
                          <span className="px-2 py-0.5 text-2xs font-bold rounded-md bg-teal-50 text-teal-800 border border-teal-200">
                            Clinic / Arogya Mandir
                          </span>
                        ) : isBigHospital ? (
                          <span className="px-2 py-0.5 text-2xs font-bold rounded-md bg-indigo-50 text-indigo-800 border border-indigo-200">
                            Big Hospital / Tertiary
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 text-2xs font-semibold rounded-md bg-slate-100 text-slate-700">
                            {rec.facility.type}
                          </span>
                        )}
                      </div>
                      <p className="text-2xs text-slate-500 mt-0.5">{rec.facility.address}</p>
                    </div>

                    {/* Total Composite Score */}
                    <div className="text-right shrink-0">
                      <div className="text-xl font-extrabold text-teal-700">
                        {rec.totalScore}
                        <span className="text-2xs font-normal text-slate-400">/100</span>
                      </div>
                      <span className="text-2xs font-semibold text-slate-500">CareGrid Score</span>
                    </div>
                  </div>

                  {/* Key Metrics Quick Row */}
                  <div className="grid grid-cols-3 gap-2 mt-3 pt-2.5 border-t border-slate-100 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{rec.distanceKm} km</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>~{rec.estimatedTravelTimeMin} mins</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" />
                      <span>
                        {isClinic
                          ? `Queue: ${rec.facility.currentQueueLength || 4}`
                          : `${rec.facility.icuBeds || 20} ICU Beds`}
                      </span>
                    </div>
                  </div>

                  {/* Reasons Preview */}
                  <div className="mt-2.5 space-y-1">
                    {rec.reasons.slice(0, 2).map((reason, i) => (
                      <div
                        key={i}
                        className={`text-2xs font-medium flex items-center gap-1 ${
                          reason.startsWith('✓') ? 'text-emerald-800' : 'text-amber-800'
                        }`}
                      >
                        <span>{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Right Column: Detailed Breakdown for Selected Facility */}
        <div className="lg:col-span-5">
          {selectedFacility ? (
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4 sticky top-24">
              <div className="border-b border-slate-100 pb-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-2xs font-bold uppercase tracking-wider text-teal-700">
                    Facility Analysis
                  </span>
                  {selectedFacility.facility.type === 'Clinic' ? (
                    <span className="text-2xs font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">
                      Primary Care Clinic
                    </span>
                  ) : selectedFacility.facility.type === 'Specialist Medical College' || selectedFacility.facility.type === 'Tertiary Hospital' || selectedFacility.facility.type === 'District Hospital' ? (
                    <span className="text-2xs font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                      Big Hospital / Tertiary
                    </span>
                  ) : null}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {selectedFacility.facility.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-slate-500">
                    {selectedFacility.distanceKm} km away • ~{selectedFacility.estimatedTravelTimeMin} min transit
                  </span>
                </div>
              </div>

              {/* Transparent Score Breakdown */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-800 block">
                  Scoring Factors Breakdown:
                </span>
                {[
                  { label: 'Specialist Match', value: selectedFacility.scoreBreakdown.specialistMatch, max: 25 },
                  { label: 'Clinical Capability', value: selectedFacility.scoreBreakdown.capabilityMatch, max: 20 },
                  { label: 'Capacity & Queue', value: selectedFacility.scoreBreakdown.capacityScore, max: 20 },
                  { label: 'Diagnostics Available', value: selectedFacility.scoreBreakdown.diagnosticAvailability, max: 15 },
                  { label: 'Medicine Availability', value: selectedFacility.scoreBreakdown.medicineAvailability, max: 10 },
                  { label: 'Proximity / Distance', value: selectedFacility.scoreBreakdown.distanceScore, max: 10 }
                ].map(item => (
                  <div key={item.label} className="text-2xs space-y-0.5">
                    <div className="flex justify-between text-slate-700">
                      <span>{item.label}</span>
                      <span className="font-semibold">
                        {item.value} / {item.max}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-teal-600 h-full rounded-full transition-all duration-300"
                        style={{ width: `${(item.value / item.max) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Full Reasons List */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                <span className="text-2xs font-bold text-slate-700 uppercase tracking-wider block">
                  {t.routing.reasonsWhy}
                </span>
                <ul className="space-y-1">
                  {selectedFacility.reasons.map((r, i) => (
                    <li
                      key={i}
                      className={`text-2xs font-medium ${
                        r.startsWith('✓') ? 'text-emerald-800' : 'text-amber-800'
                      }`}
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specialists List */}
              <div>
                <span className="text-2xs font-bold text-slate-600 uppercase tracking-wider block mb-1">
                  {t.routing.specialists}:
                </span>
                <div className="space-y-1">
                  {selectedFacility.facility.specialists.map(s => (
                    <div
                      key={s.doctorName}
                      className="text-xs flex items-center justify-between p-1.5 bg-slate-50 rounded-lg"
                    >
                      <div>
                        <span className="font-medium text-slate-800">{s.doctorName}</span>
                        <span className="text-slate-500 text-2xs block">{s.specialty}</span>
                      </div>
                      <span
                        className={`text-2xs px-1.5 py-0.5 rounded font-medium ${
                          s.available ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {s.available ? 'On-Duty' : 'Off-Duty'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Initiate Referral (Hospital Doctor and Admin only) */}
              {canAccessReferrals ? (
                <button
                  type="button"
                  id="btn-initiate-referral"
                  onClick={() =>
                    onInitiateReferral(
                      selectedFacility.facility.id,
                      selectedFacility.facility.name
                    )
                  }
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 transition shadow-xs flex items-center justify-center gap-2"
                >
                  <span>{t.routing.createReferral}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                  <p className="text-xs text-slate-600">
                    {translate('Contact Emergency Desk:')}{' '}
                    <span className="font-mono font-bold text-slate-900">
                      {selectedFacility.facility.contactPhone}
                    </span>
                  </p>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
