export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface StepItem {
  stepNumber: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}

export interface TransformItem {
  id: string;
  title: string;
  category: string;
  beforeUrl: string;
  afterUrl: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export interface MotionItem {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}
