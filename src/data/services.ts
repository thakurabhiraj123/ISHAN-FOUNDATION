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
    description: 'Providing medical check-ups, diagnostic help, vital checkups, and free medicines for rural areas.',
    iconName: 'Stethoscope',
  },
  {
    id: 'ambulance-services',
    title: 'Ambulance Assistance',
    description: 'Emergency ambulance services to transport patients from remote regions to district hospitals quickly.',
    iconName: 'Ambulance',
  },
  {
    id: 'animal-rescue',
    title: 'Animal Rescue & Care',
    description: 'Rescuing injured, abandoned street animals and providing emergency medical treatment and shelter support.',
    iconName: 'Heart',
  },
  {
    id: 'animal-vaccination',
    title: 'Animal Vaccination & Feeding',
    description: 'Conducting stray animal vaccination drives against rabies and organizing daily food distribution walks.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'vocational-training',
    title: 'Vocational Training for Women',
    description: 'Running tailoring, handcrafts, and computer courses to help women become self-reliant and financially secure.',
    iconName: 'GraduationCap',
  },
  {
    id: 'women-self-help',
    title: 'Women Self-Help Groups',
    description: 'Organizing women into self-help savings groups to access micro-loans and start local small businesses.',
    iconName: 'Users',
  },
  {
    id: 'eco-tourism',
    title: 'Eco-Tourism Promotion',
    description: 'Developing sustainable tourism in rural North Bengal and tea garden areas to create local livelihood.',
    iconName: 'Compass',
  },
  {
    id: 'travel-assistance',
    title: 'Travel & Hospitality Services',
    description: 'Providing local homestay training, travel assistance, and hospitality skills to empower rural youth.',
    iconName: 'Award',
  },
  {
    id: 'support-activities',
    title: 'Support Activities',
    description: 'Providing additional community support through local outreach, awareness programs, resource coordination, and assistance for underserved communities.',
    iconName: 'HeartHandshake',
  },
];
