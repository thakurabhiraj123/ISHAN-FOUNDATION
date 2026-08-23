export interface ProgramItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  placeholderBg: string; // Tailored gradient to make it look premium
}

export const programsData: ProgramItem[] = [
  {
    id: 'rural-healthcare',
    title: 'Rural Healthcare Outreach',
    description: 'Organizing mobile health checkups, primary care consultation, diagnostic testing, and medicine distribution in tea garden estates.',
    details: [
      'Regular checkups conducted by certified general practitioners',
      'Free distribution of essential medicines and health kits',
      'Basic diagnostic screenings (blood sugar, BP, SpO2) in remote zones',
    ],
    placeholderBg: 'from-rose-500 to-red-600',
  },
  {
    id: 'animal-rescue',
    title: 'Street Animal Rescue & Medical Relief',
    description: 'Providing immediate medical attention, vaccination drives, and shelter coordination for injured, sick, or abandoned stray animals.',
    details: [
      'Emergency first aid and rescue response for injured street animals',
      'Community vaccination campaigns targeting rabies in strays',
      'Collaborative feeding programs and shelter construction support',
    ],
    placeholderBg: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'women-empowerment',
    title: 'Women Skill Development & Livelihood',
    description: 'Empowering rural women through tailoring classes, vocational training, financial literacy workshops, and self-help group setups.',
    details: [
      'Tailoring and sewing certification courses',
      'Computer training and basic digital literacy programs',
      'Micro-finance training to build independent business units',
    ],
    placeholderBg: 'from-purple-500 to-pink-600',
  },
  {
    id: 'tour-travels',
    title: 'Eco-Tourism & Sustainable Travel',
    description: 'Supporting sustainable local homestays, tour guiding training, and community-led travel programs in North Bengal to create employment.',
    details: [
      'Training local youths as eco-tour guides and hospitality professionals',
      'Promoting community-based homestays in tea gardens and rural sectors',
      'Connecting travelers with local artisans and organic farm experiences',
    ],
    placeholderBg: 'from-cyan-500 to-blue-600',
  },
];
