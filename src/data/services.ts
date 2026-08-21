export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Will map to Lucide icons in the component
}

export const servicesData: ServiceItem[] = [
  {
    id: 'primary-healthcare',
    title: 'Primary Healthcare',
    description: 'Accessible and affordable primary healthcare consults and treatments for rural communities.',
    iconName: 'Stethoscope',
  },
  {
    id: 'diagnostic-services',
    title: 'Diagnostic Services',
    description: 'Affordable diagnostic services, including basic lab screenings, supporting early disease detection.',
    iconName: 'Activity',
  },
  {
    id: 'ambulance-services',
    title: 'Ambulance Services',
    description: 'Reliable emergency medical transportation support for patients requiring urgent hospital transfers.',
    iconName: 'Ambulance',
  },
  {
    id: 'blood-donation-camps',
    title: 'Blood Donation Camps',
    description: 'Regular community blood donation camps organized in collaboration with local blood banks.',
    iconName: 'HeartPulse',
  },
  {
    id: 'eye-care-camps',
    title: 'Eye Care Camps',
    description: 'Free eye check-ups, vision screenings, and referral support for vision correction and cataract treatment.',
    iconName: 'Eye',
  },
  {
    id: 'general-health-camps',
    title: 'General Health Check-up Camps',
    description: 'Comprehensive health screenings, vital monitoring, and medical consultations directly in villages.',
    iconName: 'Heart',
  },
  {
    id: 'preventive-healthcare',
    title: 'Preventive Healthcare',
    description: 'Health screening, child growth monitoring, and preventive awareness to stop illnesses before they start.',
    iconName: 'Shield',
  },
  {
    id: 'community-awareness',
    title: 'Community Health Awareness',
    description: 'Educating families on hygiene, clean drinking water, nutrition, and maternal healthcare best practices.',
    iconName: 'Users',
  },
];
