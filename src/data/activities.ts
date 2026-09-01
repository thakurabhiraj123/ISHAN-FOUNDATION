import bloodDonationImg from '../assets/images/blood_donation_camp.jpg';
import childrenDrawingImg from '../assets/images/children_drawing_competition.jpg';
import footballTeamImg from '../assets/images/football_team.jpg';
import bloodDonorsBedImg from '../assets/images/blood_donors_bed.jpg';
import susaHealthCampGroupImg from '../assets/images/susa_health_camp_group.jpg';
import susaAppreciationPlaqueImg from '../assets/images/susa_appreciation_plaque.jpg';
import susaHealthCampChequeImg from '../assets/images/susa_health_camp_cheque.jpg';
import susaTrophyPresentationImg from '../assets/images/susa_trophy_presentation.jpg';
import susaHealthCampTeamImg from '../assets/images/susa_health_camp_team_selfie.jpg';

export interface ActivityItem {
  id: string;
  date: string;
  title: string;
  category: string;
  details: string;
  organizedWith?: string;
  stats?: string;
  image?: string;
  images?: string[];
}

export const activitiesData: ActivityItem[] = [
  {
    id: 'susa-foundation-day-camp-2026',
    date: 'August 2026',
    title: 'SUSA 3rd Foundation Day Health Camp & Appreciation',
    category: 'Healthcare & Sports',
    details: 'Organized in association with Siliguri Umpires\' & Scorers\' Association on their 3rd Foundation Day. Conducted general health checkups, ECG testing, and presented healthcare assistance aid alongside receiving an honorary Plaque of Appreciation.',
    stats: 'General Health & ECG Screening',
    organizedWith: 'Siliguri Umpires\' & Scorers\' Association',
    images: [
      susaHealthCampGroupImg,
      susaAppreciationPlaqueImg,
      susaHealthCampChequeImg,
      susaTrophyPresentationImg,
      susaHealthCampTeamImg,
    ],
  },
  {
    id: 'healthcare-camp-2026',
    date: '09 August 2026',
    title: 'NAT Blood Donation & General Health Camp',
    category: 'Healthcare',
    details: 'Jointly organized in association with Sports Lovers\' Unit on their 32nd Foundation Day. The camp provided advanced NAT (Nucleic Acid Testing) screened blood collection alongside a free general health screening clinic, promoting rural health accessibility.',
    stats: 'NAT Screened Camp',
    organizedWith: 'Sports Lovers\' Unit',
    image: bloodDonorsBedImg,
  },
  {
    id: 'women-training-2025',
    date: '31 August 2025',
    title: 'Tailoring Center Graduation & Workshop',
    category: 'Women Empowerment',
    details: 'Successfully conducted our vocational training workshop and tailoring course graduation. Local women received certifications and sewing toolkits to support their financial independence and self-employment journeys.',
    stats: '30+ Certified Graduates',
    image: childrenDrawingImg,
  },
  {
    id: 'animal-welfare-2025',
    date: '22 October 2025',
    title: 'Anti-Rabies Stray Vaccination Drive',
    category: 'Animal Welfare',
    details: 'Conducted a comprehensive stray animal vaccination and treatment drive across Jalpaiguri blocks. Over 100 dogs were vaccinated against rabies, and basic veterinary aid kits were distributed to neighborhood volunteer squads.',
    stats: '100+ Strays Vaccinated',
    image: bloodDonationImg,
  },
  {
    id: 'tourism-seminar-2025',
    date: '30 December 2025',
    title: 'Sustainable Homestay Livelihood Seminar',
    category: 'Tour & Travels',
    details: 'Organized in collaboration with local tourism blocks. The seminar focused on training rural youth and homeowners in tea gardens on homestay hospitality, eco-tourism principles, and traveler safety protocols.',
    organizedWith: 'Tourism Blocks',
    stats: '25+ Youth Trained',
    image: footballTeamImg,
  },
];
