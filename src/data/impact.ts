export interface ImpactCategory {
  title: string;
  description: string;
  points: string[];
}

export const impactData: ImpactCategory[] = [
  {
    title: 'Healthcare Impact',
    description: 'Direct improvement in health outcomes and access across targeted rural areas.',
    points: [
      'Better healthcare access for remote settlements',
      'Early disease detection through community screenings',
      'Increased adoption of preventive healthcare measures',
      'Reduced medical barriers and financial strain on families',
    ],
  },
  {
    title: 'Community Impact',
    description: 'Fostering collective participation and local leadership for sustainable development.',
    points: [
      'Widespread community health and hygiene awareness',
      'Active youth participation in local medical camps',
      'Stronger community engagement in social health programs',
      'Contributions to rural development and social solidarity',
    ],
  },
  {
    title: 'Quality of Life',
    description: 'Enabling healthier, happier, and more secure lifestyles for underserved individuals.',
    points: [
      'Improved long-term healthcare access and consistency',
      'Better personal health awareness and lifestyle choices',
      'Timely medical support in critical emergencies',
      'Overall enhancement of community wellbeing and security',
    ],
  },
];
