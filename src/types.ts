export type Language = 'ro' | 'en' | 'fr';

export interface BoardMember {
  initials: string;
  nameKey: string;
  roleKey: string;
  descriptionKey: string;
}

export interface DivisionItem {
  titleKey: string;
  descriptionKey: string;
}

export interface DivisionGroup {
  id: string;
  number: string;
  titleKey: string;
  subtitleKey: string;
  items: DivisionItem[];
}

export interface ServiceItem {
  iconName: string;
  titleKey: string;
  descriptionKey: string;
}

export interface ServiceGroup {
  id: string;
  titleKey: string;
  items: ServiceItem[];
}

export interface ContactFormInput {
  name: string;
  email: string;
  sector: string;
  message: string;
  agreeGdpr: boolean;
}
