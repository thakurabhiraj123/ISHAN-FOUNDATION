export interface TechItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const technologyData: TechItem[] = [
  {
    id: 'digital-records',
    title: 'Digital Patient Records',
    description: 'Transitioning to structured, local digital health records to monitor patient history, treatment pathways, and checkup trends over time.',
    iconName: 'Database',
  },
  {
    id: 'ecg-equipment',
    title: 'ECG Equipment',
    description: 'Planning portable electrocardiogram (ECG) configurations to provide immediate heart screening during village checkups.',
    iconName: 'HeartPulse',
  },
  {
    id: 'portable-diagnostics',
    title: 'Portable Diagnostic Devices',
    description: 'Using small-scale handheld blood glucose monitors, digital blood pressure units, and pulse oximeters for fast on-site results.',
    iconName: 'Smartphone',
  },
  {
    id: 'vision-screening',
    title: 'Vision Screening Equipment',
    description: 'Integrating portable visual acuity charts and diagnostic lenses to accurately detect refractive errors and cataracts in camps.',
    iconName: 'Eye',
  },
  {
    id: 'mobile-services',
    title: 'Mobile Healthcare Services',
    description: 'Equipping camp bags with organized, durable emergency and screening tools designed for rugged rural transport.',
    iconName: 'Truck',
  },
];
