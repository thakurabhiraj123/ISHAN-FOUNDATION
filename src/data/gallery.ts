import bloodDonationImg from '../assets/images/blood_donation_camp.jpg';
import bloodCampWelcomeImg from '../assets/images/blood_camp_welcome.jpg';
import medicalCheckupImg from '../assets/images/medical_checkup.jpg';
import bloodDonorThumbsupImg from '../assets/images/blood_donor_thumbsup.jpg';
import bloodDonorsBedImg from '../assets/images/blood_donors_bed.jpg';
import bloodDonationSessionImg from '../assets/images/blood_donation_session.jpg';
import childrenDrawingImg from '../assets/images/children_drawing_competition.jpg';
import footballTeamImg from '../assets/images/football_team.jpg';
import footballPlayersImg from '../assets/images/football_players.jpg';
import visionCampFlyerImg from '../assets/images/vision_camp_flyer.jpg';

export interface GalleryItem {
  id: string;
  category: 'medical-camps' | 'blood-donation' | 'eye-care' | 'community-activities' | 'childrens-programs' | 'volunteers';
  title: string;
  description: string;
  date: string;
  placeholderBg: string; // Tailored gradients
  image?: string;
}

export const galleryCategories = [
  { value: 'all', label: 'All Activities' },
  { value: 'medical-camps', label: 'Medical Camps' },
  { value: 'blood-donation', label: 'Blood Donation' },
  { value: 'eye-care', label: 'Eye Care' },
  { value: 'community-activities', label: 'Community Activities' },
  { value: 'childrens-programs', label: "Children's Programs" },
  { value: 'volunteers', label: 'Volunteers' }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'g-blood-camp-welcome',
    category: 'blood-donation',
    title: 'NAT Blood Donation Camp Launch',
    description: 'Jointly organized in association with Sports Lovers\' Unit on August 9, 2026. Arijit Sikdar and volunteer leaders welcoming the medical team.',
    date: 'August 9, 2026',
    placeholderBg: 'from-rose-600 via-red-500 to-orange-400',
    image: bloodCampWelcomeImg,
  },
  {
    id: 'g-medical-checkup',
    category: 'medical-camps',
    title: 'Community Health Screening Clinic',
    description: 'Free healthcare consultation and diagnostic checkups organized for local residents and plantation workers.',
    date: 'August 9, 2026',
    placeholderBg: 'from-blue-600 via-indigo-500 to-cyan-400',
    image: medicalCheckupImg,
  },
  {
    id: 'g-blood-donor-thumbsup',
    category: 'volunteers',
    title: 'Voluntary Blood Donor Solidarity',
    description: 'A local donor giving a thumbs-up while contributing to the NAT-screened blood reserve.',
    date: 'August 9, 2026',
    placeholderBg: 'from-violet-600 via-fuchsia-500 to-pink-500',
    image: bloodDonorThumbsupImg,
  },
  {
    id: 'g-blood-donors-bed',
    category: 'blood-donation',
    title: 'NAT Blood Collection Drive',
    description: 'Donors participating in the camp. Nucleic Acid Testing (NAT) technology was used to screen all units for maximum safety.',
    date: 'August 9, 2026',
    placeholderBg: 'from-rose-600 via-red-500 to-orange-400',
    image: bloodDonorsBedImg,
  },
  {
    id: 'g-blood-donation-session',
    category: 'blood-donation',
    title: 'Clinical Blood Collection Session',
    description: 'State-of-the-art blood screening and collection in progress at the community hall.',
    date: 'August 9, 2026',
    placeholderBg: 'from-emerald-600 via-blue-500 to-indigo-400',
    image: bloodDonationSessionImg,
  },
  {
    id: 'g-children-drawing',
    category: 'childrens-programs',
    title: "Children's Drawing Competition",
    description: 'Drawing competition held on August 31, 2025. Around 50 children participated in creative activities.',
    date: 'August 31, 2025',
    placeholderBg: 'from-indigo-600 via-purple-600 to-pink-500',
    image: childrenDrawingImg,
  },
  {
    id: 'g-blood-donation-1',
    category: 'blood-donation',
    title: 'Voluntary Blood Donation Drive',
    description: 'Camp organized on October 22, 2025, in association with Tarai Blood Bank, collecting 15 units of blood.',
    date: 'October 22, 2025',
    placeholderBg: 'from-rose-600 via-red-500 to-orange-400',
    image: bloodDonationImg,
  },
  {
    id: 'g-balaka-club',
    category: 'community-activities',
    title: 'Balaka Club Youth Engagement',
    description: 'Youth mobilization session organized on December 30, 2025, promoting healthcare advocacy.',
    date: 'December 30, 2025',
    placeholderBg: 'from-teal-600 via-emerald-500 to-yellow-400',
    image: footballTeamImg,
  },
  {
    id: 'g-siliguri-football',
    category: 'community-activities',
    title: 'Siliguri Local Football Sponsorship',
    description: 'Supporting local sports teams and community youth through athletic engagements and healthcare outreach.',
    date: 'December 30, 2025',
    placeholderBg: 'from-emerald-600 via-teal-500 to-cyan-400',
    image: footballPlayersImg,
  },
  {
    id: 'g-eye-camp-placeholder',
    category: 'eye-care',
    title: 'Vision Checkup Camp',
    description: 'Vision screenings, cataract detections, and free primary ophthalmic support for rural citizens.',
    date: 'Coming Soon',
    placeholderBg: 'from-cyan-600 via-teal-500 to-emerald-400',
    image: visionCampFlyerImg,
  }
];
