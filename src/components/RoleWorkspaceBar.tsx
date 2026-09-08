import React from 'react';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';
import {
  Shield,
  User,
  Stethoscope,
  Activity,
  Building2,
  MapPin,
  PlusCircle,
  LogOut,
  Sparkles
} from 'lucide-react';

interface RoleWorkspaceBarProps {
  onOpenAddHospital: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const RoleWorkspaceBar: React.FC<RoleWorkspaceBarProps> = ({
  onOpenAddHospital,
  activeTab,
  setActiveTab
}) => {
  const { user, profile, logout, language, t, translate } = useAuth();

  if (!user) return null;

  const getRoleBadge = (role: UserRole) => {
    switch (role) {
      case 'PATIENT':
        return {
          label: t.roles.PATIENT,
          icon: User,
          bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          desc: `${t.records.title} & ${t.journey.title}`
        };
      case 'ASHA_WORKER':
        return {
          label: t.roles.ASHA_WORKER,
          icon: Activity,
          bg: 'bg-teal-50 text-teal-800 border-teal-200',
          desc: `${t.triage.title} & ${t.offline.title}`
        };
      case 'HOSPITAL_DOCTOR':
        return {
          label: t.roles.HOSPITAL_DOCTOR,
          icon: Stethoscope,
          bg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
          desc: `${t.referral.title} & ${t.records.title}`
        };
      case 'ADMIN':
        return {
          label: t.roles.ADMIN,
          icon: Shield,
          bg: 'bg-purple-50 text-purple-800 border-purple-200',
          desc: `${t.admin.title} & ${t.admin.usersTab}`
        };
      default:
        return {
          label: t.roles[role] || 'CareGrid User',
          icon: User,
          bg: 'bg-slate-50 text-slate-800 border-slate-200',
          desc: t.appSubtitle
        };
    }
  };

  const badge = getRoleBadge(user.role);
  const Icon = badge.icon;

  const district =
    profile?.district ||
    profile?.assignedDistrict ||
    'Coimbatore';

  const isStaffOrAdmin = user.role === 'ADMIN' || user.role === 'HOSPITAL_DOCTOR';

  return (
    <div className="bg-white border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-3 shadow-2xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
        {/* Left Side: Active Persona & Role Privileges */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-teal-700">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-slate-900 text-sm">{user.name}</span>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-2xs font-semibold border ${badge.bg}`}
              >
                {badge.label}
              </span>
              <span className="inline-flex items-center gap-1 text-slate-500 text-2xs font-medium">
                <MapPin className="w-3 h-3 text-teal-600" />
                {translate(district)}, {translate('Tamil Nadu') || 'Tamil Nadu'}
              </span>
            </div>
            <p className="text-slate-500 text-2xs mt-0.5">{badge.desc}</p>
          </div>
        </div>

        {/* Right Side: Quick Action Feed Hospital & Navigation Shortcuts */}
        <div className="flex items-center gap-2 self-start md:self-auto flex-wrap">
          {/* Feed Hospital Data Button (Staff and Admin only) */}
          {isStaffOrAdmin && (
            <button
              type="button"
              id="btn-feed-hospital"
              onClick={onOpenAddHospital}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-xs transition"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>{t.routing.feedHospitalData}</span>
            </button>
          )}

          {/* Quick Tab Shortcut based on role */}
          {user.role === 'PATIENT' && (
            <>
              <button
                type="button"
                onClick={() => setActiveTab('journey')}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                  activeTab === 'journey'
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-semibold'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {t.nav.journey}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('triage')}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                  activeTab === 'triage'
                    ? 'bg-teal-50 border-teal-300 text-teal-800 font-semibold'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {t.nav.triage}
              </button>
            </>
          )}

          {user.role === 'ADMIN' && (
            <button
              type="button"
              onClick={() => setActiveTab('admin')}
              className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                activeTab === 'admin'
                  ? 'bg-purple-50 border-purple-300 text-purple-800 font-semibold'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {t.nav.admin}
            </button>
          )}

          {user.role === 'HOSPITAL_DOCTOR' && (
            <button
              type="button"
              onClick={() => setActiveTab('referrals')}
              className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                activeTab === 'referrals'
                  ? 'bg-indigo-50 border-indigo-300 text-indigo-800 font-semibold'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {t.nav.referrals}
            </button>
          )}

          {user.role === 'ASHA_WORKER' && (
            <button
              type="button"
              onClick={() => setActiveTab('triage')}
              className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition ${
                activeTab === 'triage'
                  ? 'bg-teal-50 border-teal-300 text-teal-800 font-semibold'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {t.nav.triage}
            </button>
          )}

          {/* Sign Out Button */}
          <button
            type="button"
            id="btn-logout"
            onClick={logout}
            title={t.auth.signOut}
            className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 rounded-lg transition"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
