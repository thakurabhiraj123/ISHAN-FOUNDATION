export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  placeholderBg: string; // Tailored gradient to make it look premium
}

export const programsData: ProgramItem[] = [
  {
    id: 'blood-donation',
    title: 'Blood Donation Camps',
    description: 'Promoting local blood collection and awareness to support nearby blood banks in regional emergencies.',
    details: [
      'In association with regional government blood banks',
      'Voluntary participation from local youths and community members',
      'Pre-donation health check-ups and post-donation nutrition guidance',
    ],
    placeholderBg: 'from-rose-500 to-red-600',
  },
  {
    id: 'eye-checkup',
    title: 'Eye Check-up Camps',
    description: 'Providing comprehensive eye check-ups and vision screenings, prioritizing senior citizens and school children.',
    details: [
      'Free vision testing and eye check-ups',
      'Cataract screening and referral assistance',
      'Guidance on preventative eye health and digital strain management',
    ],
    placeholderBg: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'general-health',
    title: 'General Health Check-up Camps',
    description: 'Broad medical screenings, vitals checking, and consulting by general physicians in villages.',
    details: [
      'Free general doctor consultations',
      'Vitals mapping (Blood Pressure, Blood Sugar, SpO2, Weight)',
      'Distribution of free basic medicines and health kits',
    ],
    placeholderBg: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'community-medical-camps',
    title: 'Community Medical Camps',
    description: 'Direct medical relief camps set up in underserved rural zones and tea garden laborer estates.',
    details: [
      'Brings doctors directly to remote and isolated rural settlements',
      'Specifically tailored for low-income agricultural and tea garden workers',
      'Comprehensive checks and free follow-up consultation planning',
    ],
    placeholderBg: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'health-awareness',
    title: 'Community Health Awareness',
    description: 'Interactive educational drives addressing primary hygiene, clean water, and nutritional practices.',
    details: [
      'Awareness sessions on vector-borne disease prevention (Dengue/Malaria)',
      'Workshops on maternal health, child nutrition, and sanitation',
      'Pamphlet distribution in local languages (Bengali, Hindi, English)',
    ],
    placeholderBg: 'from-amber-500 to-orange-600',
  },
  {
    id: 'children-activities',
    title: 'Children\'s Community Activities',
    description: 'Fostering developmental activities, sports, and drawing competitions to promote wellness and creativity.',
    details: [
      'Creative workshops and competitive drawing events',
      'Prizes and educational kits distribution to encourage participation',
      'Interactive health and hygiene lessons designed for children',
    ],
    placeholderBg: 'from-purple-500 to-pink-600',
  },
];
