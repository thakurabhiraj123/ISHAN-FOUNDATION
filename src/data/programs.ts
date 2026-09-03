export interface ProgramItem {
  id: string;
  category: string;
  title: string;
  description: string;
  details: string[];
  themeColor: {
    badge: string;
    iconBg: string;
    iconText: string;
    checkColor: string;
    hoverBorder: string;
  };
}

export const programsData: ProgramItem[] = [
  {
    id: 'rural-healthcare',
    category: 'Healthcare & Wellness',
    title: 'Rural Healthcare Outreach',
    description: 'Delivering primary health consultations, mobile checkup clinics, diagnostics, and essential medicine distribution directly to underserved tea garden communities.',
    details: [
      'General health checkups & diagnostic screenings in remote zones',
      'Free essential medicine distribution and emergency care support',
    ],
    themeColor: {
      badge: 'bg-rose-50 text-rose-700 border-rose-200/60',
      iconBg: 'bg-rose-50 border-rose-100 text-rose-600',
      iconText: 'text-rose-600',
      checkColor: 'text-rose-500',
      hoverBorder: 'hover:border-rose-200',
    },
  },
  {
    id: 'animal-rescue',
    category: 'Animal Welfare',
    title: 'Street Animal Rescue & Medical Relief',
    description: 'Providing compassionate veterinary first aid, emergency rescue responses, rabies vaccination drives, and structured feeding programs for vulnerable street animals.',
    details: [
      'Emergency rescue & veterinary care for injured street animals',
      'Anti-rabies vaccination campaigns & local volunteer feeding drives',
    ],
    themeColor: {
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
      iconBg: 'bg-emerald-50 border-emerald-100 text-emerald-600',
      iconText: 'text-emerald-600',
      checkColor: 'text-emerald-500',
      hoverBorder: 'hover:border-emerald-200',
    },
  },
  {
    id: 'women-empowerment',
    category: 'Women Empowerment',
    title: 'Women Skill Development & Livelihood',
    description: 'Fostering financial self-reliance through certified tailoring courses, digital literacy workshops, and micro-savings group setups for rural women.',
    details: [
      'Vocational tailoring, sewing workshops & certification courses',
      'Basic digital literacy programs & self-help group mentorship',
    ],
    themeColor: {
      badge: 'bg-purple-50 text-purple-700 border-purple-200/60',
      iconBg: 'bg-purple-50 border-purple-100 text-purple-600',
      iconText: 'text-purple-600',
      checkColor: 'text-purple-500',
      hoverBorder: 'hover:border-purple-200',
    },
  },
  {
    id: 'tour-travels',
    category: 'Sustainable Livelihoods',
    title: 'Eco-Tourism & Sustainable Travel',
    description: 'Creating sustainable livelihood opportunities by training local youths in eco-guiding, homestay hospitality, and community-led travel experiences in North Bengal.',
    details: [
      'Youth hospitality & eco-tour guide vocational training',
      'Community-based homestay promotion in tea garden sectors',
    ],
    themeColor: {
      badge: 'bg-sky-50 text-sky-700 border-sky-200/60',
      iconBg: 'bg-sky-50 border-sky-100 text-sky-600',
      iconText: 'text-sky-600',
      checkColor: 'text-sky-500',
      hoverBorder: 'hover:border-sky-200',
    },
  },
  {
    id: 'sport-activities',
    category: 'Sports & Youth Development',
    title: 'Sport Activities',
    description: 'Promoting youth development, physical fitness, sportsmanship, and talent nurturing through local tournaments, training camps, and community sports events.',
    details: [
      'Organizing community football tournaments and youth athletic meets',
      'Distributing sports kits & encouraging active, healthy youth lifestyles',
    ],
    themeColor: {
      badge: 'bg-amber-50 text-amber-700 border-amber-200/60',
      iconBg: 'bg-amber-50 border-amber-100 text-amber-600',
      iconText: 'text-amber-600',
      checkColor: 'text-amber-500',
      hoverBorder: 'hover:border-amber-200',
    },
  },
];
