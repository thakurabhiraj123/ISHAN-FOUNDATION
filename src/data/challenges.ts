export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const challengesData: ChallengeItem[] = [
  {
    id: 'expensive-treatment',
    title: 'Expensive Medical Treatment',
    description: 'High costs of modern private medical consultation, tests, and medicine put basic healthcare out of reach for daily wage earners.',
    iconName: 'IndianRupee',
  },
  {
    id: 'lack-diagnostics',
    title: 'Lack of Diagnostic Centres',
    description: 'Remote locations lack basic testing centers, forcing villagers to travel long distances just to get a routine blood test or ECG.',
    iconName: 'Building',
  },
  {
    id: 'poor-ambulance',
    title: 'Poor Ambulance Availability',
    description: 'During medical emergencies, families struggle to secure timely transport, leading to avoidable delays in reaching critical care.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'delayed-diagnosis',
    title: 'Delayed Diagnosis',
    description: 'Due to lack of local facilities and cost barriers, symptoms are often ignored until the condition becomes severe or untreatable.',
    iconName: 'Clock',
  },
  {
    id: 'limited-prevention',
    title: 'Limited Preventive Healthcare',
    description: 'A general lack of screening camps and health awareness means chronic illnesses like hypertension and diabetes go undetected.',
    iconName: 'HeartCrack',
  },
  {
    id: 'healthcare-inequality',
    title: 'Healthcare Inequality',
    description: 'Rural villages and tea garden communities experience a massive disparity in quality healthcare options compared to urban centers.',
    iconName: 'TrendingDown',
  },
];
