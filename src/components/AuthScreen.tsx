import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';
import { Language } from '../i18n/translations';
import {
  Activity,
  User,
  Stethoscope,
  Building2,
  Lock,
  Mail,
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

const TN_DISTRICTS = [
  'Coimbatore',
  'Chennai',
  'Madurai',
  'Salem',
  'Tiruchirappalli',
  'Thanjavur',
  'Tirunelveli',
  'Vellore',
  'Tiruppur',
  'Erode',
  'Dindigul',
  'Nilgiris'
];

const LANGUAGE_OPTIONS: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'mr', label: 'मराठी' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'te', label: 'తెలుగు' }
];

export const AuthScreen: React.FC = () => {
  const { login, register, switchPersona, language, setLanguage, t, translate } = useAuth();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Login form state
  const [loginEmail, setLoginEmail] = useState('meenakshi.vhn@caregrid.tn.gov.in');
  const [loginPassword, setLoginPassword] = useState('CareGrid@123');

  // Register form state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regRole, setRegRole] = useState<UserRole>('HEALTH_WORKER');
  const [regDistrict, setRegDistrict] = useState('Coimbatore');
  const [regVillage, setRegVillage] = useState('Kinathukadavu Village');
  const [regGender, setRegGender] = useState<'MALE' | 'FEMALE' | 'OTHER'>('FEMALE');
  const [regBloodGroup, setRegBloodGroup] = useState('B+');
  const [regSpecialization, setRegSpecialization] = useState('Cardiology');
  const [regLicense, setRegLicense] = useState('TNMC-2026-');

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(loginEmail.trim(), loginPassword);
    } catch (err: any) {
      setError(err.message || 'Login failed. Please verify credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!regName.trim() || !regEmail.trim() || !regPassword.trim()) {
      setError(translate('Please fill in all required fields'));
      return;
    }

    setLoading(true);
    try {
      await register({
        name: regName.trim(),
        email: regEmail.trim(),
        password: regPassword,
        role: regRole,
        phone: regPhone.trim() || '+91 94430 ' + Math.floor(10000 + Math.random() * 90000),
        assignedDistrict: regDistrict,
        assignedVillage: regVillage,
        gender: regGender,
        bloodGroup: regBloodGroup,
        specialization: regSpecialization,
        licenseNumber: regLicense
      });
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoSignIn = async (role: UserRole) => {
    setError(null);
    setLoading(true);
    try {
      await switchPersona(role);
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with demo profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-teal-950 to-slate-900 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 text-slate-100 antialiased">
      {/* Top Header / Language Switcher */}
      <div className="max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl bg-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20 shrink-0">
            <Activity className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">CareGrid</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-2xs font-semibold bg-teal-400/20 text-teal-300 border border-teal-400/30">
                Tamil Nadu Health System
              </span>
            </div>
            <p className="text-xs text-teal-200">
              {translate('National Health Mission — Intelligent Healthcare Referral & Capacity Grid')}
            </p>
          </div>
        </div>

        {/* 5-Language Selector */}
        <div className="flex flex-wrap items-center gap-1 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
          {LANGUAGE_OPTIONS.map(opt => (
            <button
              key={opt.code}
              type="button"
              onClick={() => setLanguage(opt.code)}
              className={`px-2.5 py-1 text-xs rounded-lg font-medium transition ${
                language === opt.code
                  ? 'bg-teal-600 text-white font-semibold shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Authentication Container */}
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Information & Quick Access */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-slate-700/80 shadow-xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-teal-900/60 text-teal-300 border border-teal-700 mb-3">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>{translate('Tamil Nadu State Network')}</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              {t.auth.networkTitle}
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {t.auth.networkSubtitle}
            </p>

            {/* Quick 1-Click Persona Sign-In */}
            <div className="border-t border-slate-700/80 pt-4">
              <p className="text-2xs font-bold text-teal-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                {t.auth.demoLogin}
              </p>
              <div className="space-y-2">
                <button
                  type="button"
                  id="btn-persona-asha"
                  onClick={() => handleDemoSignIn('ASHA_WORKER')}
                  className="w-full text-left p-2.5 rounded-xl bg-slate-700/50 hover:bg-slate-700 border border-slate-600/60 hover:border-teal-500/50 transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">
                      ASHA
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-teal-300">
                        {t.auth.ashaName}
                      </div>
                      <div className="text-2xs text-slate-400">
                        {t.auth.ashaRole}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-300 transition" />
                </button>

                <button
                  type="button"
                  id="btn-persona-doctor"
                  onClick={() => handleDemoSignIn('HOSPITAL_DOCTOR')}
                  className="w-full text-left p-2.5 rounded-xl bg-slate-700/50 hover:bg-slate-700 border border-slate-600/60 hover:border-teal-500/50 transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-xs">
                      DOC
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-indigo-300">
                        {t.auth.doctorName}
                      </div>
                      <div className="text-2xs text-slate-400">
                        {t.auth.doctorRole}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-300 transition" />
                </button>

                <button
                  type="button"
                  id="btn-persona-patient"
                  onClick={() => handleDemoSignIn('PATIENT')}
                  className="w-full text-left p-2.5 rounded-xl bg-slate-700/50 hover:bg-slate-700 border border-slate-600/60 hover:border-teal-500/50 transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs">
                      PAT
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-emerald-300">
                        {t.auth.patientName}
                      </div>
                      <div className="text-2xs text-slate-400">
                        {t.auth.patientRole}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-300 transition" />
                </button>

                <button
                  type="button"
                  id="btn-persona-admin"
                  onClick={() => handleDemoSignIn('ADMIN')}
                  className="w-full text-left p-2.5 rounded-xl bg-slate-700/50 hover:bg-slate-700 border border-slate-600/60 hover:border-teal-500/50 transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-xs">
                      ADM
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-purple-300">
                        {t.auth.adminName}
                      </div>
                      <div className="text-2xs text-slate-400">
                        {t.auth.adminRole}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-300 transition" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Tabbed Form (Login / Register) */}
        <div className="lg:col-span-7 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200">
          {/* Mode Switch Tabs */}
          <div className="flex p-1 bg-slate-100 rounded-xl mb-6 border border-slate-200">
            <button
              type="button"
              onClick={() => setMode('login')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                mode === 'login'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.auth.loginTab}
            </button>
            <button
              type="button"
              onClick={() => setMode('register')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                mode === 'register'
                  ? 'bg-teal-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t.auth.registerTab}
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{error}</span>
            </div>
          )}

          {/* LOGIN FORM */}
          {mode === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  {t.auth.emailLabel}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={e => setLoginEmail(e.target.value)}
                    placeholder="user@caregrid.tn.gov.in"
                    className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none text-slate-900"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">
                  {t.auth.passwordLabel}
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={e => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none text-slate-900"
                    required
                  />
                </div>
                <p className="text-2xs text-slate-500 mt-1">
                  {translate('Demo password:')}{' '}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded text-teal-700 font-mono">
                    CareGrid@123
                  </code>
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-600/20 transition flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
              >
                {loading ? (
                  translate('Signing in...')
                ) : (
                  <>
                    <span>{t.auth.submitLogin}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* REGISTER FORM */
            <form onSubmit={handleRegisterSubmit} className="space-y-4 text-xs">
              {/* Role Selection */}
              <div>
                <label className="block font-semibold text-slate-900 mb-1.5">
                  {t.auth.roleSelect} *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { role: 'PATIENT' as UserRole, label: t.roles.PATIENT, icon: User },
                    { role: 'ASHA_WORKER' as UserRole, label: t.roles.ASHA_WORKER, icon: Activity },
                    { role: 'HOSPITAL_DOCTOR' as UserRole, label: t.roles.HOSPITAL_DOCTOR, icon: Stethoscope },
                    { role: 'ADMIN' as UserRole, label: t.roles.ADMIN, icon: Building2 }
                  ].map(r => {
                    const Icon = r.icon;
                    const isSelected = regRole === r.role;
                    return (
                      <button
                        key={r.role}
                        type="button"
                        onClick={() => setRegRole(r.role)}
                        className={`p-2.5 rounded-xl border text-center transition flex flex-col items-center gap-1 ${
                          isSelected
                            ? 'bg-teal-50 border-teal-600 text-teal-900 font-bold shadow-xs'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-teal-600' : 'text-slate-400'}`} />
                        <span className="text-2xs leading-tight">
                          {r.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    {t.auth.fullName} *
                  </label>
                  <input
                    type="text"
                    value={regName}
                    onChange={e => setRegName(e.target.value)}
                    placeholder="Ramesh / Dr. Priya"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    {t.auth.emailLabel} *
                  </label>
                  <input
                    type="email"
                    value={regEmail}
                    onChange={e => setRegEmail(e.target.value)}
                    placeholder="name@caregrid.tn.gov.in"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Password & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    {t.auth.passwordLabel} *
                  </label>
                  <input
                    type="password"
                    value={regPassword}
                    onChange={e => setRegPassword(e.target.value)}
                    placeholder="Min 6 characters"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    {t.auth.phone}
                  </label>
                  <input
                    type="tel"
                    value={regPhone}
                    onChange={e => setRegPhone(e.target.value)}
                    placeholder="+91 94430 00000"
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* State & District */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    {t.auth.state}
                  </label>
                  <input
                    type="text"
                    disabled
                    value={translate('Tamil Nadu')}
                    className="w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded-xl text-slate-600 cursor-not-allowed font-medium"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">
                    {t.auth.district} *
                  </label>
                  <select
                    value={regDistrict}
                    onChange={e => setRegDistrict(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:outline-none bg-white"
                  >
                    {TN_DISTRICTS.map(d => (
                      <option key={d} value={d}>
                        {translate(d)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Role Specific Dynamic Fields */}
              {regRole === 'PATIENT' && (
                <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      {t.auth.gender}
                    </label>
                    <select
                      value={regGender}
                      onChange={e => setRegGender(e.target.value as any)}
                      className="w-full px-3 py-1.5 border border-slate-300 rounded-lg bg-white"
                    >
                      <option value="MALE">{translate('Male')}</option>
                      <option value="FEMALE">{translate('Female')}</option>
                      <option value="OTHER">{translate('Other')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      {t.auth.bloodGroup}
                    </label>
                    <select
                      value={regBloodGroup}
                      onChange={e => setRegBloodGroup(e.target.value)}
                      className="w-full px-3 py-1.5 border border-slate-300 rounded-lg bg-white"
                    >
                      <option value="A+">A+</option>
                      <option value="B+">B+</option>
                      <option value="O+">O+</option>
                      <option value="AB+">AB+</option>
                      <option value="O-">O-</option>
                      <option value="A-">A-</option>
                      <option value="B-">B-</option>
                    </select>
                  </div>
                </div>
              )}

              {regRole === 'HEALTH_WORKER' && (
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <label className="block font-semibold text-slate-800 mb-1">
                    {t.auth.assignedVillage}
                  </label>
                  <input
                    type="text"
                    value={regVillage}
                    onChange={e => setRegVillage(e.target.value)}
                    placeholder="Kinathukadavu Village / Pollachi Sector"
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg bg-white"
                  />
                </div>
              )}

              {regRole === 'DOCTOR' && (
                <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      {t.auth.specialization}
                    </label>
                    <select
                      value={regSpecialization}
                      onChange={e => setRegSpecialization(e.target.value)}
                      className="w-full px-3 py-1.5 border border-slate-300 rounded-lg bg-white"
                    >
                      <option value="Cardiology">{translate('Cardiology')}</option>
                      <option value="General Medicine">{translate('General Medicine')}</option>
                      <option value="Obstetrics/Gynecology">{translate('High-Risk Obstetrics & Gynaecology')}</option>
                      <option value="Pediatrics">{translate('Pediatrics')}</option>
                      <option value="Orthopedics">{translate('Orthopaedics & Trauma')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-800 mb-1">
                      {t.auth.licenseNumber}
                    </label>
                    <input
                      type="text"
                      value={regLicense}
                      onChange={e => setRegLicense(e.target.value)}
                      placeholder="TNMC-2026-4412"
                      className="w-full px-3 py-1.5 border border-slate-300 rounded-lg bg-white"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-600/20 transition flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
              >
                {loading ? (
                  translate('Creating Account...')
                ) : (
                  <>
                    <span>{t.auth.submitRegister}</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
