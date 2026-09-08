export type Language = 'en' | 'hi' | 'mr' | 'ta' | 'te';

export interface TranslationsSchema {
  appTitle: string;
  appSubtitle: string;
  missionStatement: string;
  nhmBadge: string;
  nav: {
    triage: string;
    routing: string;
    referrals: string;
    journey: string;
    careGaps: string;
    dashboard: string;
    offline: string;
    records: string;
    medicines: string;
    audit: string;
    admin: string;
  };
  roles: {
    PATIENT: string;
    ASHA_WORKER: string;
    HEALTH_WORKER: string;
    HOSPITAL_DOCTOR: string;
    DOCTOR: string;
    ADMIN: string;
    FACILITY_ADMIN: string;
    SYSTEM_ADMIN: string;
  };
  triage: {
    title: string;
    disclaimer: string;
    symptomsLabel: string;
    symptomsPlaceholder: string;
    speakButton: string;
    listening: string;
    durationLabel: string;
    vitalsSection: string;
    bp: string;
    heartRate: string;
    spo2: string;
    temp: string;
    evaluateButton: string;
    redEmergency: string;
    orangePriority: string;
    greenRoutine: string;
    reasonsTitle: string;
    warningSignsTitle: string;
    nextActionTitle: string;
    confirmButton: string;
    routeButton: string;
    quickSymptomsLabel: string;
    confidenceLabel: string;
    humanConfirmedBadge: string;
    offlineNotice: string;
    enterNotesPlaceholder: string;
  };
  routing: {
    title: string;
    subtitle: string;
    nearestWarning: string;
    scoreLabel: string;
    distance: string;
    travelTime: string;
    reasonsWhy: string;
    specialists: string;
    bedsAvailable: string;
    queueLength: string;
    createReferral: string;
    filterUrgency: string;
    filterSpecialty: string;
    feedHospitalData: string;
    testScenario2: string;
    scoringBreakdown: string;
    emergencyRoom: string;
    icuCapacity: string;
    medicineStock: string;
  };
  referral: {
    title: string;
    subtitle: string;
    inbox: string;
    outbound: string;
    code: string;
    patient: string;
    from: string;
    target: string;
    status: string;
    accept: string;
    reject: string;
    markArrived: string;
    completeConsult: string;
    tokenIssued: string;
    allReferrals: string;
    emergencyReferrals: string;
    initiateReferral: string;
    priorityLevel: string;
    reasonForReferral: string;
    clinicalSummary: string;
    lifecycleStatus: string;
    rejectionReason: string;
    confirmReject: string;
  };
  journey: {
    title: string;
    subtitle: string;
    nextStepHeader: string;
    completed: string;
    inProgress: string;
    upcoming: string;
    delayed: string;
    patientSelectorLabel: string;
    currentStageLabel: string;
    advanceStep: string;
    treatFullButton: string;
    opdTokenLabel: string;
    verifiedBadge: string;
    treatmentTimeline: string;
    abhaVerified: string;
  };
  careGaps: {
    title: string;
    subtitle: string;
    detected: string;
    overdue: string;
    acknowledge: string;
    contact: string;
    resolve: string;
    activeGapsCount: string;
    filterSeverity: string;
    filterStatus: string;
    conductHomeVisit: string;
    clinicalNotes: string;
    confirmResolution: string;
    gapType: string;
    assignedWorker: string;
  };
  records: {
    title: string;
    subtitle: string;
    abhaId: string;
    demographics: string;
    allergies: string;
    activeMedications: string;
    conditions: string;
    consentsTitle: string;
    grantConsent: string;
    revokeConsent: string;
    teleconsultTitle: string;
    requestTeleconsult: string;
    teleconsultActive: string;
    vitalsHistory: string;
  };
  offline: {
    title: string;
    subtitle: string;
    downloadPack: string;
    syncNow: string;
    lastSynced: string;
    syncStatus: string;
    offlineActive: string;
    clearCache: string;
    pendingActions: string;
    recordsCached: string;
    facilitiesCached: string;
    offlineModeActiveBanner: string;
    reconnectNow: string;
  };
  admin: {
    title: string;
    subtitle: string;
    usersTab: string;
    facilitiesTab: string;
    auditTab: string;
    analyticsTab: string;
    userRoleLabel: string;
    searchPlaceholder: string;
    updateRole: string;
    activeStatus: string;
    capacityOverrides: string;
    occupiedBeds: string;
    occupiedIcu: string;
    waitTime: string;
    saveChanges: string;
    auditLogTitle: string;
    timestamp: string;
    action: string;
    user: string;
    resource: string;
  };
  addHospital: {
    title: string;
    facilityName: string;
    facilityType: string;
    category: string;
    district: string;
    address: string;
    phone: string;
    emergency24x7: string;
    totalBeds: string;
    icuBeds: string;
    specialties: string;
    diagnostics: string;
    stockRatio: string;
    submitButton: string;
    cancelButton: string;
  };
  scenarios: {
    guideTitle: string;
    guideSubtitle: string;
    scenario1Badge: string;
    scenario1Title: string;
    scenario1Desc: string;
    scenario1Button: string;
    scenario2Badge: string;
    scenario2Title: string;
    scenario2Desc: string;
    scenario2Button: string;
  };
  auth: {
    signInTitle: string;
    registerTitle: string;
    signInSubtitle: string;
    registerSubtitle: string;
    email: string;
    password: string;
    fullName: string;
    role: string;
    district: string;
    village: string;
    phone: string;
    license: string;
    loginButton: string;
    registerButton: string;
    quickPersonaLogin: string;
    switchAccount: string;
    signOut: string;
  };
  common: {
    save: string;
    cancel: string;
    close: string;
    loading: string;
    search: string;
    filter: string;
    all: string;
    success: string;
    error: string;
    confirm: string;
    back: string;
    next: string;
    yes: string;
    no: string;
    status: string;
    date: string;
    actions: string;
    online: string;
    offline: string;
    resetDemo: string;
    resetConfirm: string;
    restrictedAccess: string;
    restrictedPatientMsg: string;
    restrictedAdminMsg: string;
    goToJourney: string;
    returnAuthorized: string;
    footerTitle: string;
    compliance1: string;
    compliance2: string;
    compliance3: string;
  };
}

export const translations: Record<Language, TranslationsSchema> = {
  en: {
    appTitle: 'CareGrid',
    appSubtitle: 'Public Healthcare Care-Coordination Platform',
    missionStatement: 'Connecting patients from their current situation to the next appropriate step across triage, facility selection, referral, diagnostics, treatment, and follow-up.',
    nhmBadge: 'NHM Coordinated',
    nav: {
      triage: 'Digital Triage',
      routing: 'Facility Routing',
      referrals: 'Referral Handshake',
      journey: 'Care Journey',
      careGaps: 'Care-Gap Radar',
      dashboard: 'Dashboard',
      offline: 'Offline Pack',
      records: 'Health Records',
      medicines: 'Medicine Stock',
      audit: 'Audit Log',
      admin: 'Admin Console'
    },
    roles: {
      PATIENT: 'Patient',
      ASHA_WORKER: 'ASHA Worker',
      HEALTH_WORKER: 'Health Worker (ASHA/VHN)',
      HOSPITAL_DOCTOR: 'Hospital Doctor',
      DOCTOR: 'Medical Specialist',
      ADMIN: 'System Administrator',
      FACILITY_ADMIN: 'Facility Admin',
      SYSTEM_ADMIN: 'System Admin (DHO)'
    },
    triage: {
      title: 'AI-Assisted Digital Triage',
      disclaimer: 'AI-assisted triage. Final clinical decision must be confirmed by an authorized healthcare professional.',
      symptomsLabel: 'Patient Symptoms & Chief Complaint',
      symptomsPlaceholder: 'Describe symptoms (e.g., chest heaviness, breathing difficulty, fever for 3 days)...',
      speakButton: 'Speak Symptoms',
      listening: 'Listening... (Speak in your preferred language)',
      durationLabel: 'Duration of Symptoms',
      vitalsSection: 'Vitals & Clinical Measurements (Optional)',
      bp: 'Blood Pressure (Sys/Dia)',
      heartRate: 'Heart Rate (bpm)',
      spo2: 'Oxygen Saturation SpO2 (%)',
      temp: 'Temperature (°F)',
      evaluateButton: 'Evaluate Triage Urgency',
      redEmergency: 'RED - Emergency',
      orangePriority: 'ORANGE - Priority',
      greenRoutine: 'GREEN - Routine',
      reasonsTitle: 'Clinical Reasons for Classification',
      warningSignsTitle: 'Warning Signs & Risk Alerts',
      nextActionTitle: 'Recommended Next Clinical Action',
      confirmButton: 'Confirm as Health Worker',
      routeButton: 'Find Best Facility & Route Now',
      quickSymptomsLabel: 'Quick Select Symptoms:',
      confidenceLabel: 'Confidence Score',
      humanConfirmedBadge: 'Human-Confirmed by Health Worker',
      offlineNotice: 'Offline Mode: Evaluated via offline embedded clinical rule protocol',
      enterNotesPlaceholder: 'Enter clinical verification notes...'
    },
    routing: {
      title: 'Intelligent & Capacity-Aware Facility Routing',
      subtitle: 'Multi-criteria clinical scoring considering emergency capability, specialist availability, bed capacity, wait times, and diagnostics.',
      nearestWarning: 'Notice: The nearest clinic may lack critical specialists or beds. CareGrid routes to the most clinically appropriate facility.',
      scoreLabel: 'CareGrid Match Score',
      distance: 'Distance',
      travelTime: 'Est. Travel Time',
      reasonsWhy: 'Why this facility is recommended:',
      specialists: 'Specialists On-Duty',
      bedsAvailable: 'Beds Free',
      queueLength: 'Current Queue',
      createReferral: 'Initiate Referral Handshake',
      filterUrgency: 'Filter Urgency',
      filterSpecialty: 'Required Specialty',
      feedHospitalData: '+ Feed Hospital Data',
      testScenario2: 'Test Scenario 2: Specialist Routing',
      scoringBreakdown: 'Scoring Breakdown',
      emergencyRoom: '24x7 Emergency Room',
      icuCapacity: 'ICU Capacity',
      medicineStock: 'Medicine Stock Ratio'
    },
    referral: {
      title: 'Referral Handshake Lifecycle',
      subtitle: 'Transparent handoff tracking from community health worker to receiving hospital specialist.',
      inbox: 'Incoming Referral Inbox',
      outbound: 'Community Referrals Tracker',
      code: 'Referral Code',
      patient: 'Patient',
      from: 'Referring Provider',
      target: 'Target Facility',
      status: 'Current Status',
      accept: 'Accept Patient & Reserve Bed',
      reject: 'Decline / Re-route',
      markArrived: 'Mark Patient Arrived',
      completeConsult: 'Complete Consultation & Plan Follow-Up',
      tokenIssued: 'OPD Token Assigned',
      allReferrals: 'All Referrals',
      emergencyReferrals: 'Emergency Priority',
      initiateReferral: 'Initiate Referral',
      priorityLevel: 'Priority Level',
      reasonForReferral: 'Reason for Referral',
      clinicalSummary: 'Clinical Summary & Vitals',
      lifecycleStatus: 'Handshake Lifecycle Status:',
      rejectionReason: 'Reason for Decline / Diversion',
      confirmReject: 'Confirm Decline & Re-route'
    },
    journey: {
      title: 'Continuous Patient Care Journey',
      subtitle: 'From fragmented healthcare to one seamless, tracked care pathway.',
      nextStepHeader: 'What should I do next?',
      completed: 'Completed',
      inProgress: 'Current Step',
      upcoming: 'Upcoming',
      delayed: 'Action Required',
      patientSelectorLabel: 'Select Patient Care Journey:',
      currentStageLabel: 'Active Care Stage',
      advanceStep: 'Advance to Next Stage',
      treatFullButton: 'Complete Full Treatment Protocol (1-Click)',
      opdTokenLabel: 'Priority OPD Token',
      verifiedBadge: 'ABDM Verified',
      treatmentTimeline: 'Care Pathway Milestones',
      abhaVerified: 'ABHA Linked'
    },
    careGaps: {
      title: 'Care-Gap Radar',
      subtitle: 'Proactive surveillance detecting missed appointments, delayed referrals, overdue diagnostics, and lost-to-follow-up patients.',
      detected: 'Detected Gaps',
      overdue: 'Overdue',
      acknowledge: 'Acknowledge',
      contact: 'Record Patient Contact',
      resolve: 'Mark Gap Resolved',
      activeGapsCount: 'Active Unresolved Gaps',
      filterSeverity: 'Filter Severity',
      filterStatus: 'Status Filter',
      conductHomeVisit: 'Action Taken',
      clinicalNotes: 'Clinical Follow-up Notes',
      confirmResolution: 'Confirm Gap Resolution',
      gapType: 'Gap Classification',
      assignedWorker: 'Assigned Health Worker'
    },
    records: {
      title: 'Longitudinal Health Record & Consents',
      subtitle: 'Standardized digital health profile interoperable with ABDM and National Health Authority specifications.',
      abhaId: 'ABHA Health ID',
      demographics: 'Patient Demographics',
      allergies: 'Known Allergies',
      activeMedications: 'Active Prescribed Medications',
      conditions: 'Chronic Medical Conditions',
      consentsTitle: 'ABDM Digital Consent Manager',
      grantConsent: 'Grant Data Access',
      revokeConsent: 'Revoke Access',
      teleconsultTitle: 'Teleconsultation / eSanjeevani Gateway',
      requestTeleconsult: 'Request Video Teleconsultation',
      teleconsultActive: 'Teleconsultation Session Ready',
      vitalsHistory: 'Recorded Clinical Vitals'
    },
    offline: {
      title: 'Smart Offline Care Pack',
      subtitle: 'Empowering rural ASHA and ANM health workers with offline-first synchronization.',
      downloadPack: 'Download Smart Care Pack',
      syncNow: 'Synchronize Changes Now',
      lastSynced: 'Last Synchronized',
      syncStatus: 'Sync Status',
      offlineActive: 'Operating in Offline Mode',
      clearCache: 'Clear Local Cache',
      pendingActions: 'Queued Offline Actions',
      recordsCached: 'Cached Patient Profiles',
      facilitiesCached: 'Cached Health Facilities',
      offlineModeActiveBanner: 'Offline Field Mode Active: Community health workers can record triages, follow-ups, and view the Smart Care Pack offline. Changes are stored locally and will synchronize once reconnected.',
      reconnectNow: 'Reconnect Now'
    },
    admin: {
      title: 'Administrator Console & System Controls',
      subtitle: 'Role-Based Access Control, Facility Bed Overrides, Audit Records, and Platform Health.',
      usersTab: 'User Management (RBAC)',
      facilitiesTab: 'Hospital Capacity & Overrides',
      auditTab: 'System Audit Logs',
      analyticsTab: 'District Health Analytics',
      userRoleLabel: 'Assigned Role',
      searchPlaceholder: 'Search by name, email, or facility...',
      updateRole: 'Modify User Role',
      activeStatus: 'Active Status',
      capacityOverrides: 'Facility Capacity Overrides',
      occupiedBeds: 'Occupied General Beds',
      occupiedIcu: 'Occupied ICU Beds',
      waitTime: 'Average Wait Time (mins)',
      saveChanges: 'Save Capacity Overrides',
      auditLogTitle: 'Comprehensive Security & Audit Trail',
      timestamp: 'Timestamp',
      action: 'Action Logged',
      user: 'Initiator',
      resource: 'Target Resource'
    },
    addHospital: {
      title: 'Add New Healthcare Facility / Hospital',
      facilityName: 'Facility / Hospital Name',
      facilityType: 'Facility Classification',
      category: 'Management Category',
      district: 'District Location',
      address: 'Complete Postal Address',
      phone: 'Contact Telephone',
      emergency24x7: '24x7 Emergency Room & Trauma Center',
      totalBeds: 'Total Inpatient Beds',
      icuBeds: 'ICU & High Dependency Beds',
      specialties: 'Available Medical Specialties',
      diagnostics: 'Available Diagnostic Capabilities',
      stockRatio: 'Essential Medicine Stock Ratio',
      submitButton: 'Register Hospital in CareGrid',
      cancelButton: 'Cancel'
    },
    scenarios: {
      guideTitle: 'CareGrid Evaluator Guide',
      guideSubtitle: 'Explore the public healthcare care-coordination platform with pre-configured clinical situations.',
      scenario1Badge: 'Primary End-to-End Pathway',
      scenario1Title: 'Demo Scenario 1: Primary Rural Care Journey',
      scenario1Desc: 'Rural patient with acute symptoms → Triage → Health Worker confirmation → Facility routing → Referral accepted → Appointment token → Care journey updated → Overdue follow-up detected on Care-Gap Radar.',
      scenario1Button: 'Launch Scenario 1: Primary Care Pathway',
      scenario2Badge: 'Capacity & Specialty Routing',
      scenario2Title: 'Demo Scenario 2: Specialist Capacity Routing',
      scenario2Desc: 'Patient needs Specialist Care: Nearest PHC (5km) has high wait & no specialist vs Sub-District Hospital (18km) with specialist + diagnostics ready → CareGrid selects the best facility.',
      scenario2Button: 'Launch Scenario 2: Specialist Routing'
    },
    auth: {
      signInTitle: 'Sign In to CareGrid',
      registerTitle: 'Create Health Worker / Patient Account',
      signInSubtitle: 'Access public healthcare care-coordination platform with your verified credentials.',
      registerSubtitle: 'Register new health worker or patient account.',
      email: 'Official Email Address',
      password: 'Secure Password',
      fullName: 'Full Legal Name',
      role: 'Platform Role',
      district: 'District',
      village: 'Village / Town',
      phone: 'Mobile Phone Number',
      license: 'Medical / Nursing Registration ID',
      loginButton: 'Sign In to Workspace',
      registerButton: 'Register Account',
      quickPersonaLogin: 'Quick Persona Access (1-Click Switch):',
      switchAccount: 'Switch Persona',
      signOut: 'Sign Out'
    },
    common: {
      save: 'Save',
      cancel: 'Cancel',
      close: 'Close',
      loading: 'Loading...',
      search: 'Search...',
      filter: 'Filter',
      all: 'All',
      success: 'Success',
      error: 'Error',
      confirm: 'Confirm',
      back: 'Back',
      next: 'Next',
      yes: 'Yes',
      no: 'No',
      status: 'Status',
      date: 'Date',
      actions: 'Actions',
      online: 'Online',
      offline: 'Offline',
      resetDemo: 'Reset Demo',
      resetConfirm: 'Reset CareGrid demo database back to the initial scenario state?',
      restrictedAccess: 'Restricted Access',
      restrictedPatientMsg: 'This section is designated for authorized healthcare workers and administrators. As a patient, you have access to your personal Care Journey, reporting health problems, and accessing health records.',
      restrictedAdminMsg: 'Role-Based User Management, Audit Logs, and Capacity Overrides require System Administrator privileges.',
      goToJourney: 'Go to My Care Journey',
      returnAuthorized: 'Return to Authorized Workspace',
      footerTitle: 'CareGrid — National Health Mission Rural Care-Coordination Architecture',
      compliance1: 'ABDM Milestone 1 & 2 Compliant',
      compliance2: 'Role-Based Access Control (RBAC)',
      compliance3: 'Clinical Rule-Engine + Gemini Synthesis'
    }
  },

  hi: {
    appTitle: 'केयरग्रिड (CareGrid)',
    appSubtitle: 'सार्वजनिक स्वास्थ्य देखभाल समन्वय मंच',
    missionStatement: 'मरीज़ को उसकी वर्तमान स्वास्थ्य स्थिति से ट्राइएज, उपयुक्त अस्पताल चयन, रेफरल, परीक्षण, उपचार और फॉलो-अप तक जोड़ना।',
    nhmBadge: 'राष्ट्रीय स्वास्थ्य मिशन (NHM) समन्वित',
    nav: {
      triage: 'डिजिटल ट्राइएज',
      routing: 'अस्पताल रूटिंग',
      referrals: 'रेफरल हैंडशेक',
      journey: 'देखभाल यात्रा',
      careGaps: 'केयर-गैप रडार',
      dashboard: 'डैशबोर्ड',
      offline: 'ऑफलाइन पैक',
      records: 'स्वास्थ्य रिकॉर्ड',
      medicines: 'दवा उपलब्धता',
      audit: 'ऑडिट लॉग',
      admin: 'प्रशासक कंसोल'
    },
    roles: {
      PATIENT: 'मरीज़',
      ASHA_WORKER: 'आशा कार्यकर्ता',
      HEALTH_WORKER: 'स्वास्थ्य कार्यकर्ता (आशा/एएनएम)',
      HOSPITAL_DOCTOR: 'अस्पताल डॉक्टर',
      DOCTOR: 'चिकित्सा विशेषज्ञ',
      ADMIN: 'सिस्टम प्रशासक',
      FACILITY_ADMIN: 'अस्पताल प्रबंधक',
      SYSTEM_ADMIN: 'जिला स्वास्थ्य अधिकारी (DHO)'
    },
    triage: {
      title: 'एआई-सहायता प्राप्त डिजिटल ट्राइएज',
      disclaimer: 'एआई-सहायता प्राप्त ट्राइएज। अंतिम नैदानिक निर्णय अधिकृत स्वास्थ्य पेशेवर द्वारा पुष्टि होना अनिवार्य है।',
      symptomsLabel: 'मरीज़ के लक्षण एवं मुख्य शिकायत',
      symptomsPlaceholder: 'लक्षण बताएं (जैसे छाती में जकड़न, सांस फूलना, 3 दिन से तेज बुखार)...',
      speakButton: 'बोलकर लक्षण दर्ज करें',
      listening: 'सुन रहे हैं... (अपनी भाषा में बोलें)',
      durationLabel: 'लक्षणों की अवधि',
      vitalsSection: 'महत्वपूर्ण लक्षण / वाइटल्स (वैकल्पिक)',
      bp: 'रक्तचाप (सिस्टोलिक/डायस्टोलिक)',
      heartRate: 'हृदय गति (bpm)',
      spo2: 'ऑक्सीजन स्तर SpO2 (%)',
      temp: 'तापमान (°F)',
      evaluateButton: 'ट्राइएज गंभीरता जांचें',
      redEmergency: 'लाल - आपातकालीन (RED Emergency)',
      orangePriority: 'नारंगी - प्राथमिकता (ORANGE Priority)',
      greenRoutine: 'हरा - सामान्य (GREEN Routine)',
      reasonsTitle: 'वर्गीकरण के नैदानिक कारण',
      warningSignsTitle: 'चेतावनी संकेत एवं खतरे के लक्षण',
      nextActionTitle: 'अनुशंसित अगला नैदानिक कदम',
      confirmButton: 'स्वास्थ्य कार्यकर्ता के रूप में पुष्टि करें',
      routeButton: 'उपयुक्त अस्पताल खोजें और भेजें',
      quickSymptomsLabel: 'त्वरित लक्षण चयन:',
      confidenceLabel: 'विश्वसनीयता स्कोर',
      humanConfirmedBadge: 'स्वास्थ्य कार्यकर्ता द्वारा प्रमाणित',
      offlineNotice: 'ऑफलाइन मोड: स्थानीय नैदानिक नियमों द्वारा मूल्यांकित',
      enterNotesPlaceholder: 'सत्यापन नोट्स दर्ज करें...'
    },
    routing: {
      title: 'बुद्धिमान एवं क्षमता-जागरूक अस्पताल चयन',
      subtitle: 'दूरी, आपातकालीन सुविधा, विशेषज्ञ उपलब्धता, बिस्तर क्षमता और परीक्षणों के आधार पर पारदर्शी चयन।',
      nearestWarning: 'ध्यान दें: निकटतम अस्पताल में विशेषज्ञ या बिस्तर उपलब्ध न होने पर केयरग्रिड उचित बड़े अस्पताल को प्राथमिकता देता है।',
      scoreLabel: 'केयरग्रिड मैच स्कोर',
      distance: 'दूरी',
      travelTime: 'अनुमानित यात्रा समय',
      reasonsWhy: 'यह अस्पताल क्यों अनुशंसित है:',
      specialists: 'उपलब्ध विशेषज्ञ',
      bedsAvailable: 'उपलब्ध बिस्तर',
      queueLength: 'वर्तमान कतार',
      createReferral: 'रेफरल हैंडशेक शुरू करें',
      filterUrgency: 'आपातकालीन स्तर फ़िल्टर',
      filterSpecialty: 'आवश्यक विशेषज्ञता',
      feedHospitalData: '+ अस्पताल डेटा जोड़ें',
      testScenario2: 'परीक्षण परिदृश्य 2: विशेषज्ञ रूटिंग',
      scoringBreakdown: 'स्कोरिंग विवरण',
      emergencyRoom: '24x7 आपातकालीन कक्ष',
      icuCapacity: 'आईसीयू क्षमता',
      medicineStock: 'दवा स्टॉक अनुपात'
    },
    referral: {
      title: 'रेफरल हैंडशेक जीवनचक्र',
      subtitle: 'ग्रामीण स्वास्थ्य कार्यकर्ता से अस्पताल विशेषज्ञ तक पूर्ण पारदर्शी समन्वय।',
      inbox: 'आगमन रेफरल इनबॉक्स',
      outbound: 'भेजे गए रेफरल ट्रैकर',
      code: 'रेफरल कोड',
      patient: 'मरीज़',
      from: 'भेजने वाला कार्यकर्ता',
      target: 'लक्षित अस्पताल',
      status: 'वर्तमान स्थिति',
      accept: 'मरीज़ स्वीकार करें व बिस्तर आरक्षित करें',
      reject: 'अस्वीकार / पुनर्निर्देशित करें',
      markArrived: 'मरीज़ उपस्थिति दर्ज करें',
      completeConsult: 'परामर्श पूर्ण करें व फॉलो-अप तय करें',
      tokenIssued: 'ओपीडी टोकन जारी',
      allReferrals: 'सभी रेफरल',
      emergencyReferrals: 'आपातकालीन प्राथमिकता',
      initiateReferral: 'रेफरल शुरू करें',
      priorityLevel: 'प्राथमिकता स्तर',
      reasonForReferral: 'रेफरल का कारण',
      clinicalSummary: 'नैदानिक सारांश व वाइटल्स',
      lifecycleStatus: 'हैंडशेक जीवनचक्र स्थिति:',
      rejectionReason: 'अस्वीकृति या स्थानांतरण का कारण',
      confirmReject: 'अस्वीकार व अन्य अस्पताल भेजें'
    },
    journey: {
      title: 'सतत रोगी देखभाल यात्रा',
      subtitle: 'बिखरी हुई स्वास्थ्य सेवाओं से एक निरंतर और ट्रैक किए गए देखभाल मार्ग तक।',
      nextStepHeader: 'मुझे आगे क्या करना चाहिए?',
      completed: 'पूर्ण',
      inProgress: 'वर्तमान कदम',
      upcoming: 'आगामी',
      delayed: 'कार्रवाई आवश्यक',
      patientSelectorLabel: 'मरीज़ देखभाल यात्रा चुनें:',
      currentStageLabel: 'सक्रिय देखभाल चरण',
      advanceStep: 'अगले चरण पर जाएं',
      treatFullButton: 'पूर्ण उपचार प्रोटोकॉल पूरा करें (1-क्लिक)',
      opdTokenLabel: 'प्राथमिकता ओपीडी टोकन',
      verifiedBadge: 'आयुष्मान भारत (ABDM) सत्यापित',
      treatmentTimeline: 'उपचार मार्ग मील के पत्थर',
      abhaVerified: 'आभा (ABHA) लिंक'
    },
    careGaps: {
      title: 'केयर-गैप रडार (Care-Gap Radar)',
      subtitle: 'छूटे हुए अपॉइंटमेंट, विलंबित रेफरल और छूटे हुए फॉलो-अप की स्वचालित निगरानी।',
      detected: 'पहचाने गए अंतराल',
      overdue: 'अतिदेय (Overdue)',
      acknowledge: 'स्वीकार करें',
      contact: 'मरीज़ संपर्क दर्ज करें',
      resolve: 'समस्या का समाधान दर्ज करें',
      activeGapsCount: 'सक्रिय अनसुलझे अंतराल',
      filterSeverity: 'गंभीरता फ़िल्टर',
      filterStatus: 'स्थिति फ़िल्टर',
      conductHomeVisit: 'की गई कार्रवाई',
      clinicalNotes: 'नैदानिक फॉलो-अप नोट्स',
      confirmResolution: 'अंतराल समाधान की पुष्टि करें',
      gapType: 'अंतराल वर्गीकरण',
      assignedWorker: 'आवंटित स्वास्थ्य कार्यकर्ता'
    },
    records: {
      title: 'दीर्घकालिक स्वास्थ्य रिकॉर्ड एवं सहमति',
      subtitle: 'राष्ट्रीय स्वास्थ्य प्राधिकरण और आभा (ABDM) मानकों के अनुकूल डिजिटल प्रोफ़ाइल।',
      abhaId: 'आभा स्वास्थ्य पहचान संख्या (ABHA ID)',
      demographics: 'रोगी जनसांख्यिकी',
      allergies: 'ज्ञात एलर्जी',
      activeMedications: 'सक्रिय निर्धारित दवाएं',
      conditions: 'पुरानी बीमारियां / रोग',
      consentsTitle: 'एबीडीएम डिजिटल सहमति प्रबंधक',
      grantConsent: 'डेटा पहुंच अनुमति दें',
      revokeConsent: 'अनुमति वापस लें',
      teleconsultTitle: 'टेलीकंसल्टेशन / ई-संजीवनी गेटवे',
      requestTeleconsult: 'वीडियो टेलीकंसल्टेशन अनुरोध करें',
      teleconsultActive: 'टेलीकंसल्टेशन सत्र तैयार है',
      vitalsHistory: 'रिकॉर्ड किए गए वाइटल्स'
    },
    offline: {
      title: 'स्मार्ट ऑफलाइन केयर पैक',
      subtitle: 'ग्रामीण आशा/एएनएम कार्यकर्ताओं के लिए बिना इंटरनेट काम करने और सिंक करने की सुविधा।',
      downloadPack: 'केयर पैक डाउनलोड करें',
      syncNow: 'डेटा अभी सिंक करें',
      lastSynced: 'अंतिम सिंक समय',
      syncStatus: 'सिंक स्थिति',
      offlineActive: 'ऑफलाइन मोड सक्रिय',
      clearCache: 'स्थानीय कैश साफ़ करें',
      pendingActions: 'लंबित ऑफलाइन कार्य',
      recordsCached: 'कैश किए गए मरीज़',
      facilitiesCached: 'कैश किए गए अस्पताल',
      offlineModeActiveBanner: 'ऑफलाइन फील्ड मोड सक्रिय: स्वास्थ्य कार्यकर्ता ऑफलाइन ट्राइएज, फॉलो-अप दर्ज कर सकते हैं। इंटरनेट आने पर डेटा स्वतः सिंक हो जाएगा।',
      reconnectNow: 'अभी पुनः कनेक्ट करें'
    },
    admin: {
      title: 'प्रशासक कंसोल एवं सिस्टम नियंत्रण',
      subtitle: 'भूमिका-आधारित पहुंच नियंत्रण (RBAC), अस्पताल बिस्तर क्षमता, और ऑडिट रिकॉर्ड।',
      usersTab: 'उपयोगकर्ता प्रबंधन (RBAC)',
      facilitiesTab: 'अस्पताल क्षमता व नियंत्रण',
      auditTab: 'सिस्टम सुरक्षा ऑडिट लॉग',
      analyticsTab: 'जिला स्वास्थ्य विश्लेषण',
      userRoleLabel: 'आवंटित भूमिका',
      searchPlaceholder: 'नाम, ईमेल या अस्पताल से खोजें...',
      updateRole: 'भूमिका बदलें',
      activeStatus: 'सक्रिय स्थिति',
      capacityOverrides: 'क्षमता नियंत्रण ओवरराइड',
      occupiedBeds: 'भरे हुए सामान्य बिस्तर',
      occupiedIcu: 'भरे हुए आईसीयू बिस्तर',
      waitTime: 'औसत प्रतीक्षा समय (मिनट)',
      saveChanges: 'बदलाव सहेजें',
      auditLogTitle: 'व्यापक सुरक्षा एवं गतिविधि लॉग',
      timestamp: 'समय मुहर',
      action: 'दर्ज कार्रवाई',
      user: 'उपयोगकर्ता',
      resource: 'लक्षित संसाधन'
    },
    addHospital: {
      title: 'नया अस्पताल / स्वास्थ्य केंद्र जोड़ें',
      facilityName: 'अस्पताल का नाम',
      facilityType: 'अस्पताल का प्रकार',
      category: 'प्रबंधन श्रेणी',
      district: 'जिला स्थान',
      address: 'पूर्ण डाक पता',
      phone: 'संपर्क फोन',
      emergency24x7: '24x7 आपातकालीन कक्ष और ट्रॉमा सेंटर',
      totalBeds: 'कुल रोगी बिस्तर',
      icuBeds: 'आईसीयू बिस्तर',
      specialties: 'उपलब्ध चिकित्सा विभाग / विशेषज्ञता',
      diagnostics: 'उपलब्ध जांच परीक्षण सुविधाएं',
      stockRatio: 'आवश्यक दवा स्टॉक अनुपात',
      submitButton: 'केयरग्रिड में अस्पताल पंजीकृत करें',
      cancelButton: 'रद्द करें'
    },
    scenarios: {
      guideTitle: 'केयरग्रिड मूल्यांकनकर्ता गाइड',
      guideSubtitle: 'पूर्व-कॉन्फ़िगर नैदानिक स्थितियों के साथ स्वास्थ्य देखभाल समन्वय मंच का अन्वेषण करें।',
      scenario1Badge: 'प्राथमिक संपूर्ण देखभाल मार्ग',
      scenario1Title: 'डेमो परिदृश्य 1: प्राथमिक ग्रामीण देखभाल यात्रा',
      scenario1Desc: 'ग्रामीण मरीज़ के गंभीर लक्षण → ट्राइएज → आशा कार्यकर्ता की पुष्टि → अस्पताल रूटिंग → रेफरल स्वीकृति → टोकन → देखभाल यात्रा → केयर-गैप रडार अलर्ट।',
      scenario1Button: 'परिदृश्य 1 शुरू करें: प्राथमिक देखभाल मार्ग',
      scenario2Badge: 'क्षमता एवं विशेषज्ञ रूटिंग',
      scenario2Title: 'डेमो परिदृश्य 2: विशेषज्ञ क्षमता रूटिंग',
      scenario2Desc: 'मरीज़ को हृदय रोग विशेषज्ञ चाहिए: निकटतम पीएचसी (5 किमी) में डॉक्टर नहीं बनाम जिला अस्पताल (18 किमी) विशेषज्ञ व परीक्षण तैयार → केयरग्रिड सही चयन करता है।',
      scenario2Button: 'परिदृश्य 2 शुरू करें: विशेषज्ञ रूटिंग'
    },
    auth: {
      signInTitle: 'केयरग्रिड में लॉगिन करें',
      registerTitle: 'स्वास्थ्य कार्यकर्ता / मरीज़ खाता बनाएं',
      signInSubtitle: 'अपने सत्यापित क्रेडेंशियल्स के साथ स्वास्थ्य समन्वय प्रणाली तक पहुंचें।',
      registerSubtitle: 'नया स्वास्थ्य कार्यकर्ता या मरीज़ पंजीकृत करें।',
      email: 'आधिकारिक ईमेल पता',
      password: 'सुरक्षित पासवर्ड',
      fullName: 'पूरा कानूनी नाम',
      role: 'मंच भूमिका',
      district: 'जिला',
      village: 'गांव / शहर',
      phone: 'मोबाइल फोन नंबर',
      license: 'पंजीकरण संख्या (मेडिकल/नर्सिंग)',
      loginButton: 'कार्यक्षेत्र में प्रवेश करें',
      registerButton: 'खाता पंजीकृत करें',
      quickPersonaLogin: 'त्वरित पर्सोना लॉगिन (1-क्लिक):',
      switchAccount: 'पर्सोना बदलें',
      signOut: 'लॉगआउट करें'
    },
    common: {
      save: 'सहेजें',
      cancel: 'रद्द करें',
      close: 'बंद करें',
      loading: 'लोड हो रहा है...',
      search: 'खोजें...',
      filter: 'फ़िल्टर',
      all: 'सभी',
      success: 'सफलता',
      error: 'त्रुटि',
      confirm: 'पुष्टि करें',
      back: 'वापस',
      next: 'आगे',
      yes: 'हाँ',
      no: 'नहीं',
      status: 'स्थिति',
      date: 'तारीख',
      actions: 'कार्रवाई',
      online: 'ऑनलाइन',
      offline: 'ऑफलाइन',
      resetDemo: 'डेमो रीसेट करें',
      resetConfirm: 'क्या आप केयरग्रिड डेटाबेस को प्रारंभिक डेमो स्थिति में रीसेट करना चाहते हैं?',
      restrictedAccess: 'प्रतिबंधित पहुंच',
      restrictedPatientMsg: 'यह अनुभाग केवल अधिकृत स्वास्थ्य कार्यकर्ताओं और प्रशासकों के लिए है। एक मरीज़ के रूप में, आपके पास अपनी देखभाल यात्रा, लक्षण रिपोर्ट करने और स्वास्थ्य रिकॉर्ड तक पहुंच है।',
      restrictedAdminMsg: 'उपयोगकर्ता प्रबंधन, ऑडिट लॉग और क्षमता बदलाव के लिए सिस्टम प्रशासक अनुमतियां आवश्यक हैं।',
      goToJourney: 'मेरी देखभाल यात्रा पर जाएं',
      returnAuthorized: 'अधिकृत कार्यक्षेत्र पर लौटें',
      footerTitle: 'केयरग्रिड — राष्ट्रीय स्वास्थ्य मिशन ग्रामीण देखभाल समन्वय प्रणाली',
      compliance1: 'ABDM माइलस्टोन 1 व 2 अनुपालित',
      compliance2: 'भूमिका-आधारित पहुंच नियंत्रण (RBAC)',
      compliance3: 'क्लिनिकल रूल-इंजन + जेमिनी संश्लेषण'
    }
  },

  mr: {
    appTitle: 'केअरग्रिड (CareGrid)',
    appSubtitle: 'सार्वजनिक आरोग्य सेवा समन्वय प्रणाली',
    missionStatement: 'रुग्णाला त्यांच्या सध्याच्या आरोग्यावस्थेपासून ट्रायज, रुग्णालय निवड, संदर्भ, तपासणी, उपचार आणि पाठपुराव्यापर्यंत योग्य टप्प्याशी जोडणे.',
    nhmBadge: 'राष्ट्रीय आरोग्य अभियान (NHM) समन्वित',
    nav: {
      triage: 'डिजिटल ट्रायज',
      routing: 'रुग्णालय निवड',
      referrals: 'रेफरल हँडशेक',
      journey: 'आरोग्य प्रवास',
      careGaps: 'केअर-गॅप रडार',
      dashboard: 'डॅशबोर्ड',
      offline: 'ऑफलाईन पॅक',
      records: 'आरोग्य नोंदी',
      medicines: 'औषध साठा',
      audit: 'ऑडिट लॉग',
      admin: 'प्रशासक कन्सोल'
    },
    roles: {
      PATIENT: 'रुग्ण',
      ASHA_WORKER: 'आशा सेविका',
      HEALTH_WORKER: 'आरोग्य सेविका (आशा/एएनएम)',
      HOSPITAL_DOCTOR: 'रुग्णालय डॉक्टर',
      DOCTOR: 'वैद्यकीय तज्ज्ञ',
      ADMIN: 'प्रणाली प्रशासक',
      FACILITY_ADMIN: 'रुग्णालय प्रशासक',
      SYSTEM_ADMIN: 'जिल्हा आरोग्य अधिकारी (DHO)'
    },
    triage: {
      title: 'एआय-सहाय्यित डिजिटल ट्रायज',
      disclaimer: 'एआय-सहाय्यित ट्रायज. अंतिम वैद्यकीय निर्णय अधिकृत आरोग्य व्यावसायिकाने निश्चित करणे आवश्यक आहे.',
      symptomsLabel: 'रुग्णाची लक्षणे व मुख्य तक्रार',
      symptomsPlaceholder: 'लक्षणे नोंदवा (उदा. छातीत दुखणे, दम लागणे, गार घाम, चक्कर)...',
      speakButton: 'बोलून लक्षणे सांगा',
      listening: 'ऐकत आहोत... (आपल्या भाषेत बोला)',
      durationLabel: 'लक्षणांचा कालावधी',
      vitalsSection: 'महत्त्वाची लक्षणे / व्हायटल्स (ऐच्छिक)',
      bp: 'रक्तदाब (सिस्टोलिक/डायस्टोलिक)',
      heartRate: 'हृदयाचे ठोके (bpm)',
      spo2: 'ऑक्सिजन पातळी SpO2 (%)',
      temp: 'तापमान (°F)',
      evaluateButton: 'ट्रायज तपासा',
      redEmergency: 'लाल - तात्काळ आणीबाणी (RED Emergency)',
      orangePriority: 'केशरी - प्राधान्य (ORANGE Priority)',
      greenRoutine: 'हिरवा - नेहमीचे (GREEN Routine)',
      reasonsTitle: 'वर्गीकरणाची वैद्यकीय कारणे',
      warningSignsTitle: 'धोक्याचे इशारे व सूचना',
      nextActionTitle: 'पुढील शिफारस केलेले वैद्यकीय पाऊल',
      confirmButton: 'आरोग्य सेविका म्हणून खात्री करा',
      routeButton: 'योग्य रुग्णालय निवडा व पाठवा',
      quickSymptomsLabel: 'त्वरित लक्षण निवड:',
      confidenceLabel: 'अचूकता प्रमाण',
      humanConfirmedBadge: 'आरोग्य सेविकेद्वारे प्रमाणित',
      offlineNotice: 'ऑफलाइन मोड: स्थानिक वैद्यकीय नियमांद्वारे मूल्यांकित',
      enterNotesPlaceholder: 'खात्री नोंदी प्रविष्ट करा...'
    },
    routing: {
      title: 'कार्यक्षम व क्षमता-आधारित रुग्णालय निवड',
      subtitle: 'अंतर, आणीबाणी क्षमता, तज्ज्ञ उपलब्धता, खाटांची क्षमता आणि चाचण्या विचारात घेऊन पारदर्शक निवड.',
      nearestWarning: 'सूचना: जवळच्या दवाखान्यात तज्ज्ञ किंवा खाटा नसल्यास केअरग्रिड योग्य सुसज्ज रुग्णालयाची शिफारस करते.',
      scoreLabel: 'केअरग्रिड जुळवणी गुण',
      distance: 'अंतर',
      travelTime: 'अंदाजे प्रवासाची वेळ',
      reasonsWhy: 'हे रुग्णालय का शिफारस केले आहे:',
      specialists: 'उपलब्ध तज्ज्ञ डॉक्टर',
      bedsAvailable: 'उपलब्ध खाटा',
      queueLength: 'सध्याची रांग',
      createReferral: 'रेफरल हँडशेक सुरू करा',
      filterUrgency: 'आणीबाणी स्तर फिल्टर',
      filterSpecialty: 'आवश्यक तज्ज्ञ विभाग',
      feedHospitalData: '+ रुग्णालय माहिती जोडा',
      testScenario2: 'चाचणी प्रसंग २: तज्ज्ञ निवड',
      scoringBreakdown: 'गुण विश्लेषण',
      emergencyRoom: '२४x७ आणीबाणी कक्ष',
      icuCapacity: 'आयसीयू क्षमता',
      medicineStock: 'औषध साठा प्रमाण'
    },
    referral: {
      title: 'रेफरल हँडशेक जीवनचक्र',
      subtitle: 'आशा सेविकेपासून ते जिल्हा रुग्णालयातील तज्ज्ञापर्यंत अखंड संदर्भ समन्वय.',
      inbox: 'येणारे रेफरल इनबॉक्स',
      outbound: 'पाठवलेले रेफरल ट्रॅकर',
      code: 'रेफरल क्रमांक',
      patient: 'रुग्ण',
      from: 'संदर्भ देणारी सेविका',
      target: 'लक्षित रुग्णालय',
      status: 'सद्यस्थिती',
      accept: 'रुग्ण स्वीकारा व खाट आरक्षित करा',
      reject: 'नाकारा / पर्यायी रुग्णालयाकडे पाठवा',
      markArrived: 'रुग्ण दाखल झाला',
      completeConsult: 'तपासणी पूर्ण करा व पाठपुरावा ठरवा',
      tokenIssued: 'ओपीडी टोकन तयार',
      allReferrals: 'सर्व रेफरल',
      emergencyReferrals: 'आणीबाणी प्राधान्य',
      initiateReferral: 'रेफरल सुरू करा',
      priorityLevel: 'प्राधान्य पातळी',
      reasonForReferral: 'रेफरलचे कारण',
      clinicalSummary: 'वैद्यकीय सारांश व व्हायटल्स',
      lifecycleStatus: 'हँडशेक टप्पे स्थिती:',
      rejectionReason: 'नाकारण्याचे किंवा वळवण्याचे कारण',
      confirmReject: 'नाकारा व अन्य रुग्णालयाकडे पाठवा'
    },
    journey: {
      title: 'अखंड रुग्ण काळजी प्रवास (Care Journey)',
      subtitle: 'तुकड्या-तुकड्यात विभागलेल्या सेवेकडून एका सलग उपचार मार्गाकडे.',
      nextStepHeader: 'मी पुढे काय करावे?',
      completed: 'पूर्ण',
      inProgress: 'सध्याचा टप्पा',
      upcoming: 'पुढील टप्पा',
      delayed: 'कार्रवाई आवश्यक',
      patientSelectorLabel: 'रुग्ण निवडा:',
      currentStageLabel: 'सध्याचा उपचार टप्पा',
      advanceStep: 'पुढील टप्प्यावर जा',
      treatFullButton: 'संपूर्ण उपचार पूर्ण करा (१-क्लिक)',
      opdTokenLabel: 'प्राधान्य ओपीडी टोकन',
      verifiedBadge: 'आयुष्मान भारत (ABDM) सत्यापित',
      treatmentTimeline: 'उपचार टप्पे',
      abhaVerified: 'आभा (ABHA) संलग्न'
    },
    careGaps: {
      title: 'केअर-गॅप रडार (Care-Gap Radar)',
      subtitle: 'चुकलेली तपासणी, प्रलंबित रेफरल आणि पाठपुराव्याकडे दुर्लक्ष झालेल्या रुग्णांची स्वयंचलित सूचना प्रणाली.',
      detected: 'नोंदवलेले खंड',
      overdue: 'मुदत संपलेले (Overdue)',
      acknowledge: 'दखल घ्या',
      contact: 'रुग्णाशी संपर्क नोंदवा',
      resolve: 'समस्या निवारण नोंदवा',
      activeGapsCount: 'सक्रिय न सुटलेले खंड',
      filterSeverity: 'तीव्रता फिल्टर',
      filterStatus: 'स्थिती फिल्टर',
      conductHomeVisit: 'केलेली कारवाई',
      clinicalNotes: 'पाठपुरावा वैद्यकीय नोंदी',
      confirmResolution: 'निवारणाची खात्री करा',
      gapType: 'खंदाचा प्रकार',
      assignedWorker: 'नेमलेली आरोग्य सेविका'
    },
    records: {
      title: 'दीर्घकालीन आरोग्य नोंदी व संमती',
      subtitle: 'राष्ट्रीय आरोग्य प्राधिकरणाच्या आणि आभा मानकांनुसार प्रमाणित डिजिटल प्रोफाइल.',
      abhaId: 'आभा आरोग्य ओळख (ABHA ID)',
      demographics: 'रुग्णाची माहिती',
      allergies: 'माहिती असलेल्या ऍलर्जी',
      activeMedications: 'सध्या सुरू असलेली औषधे',
      conditions: 'जुने आजार / व्याधी',
      consentsTitle: 'एबीडीएम डिजिटल संमती व्यवस्थापक',
      grantConsent: 'माहिती प्रवेश परवानगी द्या',
      revokeConsent: 'परवानगी रद्द करा',
      teleconsultTitle: 'टेलिकन्सल्टेशन / ई-संजीवनी गेटवे',
      requestTeleconsult: 'व्हिडिओ टेलिकन्सल्टेशन विनंती करा',
      teleconsultActive: 'टेलिकन्सल्टेशन सत्र सज्ज आहे',
      vitalsHistory: 'नोंदवलेली महत्त्वाची लक्षणे'
    },
    offline: {
      title: 'स्मार्ट ऑफलाइन केअर पॅक',
      subtitle: 'ग्रामीण भागातील आशा व एएनएम सेविकांसाठी इंटरनेट नसतानाही काम करण्याची सोय.',
      downloadPack: 'केअर पॅक डाऊनलोड करा',
      syncNow: 'माहिती आता सिंक करा',
      lastSynced: 'शेवटचे सिंक',
      syncStatus: 'सिंक स्थिती',
      offlineActive: 'ऑफलाइन मोड सक्रिय',
      clearCache: 'कॅश साफ करा',
      pendingActions: 'प्रलंबित ऑफलाइन कामे',
      recordsCached: 'जतन केलेले रुग्ण',
      facilitiesCached: 'जतन केलेली रुग्णालये',
      offlineModeActiveBanner: 'ऑफलाइन फील्ड मोड सक्रिय: आरोग्य सेविका इंटरनेट नसतानाही ट्रायज व पाठपुरावा नोंदवू शकतात. इंटरनेट उपलब्ध झाल्यावर डेटा आपोआप सिंक होईल.',
      reconnectNow: 'आता पुन्हा कनेक्ट करा'
    },
    admin: {
      title: 'प्रशासक कन्सोल व प्रणाली नियंत्रणे',
      subtitle: 'भूमिका-आधारित प्रवेश नियंत्रण (RBAC), रुग्णालय खाटा व्यवस्थापन, आणि सुरक्षा नोंदी.',
      usersTab: 'वापरकर्ता व्यवस्थापन (RBAC)',
      facilitiesTab: 'रुग्णालय क्षमता व्यवस्थापन',
      auditTab: 'प्रणाली सुरक्षा ऑडिट लॉग',
      analyticsTab: 'जिल्हा आरोग्य विश्लेषण',
      userRoleLabel: 'नेमलेली भूमिका',
      searchPlaceholder: 'नाव, ईमेल किंवा रुग्णालयाने शोधा...',
      updateRole: 'भूमिका बदला',
      activeStatus: 'सक्रिय स्थिती',
      capacityOverrides: 'खाटांची क्षमता बदल',
      occupiedBeds: 'भरलेल्या सामान्य खाटा',
      occupiedIcu: 'भरलेल्या आयसीयू खाटा',
      waitTime: 'सरासरी प्रतीक्षा वेळ (मिनिटे)',
      saveChanges: 'बदल जतन करा',
      auditLogTitle: 'सुरक्षा आणि ऑडिट लॉग',
      timestamp: 'वेळ',
      action: 'कृती',
      user: 'वापरकर्ता',
      resource: 'संबंधित घटक'
    },
    addHospital: {
      title: 'नवीन रुग्णालय / आरोग्य केंद्र जोडा',
      facilityName: 'रुग्णालयाचे नाव',
      facilityType: 'रुग्णालयाचा प्रकार',
      category: 'व्यवस्थापन श्रेणी',
      district: 'जिल्हा',
      address: 'संपूर्ण पत्ता',
      phone: 'संपर्क क्रमांक',
      emergency24x7: '२४x७ आणीबाणी कक्ष आणि ट्रॉमा सेंटर',
      totalBeds: 'एकूण खाटा',
      icuBeds: 'आयसीयू खाटा',
      specialties: 'उपलब्ध तज्ज्ञ विभाग',
      diagnostics: 'उपलब्ध वैद्यकीय चाचण्या',
      stockRatio: 'आवश्यक औषध साठा प्रमाण',
      submitButton: 'केअरग्रिडमध्ये रुग्णालय नोंदवा',
      cancelButton: 'रद्द करा'
    },
    scenarios: {
      guideTitle: 'केअरग्रिड मार्गदर्शक',
      guideSubtitle: 'नियोजित वैद्यकीय प्रसंगांसह सार्वजनिक आरोग्य समन्वय प्रणाली तपासा.',
      scenario1Badge: 'प्राथमिक सलग उपचार मार्ग',
      scenario1Title: 'डेमो प्रसंग १: प्राथमिक ग्रामीण रुग्ण सेवा प्रवास',
      scenario1Desc: 'ग्रामीण रुग्णाला छातीत दुखणे → ट्रायज → आशा सेविकेची खात्री → रुग्णालय निवड → रेफरल स्वीकार → टोकन → आरोग्य प्रवास → पाठपुरावा चुकल्यास रडार अलर्ट.',
      scenario1Button: 'प्रसंग १ सुरू करा: प्राथमिक उपचार मार्ग',
      scenario2Badge: 'क्षमता व तज्ज्ञ निवड',
      scenario2Title: 'डेमो प्रसंग २: तज्ज्ञ डॉक्टर व क्षमता निवड',
      scenario2Desc: 'रुग्णाला हृदयविकार तज्ज्ञांची गरज: जवळच्या प्राथमिक केंद्रात तज्ज्ञ नाहीत vs जिल्हा रुग्णालयात तज्ज्ञ व चाचण्या उपलब्ध → केअरग्रिड अचूक निवड करते.',
      scenario2Button: 'प्रसंग २ सुरू करा: तज्ज्ञ निवड'
    },
    auth: {
      signInTitle: 'केअरग्रिडमध्ये लॉगिन करा',
      registerTitle: 'आरोग्य सेविका / रुग्ण खाते तयार करा',
      signInSubtitle: 'आपल्या सत्यापित माहितीसह आरोग्य समन्वय प्रणालीत प्रवेश करा.',
      registerSubtitle: 'नवीन आरोग्य सेविका किंवा रुग्ण खाते तयार करा.',
      email: 'अधिकृत ईमेल पत्ता',
      password: 'सुरक्षित पासवर्ड',
      fullName: 'पूर्ण नाव',
      role: 'भूमिका',
      district: 'जिल्हा',
      village: 'गाव / शहर',
      phone: 'मोबाईल क्रमांक',
      license: 'नोंदणी क्रमांक (वैद्यकीय/नर्सिंग)',
      loginButton: 'लॉगिन करा',
      registerButton: 'नोंदणी करा',
      quickPersonaLogin: 'त्वरित पर्सोना प्रवेश (१-क्लिक):',
      switchAccount: 'पर्सोना बदला',
      signOut: 'लॉगआउट'
    },
    common: {
      save: 'जतन करा',
      cancel: 'रद्द करा',
      close: 'बंद करा',
      loading: 'लोड होत आहे...',
      search: 'शोधा...',
      filter: 'फिल्टर',
      all: 'सर्व',
      success: 'यशस्वी',
      error: 'त्रुटी',
      confirm: 'खात्री करा',
      back: 'मागे',
      next: 'पुढे',
      yes: 'होय',
      no: 'नाही',
      status: 'स्थिती',
      date: 'दिनांक',
      actions: 'कृती',
      online: 'ऑनलाइन',
      offline: 'ऑफलाइन',
      resetDemo: 'डेमो रीसेट करा',
      resetConfirm: 'केअरग्रिड डेटाबेस सुरुवातीच्या स्थितीत परत आणायचा आहे का?',
      restrictedAccess: 'मर्यादित प्रवेश',
      restrictedPatientMsg: 'हा विभाग अधिकृत आरोग्य कर्मचारी आणि प्रशासकांसाठी आहे. रुग्ण म्हणून, आपल्याला आपला उपचार प्रवास, लक्षणे नोंदवणे आणि आरोग्य नोंदी पाहण्याची सोय आहे.',
      restrictedAdminMsg: 'वापरकर्ता व्यवस्थापन, ऑडिट लॉग आणि क्षमता बदलासाठी प्रशासक परवानग्या आवश्यक आहेत.',
      goToJourney: 'माझ्या उपचार प्रवासाकडे जा',
      returnAuthorized: 'अधिकृत विभागाकडे परत जा',
      footerTitle: 'केअरग्रिड — राष्ट्रीय आरोग्य अभियान ग्रामीण आरोग्य समन्वय प्रणाली',
      compliance1: 'ABDM माइलस्टोन १ व २ प्रमाणित',
      compliance2: 'भूमिका-आधारित प्रवेश नियंत्रण (RBAC)',
      compliance3: 'क्लिनिकल रूल-इंजिन + जेमिनी विश्लेषण'
    }
  },

  ta: {
    appTitle: 'கேர்கிரிட் (CareGrid)',
    appSubtitle: 'பொது சுகாதார கவனிப்பு ஒருங்கிணைப்பு தளம்',
    missionStatement: 'பரிசோதனை, மருத்துவமனை தேர்வு, பரிந்துரை ஹேண்ட்ஷேக், பரிசோதனைகள், சிகிச்சை மற்றும் தொடர் கவனிப்பு வரை நோயாளிகளை அடுத்த சரியான படிக்கு வழிநடத்துகிறது.',
    nhmBadge: 'தேசிய நல்வாழ்வு இயக்கம் (NHM) ஒருங்கிணைப்பு',
    nav: {
      triage: 'டிஜிட்டல் ட்ரையேஜ்',
      routing: 'மருத்துவமனை தேர்வு',
      referrals: 'பரிந்துரை ஹேண்ட்ஷேக்',
      journey: 'பராமரிப்புப் பாதை',
      careGaps: 'இடைவெளி ரேடார்',
      dashboard: 'முகப்பு பலகை',
      offline: 'ஆஃப்லைன் பேக்',
      records: 'சுகாதார ஆவணம்',
      medicines: 'மருந்து இருப்பு',
      audit: 'தணிக்கை பதிவு',
      admin: 'நிர்வாக கட்டுப்பாட்டு மையம்'
    },
    roles: {
      PATIENT: 'நோயாளி',
      ASHA_WORKER: 'ஆஷா களப்பணியாளர்',
      HEALTH_WORKER: 'கிராம சுகாதார செவிலியர் / ஆஷா (VHN)',
      HOSPITAL_DOCTOR: 'மருத்துவமனை மருத்துவர்',
      DOCTOR: 'மருத்துவ நிபுணர்',
      ADMIN: 'கணினி நிர்வாகி',
      FACILITY_ADMIN: 'மருத்துவமனை நிர்வாகி',
      SYSTEM_ADMIN: 'மாவட்ட சுகாதார அலுவலர் (DDHS)'
    },
    triage: {
      title: 'AI-உதவி டிஜிட்டல் ட்ரையேஜ்',
      disclaimer: 'AI-உதவி ட்ரையேஜ் மதிப்பீடு. இறுதி மருத்துவ முடிவை அங்கீகரிக்கப்பட்ட சுகாதார நிபுணர் உறுதிப்படுத்த வேண்டும்.',
      symptomsLabel: 'நோயாளியின் அறிகுறிகள் மற்றும் முதன்மை புகார்',
      symptomsPlaceholder: 'அறிகுறிகளை விவரிக்கவும் (எ.கா. நெஞ்சு வலி, மூச்சுத்திணறல், 3 நாட்களாக காய்ச்சல்)...',
      speakButton: 'பேசி அறிகுறிகளைப் பதிவுசெய்க',
      listening: 'கேட்கிறது... (உங்கள் தாய்மொழியில் பேசவும்)',
      durationLabel: 'அறிகுறிகளின் கால அளவு',
      vitalsSection: 'உயிர் அறிகுறிகள் / வைட்டல்கள் (விருப்பத்தேர்வு)',
      bp: 'இரத்த அழுத்தம் (Sys/Dia)',
      heartRate: 'இதயத் துடிப்பு (bpm)',
      spo2: 'ஆக்சிஜன் அளவு SpO2 (%)',
      temp: 'உடல் வெப்பநிலை (°F)',
      evaluateButton: 'ட்ரையேஜ் நிலை மதிப்பீடு செய்க',
      redEmergency: 'சிவப்பு - உடனடி அவசரம் (RED Emergency)',
      orangePriority: 'ஆரஞ்சு - அவசர முன்னுரிமை (ORANGE Priority)',
      greenRoutine: 'பச்சை - வழக்கமான பராமரிப்பு (GREEN Routine)',
      reasonsTitle: 'மருத்துவ வகைப்படுத்தலின் காரணங்கள்',
      warningSignsTitle: 'எச்சரிக்கை அறிகுறிகள் மற்றும் ஆபத்துகள்',
      nextActionTitle: 'பரிந்துரைக்கப்படும் அடுத்த மருத்துவ நடவடிக்கை',
      confirmButton: 'சுகாதாரப் பணியாளராக உறுதிப்படுத்துக',
      routeButton: 'சிறந்த மருத்துவமனை பரிந்துரை பெற்று அனுப்புக',
      quickSymptomsLabel: 'விரைவு அறிகுறி தேர்வுகள்:',
      confidenceLabel: 'நம்பகத்தன்மை மதிப்பெண்',
      humanConfirmedBadge: 'சுகாதாரப் பணியாளரால் உறுதிசெய்யப்பட்டது',
      offlineNotice: 'ஆஃப்லைன் பயன்முறை: உள்ளமைக்கப்பட்ட மருத்துவ நெறிமுறைகளால் மதிப்பீடு செய்யப்பட்டது',
      enterNotesPlaceholder: 'உறுதிப்படுத்தல் குறிப்புகளை உள்ளிடவும்...'
    },
    routing: {
      title: 'திறன்-அடிப்படையிலான அறிவார்ந்த மருத்துவமனை தேர்வு',
      subtitle: 'தொலைவு, அவசர சிகிச்சை வசதி, சிறப்பு மருத்துவர் இருப்பு, படுக்கை இருப்பு, காத்திருப்பு நேரம் ஆகியவற்றைக் கொண்டு தேர்ந்தெடுக்கிறது.',
      nearestWarning: 'கவனிக்க: அருகிலுள்ள கிளினிக்கில் சிறப்பு மருத்துவர் அல்லது படுக்கை இல்லையெனில் கேர்கிரிட் பொருத்தமான தலைமை மருத்துவமனையை பரிந்துரைக்கிறது.',
      scoreLabel: 'கேர்கிரிட் பொருத்தம் மதிப்பெண்',
      distance: 'தொலைவு',
      travelTime: 'பயண நேரம்',
      reasonsWhy: 'இந்த மருத்துவமனை ஏன் பரிந்துரைக்கப்படுகிறது:',
      specialists: 'பணியில் உள்ள நிபுணர்கள்',
      bedsAvailable: 'காலியான படுக்கைகள்',
      queueLength: 'தற்போதைய வரிசை',
      createReferral: 'பரிந்துரை ஹேண்ட்ஷேக் தொடங்குக',
      filterUrgency: 'அவசர நிலை வடிகட்டி',
      filterSpecialty: 'தேவைப்படும் மருத்துவப் பிரிவு',
      feedHospitalData: '+ புதிய மருத்துவமனை சேர்க்க',
      testScenario2: 'காட்சி 2: நிபுணர் ரூட்டிங் சோதனை',
      scoringBreakdown: 'மதிப்பெண் விவரங்கள்',
      emergencyRoom: '24x7 அவசர விபத்து சிகிச்சை பிரிவு',
      icuCapacity: 'தீவிர சிகிச்சைப் பிரிவு (ICU)',
      medicineStock: 'அத்தியாவசிய மருந்து இருப்பு'
    },
    referral: {
      title: 'பரிந்துரை ஹேண்ட்ஷேக் வாழ்க்கைச் சுழற்சி',
      subtitle: 'கிராமப்புற சுகாதாரப் பணியாளரிடமிருந்து மருத்துவமனை சிறப்பு மருத்துவர் வரை வெளிப்படையான கண்காணிப்பு.',
      inbox: 'உள்வரும் பரிந்துரைகள் (மருத்துவமனை பார்வை)',
      outbound: 'வெளியேறும் பரிந்துரைகள் (ஆஷா பார்வை)',
      code: 'பரிந்துரை எண்',
      patient: 'நோயாளி',
      from: 'பரிந்துரைத்த பணியாளர்',
      target: 'இலக்கு மருத்துவமனை',
      status: 'தற்போதைய நிலை',
      accept: 'நோயாளியை ஏற்று படுக்கை ஒதுக்குக',
      reject: 'நிராகரித்து மாற்று மருத்துவமனைக்கு அனுப்புக',
      markArrived: 'நோயாளி வருகையைப் பதிவு செய்க',
      completeConsult: 'ஆலோசனையை முடித்து பின்தொடர்தல் அமைக்குக',
      tokenIssued: 'முன்னுரிமை ஓபிடி டோக்கன் வழங்கப்பட்டது',
      allReferrals: 'அனைத்து பரிந்துரைகள்',
      emergencyReferrals: 'அவசர முன்னுரிமை',
      initiateReferral: 'பரிந்துரை தொடங்குக',
      priorityLevel: 'முன்னுரிமை நிலை',
      reasonForReferral: 'பரிந்துரைக்கான காரணம்',
      clinicalSummary: 'மருத்துவ சுருக்கம் மற்றும் வைட்டல்கள்',
      lifecycleStatus: 'ஹேண்ட்ஷேக் வாழ்க்கைச் சுழற்சி நிலை:',
      rejectionReason: 'நிராகரிப்பு அல்லது மாற்று வழிக்கான காரணம்',
      confirmReject: 'நிராகரிப்பை உறுதிசெய்க'
    },
    journey: {
      title: 'தொடர்ச்சியான நோயாளி பராமரிப்புப் பாதை',
      subtitle: 'அறிகுறி பரிசோதனை முதல் மருத்துவமனை சிகிச்சை மற்றும் வீடு திரும்புதல் வரை முழுமையான ஒருங்கிணைந்த பாதை.',
      nextStepHeader: 'நான் அடுத்து என்ன செய்ய வேண்டும்?',
      completed: 'முடிந்தது',
      inProgress: 'தற்போதைய நிலை',
      upcoming: 'அடுத்த நிலை',
      delayed: 'நடவடிக்கை தேவை',
      patientSelectorLabel: 'நோயாளி பராமரிப்புப் பாதையைத் தேர்ந்தெடுக்கவும்:',
      currentStageLabel: 'செயலில் உள்ள பராமரிப்பு நிலை',
      advanceStep: 'அடுத்த நிலைக்கு நகர்த்துக',
      treatFullButton: 'முழுமையான சிகிச்சை நெறிமுறையை முடிக்க (1-கிளிக்)',
      opdTokenLabel: 'முன்னுரிமை ஓபிடி டோக்கன்',
      verifiedBadge: 'ஆயுஷ்மான் பாரத் (ABDM) சரிபார்க்கப்பட்டது',
      treatmentTimeline: 'சிகிச்சைப் பாதையின் முக்கிய மைல்கற்கள்',
      abhaVerified: 'ஆபா (ABHA) இணைக்கப்பட்டது'
    },
    careGaps: {
      title: 'பராமரிப்பு இடைவெளி ரேடார் (Care-Gap Radar)',
      subtitle: 'தவறவிட்ட சந்திப்புகள், தாமதமான பரிந்துரைகள் மற்றும் பின்தொடர்தல் புறக்கணிக்கப்பட்ட நோயாளிகளுக்கான கண்காணிப்பு.',
      detected: 'கண்டறியப்பட்ட இடைவெளிகள்',
      overdue: 'காலக்கெடு முடிந்தது (Overdue)',
      acknowledge: 'ஏற்றுக்கொள்',
      contact: 'நோயாளியைத் தொடர்பு கொள்க',
      resolve: 'தீர்வு பெற்றதாகப் பதிவு செய்க',
      activeGapsCount: 'தீர்க்கப்படாத செயலில் உள்ள இடைவெளிகள்',
      filterSeverity: 'தீவிர நிலை வடிகட்டி',
      filterStatus: 'நிலை வடிகட்டி',
      conductHomeVisit: 'எடுக்கப்பட்ட நடவடிக்கை',
      clinicalNotes: 'மருத்துவ பின்தொடர்தல் குறிப்புகள்',
      confirmResolution: 'இடைவெளி தீர்வை உறுதிப்படுத்துக',
      gapType: 'இடைவெளி வகைப்பாடு',
      assignedWorker: 'நியமிக்கப்பட்ட சுகாதாரப் பணியாளர்'
    },
    records: {
      title: 'நீண்டகால சுகாதார ஆவணம் மற்றும் ஒப்புதல்கள்',
      subtitle: 'தேசிய சுகாதார ஆணையத்தின் ஆபா (ABDM) தரநிலைகளுக்கு இணக்கமான டிஜிட்டல் சுயவிவரம்.',
      abhaId: 'ஆபா அடையாள எண் (ABHA ID)',
      demographics: 'நோயாளி விவரங்கள்',
      allergies: 'ஒவ்வாமைகள் (Allergies)',
      activeMedications: 'தற்போது உட்கொள்ளும் மருந்துகள்',
      conditions: 'நாட்பட்ட மருத்துவ நிலைகள்',
      consentsTitle: 'ABDM டிஜிட்டல் ஒப்புதல் மேலாளர்',
      grantConsent: 'தரவு அணுகல் அனுமதி வழங்குக',
      revokeConsent: 'அனுமதியை ரத்து செய்க',
      teleconsultTitle: 'டெலிகன்சல்டேஷன் / இ-சஞ்சீவனி தளம்',
      requestTeleconsult: 'வீடியோ மருத்துவ ஆலோசனை கோரிக்கை',
      teleconsultActive: 'மருத்துவ ஆலோசனை அரங்கம் தயார்',
      vitalsHistory: 'பதிவுசெய்யப்பட்ட உயிர் அளவீடுகள்'
    },
    offline: {
      title: 'ஸ்மார்ட் ஆஃப்லைன் கேர் பேக்',
      subtitle: 'இணைய வசதி இல்லாத கிராமப்புற பகுதிகளில் ஆஷா மற்றும் செவிலியர்கள் தடையின்றி பணியாற்ற உதவுகிறது.',
      downloadPack: 'கேர் பேக் பதிவிறக்குக',
      syncNow: 'இப்போதே தகவலை ஒத்திசைக்குக',
      lastSynced: 'கடைசி ஒத்திசைவு நேரம்',
      syncStatus: 'ஒத்திசைவு நிலை',
      offlineActive: 'ஆஃப்லைன் பயன்முறை செயலில் உள்ளது',
      clearCache: 'உள்ளூர் தற்காலிக சேமிப்பை அழிக்க',
      pendingActions: 'வரிசையில் உள்ள ஆஃப்லைன் மாற்றங்கள்',
      recordsCached: 'பதிவிறக்கப்பட்ட நோயாளிகள்',
      facilitiesCached: 'பதிவிறக்கப்பட்ட மருத்துவமனைகள்',
      offlineModeActiveBanner: 'ஆஃப்லைன் கள பயன்முறை இயங்குகிறது: இணையம் இல்லாமலே சுகாதாரப் பணியாளர்கள் ட்ரையேஜ் மற்றும் பின்தொடர்தலை பதிவுசெய்யலாம். இணையம் கிடைத்ததும் தானாக ஒத்திசைக்கப்படும்.',
      reconnectNow: 'இப்போதே மீண்டும் இணைக்கவும்'
    },
    admin: {
      title: 'நிர்வாக கட்டுப்பாட்டு மையம் & அமைப்புகள்',
      subtitle: 'பயனர் பாத்திர மேலாண்மை (RBAC), மருத்துவமனை படுக்கை திறன் மேலாண்மை மற்றும் பாதுகாப்பு தணிக்கை பதிவுகள்.',
      usersTab: 'பயனர் மேலாண்மை (RBAC)',
      facilitiesTab: 'மருத்துவமனை படுக்கை திறன் மேலாண்மை',
      auditTab: 'பாதுகாப்பு தணிக்கை பதிவுகள்',
      analyticsTab: 'மாவட்ட சுகாதார பகுப்பாய்வு',
      userRoleLabel: 'ஒதுக்கப்பட்ட பொறுப்பு',
      searchPlaceholder: 'பெயர், மின்னஞ்சல் அல்லது மருத்துவமனையால் தேடுக...',
      updateRole: 'பொறுப்பை மாற்றுக',
      activeStatus: 'செயலில் உள்ள நிலை',
      capacityOverrides: 'படுக்கை திறன் திருத்தங்கள்',
      occupiedBeds: 'நிரப்பப்பட்ட பொது படுக்கைகள்',
      occupiedIcu: 'நிரப்பப்பட்ட தீவிர சிகிச்சைப் பிரிவு படுக்கைகள்',
      waitTime: 'சராசரி காத்திருப்பு நேரம் (நிமிடங்கள்)',
      saveChanges: 'மாற்றங்களைச் சேமிக்கவும்',
      auditLogTitle: 'விரிவான பாதுகாப்பு மற்றும் தணிக்கை தடம்',
      timestamp: 'நேரம்',
      action: 'செயல்பாடு',
      user: 'பயனர்',
      resource: 'இலக்கு'
    },
    addHospital: {
      title: 'புதிய மருத்துவமனை / சுகாதார நிலையம் சேர்க்க',
      facilityName: 'மருத்துவமனையின் பெயர்',
      facilityType: 'மருத்துவமனை வகைப்பாடு',
      category: 'நிர்வாகப் பிரிவு',
      district: 'மாவட்டம்',
      address: 'முழு அஞ்சல் முகவரி',
      phone: 'தொலைபேசி எண்',
      emergency24x7: '24x7 அவசர சிகிச்சை மற்றும் விபத்து பிரிவு',
      totalBeds: 'மொத்த படுக்கைகள்',
      icuBeds: 'தீவிர சிகிச்சைப் பிரிவு (ICU) படுக்கைகள்',
      specialties: 'கிடைக்கும் மருத்துவ சிறப்புப் பிரிவுகள்',
      diagnostics: 'கிடைக்கும் பரிசோதனை வசதிகள்',
      stockRatio: 'அத்தியாவசிய மருந்து இருப்பு விகிதம்',
      submitButton: 'கேர்கிரிட்டில் மருத்துவமனையைப் பதிவு செய்க',
      cancelButton: 'ரத்து செய்'
    },
    scenarios: {
      guideTitle: 'கேர்கிரிட் மதிப்பீட்டாளர் வழிகாட்டி',
      guideSubtitle: 'முன்-கட்டமைக்கப்பட்ட மருத்துவ காட்சிகளுடன் பொது சுகாதார கவனிப்பு ஒருங்கிணைப்பு தளத்தை ஆராயுங்கள்.',
      scenario1Badge: 'முழுமையான முதன்மை சிகிச்சை பாதை',
      scenario1Title: 'டெமோ காட்சி 1: ஆரம்ப கிராமப்புற நோயாளி பாதை',
      scenario1Desc: 'கிராமத்து நோயாளி நெஞ்சுவலி → ட்ரையேஜ் சிவப்பு → வி.எச்.என் உறுதிப்படுத்தல் → மாவட்ட அரசு மருத்துவமனை தேர்வு → பரிந்துரை ஏற்பு → டோக்கன் → முழுமையான சிகிச்சை பாதை.',
      scenario1Button: 'காட்சி 1 தொடங்குக: முதன்மை பராமரிப்புப் பாதை',
      scenario2Badge: 'திறன் & சிறப்பு மருத்துவர் ரூட்டிங்',
      scenario2Title: 'டெமோ காட்சி 2: நிபுணர் & திறன் அடிப்படையிலான ரூட்டிங்',
      scenario2Desc: 'இதயவியல் நிபுணர் தேவை: அருகிலுள்ள ஆரம்ப சுகாதார நிலையத்தில் நிபுணர் இல்லை vs மாவட்ட தலைமை மருத்துவமனையில் ECG மற்றும் நிபுணர் தயார் → துல்லிய தேர்வு.',
      scenario2Button: 'காட்சி 2 தொடங்குக: நிபுணர் ரூட்டிங்'
    },
    auth: {
      signInTitle: 'கேர்கிரிட்டில் உள்நுழைக',
      registerTitle: 'சுகாதாரப் பணியாளர் / நோயாளி கணக்கு உருவாக்குக',
      signInSubtitle: 'உங்கள் சரிபார்க்கப்பட்ட சான்றுகளுடன் பொது சுகாதார தளத்தை அணுகவும்.',
      registerSubtitle: 'புதிய சுகாதார பணியாளர் அல்லது நோயாளி பதிவு செய்யவும்.',
      email: 'அதிகாரப்பூர்வ மின்னஞ்சல் முகவரி',
      password: 'பாதுகாப்பான கடவுச்சொல்',
      fullName: 'முழுப் பெயர்',
      role: 'களப் பொறுப்பு',
      district: 'மாவட்டம்',
      village: 'கிராமம் / நகரம்',
      phone: 'கைபேசி எண்',
      license: 'மருத்துவ / செவிலியர் பதிவு எண்',
      loginButton: 'பணியிடத்திற்குள் நுழைக',
      registerButton: 'கணக்கை பதிவு செய்க',
      quickPersonaLogin: 'விரைவு நபர் தேர்வு (1-கிளிக் மாற்று):',
      switchAccount: 'நபரை மாற்றுக',
      signOut: 'வெளியேறு'
    },
    common: {
      save: 'சேமி',
      cancel: 'ரத்து செய்',
      close: 'மூடு',
      loading: 'ஏற்றுகிறது...',
      search: 'தேடுக...',
      filter: 'வடிகட்டி',
      all: 'அனைத்தும்',
      success: 'வெற்றி',
      error: 'பிழை',
      confirm: 'உறுதிப்படுத்து',
      back: 'பின்செல்',
      next: 'அடுத்து',
      yes: 'ஆம்',
      no: 'இல்லை',
      status: 'நிலை',
      date: 'தேதி',
      actions: 'நடவடிக்கைகள்',
      online: 'ஆன்லைன்',
      offline: 'ஆஃப்லைன்',
      resetDemo: 'டெமோ மீட்டமைக்க',
      resetConfirm: 'கேர்கிரிட் தரவுத்தளத்தை ஆரம்ப நிலைக்கு மீட்டமைக்க விரும்புகிறீர்களா?',
      restrictedAccess: 'அனுமதி மறுக்கப்பட்டது',
      restrictedPatientMsg: 'இந்த பகுதி அங்கீகரிக்கப்பட்ட சுகாதாரப் பணியாளர்கள் மற்றும் நிர்வாகிகளுக்கானது. நோயாளியாக, உங்கள் பராமரிப்புப் பாதை, அறிகுறிகள் தெரிவித்தல் மற்றும் மருத்துவ ஆவணங்களை அணுகலாம்.',
      restrictedAdminMsg: 'பயனர் மேலாண்மை, தணிக்கை பதிவுகள் மற்றும் திறன் திருத்தத்திற்கு கணினி நிர்வாகி அனுமதி தேவை.',
      goToJourney: 'என் பராமரிப்புப் பாதைக்குச் செல்க',
      returnAuthorized: 'அங்கீகரிக்கப்பட்ட பணிநிலைக்குத் திரும்பு',
      footerTitle: 'கேர்கிரிட் — தேசிய நல்வாழ்வு இயக்கம் கிராமப்புற பராமரிப்பு ஒருங்கிணைப்பு கட்டமைப்பு',
      compliance1: 'ABDM மைல்ஸ்டோன் 1 & 2 இணக்கமானது',
      compliance2: 'பாத்திர-அடிப்படையிலான அணுகல் கட்டுப்பாடு (RBAC)',
      compliance3: 'மருத்துவ விதிமுறை என்ஜின் + ஜெமினி பகுப்பாய்வு'
    }
  },

  te: {
    appTitle: 'కేర్‌గ్రిడ్ (CareGrid)',
    appSubtitle: 'ప్రజా ఆరోగ్య సంరక్షణ సమన్వయ వేదిక',
    missionStatement: 'రోగులను వారి ప్రస్తుత పరిస్థితి నుండి ట్రయాజ్, ఆసుపత్రి ఎంపిక, రిఫెరల్, పరీక్షలు, చికిత్స మరియు ఫాలో-అప్ వరకు తదుపరి సరైన దశకు సమన్వయం చేస్తుంది.',
    nhmBadge: 'జాతీయ ఆరోగ్య మిషన్ (NHM) సమన్వయం',
    nav: {
      triage: 'డిజిటల్ ట్రయాజ్',
      routing: 'ఆసుపత్రి రూటింగ్',
      referrals: 'రిఫెరల్ హ్యాండ్‌షేక్',
      journey: 'కేర్ జర్నీ',
      careGaps: 'కేర్-గ్యాప్ రాడార్',
      dashboard: 'డాష్‌బోర్డ్',
      offline: 'ఆఫ్‌లైన్ ప్యాక్',
      records: 'ఆరోగ్య రికార్డులు',
      medicines: 'మందుల నిల్వ',
      audit: 'ఆడిట్ లాగ్',
      admin: 'అడ్మిన్ కన్సోల్'
    },
    roles: {
      PATIENT: 'రోగి',
      ASHA_WORKER: 'ఆశా కార్యకర్త',
      HEALTH_WORKER: 'ఆరోగ్య కార్యకర్త (ఆశా/ఏఎన్‌ఎం)',
      HOSPITAL_DOCTOR: 'ఆసుపత్రి వైద్యుడు',
      DOCTOR: 'వైద్య నిపుణుడు',
      ADMIN: 'సిస్టమ్ నిర్వాహకుడు',
      FACILITY_ADMIN: 'ఆసుపత్రి అడ్మిన్',
      SYSTEM_ADMIN: 'జిల్లా వైద్యాధికారి (DHO)'
    },
    triage: {
      title: 'ఏఐ-సహాయక డిజిటల్ ట్రయాజ్',
      disclaimer: 'ఏఐ-సహాయక ట్రయాజ్. తుది వైద్య నిర్ణయాన్ని అధీకృత ఆరోగ్య నిపుణుడు ధృవీకరించాలి.',
      symptomsLabel: 'రోగి లక్షణాలు మరియు ప్రధాన సమస్య',
      symptomsPlaceholder: 'లక్షణాలు వివరించండి (ఉదా. ఛాతీ నొప్పి, శ్వాస తీసుకోవడంలో ఇబ్బంది, 3 రోజులుగా జ్వరం)...',
      speakButton: 'లక్షణాలు మాట్లాడి నమోదు చేయండి',
      listening: 'వింటున్నాము... (మీ భాషలో మాట్లాడండి)',
      durationLabel: 'లక్షణాల వ్యవధి',
      vitalsSection: 'ప్రాణాధార లక్షణాలు / వైటల్స్ (ఐచ్ఛికం)',
      bp: 'రక్తపోటు (Sys/Dia)',
      heartRate: 'గుండె చప్పుడు (bpm)',
      spo2: 'ఆక్సిజన్ స్థాయి SpO2 (%)',
      temp: 'ఉష్ణోగ్రత (°F)',
      evaluateButton: 'ట్రయాజ్ తీవ్రతను అంచనా వేయండి',
      redEmergency: 'ఎరుపు - అత్యవసరం (RED Emergency)',
      orangePriority: 'నారింజ - ప్రాధాన్యత (ORANGE Priority)',
      greenRoutine: 'ఆకుపచ్చ - సాధారణం (GREEN Routine)',
      reasonsTitle: 'వర్గీకరణకు వైద్య కారణాలు',
      warningSignsTitle: 'హెచ్చరిక సంకేతాలు & ప్రమాదాలు',
      nextActionTitle: 'సిఫార్సు చేయబడిన తదుపరి చర్య',
      confirmButton: 'ఆరోగ్య కార్యకర్తగా నిర్ధారించండి',
      routeButton: 'ఉత్తమ ఆసుపత్రిని కనుగొని పంపండి',
      quickSymptomsLabel: 'త్వరిత లక్షణ ఎంపిక:',
      confidenceLabel: 'విశ్వసనీయత స్కోరు',
      humanConfirmedBadge: 'ఆరోగ్య కార్యకర్త ద్వారా ధృవీకరించబడింది',
      offlineNotice: 'ఆఫ్‌లైన్ మోడ్: అంతర్నిర్మిత క్లినికల్ నిబంధనల ద్వారా అంచనా వేయబడింది',
      enterNotesPlaceholder: 'ధృవీకరణ గమనికలను నమోదు చేయండి...'
    },
    routing: {
      title: 'సామర్థ్య ఆధారిత స్మార్ట్ ఆసుపత్రి ఎంపిక',
      subtitle: 'దూరం, అత్యవసర చికిత్స, స్పెషలిస్ట్ వైద్యులు, పడకల సామర్థ్యం, నిరీక్షణ సమయం ఆధారంగా ఉత్తమ సిఫార్సు.',
      nearestWarning: 'గమనిక: సమీప ఆసుపత్రిలో స్పెషలిస్ట్ లేదా పడకలు లేకపోతే కేర్‌గ్రిడ్ ఉత్తమ సదుపాయాలున్న ఆసుపత్రికి సిఫార్సు చేస్తుంది.',
      scoreLabel: 'కేర్‌గ్రిడ్ మ్యాచ్ స్కోరు',
      distance: 'దూరం',
      travelTime: 'అంచనా ప్రయాణ సమయం',
      reasonsWhy: 'ఈ ఆసుపత్రి ఎందుకు సిఫార్సు చేయబడింది:',
      specialists: 'డ్యూటీలో ఉన్న నిపుణులు',
      bedsAvailable: 'అందుబాటులో ఉన్న పడకలు',
      queueLength: 'ప్రస్తుత క్యూ',
      createReferral: 'రిఫెరల్ హ్యాండ్‌షేక్ ప్రారంభించండి',
      filterUrgency: 'అత్యవసర స్థాయి ఫిల్టర్',
      filterSpecialty: 'అవసరమైన విభాగం',
      feedHospitalData: '+ ఆసుపత్రి వివరాలు చేర్చండి',
      testScenario2: 'సినారియో 2: స్పెషలిస్ట్ రూటింగ్ టెస్ట్',
      scoringBreakdown: 'స్కోరు వివరాలు',
      emergencyRoom: '24x7 ఎమర్జెన్సీ వార్డు',
      icuCapacity: 'ఐసీయూ సామర్థ్యం',
      medicineStock: 'మందుల నిల్వ నిష్పత్తి'
    },
    referral: {
      title: 'రిఫెరల్ హ్యాండ్‌షేక్ జీవితచక్రం',
      subtitle: 'గ్రామీణ ఆరోగ్య కార్యకర్త నుండి ఆసుపత్రి వైద్య నిపుణుడి వరకు పారదర్శక సమన్వయం.',
      inbox: 'ఇన్‌కమింగ్ రిఫెరల్స్ (ఆసుపత్రి వీక్షణ)',
      outbound: 'అవుట్‌బౌండ్ రిఫెరల్స్ (ఆశా వీక్షణ)',
      code: 'రిఫెరల్ కోడ్',
      patient: 'రోగి',
      from: 'రిఫర్ చేసిన కార్యకర్త',
      target: 'లక్ష్య ఆసుపత్రి',
      status: 'ప్రస్తుత స్థితి',
      accept: 'రోగిని అంగీకరించి పడకను కేటాయించండి',
      reject: 'తిరస్కరించి వేరే ఆసుపత్రికి పంపండి',
      markArrived: 'రోగి రాకను నమోదు చేయండి',
      completeConsult: 'కన్సల్టేషన్ పూర్తి చేసి ఫాలో-అప్ నిర్ణయించండి',
      tokenIssued: 'ఓపీడీ టోకెన్ జారీ చేయబడింది',
      allReferrals: 'అన్ని రిఫెరల్స్',
      emergencyReferrals: 'అత్యవసర ప్రాధాన్యత',
      initiateReferral: 'రిఫెరల్ ప్రారంభించండి',
      priorityLevel: 'ప్రాధాన్యత స్థాయి',
      reasonForReferral: 'రిఫెరల్ కారణం',
      clinicalSummary: 'క్లినికల్ సారాంశం మరియు వైటల్స్',
      lifecycleStatus: 'హ్యాండ్‌షేక్ జీవితచక్ర స్థితి:',
      rejectionReason: 'తిరస్కరణ లేదా మళ్లింపు కారణం',
      confirmReject: 'తిరస్కరణను ధృవీకరించండి'
    },
    journey: {
      title: 'నిరంతర రోగి సంరక్షణ ప్రయాణం',
      subtitle: 'ముక్కలైన ఆరోగ్య సేవల నుండి ఒకే సమగ్ర చికిత్సా మార్గం వరకు.',
      nextStepHeader: 'నేను తర్వాత ఏమి చేయాలి?',
      completed: 'పూర్తయింది',
      inProgress: 'ప్రస్తుత దశ',
      upcoming: 'రాబోయే దశ',
      delayed: 'చర్య అవసరం',
      patientSelectorLabel: 'రోగిని ఎంచుకోండి:',
      currentStageLabel: 'ప్రస్తుత చికిత్సా దశ',
      advanceStep: 'తదుపరి దశకు వెళ్లండి',
      treatFullButton: 'పూర్తి చికిత్సను పూర్తి చేయండి (1-క్లిక్)',
      opdTokenLabel: 'ప్రాధాన్యత ఓపీడీ టోకెన్',
      verifiedBadge: 'ఆయుష్మాన్ భారత్ (ABDM) ధృవీకరించబడింది',
      treatmentTimeline: 'చికిత్సా మార్గం మైలురాళ్ళు',
      abhaVerified: 'ఆభా (ABHA) అనుసంధానించబడింది'
    },
    careGaps: {
      title: 'కేర్-గ్యాప్ రాడార్ (Care-Gap Radar)',
      subtitle: 'తప్పిపోయిన అపాయింట్‌మెంట్‌లు, ఆలస్యమైన రిఫెరల్స్ మరియు ఫాలో-అప్ తప్పిపోయిన రోగుల పర్యవేక్షణ.',
      detected: 'గుర్తించబడిన అంతరాలు',
      overdue: 'గడువు ముగిసినవి (Overdue)',
      acknowledge: 'గుర్తించండి',
      contact: 'రోగి సంప్రదింపును నమోదు చేయండి',
      resolve: 'పరిష్కరించబడినట్లు నమోదు చేయండి',
      activeGapsCount: 'పరిష్కారం కాని క్రియాశీల అంతరాలు',
      filterSeverity: 'తీవ్రత ఫిల్టర్',
      filterStatus: 'స్థితి ఫిల్టర్',
      conductHomeVisit: 'తీసుకున్న చర్య',
      clinicalNotes: 'ఫాలో-అప్ వైద్య గమనికలు',
      confirmResolution: 'పరిష్కారాన్ని ధృవీకరించండి',
      gapType: 'అంతర రకం',
      assignedWorker: 'కేటాయించిన ఆరోగ్య కార్యకర్త'
    },
    records: {
      title: 'దీర్ఘకాలిక ఆరోగ్య రికార్డులు మరియు సమ్మతులు',
      subtitle: 'జాతీయ ఆరోగ్య అథారిటీ ఆభా (ABDM) ప్రమాణాలకు అనుగుణంగా డిజిటల్ ప్రొఫైల్.',
      abhaId: 'ఆభా గుర్తింపు సంఖ్య (ABHA ID)',
      demographics: 'రోగి వివరాలు',
      allergies: 'అలర్జీలు',
      activeMedications: 'ప్రస్తుతం వాడుతున్న మందులు',
      conditions: 'దీర్ఘకాలిక వ్యాధులు',
      consentsTitle: 'ABDM డిజిటల్ సమ్మతి నిర్వాహకుడు',
      grantConsent: 'డేటా యాక్సెస్ అనుమతించండి',
      revokeConsent: 'అనుమతి రద్దు చేయండి',
      teleconsultTitle: 'టెలికన్సల్టేషన్ / ఈ-సంజీవని గేట్‌వే',
      requestTeleconsult: 'వీడియో వైద్య సంప్రదింపు అభ్యర్థన',
      teleconsultActive: 'టెలికన్సల్టేషన్ సిద్ధంగా ఉంది',
      vitalsHistory: 'నమోదైన వైటల్స్'
    },
    offline: {
      title: 'స్మార్ట్ ఆఫ్‌లైన్ కేర్ ప్యాక్',
      subtitle: 'ఇంటర్నెట్ లేని గ్రామీణ ప్రాంతాల్లో ఆశా మరియు ఏఎన్‌ఎంల కోసం ఆఫ్‌లైన్ సౌలభ్యం.',
      downloadPack: 'కేర్ ప్యాక్ డౌన్‌లోడ్ చేయండి',
      syncNow: 'డేటాను ఇప్పుడే సమకాలీకరించండి',
      lastSynced: 'చివరి సమకాలీకరణ',
      syncStatus: 'సింక్ స్థితి',
      offlineActive: 'ఆఫ్‌లైన్ మోడ్ సక్రియంగా ఉంది',
      clearCache: 'కాష్ క్లియర్ చేయండి',
      pendingActions: 'పెండింగ్‌లో ఉన్న ఆఫ్‌లైన్ చర్యలు',
      recordsCached: 'సేవ్ చేసిన రోగులు',
      facilitiesCached: 'సేవ్ చేసిన ఆసుపత్రులు',
      offlineModeActiveBanner: 'ఆఫ్‌లైన్ ఫీల్డ్ మోడ్ ఆన్‌లో ఉంది: నెట్ లేకపోయినా ఆరోగ్య కార్యకర్తలు ట్రయాజ్, ఫాలో-అప్ చేయవచ్చు. నెట్ రాగానే ఆటోమేటిక్‌గా సింక్ అవుతుంది.',
      reconnectNow: 'ఇప్పుడే మళ్లీ కనెక్ట్ చేయండి'
    },
    admin: {
      title: 'అడ్మినిస్ట్రేటర్ కన్సోల్ & సిస్టమ్ నియంత్రణలు',
      subtitle: 'పాత్ర ఆధారిత నియంత్రణ (RBAC), ఆసుపత్రి పడకల నిర్వహణ మరియు భద్రతా ఆడిట్ రికార్డులు.',
      usersTab: 'వినియోగదారుల నిర్వహణ (RBAC)',
      facilitiesTab: 'ఆసుపత్రి పడకల సామర్థ్యం',
      auditTab: 'సిస్టమ్ ఆడిట్ లాగ్స్',
      analyticsTab: 'జిల్లా ఆరోగ్య విశ్లేషణలు',
      userRoleLabel: 'కేటాయించిన పాత్ర',
      searchPlaceholder: 'పేరు, ఇమెయిల్ లేదా ఆసుపత్రితో వెతకండి...',
      updateRole: 'పాత్రను మార్చండి',
      activeStatus: 'యాక్టివ్ స్థితి',
      capacityOverrides: 'పడకల సామర్థ్యం మార్పులు',
      occupiedBeds: 'నిండిన సాధారణ పడకలు',
      occupiedIcu: 'నిండిన ఐసీయూ పడకలు',
      waitTime: 'సగటు వేచి ఉండే సమయం (నిమిషాలు)',
      saveChanges: 'మార్పులను భద్రపరచండి',
      auditLogTitle: 'సమగ్ర భద్రత మరియు ఆడిట్ లాగ్',
      timestamp: 'సమయం',
      action: 'చర్య',
      user: 'వినియోగదారు',
      resource: 'లక్ష్యం'
    },
    addHospital: {
      title: 'కొత్త ఆసుపత్రి / ఆరోగ్య కేంద్రాన్ని చేర్చండి',
      facilityName: 'ఆసుపత్రి పేరు',
      facilityType: 'ఆసుపత్రి వర్గీకరణ',
      category: 'యాజమాన్య విభాగం',
      district: 'జిల్లా',
      address: 'పూర్తి చిరునామా',
      phone: 'ఫోన్ నంబర్',
      emergency24x7: '24x7 ఎమర్జెన్సీ మరియు ట్రామా కేర్',
      totalBeds: 'మొత్తం పడకలు',
      icuBeds: 'ఐసీయూ పడకలు',
      specialties: 'లభించే స్పెషాలిటీ విభాగాలు',
      diagnostics: 'లభించే పరీక్షా సౌకర్యాలు',
      stockRatio: 'అవసరమైన మందుల నిల్వ నిష్పత్తి',
      submitButton: 'కేర్‌గ్రిడ్‌లో ఆసుపత్రిని నమోదు చేయండి',
      cancelButton: 'రద్దు చేయండి'
    },
    scenarios: {
      guideTitle: 'కేర్‌గ్రిడ్ మూల్యాంకన గైడ్',
      guideSubtitle: 'ముందుగా కాన్ఫిగర్ చేసిన వైద్య పరిస్థితులతో ప్రజా ఆరోగ్య సంరక్షణ వేదికను పరిశీలించండి.',
      scenario1Badge: 'ప్రాథమిక పూర్తి స్థాయి కేర్ పాత్‌వే',
      scenario1Title: 'డెమో సినారియో 1: గ్రామీణ ప్రాథమిక ఆరోగ్య ప్రయాణం',
      scenario1Desc: 'గ్రామీణ రోగికి ఛాతీ నొప్పి → ట్రయాజ్ → ఆశా కార్యకర్త ధృవీకరణ → ఆసుపత్రి ఎంపిక → రిఫెరల్ అంగీకారం → టోకెన్ → కేర్ జర్నీ → రాడార్ అలర్ట్.',
      scenario1Button: 'సినారియో 1 ప్రారంభించండి: ప్రైమరీ కేర్ పాత్‌వే',
      scenario2Badge: 'సామర్థ్య & స్పెషలిస్ట్ రూటింగ్',
      scenario2Title: 'డెమో సినారియో 2: స్పెషలిస్ట్ కెపాసిటీ రూటింగ్',
      scenario2Desc: 'రోగికి కార్డియాలజిస్ట్ అవసరం: సమీప పీహెచ్‌సీ (5కి.మీ) లో డాక్టర్ లేరు vs జిల్లా ఆసుపత్రి (18కి.మీ) లో స్పెషలిస్ట్ & పరీక్షలు సిద్ధం → కేర్‌గ్రిడ్ ఖచ్చితమైన ఎంపిక చేస్తుంది.',
      scenario2Button: 'సినారియో 2 ప్రారంభించండి: స్పెషలిస్ట్ రూటింగ్'
    },
    auth: {
      signInTitle: 'కేర్‌గ్రిడ్‌లోకి లాగిన్ అవ్వండి',
      registerTitle: 'ఆరోగ్య కార్యకర్త / రోగి ఖాతాను సృష్టించండి',
      signInSubtitle: 'మీ ధృవీకరించబడిన ఆధారాలతో ఆరోగ్య సమన్వయ వ్యవస్థను యాక్సెస్ చేయండి.',
      registerSubtitle: 'కొత్త ఆరోగ్య కార్యకర్త లేదా రోగి ఖాతాను నమోదు చేయండి.',
      email: 'అధికారిక ఇమెయిల్ చిరునామా',
      password: 'పాస్‌వర్డ్',
      fullName: 'పూర్తి పేరు',
      role: 'ప్లాట్‌ఫారమ్ పాత్ర',
      district: 'జిల్లా',
      village: 'గ్రామం / పట్టణం',
      phone: 'మొబైల్ ఫోన్ నంబర్',
      license: 'రిజిస్ట్రేషన్ ఐడీ (మెడికల్/నర్సింగ్)',
      loginButton: 'సిస్టమ్‌లోకి ప్రవేశించండి',
      registerButton: 'ఖాతాను నమోదు చేయండి',
      quickPersonaLogin: 'త్వరిత ప్రవేశం (1-క్లిక్ మార్పిడి):',
      switchAccount: 'వ్యక్తిని మార్చండి',
      signOut: 'లాగౌట్'
    },
    common: {
      save: 'భద్రపరచు',
      cancel: 'రద్దు చేయి',
      close: 'మూసివేయి',
      loading: 'లోడ్ అవుతోంది...',
      search: 'వెతకండి...',
      filter: 'ఫిల్టర్',
      all: 'అన్నీ',
      success: 'విజయం',
      error: 'లోపం',
      confirm: 'ధృవీకరించు',
      back: 'వెనుకకు',
      next: 'తర్వాత',
      yes: 'అవును',
      no: 'కాదు',
      status: 'స్థితి',
      date: 'తేదీ',
      actions: 'చర్యలు',
      online: 'ఆన్‌లైన్',
      offline: 'ఆఫ్‌లైన్',
      resetDemo: 'డెమో రీసెట్ చేయండి',
      resetConfirm: 'కేర్‌గ్రిడ్ డేటాబేస్‌ను ప్రారంభ స్థితికి రీసెట్ చేయాలనుకుంటున్నారా?',
      restrictedAccess: 'పరిమిత ప్రాప్యత',
      restrictedPatientMsg: 'ఈ విభాగం అధీకృత ఆరోగ్య కార్యకర్తలు మరియు నిర్వాహకులకు మాత్రమే. రోగిగా మీకు మీ కేర్ జర్నీ, లక్షణాల నివేదన మరియు రికార్డుల యాక్సెస్ ఉంటుంది.',
      restrictedAdminMsg: 'వినియోగదారుల నిర్వహణ, ఆడిట్ లాగ్స్ మరియు సామర్థ్య మార్పులకు అడ్మిన్ అధికారాలు అవసరం.',
      goToJourney: 'నా కేర్ జర్నీకి వెళ్లండి',
      returnAuthorized: 'అధీకృత కార్యస్థలానికి తిరిగి వెళ్లండి',
      footerTitle: 'కేర్‌గ్రిడ్ — జాతీయ ఆరోగ్య మిషన్ గ్రామీణ ఆరోగ్య సంరక్షణ సమన్వయ వ్యవస్థ',
      compliance1: 'ABDM మైలురాయి 1 & 2 ప్రమాణీకరించబడింది',
      compliance2: 'పాత్ర-ఆధారిత ప్రాప్యత నియంత్రణ (RBAC)',
      compliance3: 'క్లినికల్ రూల్-ఇంజన్ + జెమిని విశ్లేషణ'
    }
  }
};

/**
 * Universal Dynamic Translation Dictionary for database records, facility types,
 * specialties, tests, statuses, severity levels, districts, and clinical phrases.
 */
export const dynamicTranslations: Record<string, Record<Language, string>> = {
  // Roles
  'PATIENT': { en: 'Patient', hi: 'मरीज़', mr: 'रुग्ण', ta: 'நோயாளி', te: 'రోగి' },
  'ASHA_WORKER': { en: 'ASHA Worker', hi: 'आशा कार्यकर्ता', mr: 'आशा सेविका', ta: 'ஆஷா களப்பணியாளர்', te: 'ఆశా కార్యకర్త' },
  'HEALTH_WORKER': { en: 'Health Worker', hi: 'स्वास्थ्य कार्यकर्ता', mr: 'आरोग्य सेविका', ta: 'சுகாதாரப் பணியாளர்', te: 'ఆరోగ్య కార్యకర్త' },
  'HOSPITAL_DOCTOR': { en: 'Hospital Doctor', hi: 'अस्पताल डॉक्टर', mr: 'रुग्णालय डॉक्टर', ta: 'மருத்துவமனை மருத்துவர்', te: 'ఆసుపత్రి వైద్యుడు' },
  'DOCTOR': { en: 'Doctor', hi: 'डॉक्टर', mr: 'डॉक्टर', ta: 'மருத்துவர்', te: 'వైద్యుడు' },
  'ADMIN': { en: 'Administrator', hi: 'प्रशासक', mr: 'प्रशासक', ta: 'நிர்வாகி', te: 'నిర్వాహకుడు' },
  'FACILITY_ADMIN': { en: 'Facility Admin', hi: 'अस्पताल प्रबंधक', mr: 'रुग्णालय प्रशासक', ta: 'மருத்துவமனை நிர்வாகி', te: 'ఆసుపత్రి అడ్మిన్' },
  'SYSTEM_ADMIN': { en: 'System Admin', hi: 'सिस्टम प्रशासक', mr: 'प्रणाली प्रशासक', ta: 'கணினி நிர்வாகி', te: 'సిస్టమ్ అడ్మిన్' },

  // Genders
  'MALE': { en: 'Male', hi: 'पुरुष', mr: 'पुरुष', ta: 'ஆண்', te: 'పురుషుడు' },
  'FEMALE': { en: 'Female', hi: 'महिला', mr: 'महिला', ta: 'பெண்', te: 'స్త్రీ' },
  'OTHER': { en: 'Other', hi: 'अन्य', mr: 'इतर', ta: 'மற்றவை', te: 'ఇతర' },

  // Urgency
  'RED': { en: 'RED (Emergency)', hi: 'लाल (आपातकालीन)', mr: 'लाल (आणीबाणी)', ta: 'சிவப்பு (உடனடி அவசரம்)', te: 'ఎరుపు (అత్యవసరం)' },
  'ORANGE': { en: 'ORANGE (Priority)', hi: 'नारंगी (प्राथमिकता)', mr: 'केशरी (प्राधान्य)', ta: 'ஆரஞ்சு (அவசர முன்னுரிமை)', te: 'నారింజ (ప్రాధాన్యత)' },
  'GREEN': { en: 'GREEN (Routine)', hi: 'हरा (सामान्य)', mr: 'हिरवा (नेहमीचे)', ta: 'பச்சை (வழக்கமான பராமரிப்பு)', te: 'ఆకుపచ్చ (సాధారణం)' },

  // Referral Statuses
  'CREATED': { en: 'Created', hi: 'निर्मित', mr: 'तयार केले', ta: 'உருவாக்கப்பட்டது', te: 'సృష్టించబడింది' },
  'SENT': { en: 'Sent', hi: 'भेजा गया', mr: 'पाठवले', ta: 'அனுப்பப்பட்டது', te: 'పంపబడింది' },
  'RECEIVED': { en: 'Received', hi: 'प्राप्त हुआ', mr: 'मिळाले', ta: 'பெறப்பட்டது', te: 'స్వీకరించబడింది' },
  'UNDER_REVIEW': { en: 'Under Review', hi: 'समीक्षाधीन', mr: 'पुनरावलोकनाखाली', ta: 'பரிசீலனையில்', te: 'సమీక్షలో ఉంది' },
  'ACCEPTED': { en: 'Accepted', hi: 'स्वीकृत', mr: 'स्वीकारले', ta: 'ஏற்றுக்கொள்ளப்பட்டது', te: 'అంగీకరించబడింది' },
  'REJECTED': { en: 'Declined', hi: 'अस्वीकृत', mr: 'नाकारले', ta: 'நிராகரிக்கப்பட்டது', te: 'తిరస్కరించబడింది' },
  'APPOINTMENT_ASSIGNED': { en: 'Token Assigned', hi: 'टोकन आवंटित', mr: 'टोकन दिले', ta: 'டோக்கன் வழங்கப்பட்டது', te: 'టోకెన్ కేటాయించబడింది' },
  'PATIENT_ARRIVED': { en: 'Patient Arrived', hi: 'मरीज़ उपस्थित', mr: 'रुग्ण दाखल', ta: 'நோயாளி வருகை தந்தார்', te: 'రోగి వచ్చారు' },
  'CONSULTATION_COMPLETED': { en: 'Consulted', hi: 'परामर्श पूर्ण', mr: 'तपासणी पूर्ण', ta: 'ஆலோசனை முடிந்தது', te: 'కన్సల్టేషన్ పూర్తయింది' },
  'FOLLOWUP_REQUIRED': { en: 'Follow-Up Required', hi: 'फॉलो-अप आवश्यक', mr: 'पाठपुरावा आवश्यक', ta: 'பின்தொடர்தல் தேவை', te: 'ఫాలో-అప్ అవసరం' },
  'COMPLETED': { en: 'Completed', hi: 'पूर्ण', mr: 'पूर्ण', ta: 'நிறைவடைந்தது', te: 'పూర్తయింది' },

  // Priority Levels
  'EMERGENCY': { en: 'Emergency', hi: 'आपातकालीन', mr: 'आणीबाणी', ta: 'அவசரம்', te: 'అత్యవసరం' },
  'URGENT': { en: 'Urgent', hi: 'अत्यावश्यक', mr: 'तातडीचे', ta: 'முன்னுரிமை', te: 'తక్షణ' },
  'ROUTINE': { en: 'Routine', hi: 'सामान्य', mr: 'नेहमीचे', ta: 'வழக்கமானது', te: 'సాధారణ' },

  // Care Gap Statuses & Severities
  'OPEN': { en: 'Open', hi: 'सक्रिय / खुला', mr: 'सक्रिय / उघडे', ta: 'திறந்த நிலை', te: 'ఓపెన్' },
  'ACKNOWLEDGED': { en: 'Acknowledged', hi: 'स्वीकृत', mr: 'दखल घेतली', ta: 'ஏற்கப்பட்டது', te: 'గుర్తించబడింది' },
  'CONTACTED': { en: 'Contacted', hi: 'संपर्क किया', mr: 'संपर्क केला', ta: 'தொடர்பு கொள்ளப்பட்டது', te: 'సంప్రదించారు' },
  'RESOLVED': { en: 'Resolved', hi: 'समाधान हुआ', mr: 'निवारण झाले', ta: 'தீர்வு பெற்றது', te: 'పరిష్కరించబడింది' },
  'CRITICAL': { en: 'Critical', hi: 'गंभीर', mr: 'अतिगंभीर', ta: 'மிகத் தீவிரமானது', te: 'క్లిష్టమైన' },
  'HIGH': { en: 'High', hi: 'उच्च', mr: 'जास्त', ta: 'அதிகம்', te: 'అధిక' },
  'MODERATE': { en: 'Moderate', hi: 'मध्यम', mr: 'मध्यम', ta: 'மிதமானது', te: 'మితమైన' },

  // Facility Types
  'PHC': { en: 'Primary Health Centre (PHC)', hi: 'प्राथमिक स्वास्थ्य केंद्र (PHC)', mr: 'प्राथमिक आरोग्य केंद्र (PHC)', ta: 'ஆரம்ப சுகாதார நிலையம் (PHC)', te: 'ప్రాథమిక ఆరోగ్య కేంద్రం (PHC)' },
  'CHC': { en: 'Community Health Centre (CHC)', hi: 'सामुदायिक स्वास्थ्य केंद्र (CHC)', mr: 'सामुदायिक आरोग्य केंद्र (CHC)', ta: 'சமூக சுகாதார நிலையம் (CHC)', te: 'సామాజిక ఆరోగ్య కేంద్రం (CHC)' },
  'Sub-District Hospital': { en: 'Sub-District Hospital (SDH)', hi: 'उप-जिला अस्पताल (SDH)', mr: 'उपजिल्हा रुग्णालय (SDH)', ta: 'துணை மாவட்ட தலைமை மருத்துவமனை (SDH)', te: 'ఉప-జిల్లా ఆసుపత్రి (SDH)' },
  'District Hospital': { en: 'District Hospital', hi: 'जिला अस्पताल', mr: 'जिल्हा रुग्णालय', ta: 'மாவட்ட தலைமை அரசு மருத்துவமனை', te: 'జిల్లా ఆసుపత్రి' },
  'Specialist Medical College': { en: 'Specialist Medical College Hospital', hi: 'विशेषज्ञ मेडिकल कॉलेज अस्पताल', mr: 'वैद्यकीय महाविद्यालय रुग्णालय', ta: 'அரசு மருத்துவக் கல்லூரி தலைமை மருத்துவமனை', te: 'స్పెషలిస్ట్ మెడికల్ కాలేజ్ హాస్పిటల్' },
  'Private Empanelled': { en: 'Private Empanelled Hospital', hi: 'निजी पैनलबद्ध अस्पताल', mr: 'खाजगी संलग्न रुग्णालय', ta: 'அங்கீகரிக்கப்பட்ட தனியார் மருத்துவமனை', te: 'ప్రైవేట్ ఎంప్యానెల్డ్ ఆసుపత్రి' },

  // Specialties
  'Cardiology': { en: 'Cardiology', hi: 'हृदय रोग (Cardiology)', mr: 'हृदयरोग शास्त्र', ta: 'இதயவியல் (Cardiology)', te: 'కార్డియాలజీ (గుండె విభాగం)' },
  'General Medicine': { en: 'General Medicine', hi: 'सामान्य चिकित्सा', mr: 'सामान्य औषधोपचार', ta: 'பொது மருத்துவம்', te: 'జనరల్ మెడిసిన్' },
  'Obstetrics/Gynecology': { en: 'Obstetrics & Gynecology', hi: 'प्रसूति एवं स्त्री रोग', mr: 'प्रसूती व स्त्रीरोग शास्त्र', ta: 'மகப்பேறு மற்றும் மகளிர் நலம்', te: 'గైనకాలజీ & ప్రసూతి' },
  'Pediatrics': { en: 'Pediatrics', hi: 'बाल रोग', mr: 'बालरोग शास्त्र', ta: 'குழந்தைகள் நலம் (Pediatrics)', te: 'పీడియాట్రిక్స్ (పిల్లల విభాగం)' },
  'Orthopedics': { en: 'Orthopedics', hi: 'अस्थि रोग', mr: 'अस्थिरोग शास्त्र', ta: 'எலும்பியல் (Orthopedics)', te: 'ఆర్థోపెడిక్స్ (ఎముకల విభాగం)' },
  'General Surgery': { en: 'General Surgery', hi: 'सामान्य शल्य चिकित्सा', mr: 'सामान्य शस्त्रक्रिया', ta: 'பொது அறுவை சிகிச்சை', te: 'జనరల్ సర్జరీ' },
  'Neurology': { en: 'Neurology', hi: 'न्यूरोलॉजी (तंत्रिका तंत्र)', mr: 'मज्जारोग शास्त्र', ta: 'நரம்பியல் (Neurology)', te: 'న్యూరాలజీ (నరాల విభాగం)' },
  'Nephrology': { en: 'Nephrology', hi: 'नेफ्रोलॉजी (गुर्दा रोग)', mr: 'मूत्रपिंडरोग शास्त्र', ta: 'சிறுநீரகவியல் (Nephrology)', te: 'నెఫ్రాలజీ (మూత్రపిండ విభాగం)' },
  'Pulmonology': { en: 'Pulmonology', hi: 'श्वसन रोग', mr: 'श्वसनरोग शास्त्र', ta: 'நுரையீரல் மருத்துவம்', te: 'పల్మోనాలజీ (ఊపిరితిత్తుల విభాగం)' },
  'Emergency & Trauma': { en: 'Emergency & Trauma', hi: 'आपातकालीन एवं ट्रॉमा', mr: 'आणीबाणी व अपघात', ta: 'அவசர மற்றும் விபத்து சிகிச்சை', te: 'ఎమర్జెన్సీ & ట్రామా' },

  // Diagnostics
  'ECG 12-Lead': { en: '12-Lead ECG', hi: '12-लीड ईसीजी', mr: '१२-लीड ईसीजी', ta: '12-லீட் இசிஜி (ECG)', te: '12-లీడ్ ఈసీజీ (ECG)' },
  '12-Lead ECG': { en: '12-Lead ECG', hi: '12-लीड ईसीजी', mr: '१२-लीड ईसीजी', ta: '12-லீட் இசிஜி (ECG)', te: '12-లీడ్ ఈసీజీ (ECG)' },
  'Troponin-I Biomarker': { en: 'Troponin-I Biomarker', hi: 'ट्रोपोनिन-I बायोमार्कर', mr: 'ट्रोपोनिन-आय तपासणी', ta: 'ட்ரோபோனின்-ஐ பயோமார்க்கர்', te: 'ట్రోపోనిన్-I బయోమార్కర్' },
  'Cardiac Enzymes': { en: 'Cardiac Enzymes', hi: 'कार्डियक एंजाइम', mr: 'हृदयविकार तपासणी', ta: 'இதய நொதி பரிசோதனை', te: 'కార్డియాక్ ఎంజైమ్స్' },
  'Cardiac Enzymes (Troponin)': { en: 'Cardiac Enzymes (Troponin)', hi: 'कार्डियक एंजाइम (ट्रोपोनिन)', mr: 'हृदयविकार तपासणी (ट्रोपोनिन)', ta: 'இதய நொதிகள் (ட்ரோபோனின்)', te: 'కార్డియాక్ ఎంజైమ్స్ (ట్రోపోనిన్)' },
  'Digital X-Ray': { en: 'Digital X-Ray', hi: 'डिजिटल एक्स-रे', mr: 'डिजिटल क्ष-किरण', ta: 'டிஜிட்டல் எக்ஸ்-ரே', te: 'డిజిటల్ ఎక్స్-రే' },
  'Ultrasound (USG)': { en: 'Ultrasound (USG)', hi: 'अल्ट्रासाउंड (सोनोग्राफी)', mr: 'सोनोग्राफी (USG)', ta: 'அல்ட்ராசவுண்ட் ஸ்கேன் (USG)', te: 'అల్ట్రాసౌండ్ (USG)' },
  '2D Echocardiography': { en: '2D Echocardiography', hi: '2D इकोकार्डियोग्राफी', mr: '२डी इको चाचणी', ta: '2D எக்கோ கார்டியோகிராபி', te: '2D ఎకోకార్డియోగ్రఫీ' },
  '128-Slice CT Scan': { en: '128-Slice CT Scan', hi: '128-स्लाइस सीटी स्कैन', mr: '१२८-स्लाइस सीटी स्कॅन', ta: '128-ஸ்லைஸ் சிடி ஸ்கேன்', te: '128-స్లైస్ సీటీ స్కాన్' },
  '1.5T MRI': { en: '1.5T MRI Scan', hi: '1.5T एमआरआई स्कैन', mr: '१.५टी एमआरआय स्कॅन', ta: '1.5T எம்ஆர்ஐ ஸ்கேன்', te: '1.5T ఎంఆర్ఐ స్కాన్' },
  'Comprehensive Blood Bank': { en: 'Comprehensive Blood Bank', hi: 'रक्त बैंक सुविधा', mr: 'रक्तपेढी सुविधा', ta: 'முழுமையான இரத்த வங்கி', te: 'సమగ్ర బ్లడ్ బ్యాంక్' },
  'Complete Blood Count (CBC)': { en: 'Complete Blood Count (CBC)', hi: 'सीबीसी रक्त जांच', mr: 'सीबीसी रक्त चाचणी', ta: 'முழு இரத்தப் பரிசோதனை (CBC)', te: 'కంప్లీట్ బ్లడ్ కౌంట్ (CBC)' },
  'Biochemistry Panel': { en: 'Biochemistry Panel', hi: 'बायोकेमिस्ट्री पैनल', mr: 'बायोकेमिस्ट्री तपासणी', ta: 'பயோகெமிஸ்ட்ரி இரத்த ஆய்வு', te: 'బయోకెమిస్ట్రీ ప్యానెల్' },

  // Districts
  'Coimbatore': { en: 'Coimbatore', hi: 'कोयंबटूर', mr: 'कोईम्बतूर', ta: 'கோயம்புத்தூர்', te: 'కోయంబత్తూరు' },
  'Chennai': { en: 'Chennai', hi: 'चेन्नई', mr: 'चेन्नई', ta: 'சென்னை', te: 'చెన్నై' },
  'Madurai': { en: 'Madurai', hi: 'मदुरै', mr: 'मदुराई', ta: 'மதுரை', te: 'మదురై' },
  'Salem': { en: 'Salem', hi: 'सेलम', mr: 'सेलम', ta: 'சேலம்', te: 'సేలం' },
  'Tiruchirappalli': { en: 'Tiruchirappalli', hi: 'तिरुचिरापल्ली', mr: 'तिरुचिरापल्ली', ta: 'திருச்சிராப்பள்ளி', te: 'తిరుచిరాపల్లి' },
  'Thanjavur': { en: 'Thanjavur', hi: 'तंजावुर', mr: 'तंजावूर', ta: 'தஞ்சாவூர்', te: 'తంజావూరు' },
  'Tirunelveli': { en: 'Tirunelveli', hi: 'तिरुनेलवेली', mr: 'तिरुनेलवेली', ta: 'திருநெல்வேலி', te: 'తిరునెల్వేలి' },
  'Vellore': { en: 'Vellore', hi: 'वेल्लोर', mr: 'वेल्लोर', ta: 'வேலூர்', te: 'వెల్లూరు' },
  'Tiruppur': { en: 'Tiruppur', hi: 'तिरुपुर', mr: 'तिरुप्पूर', ta: 'திருப்பூர்', te: 'తిరుప్పూర్' },
  'Erode': { en: 'Erode', hi: 'इरोड', mr: 'इरोड', ta: 'ஈரோடு', te: 'ఈరోడ్' },
  'Dindigul': { en: 'Dindigul', hi: 'डिंडीगुल', mr: 'दिंडीगुल', ta: 'திண்டுக்கல்', te: 'దిండిగల్' },
  'Nilgiris': { en: 'Nilgiris (Ooty)', hi: 'नीलगिरि (ऊटी)', mr: 'निलगिरी (उटी)', ta: 'நீலகிரி (ஊட்டி)', te: 'నీలగిరి (ఊటీ)' },

  // Quick Symptoms
  'Crushing chest pain': { en: 'Crushing chest pain', hi: 'छाती में तेज जकड़न व दर्द', mr: 'छातीत असह्य दुखणे', ta: 'நெஞ்சில் கடுமையான வலி', te: 'తీవ్రమైన ఛాతీ నొప్పి' },
  'Severe breathlessness': { en: 'Severe breathlessness', hi: 'सांस लेने में भारी कठिनाई', mr: 'तीव्र दम लागणे', ta: 'கடுமையான மூச்சுத்திணறல்', te: 'తీవ్రమైన శ్వాస తీసుకోవడంలో ఇబ్బంది' },
  'High fever (>102°F)': { en: 'High fever (>102°F)', hi: 'तेज बुखार (>102°F)', mr: 'तीव्र ताप (>१०२°F)', ta: 'அதிக காய்ச்சல் (>102°F)', te: 'తీవ్ర జ్వరం (>102°F)' },
  'Profuse sweating & nausea': { en: 'Profuse sweating & nausea', hi: 'अत्यधिक पसीना व जी मिचलाना', mr: 'गार घाम व मळमळ', ta: 'அதிக வியர்வை மற்றும் குமட்டல்', te: 'విపరీతమైన చెమట & వికారం' },
  'Sudden weakness or slurred speech': { en: 'Sudden weakness or slurred speech', hi: 'अचानक कमजोरी या लड़खड़ाती आवाज', mr: 'अचानक अशक्तपणा किंवा तोतरे बोलणे', ta: 'திடீர் பலவீனம் அல்லது குழப்பமான பேச்சு', te: 'హఠాత్తుగా బలహీనత లేదా తడబాటు మాట' },
  'Severe abdominal pain': { en: 'Severe abdominal pain', hi: 'पेट में गंभीर दर्द', mr: 'पोटात तीव्र दुखणे', ta: 'கடுமையான வயிற்று வலி', te: 'తీవ్రమైన కడుపు నొప్పి' },
  'Mild persistent cough': { en: 'Mild persistent cough', hi: 'लगातार हल्की खांसी', mr: 'सतत येणारा खोकला', ta: 'தொடர்ச்சியான இருமல்', te: 'నిరంతర తేలికపాటి దగ్గు' },
  'Joint pain & stiffness': { en: 'Joint pain & stiffness', hi: 'जोड़ों में दर्द व अकड़न', mr: 'सांधेदुखी व ताठरता', ta: 'மூட்டு வலி மற்றும் விறைப்பு', te: 'కీళ్ల నొప్పులు & బిగుతు' },

  // Common UI labels & buttons
  'Sign In': { en: 'Sign In', hi: 'लॉग इन करें', mr: 'लॉगिन करा', ta: 'உள்நுழைக', te: 'సైన్ ఇన్ చేయండి' },
  'Create New Account': { en: 'Create New Account', hi: 'नया खाता बनाएं', mr: 'नवीन खाते तयार करा', ta: 'புதிய கணக்கு தொடங்குக', te: 'కొత్త ఖాతాను సృష్టించండి' },
  'Email Address': { en: 'Email Address', hi: 'ईमेल पता', mr: 'ईमेल पत्ता', ta: 'மின்னஞ்சல் முகவரி', te: 'ఇమెయిల్ చిరునామా' },
  'Password': { en: 'Password', hi: 'पासवर्ड', mr: 'पासवर्ड', ta: 'கடவுச்சொல்', te: 'పాస్‌వర్డ్' },
  'Full Name': { en: 'Full Name', hi: 'पूरा नाम', mr: 'पूर्ण नाव', ta: 'முழுப் பெயர்', te: 'పూర్తి పేరు' },
  'Phone Number': { en: 'Phone Number', hi: 'फ़ोन नंबर', mr: 'फोन नंबर', ta: 'தொலைபேசி எண்', te: 'ఫోన్ నంబర్' },
  'State': { en: 'State', hi: 'राज्य', mr: 'राज्य', ta: 'மாநிலம்', te: 'రాష్ట్రం' },
  'District': { en: 'District', hi: 'जिला', mr: 'जिल्हा', ta: 'மாவட்டம்', te: 'జిల్లా' },
  'Gender': { en: 'Gender', hi: 'लिंग', mr: 'लिंग', ta: 'பாலினம்', te: 'లింగం' },
  'Blood Group': { en: 'Blood Group', hi: 'रक्त समूह', mr: 'रक्तगट', ta: 'இரத்த வகை', te: 'రక్త వర్గం' },
  'Specialization': { en: 'Specialization', hi: 'विशेषज्ञता', mr: 'विशेषज्ञता', ta: 'சிறப்பு துறை', te: 'స్పెషలైజేషన్' },
  'Assigned Village': { en: 'Assigned Village', hi: 'आवंटित गाँव', mr: 'नेमून दिलेले गाव', ta: 'ஒதுக்கப்பட்ட கிராமம்', te: 'కేటాయించిన గ్రామం' },
  'License Number': { en: 'License Number', hi: 'लाइसेंस संख्या', mr: 'परवाना क्रमांक', ta: 'பதிவு எண்', te: 'లైసెన్స్ నంబర్' },
  'Activate': { en: 'Activate', hi: 'सक्रिय करें', mr: 'सक्रिय करा', ta: 'செயல்படுத்து', te: 'యాక్టివేట్ చేయండి' },
  'Deactivate': { en: 'Deactivate', hi: 'निष्क्रिय करें', mr: 'निष्क्रिय करा', ta: 'முடக்கு', te: 'రద్దు చేయండి' },
  'Save Changes': { en: 'Save Changes', hi: 'परिवर्तन सहेजें', mr: 'बदल जतन करा', ta: 'சேமிக்க', te: 'మార్పులను సేవ్ చేయండి' },
  'Cancel': { en: 'Cancel', hi: 'रद्द करें', mr: 'रद्द करा', ta: 'ரத்து', te: 'రద్దు చేయండి' },
  'Refresh Data': { en: 'Refresh Data', hi: 'डेटा रीफ़्रेश करें', mr: 'डेटा रिफ्रेश करा', ta: 'புதுப்பி', te: 'డేటా రిఫ్రెష్ చేయండి' },
  'Add New Hospital': { en: 'Add New Hospital', hi: 'नया अस्पताल जोड़ें', mr: 'नवीन रुग्णालय जोडा', ta: 'புதிய மருத்துவமனை சேர்', te: 'కొత్త ఆసుపత్రిని చేర్చండి' },
  'General Beds': { en: 'General Beds', hi: 'सामान्य बेड', mr: 'सामान्य खाटा', ta: 'பொது படுக்கைகள்', te: 'సాధారణ పడకలు' },
  'ICU Beds': { en: 'ICU Beds', hi: 'आईसीयू बेड', mr: 'आयसीयू खाटा', ta: 'ICU படுக்கைகள்', te: 'ఐసీయూ పడకలు' },
  'Get Me Treated': { en: 'Get Me Treated (Complete Treatment)', hi: 'मेरा पूर्ण उपचार कराएं', mr: 'माझे पूर्ण उपचार करा', ta: 'என்னை முழுமையாக குணப்படுத்துக', te: 'నాకు పూర్తి చికిత్స అందించండి' },
  'Advance 1 Step': { en: 'Advance 1 Step', hi: '1 कदम आगे बढ़ें', mr: '१ टप्पा पुढे जा', ta: 'அடுத்த படி', te: '1 అడుగు ముందుకు వెళ్లండి' },
  'Reset Pathway': { en: 'Reset Pathway', hi: 'पाथवे रीसेट करें', mr: 'मार्ग रीसेट करा', ta: 'மீட்டமைக்க', te: 'పాత్‌వే రీసెట్ చేయండి' },
  'Health Operations Command & RBAC': { en: 'Health Operations Command & RBAC', hi: 'स्वास्थ्य संचालन कमान एवं आरबीएसी', mr: 'आरोग्य संचालन कमांड आणि आरबीएसी', ta: 'கண்காணிப்பு கட்டுப்பாட்டு மையம்', te: 'హెల్త్ ఆపరేషన్స్ కమాండ్ & RBAC' },
  'System Audit Trail': { en: 'System Audit Trail', hi: 'सिस्टम ऑडिट ट्रेल', mr: 'सिस्टम ऑडिट नोंद', ta: 'அமைப்பு தணிக்கை சுவடு', te: 'సిస్టమ్ ఆడిట్ లాగ్స్' },
  'Handshake Rate': { en: 'Handshake Rate', hi: 'हैंडशेक दर', mr: 'स्वीकृती दर', ta: 'பரிந்துரை ஏற்பு விகிதம்', te: 'హ్యాండ్‌షేక్ రేటు' },
  'Care Closure Rate': { en: 'Care Closure Rate', hi: 'उपचार पूर्णता दर', mr: 'उपचार पूर्णता दर', ta: 'சிகிச்சை நிறைவு விகிதம்', te: 'కేర్ ముగింపు రేటు' },
  'Emergency Triages': { en: 'Emergency Triages', hi: 'आपातकालीन ट्राइएज', mr: 'तातडीचे ट्राइएज', ta: 'அவசர பரிந்துரைகள்', te: 'ఎమర్జెన్సీ ట్రయాజ్' },
  'Open Care Gaps': { en: 'Open Care Gaps', hi: 'सक्रिय स्वास्थ्य अंतराल', mr: 'सक्रिय आरोग्य तफावत', ta: 'திறந்த இடைவெளிகள்', te: 'ఓపెన్ కేర్ గ్యాప్‌లు' }
};

/**
 * Helper to translate arbitrary text using the dynamic dictionary,
 * supporting bidirectional lookup (English, Hindi, Marathi, Tamil, Telugu)
 * and falling back gracefully.
 */
export function translateText(text: string | undefined | null, lang: Language): string {
  if (!text) return '';
  const trimmed = text.trim();

  // 1. Direct key lookup
  if (dynamicTranslations[trimmed] && dynamicTranslations[trimmed][lang]) {
    return dynamicTranslations[trimmed][lang];
  }

  // 2. Case-insensitive key lookup
  const lower = trimmed.toLowerCase();
  for (const [key, map] of Object.entries(dynamicTranslations)) {
    if (key.toLowerCase() === lower && map[lang]) {
      return map[lang];
    }
  }

  // 3. Bidirectional reverse lookup (if text matches any translation value in any language)
  for (const map of Object.values(dynamicTranslations)) {
    for (const val of Object.values(map)) {
      if (val === trimmed || val.toLowerCase() === lower) {
        return map[lang] || trimmed;
      }
    }
  }

  return trimmed;
}
