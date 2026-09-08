import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { RoleWorkspaceBar } from './components/RoleWorkspaceBar';
import { AuthScreen } from './components/AuthScreen';
import { AddHospitalModal } from './components/AddHospitalModal';
import { TriageView } from './components/TriageView';
import { FacilityRoutingView } from './components/FacilityRoutingView';
import { ReferralHandshakeView } from './components/ReferralHandshakeView';
import { CareJourneyView } from './components/CareJourneyView';
import { CareGapRadarView } from './components/CareGapRadarView';
import { HealthWorkerOfflineView } from './components/HealthWorkerOfflineView';
import { PatientRecordsView } from './components/PatientRecordsView';
import { AdminDashboardView } from './components/AdminDashboardView';
import { DemoScenariosModal } from './components/DemoScenariosModal';
import { Patient, TriageUrgency } from './types';
import {
  Activity,
  Shield,
  Lock
} from 'lucide-react';

const MainApp: React.FC = () => {
  const { user, loading, t, translate } = useAuth();
  const [activeTab, setActiveTab] = useState('triage');
  const [scenariosOpen, setScenariosOpen] = useState(false);
  const [addHospitalOpen, setAddHospitalOpen] = useState(false);
  const [facilityKey, setFacilityKey] = useState(0);

  // Sync activeTab when user or role changes
  React.useEffect(() => {
    if (!user) return;
    if (user.role === 'PATIENT') {
      const patientAllowed = ['journey', 'triage', 'records'];
      if (!patientAllowed.includes(activeTab)) {
        setActiveTab('journey');
      }
    } else if (user.role === 'ASHA_WORKER' || user.role === 'HEALTH_WORKER') {
      const ashaAllowed = ['triage', 'records', 'routing', 'careGaps', 'journey', 'offline'];
      if (!ashaAllowed.includes(activeTab)) {
        setActiveTab('triage');
      }
    } else if (user.role === 'ADMIN' || user.role === 'SYSTEM_ADMIN') {
      if (activeTab === 'triage') {
        setActiveTab('admin');
      }
    } else if (user.role === 'HOSPITAL_DOCTOR' || user.role === 'DOCTOR') {
      const doctorAllowed = ['referrals', 'records'];
      if (!doctorAllowed.includes(activeTab)) {
        setActiveTab('referrals');
      }
    }
  }, [user?.role]);

  // Routing navigation pre-fill state
  const [routingUrgency, setRoutingUrgency] = useState<TriageUrgency>('RED');
  const [routingSpecialty, setRoutingSpecialty] = useState<string>('Cardiology');
  const [routingPatient, setRoutingPatient] = useState<Patient | undefined>();

  // Referral creation pre-fill state
  const [preselectedFacilityId, setPreselectedFacilityId] = useState<string | undefined>();
  const [preselectedFacilityName, setPreselectedFacilityName] = useState<string | undefined>();

  const handleNavigateToRouting = (urgency: TriageUrgency, specialty?: string, patient?: Patient) => {
    setRoutingUrgency(urgency);
    if (specialty) setRoutingSpecialty(specialty);
    setRoutingPatient(patient);
    setActiveTab('routing');
  };

  const handleInitiateReferral = (facilityId: string, facilityName: string) => {
    setPreselectedFacilityId(facilityId);
    setPreselectedFacilityName(facilityName);
    setActiveTab('referrals');
  };

  const handleSelectScenario = (num: 1 | 2) => {
    setScenariosOpen(false);
    if (user?.role === 'HOSPITAL_DOCTOR' || user?.role === 'DOCTOR') {
      setActiveTab('referrals');
      return;
    }
    if (num === 1) {
      // Scenario 1: Acute rural care journey starting at triage
      setActiveTab('triage');
    } else {
      // Scenario 2: Specialist Capacity Routing
      setRoutingUrgency('RED');
      setRoutingSpecialty('Cardiology');
      setActiveTab('routing');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-teal-400">
        <div className="flex flex-col items-center gap-3">
          <Activity className="w-8 h-8 animate-spin" />
          <span className="text-sm font-medium text-slate-300">
            {translate('CareGrid Loading...')}
          </span>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthScreen />;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 antialiased selection:bg-teal-100 selection:text-teal-900">
      {/* Top Navigation */}
      <Navbar
        onOpenScenarios={() => setScenariosOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Role-Based Workspace Banner */}
      <RoleWorkspaceBar
        onOpenAddHospital={() => setAddHospitalOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Feature View Canvas */}
      <main className="flex-1 pb-16">
        {/* Patient-restricted tabs warning */}
        {user.role === 'PATIENT' && !['journey', 'triage', 'records'].includes(activeTab) && (
          <div className="max-w-xl mx-auto mt-12 p-8 bg-white rounded-3xl border border-slate-200 shadow-xl text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">{translate('Restricted Access (Patient Role)')}</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {translate('This section is designated for authorized healthcare workers and administrators. As a patient, you have access to your personal Care Journey, reporting health problems, and accessing health records.')}
            </p>
            <button
              type="button"
              onClick={() => setActiveTab('journey')}
              className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition shadow-xs"
            >
              {translate('Go to My Care Journey')}
            </button>
          </div>
        )}

        {/* Referral-restricted tab warning for Patient and ASHA worker */}
        {activeTab === 'referrals' && (user.role === 'PATIENT' || user.role === 'ASHA_WORKER' || user.role === 'HEALTH_WORKER') && (
          <div className="max-w-xl mx-auto mt-12 p-8 bg-white rounded-3xl border border-rose-200 shadow-xl text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto border border-rose-200">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">{translate('Restricted Access')}</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {translate('Referral Handshake workflows are restricted to receiving hospital clinicians and administrators. Field health workers and patients cannot access referral handshakes.')}
            </p>
            <button
              type="button"
              onClick={() => setActiveTab(user.role === 'PATIENT' ? 'journey' : 'triage')}
              className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition shadow-xs"
            >
              {translate('Return to Authorized Workspace')}
            </button>
          </div>
        )}

        {/* Hospital Doctor-restricted tabs warning */}
        {(user.role === 'HOSPITAL_DOCTOR' || user.role === 'DOCTOR') && !['referrals', 'records'].includes(activeTab) && (
          <div className="max-w-xl mx-auto mt-12 p-8 bg-white rounded-3xl border border-indigo-200 shadow-xl text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto border border-indigo-200">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">{translate('Restricted Access (Hospital Doctor Role)')}</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {translate('Facility routing, care journey, digital triage, and care-gap radar are reserved for field healthcare workers and patients. Hospital clinicians have access to Referral Handshakes and ABHA Health Records.')}
            </p>
            <button
              type="button"
              onClick={() => setActiveTab('referrals')}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition shadow-xs"
            >
              {translate('Return to Referral Handshake')}
            </button>
          </div>
        )}

        {/* Admin-restricted tab warning for non-admin */}
        {activeTab === 'admin' && user.role !== 'ADMIN' && user.role !== 'SYSTEM_ADMIN' && user.role !== 'FACILITY_ADMIN' && (
          <div className="max-w-xl mx-auto mt-12 p-8 bg-white rounded-3xl border border-rose-200 shadow-xl text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto border border-rose-200">
              <Lock className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">{translate('Restricted to Administrators')}</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              {translate('Role-Based User Management, Audit Logs, and Capacity Overrides require System Administrator privileges.')}
            </p>
            <button
              type="button"
              onClick={() => setActiveTab(user.role === 'PATIENT' ? 'journey' : user.role === 'HOSPITAL_DOCTOR' ? 'referrals' : 'triage')}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition shadow-xs"
            >
              {translate('Return to Authorized Workspace')}
            </button>
          </div>
        )}

        {activeTab === 'triage' && user.role !== 'HOSPITAL_DOCTOR' && user.role !== 'DOCTOR' && (
          <TriageView onNavigateToRouting={handleNavigateToRouting} />
        )}

        {activeTab === 'routing' && user.role !== 'HOSPITAL_DOCTOR' && user.role !== 'DOCTOR' && (
          <FacilityRoutingView
            key={facilityKey}
            initialUrgency={routingUrgency}
            initialSpecialty={routingSpecialty}
            patient={routingPatient}
            onInitiateReferral={handleInitiateReferral}
            onOpenAddHospital={() => setAddHospitalOpen(true)}
          />
        )}

        {activeTab === 'referrals' && user.role !== 'PATIENT' && user.role !== 'ASHA_WORKER' && user.role !== 'HEALTH_WORKER' && (
          <ReferralHandshakeView
            preselectedFacilityId={preselectedFacilityId}
            preselectedFacilityName={preselectedFacilityName}
          />
        )}

        {activeTab === 'journey' && user.role !== 'HOSPITAL_DOCTOR' && user.role !== 'DOCTOR' && (
          <CareJourneyView onNavigateTab={setActiveTab} />
        )}

        {activeTab === 'careGaps' && user.role !== 'HOSPITAL_DOCTOR' && user.role !== 'DOCTOR' && (
          <CareGapRadarView />
        )}

        {activeTab === 'records' && <PatientRecordsView />}

        {activeTab === 'offline' && user.role !== 'HOSPITAL_DOCTOR' && user.role !== 'DOCTOR' && (
          <HealthWorkerOfflineView />
        )}

        {activeTab === 'admin' && (user.role === 'ADMIN' || user.role === 'SYSTEM_ADMIN' || user.role === 'FACILITY_ADMIN') && (
          <AdminDashboardView onOpenAddHospital={() => setAddHospitalOpen(true)} />
        )}
      </main>

      {/* Guided Demo Walkthrough Modal */}
      <DemoScenariosModal
        isOpen={scenariosOpen}
        onClose={() => setScenariosOpen(false)}
        onSelectScenario={handleSelectScenario}
      />

      {/* Add Hospital Modal */}
      <AddHospitalModal
        isOpen={addHospitalOpen}
        onClose={() => setAddHospitalOpen(false)}
        onFacilityAdded={() => setFacilityKey(k => k + 1)}
      />

      {/* Public Healthcare Platform Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 px-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-teal-600 flex items-center justify-center text-white text-3xs font-bold">
              CG
            </div>
            <span>
              <strong>CareGrid</strong> — {translate('National Health Mission Rural Care-Coordination Architecture')}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-2xs">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-slate-400" /> {translate('ABDM Milestone 1 & 2 Compliant')}
            </span>
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-slate-400" /> {translate('Role-Based Access Control (RBAC)')}
            </span>
            <span className="flex items-center gap-1">
              <Activity className="w-3 h-3 text-teal-600" /> {translate('Clinical Rule-Engine + Gemini Synthesis')}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

export default App;
