export interface ApproachStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export const approachData: ApproachStep[] = [
  {
    step: 1,
    title: 'Awareness',
    description: 'Educating communities about hygiene, nutrition, maternal care, and disease symptoms.',
    iconName: 'Megaphone',
  },
  {
    step: 2,
    title: 'Prevention',
    description: 'Promoting healthy habits, clean environments, and early preventive measures.',
    iconName: 'Shield',
  },
  {
    step: 3,
    title: 'Screening',
    description: 'Conducting routine health camps in rural areas and tea gardens to assess basic parameters.',
    iconName: 'SearchCode',
  },
  {
    step: 4,
    title: 'Diagnosis',
    description: 'Leveraging portable diagnostic devices (ECG, vision test, blood tests) to detect issues early.',
    iconName: 'Activity',
  },
  {
    step: 5,
    title: 'Healthcare Support',
    description: 'Providing primary clinical consults, free generic medicines, and hospital referral guidance.',
    iconName: 'Stethoscope',
  },
  {
    step: 6,
    title: 'Emergency Response',
    description: 'Facilitating critical emergency transport and support when urgent care is needed.',
    iconName: 'Ambulance',
  },
  {
    step: 7,
    title: 'Community Wellbeing',
    description: 'Fostering long-term wellness, self-reliance, and active youth participation in social health.',
    iconName: 'Smile',
  },
];
