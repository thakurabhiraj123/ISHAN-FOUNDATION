export interface ApproachStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export const approachData: ApproachStep[] = [
  {
    step: 1,
    title: 'Identification',
    description: 'Conducting surveys to identify rural health gaps, animal welfare needs, and livelihood opportunities.',
    iconName: 'Search',
  },
  {
    step: 2,
    title: 'Education',
    description: 'Conducting community awareness on health, animal care, vocational skills, and hospitality guides.',
    iconName: 'Megaphone',
  },
  {
    step: 3,
    title: 'Direct Relief',
    description: 'Providing medical camp clinics, stray animal rescue support, and free medicine distribution.',
    iconName: 'Heart',
  },
  {
    step: 4,
    title: 'Skill Development',
    description: 'Fostering women\'s vocational tailoring classes, computer literacy, and youth hospitality courses.',
    iconName: 'GraduationCap',
  },
  {
    step: 5,
    title: 'Sustainability',
    description: 'Promoting local tea garden homestays and establishing women\'s self-help savings groups.',
    iconName: 'Compass',
  },
  {
    step: 6,
    title: 'Emergency Care',
    description: 'Coordinating emergency ambulance transport for patients and rescue aid for street animals.',
    iconName: 'Ambulance',
  },
  {
    step: 7,
    title: 'Empowerment',
    description: 'Fostering long-term rural wellness, animal protection, gender equality, and travel livelihoods.',
    iconName: 'Smile',
  },
];
