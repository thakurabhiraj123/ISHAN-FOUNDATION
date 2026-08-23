export interface BeneficiaryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const beneficiariesData: BeneficiaryItem[] = [
  {
    id: 'rural-families',
    title: 'Rural Families & Patients',
    description: 'Providing dedicated healthcare support, free medical check-ups, and medicines to underserved households in North Bengal.',
    iconName: 'Home',
  },
  {
    id: 'street-animals',
    title: 'Street Animals',
    description: 'Protecting and caring for injured, sick, or abandoned stray dogs, cats, and birds through vaccinations and rescues.',
    iconName: 'Heart',
  },
  {
    id: 'rural-women',
    title: 'Rural Women',
    description: 'Providing tailoring courses, vocational training, financial literacy, and self-help group networking to support economic independence.',
    iconName: 'UserRound',
  },
  {
    id: 'rural-youth',
    title: 'Unemployed Youth',
    description: 'Fostering eco-tourism guide training, homestay hospitality skills, and travel management opportunities to build careers.',
    iconName: 'Compass',
  },
  {
    id: 'plantation-workers',
    title: 'Plantation Laborers',
    description: 'Delivering mobile clinics, blood donation camps, and community welfare aid to tea garden worker families.',
    iconName: 'Sprout',
  },
  {
    id: 'stray-volunteers',
    title: 'Animal Welfare Volunteers',
    description: 'Empowering community volunteers with animal feeding guidelines, medical aid kits, and rescue mobilization resources.',
    iconName: 'Users',
  },
];
