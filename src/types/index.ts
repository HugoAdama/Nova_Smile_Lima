export type IconName =
  | 'check'
  | 'x'
  | 'cube'
  | 'shield'
  | 'medal'
  | 'tooth'
  | 'sparkle'
  | 'implant'
  | 'aligner'
  | 'glow'
  | 'smile'
  | 'pin'
  | 'clock'
  | 'phone'
  | 'person'
  | 'whatsapp'
  | 'arrow-left'
  | 'arrow-right'
  | 'star'
  | 'lock'
  | 'calendar'
  | 'chat'
  | 'document'
  | 'sparkles'
  | 'chevron-down'
  | 'camera'
  | 'heart'
  | 'stethoscope'
  | 'instagram'
  | 'linkedin'
  | 'facebook'
  | 'book';

export interface TreatmentItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  idealFor: string;
  icon: IconName;
  highlight?: boolean;
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  cop: string;
  rne?: string;
  bio: string;
  specialties: string[];
  photo: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  treatment: string;
  quote: string;
  rating: number;
  avatarInitial: string;
  consentVerified: boolean;
  date: string;
}

export interface GalleryCaseItem {
  id: string;
  title: string;
  treatment: string;
  timeframe: string;
  clinicalObjective: string;
  ethicalNote: string;
  consentVerified: boolean;
  category: 'estetica' | 'ortodoncia' | 'implantes' | 'rehabilitacion';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'dolor' | 'costos' | 'seguros' | 'tecnologia';
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  details: string;
  icon: IconName;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
}

export interface MetricComparison {
  metric: string;
  before: string;
  after: string;
  variation: string;
}

export interface ProjectPhase {
  phase: string;
  duration: string;
  activities: string;
  deliverables: string;
}

export interface KeyLearning {
  learning: string;
  application: string;
}

export interface PortfolioDeliverable {
  name: string;
  format: string;
  description: string;
}

export interface Requirement {
  id: string;
  name: string;
  priorityOrMetric: string;
  description: string;
}
