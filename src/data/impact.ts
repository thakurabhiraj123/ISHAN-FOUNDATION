export interface ImpactCategory {
  title: string;
  description: string;
  points: string[];
}

export const impactData: ImpactCategory[] = [
  {
    title: 'Healthcare Support',
    description: 'Direct improvement in health outcomes and access across targeted rural areas.',
    points: [
      'Accessible mobile health screening checkups in tea gardens',
      'Free medicine distribution and doctor consultation camps',
      'Vital checkups (diabetes, BP, SpO2) supporting early detection',
      'Emergency ambulance transportation coordination for rural patients',
    ],
  },
  {
    title: 'Welfare & Livelihood',
    description: 'Empowering women and youth through skill training and sustainable economic platforms.',
    points: [
      'Vocational tailoring classes supporting female self-employment',
      'Computer training courses to foster digital literacy',
      'Eco-tourism and homestay training to build youth livelihoods',
      'Community self-help savings group setup and micro-finance advice',
    ],
  },
  {
    title: 'Animal Protection',
    description: 'Rescuing injured strays and creating compassionate, rabies-free neighborhoods.',
    points: [
      'Emergency veterinary relief and rescue walks for stray dogs and cats',
      'Rabies vaccination drives protecting public health and street animals',
      'Daily feeding support coordinated through local volunteers',
      'Shelter support initiatives for abandoned or sick street animals',
    ],
  },
];
