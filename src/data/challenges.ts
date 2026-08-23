export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const challengesData: ChallengeItem[] = [
  {
    id: 'healthcare-gaps',
    title: 'Rural Healthcare Disparity',
    description: 'High medical costs and distant clinics prevent families in remote blocks from accessing basic healthcare.',
    iconName: 'HeartCrack',
  },
  {
    id: 'animal-neglect',
    title: 'Stray Animal Suffering',
    description: 'Street dogs and cats face high rates of injuries, rabies, and neglect without veterinary access or shelter.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'women-inequality',
    title: 'Limited Women Livelihoods',
    description: 'Rural women struggle to find vocational training or micro-financial pathways to secure economic independence.',
    iconName: 'Users',
  },
  {
    id: 'tourism-unexploited',
    title: 'Untapped Tourism Potential',
    description: 'Local youth lack professional training to tap into North Bengal\'s rich eco-tourism, leading to unemployment.',
    iconName: 'Compass',
  },
];
