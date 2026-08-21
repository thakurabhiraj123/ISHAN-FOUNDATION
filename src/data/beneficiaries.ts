export interface BeneficiaryItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const beneficiariesData: BeneficiaryItem[] = [
  {
    id: 'tea-garden-workers',
    title: 'Tea Garden Workers',
    description: 'Providing dedicated healthcare support for agricultural laborers and tea garden workers in North Bengal who lack nearby clinics.',
    iconName: 'Sprout',
  },
  {
    id: 'rural-families',
    title: 'Rural Families',
    description: 'Bridging the geographic and economic gaps in medical services for entire rural households living in remote settlements.',
    iconName: 'Home',
  },
  {
    id: 'women',
    title: 'Women',
    description: 'Empowering women with healthcare consultation, preventive check-ups, and sessions on maternal health and hygiene.',
    iconName: 'UserRound',
  },
  {
    id: 'children',
    title: 'Children',
    description: 'Focusing on developmental health check-ups, pediatric eye-screenings, hygiene habits, and active engagement activities.',
    iconName: 'Baby',
  },
  {
    id: 'senior-citizens',
    title: 'Senior Citizens',
    description: 'Ensuring accessible blood pressure check-ups, diabetic screening, and free vision camps for elderly community members.',
    iconName: 'HeartPulse',
  },
  {
    id: 'low-income',
    title: 'Low-Income Households',
    description: 'Eliminating financial barriers by providing free doctor consulting and generic medicines to families living below the poverty line.',
    iconName: 'Coins',
  },
];
