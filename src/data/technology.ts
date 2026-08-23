export interface TechItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const technologyData: TechItem[] = [
  {
    id: 'digital-operations',
    title: 'Digital Operations',
    description: 'Transitioning to digital databases to manage patient histories, animal rescue logs, and homestay travel bookings efficiently.',
    iconName: 'Database',
  },
  {
    id: 'veterinary-diagnostics',
    title: 'Veterinary Aid Equipment',
    description: 'Equipping animal rescue teams with first-aid kits, stray dog traps, transport cages, and primary veterinary medicine.',
    iconName: 'Heart',
  },
  {
    id: 'portable-diagnostics',
    title: 'Portable Medical Devices',
    description: 'Using hand-held glucose monitors, pulse oximeters, and diagnostic tools to perform quick on-site health screening in camps.',
    iconName: 'Activity',
  },
  {
    id: 'empowerment-training',
    title: 'Empowerment Tools',
    description: 'Providing sewing machines, computer setups, and digital learning tools to empower women during vocational classes.',
    iconName: 'GraduationCap',
  },
  {
    id: 'travel-booking',
    title: 'Travel Booking Portals',
    description: 'Developing online homestay listings and local guidance portals to connect travelers with rural community tourism hosts.',
    iconName: 'Compass',
  },
];
