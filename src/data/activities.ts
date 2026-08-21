import bloodDonationImg from '../assets/images/blood_donation_camp.jpg';
import childrenDrawingImg from '../assets/images/children_drawing_competition.jpg';
import footballTeamImg from '../assets/images/football_team.jpg';
import bloodDonorsBedImg from '../assets/images/blood_donors_bed.jpg';

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
    id: 'nat-blood-camp-2026',
    date: '09 August 2026',
    title: 'NAT Blood Donation & Health Checkup Camp',
    category: 'Healthcare',
    details: 'Jointly organized in association with Sports Lovers\' Unit on their 32nd Foundation Day. The camp provided advanced NAT (Nucleic Acid Testing) screened blood collection alongside a free general health screening clinic. ISHAAN FOUNDATION was honored with a Token of Appreciation plaque from Sports Lovers\' Unit for voluntary blood donation support.',
    stats: 'NAT Screened Camp',
    organizedWith: 'Sports Lovers\' Unit',
    image: bloodDonorsBedImg,
  },
  {
    id: 'drawing-competition-2025',
    date: '31 August 2025',
    title: "Children's Drawing Competition",
    category: "Children's Programs",
    details: 'Organized a successful drawing competition for local children to foster creativity, confidence, and community bonding. Around 50 children participated, and prizes, trophies, and refreshments were distributed to encourage all young participants.',
    stats: '50+ Children Participated',
    image: childrenDrawingImg,
  },
  {
    id: 'blood-donation-2025',
    date: '22 October 2025',
    title: 'Blood Donation Camp',
    category: 'Healthcare',
    details: 'Initiated a voluntary blood donation drive in the community. Collected 15 units of blood and successfully submitted them to the Tarai Blood Bank to support regional medical emergencies and surgeries.',
    stats: '15 Units Collected',
    organizedWith: 'Tarai Blood Bank',
    image: bloodDonationImg,
  },
  {
    id: 'community-activity-2025',
    date: '30 December 2025',
    title: 'Community Youth Engagement Event',
    category: 'Community Activities',
    details: 'Organized in collaboration with Balaka Club. Focused on mobilizing local youth for social service, rural development projects, and raising awareness about healthcare accessibility in the Jalpaiguri region.',
    organizedWith: 'Balaka Club',
    stats: 'Active Youth Mobilization',
    image: footballTeamImg,
  },
];
