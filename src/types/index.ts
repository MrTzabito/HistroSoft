export type BillingCycle = 'monthly' | 'annual';
export type Currency = 'PEN' | 'USD';
export type PaymentMethod = 'yape' | 'plin' | 'transferencia' | 'tarjeta';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  timeline: string;
  techStack: string[];
  metrics: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  product: string;
  tagline: string;
  monthlyPriceUSD: number;
  annualPriceUSD: number;
  monthlyPricePEN: number;
  annualPricePEN: number;
  isPopular?: boolean;
  setupFeeUSD?: number;
  sla: string;
  features: string[];
  idealFor: string;
  limits: string;
}

export interface ProductDetails {
  id: string;
  name: string;
  category: string;
  categorySlug: 'crm-chatbots' | 'erp-negocio' | 'sistemas-portales' | 'herramientas' | 'automatizaciones' | 'app-medida';
  badge?: 'Más vendido' | 'Nuevo producto' | 'Recomendado' | 'Destacado';
  tagline: string;
  summary: string;
  keyCapabilities: string[];
  architectureHighlights: string[];
  priceMonthlyPEN: number;
  priceMonthlyUSD: number;
  demoVideoTitle?: string;
  demoHighlights?: string[];
  imageUrl?: string;
  plans: PricingPlan[];
}

export interface CartItem {
  id: string;
  product: ProductDetails;
  plan: PricingPlan;
  billingCycle: BillingCycle;
  quantity: number;
}

export interface MethodologyStage {
  step: string;
  title: string;
  duration: string;
  description: string;
  keyMilestones: string[];
  deliverableDocument: string;
}

export interface CaseStudy {
  id: string;
  clientIndustry: string;
  headline: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    metric: string;
  }[];
  duration: string;
  stack: string[];
  clientQuote: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'proyectos' | 'planes' | 'contratos' | 'tecnología';
}

export interface ProjectEstimate {
  projectType: string;
  estimatedWeeksMin: number;
  estimatedWeeksMax: number;
  recommendedStack: string[];
  architecturalNote: string;
}
