export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  status: 'established' | 'planned';
  details: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'rural-health-camps',
    title: 'Rural Health Camp Operations',
    description: 'Established portable clinical camps to offer free check-ups, primary care and vitals checking in Jalpaiguri tea gardens.',
    status: 'established',
    details: [
      'Conducted 10+ free medical camps in local blocks',
      'Provided consultation and free medicine to over 500 plantation laborers',
      'Organized blood donation camps in association with state blood banks',
    ],
  },
  {
    id: 'stray-feeding-vaccination',
    title: 'Stray Animal Care Drives',
    description: 'Initiated local anti-rabies vaccination drives and feeding walks to support stray dog populations in urban Jalpaiguri.',
    status: 'established',
    details: [
      'Vaccinated 100+ stray dogs against rabies',
      'Established a volunteer network for daily community animal feeding',
      'Provided emergency first aid to injured street dogs and cats',
    ],
  },
  {
    id: 'tailoring-vocational-center',
    title: 'Women Tailoring Center',
    description: 'Opened our first tailoring training center in Jalpaiguri, providing sewing machines and professional training to local women.',
    status: 'established',
    details: [
      'Enrolled and trained 30+ women in professional sewing techniques',
      'Provided certifications to support direct livelihood opportunities',
      'Conducted financial independence and self-help group seminars',
    ],
  },
  {
    id: 'eco-tourism-initiative',
    title: 'Eco-Tourism Livelihood Project',
    description: 'Partnered with rural homestays in North Bengal to promote eco-tourism, training local youth in travel hosting.',
    status: 'established',
    details: [
      'Conducted basic hospitality training for tea garden youths',
      'Promoted 5 rural homestays to travelers for sustainable revenue',
      'Created eco-travel guides mapping local routes and attractions',
    ],
  },
  {
    id: 'mobile-vet-clinic',
    title: 'Mobile Veterinary Clinic',
    description: 'Acquiring a custom utility vehicle to run mobile veterinary aid camps and emergency stray animal rescue services.',
    status: 'planned',
    details: [
      'To provide on-site minor surgeries and medical aid for injured strays',
      'To conduct sterilisation campaigns to manage stray populations humanely',
      'To hold regular veterinary consultation camps for farm animals',
    ],
  },
  {
    id: 'advanced-healthcare-clinic',
    title: 'Primary Health Center & Diagnostic Lab',
    description: 'Establishing a permanent primary clinic to offer daily outpatient doctor consultations and low-cost lab testing.',
    status: 'planned',
    details: [
      'To provide permanent diagnostic testing (blood tests, ECG)',
      'To run a subsidized pharmacy stocked with general medical supplies',
      'To establish video consultation links with city specialist doctors',
    ],
  },
  {
    id: 'women-it-literacy',
    title: 'Women Computer Literacy Lab',
    description: 'Setting up a digital literacy center with computer terminals to train women in essential IT and web skills.',
    status: 'planned',
    details: [
      'To offer basic computer operation, typing, and office software courses',
      'To teach online marketing and e-commerce for local women artisans',
      'To bridge the digital gender divide in rural North Bengal',
    ],
  },
  {
    id: 'community-homestay-network',
    title: 'Community Homestay Network',
    description: 'Building a larger structured network of local-run homestays and community tours to scale sustainable eco-tourism.',
    status: 'planned',
    details: [
      'To create a centralized booking platform for rural North Bengal homestays',
      'To support homestay infrastructure upgrades through interest-free loans',
      'To create rural tourism trails showcasing local culture and nature',
    ],
  },
];
