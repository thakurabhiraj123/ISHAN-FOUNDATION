export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  status: 'established' | 'planned';
  details: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'foundation-establishment',
    title: 'Foundation Establishment',
    description: 'Set up the organizational structure of ISHAAN FOUNDATION in Jalpaiguri, establishing local presence and legal pathways to serve rural North Bengal.',
    status: 'established',
    details: [
      'Established regional headquarters in Surya Nagar, Jalpaiguri',
      'Assembled a dedicated leadership and volunteer advisory team',
      'Created standard operating protocols for local medical camp organizations',
    ],
  },
  {
    id: 'community-activities',
    title: 'Community Activities',
    description: 'Engaged local organizations, clubs, and residents to create a supportive network for blood donation drives and youth initiatives.',
    status: 'established',
    details: [
      'Partnered with local bodies like Balaka Club for youth mobilisation',
      'Organized a voluntary blood donation camp with Tarai Blood Bank',
      'Created children drawing competitions to engage young families in social bonding',
    ],
  },
  {
    id: 'healthcare-assessment',
    title: 'Healthcare Need Assessment',
    description: 'Conducted field research and direct visits to remote villages and tea gardens in West Bengal to study local health gaps.',
    status: 'established',
    details: [
      'Surveyed tea garden labor families to map out their primary health barriers',
      'Identified critical gaps in local ambulance transport and diagnostics',
      'Mapped out target zones in Jalpaiguri district for immediate medical camp operations',
    ],
  },
  {
    id: 'expansion-planning',
    title: 'Expansion Planning',
    description: 'Drafted frameworks to scale medical camps and build structured local partnerships for healthcare services.',
    status: 'established',
    details: [
      'Designed blueprints for specialized rural clinics',
      'Identified standard testing equipment required for portable diagnostics',
      'Plotted regular event calendars for future medical camp coverage',
    ],
  },
  {
    id: 'primary-clinic',
    title: 'Primary Healthcare Clinic',
    description: 'Establishment of a permanent primary health clinic in Jalpaiguri to provide structured, daily outpatient consultation.',
    status: 'planned',
    details: [
      'To provide daily consultation with qualified general practitioners',
      'To maintain inventory of basic generic medicines for free distribution',
      'To serve as a central referral hub for patients requiring secondary care',
    ],
  },
  {
    id: 'diagnostic-centre',
    title: 'Diagnostic Centre',
    description: 'A dedicated diagnostic lab to offer affordable, local blood test facilities, ECGs, and screening services.',
    status: 'planned',
    details: [
      'To reduce patient reliance on expensive private testing laboratories',
      'To enable rapid test reports for early detection of diabetes and cardiac issues',
      'To provide subsidised rates specifically for low-income cardholders',
    ],
  },
  {
    id: 'ambulance-services-planned',
    title: 'Ambulance Services',
    description: 'Acquiring emergency transport vehicles to provide round-the-clock ambulance access to remote villages.',
    status: 'planned',
    details: [
      'To bridge the critical transport gap during emergency medical hours',
      'To offer free or low-cost transfer to sub-divisional and district hospitals',
      'To equip vehicles with basic life support systems',
    ],
  },
  {
    id: 'medical-equipment',
    title: 'Medical Equipment Procurement',
    description: 'Sourcing modern portable diagnostic and medical tools to upgrade camp capabilities.',
    status: 'planned',
    details: [
      'Portable ECG units for instant cardiac checkups during camps',
      'Vision testing kits and ophthalmic refractors for eye clinics',
      'Cold-chain storage to preserve vaccines and lab reagents',
    ],
  },
  {
    id: 'expanded-health-camps',
    title: 'Expanded Health Camps',
    description: 'Scaling up camp frequency to cover wider parts of Jalpaiguri and neighboring districts.',
    status: 'planned',
    details: [
      'Increasing camp frequency to a weekly/bi-weekly routine',
      'Inviting visiting specialists in pediatrics, gynecology, and cardiology',
      'Extending outreach to remote forest villages and isolated border settlements',
    ],
  },
  {
    id: 'telemedicine-support',
    title: 'Telemedicine Support',
    description: 'Integrating digital consultation tools to connect rural patients with urban medical specialists.',
    status: 'planned',
    details: [
      'Setting up digital consulting terminals at our planned primary clinic',
      'Connecting patients with specialists in Kolkata and Siliguri via video link',
      'Enabling paperless digital health record archives for patients',
    ],
  },
];
