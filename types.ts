
export enum ServiceCategory {
  STRATEGY = 'Strategy',
  TECHNOLOGY = 'Technology',
  DATA = 'Data & Analytics',
  OPERATIONS = 'Operations',
  MARKETING = 'Marketing'
}

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  valueProposition: string;
  priceRange: string;
  internalOnly?: boolean;
  features: string[];
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
