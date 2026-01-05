
import { Service, ServiceCategory } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ghl-core',
    name: 'Studio Booking & Automation',
    category: ServiceCategory.OPERATIONS,
    shortDescription: 'Professional calendar sync with automated SMS/Email reminders.',
    fullDescription: 'Our core booking engine ensures clients can book open times with engineers of their choice. Includes automatic time blocking and a multi-step reminder sequence (SMS/Email) to minimize no-shows.',
    valueProposition: 'Consolidates Calendly and Mailchimp into one unified system, reducing overhead by $100+/mo.',
    priceRange: '$97/mo + Setup',
    features: ['Engineer Sync', 'SMS/Email Reminders', 'Automated Review Requests', 'Mobile Management'],
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'smart-site',
    name: 'Conversion-First Funnels',
    category: ServiceCategory.MARKETING,
    shortDescription: 'High-performance "Smart Websites" built to turn traffic into leads.',
    fullDescription: 'Unlike traditional sites, our smart websites have an exact goal for every page. We build funnels that guide users specifically where you want them to click, integrated with lead capture tools.',
    valueProposition: 'Eliminate "dead-end" traffic with a website that functions as a 24/7 salesperson.',
    priceRange: '$1,500 - $3,500 Setup',
    features: ['A/B Testing', 'Chatbot Integration', 'Mobile Optimized', 'Domain Management'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ai-bot',
    name: 'AI Smart Chatbot',
    category: ServiceCategory.TECHNOLOGY,
    shortDescription: '24/7 Intelligent FAQ and automated appointment booking.',
    fullDescription: 'Leverage Large Language Models (Gemini/OpenAI) to handle customer inquiries instantly. Can be configured for general FAQ or advanced booking where the AI actually schedules sessions.',
    valueProposition: 'Maintain 24/7 responsiveness without hiring extra staff.',
    priceRange: '$500 - $1,500 Setup',
    features: ['General FAQ Mode', 'Live Booking Mode', 'Human Hand-off', 'Multi-channel (Web/IG/FB)'],
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'text-back',
    name: 'Missed Call Rescue',
    category: ServiceCategory.OPERATIONS,
    shortDescription: 'Automatic SMS response when you can\'t answer the phone.',
    fullDescription: 'Never lose a client to a missed call again. When a potential customer calls and you\'re busy, they immediately receive a professional text to start the conversation.',
    valueProposition: 'Saves 20-30% of potential leads that would otherwise call your competitor.',
    priceRange: 'Included in Core Subscription',
    features: ['Instant Response', 'Lead Tagging', 'A2P Compliant', 'Carrier Integration'],
    imageUrl: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'reputation',
    name: 'AI Reputation Manager',
    category: ServiceCategory.DATA,
    shortDescription: 'Auto-reply to Google and Facebook reviews using AI.',
    fullDescription: 'We integrate your Google Business Profile and Facebook to automatically read and respond to new reviews using context-aware AI. Helps boost SEO and build public trust.',
    valueProposition: 'Improves local SEO rankings and shows customers you are active and attentive.',
    priceRange: '$250 Setup + Subscription',
    features: ['Google/FB Integration', 'Sentiment Analysis', 'SEO Optimization', 'Custom Voice/Tone'],
    imageUrl: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'social-dm',
    name: 'Social DM Automation',
    category: ServiceCategory.MARKETING,
    shortDescription: 'Convert Instagram and Facebook comments directly into leads.',
    fullDescription: 'Set up "Comment-to-DM" workflows. When someone interacts with your posts, they get an automated message that captures their contact info or sends them a direct offer.',
    valueProposition: 'Turn social media engagement into a measurable database of email and phone leads.',
    priceRange: '$300 - $800 Setup',
    features: ['IG/FB Workflows', 'Lead Gen Chat', 'Auto-scheduling', 'Content Sync'],
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800'
  }
];
