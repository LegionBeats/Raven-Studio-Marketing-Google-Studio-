
import { Service, ServiceCategory } from './types';

export const SERVICES: Service[] = [
  {
    id: 'studio-receptionist',
    name: 'AI Studio Receptionist',
    category: ServiceCategory.TECHNOLOGY,
    shortDescription: 'A 24/7 chatbot trained on your gear list and rates. It answers artist FAQs and books sessions while you’re tracking.',
    fullDescription: 'Our AI Receptionist is a custom-trained agent that lives on your website and DMs. It knows your vocal chain, your drum room dimensions, and your peak-hour rates, allowing you to stay focused on the session while it handles the business.',
    valueProposition: 'Maintain 100% responsiveness without ever leaving the control room.',
    priceRange: 'Included in Core Subscription',
    features: ['Gear List FAQ', 'Direct-to-Booking Flow', 'Unified DM Integration', 'Human Hand-off Alerts'],
    imageUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'engineer-sync',
    name: 'Engineer-Sync Booking',
    category: ServiceCategory.OPERATIONS,
    shortDescription: 'Professional calendar sync for your entire roster. Automate deposits and session reminders to eliminate no-shows.',
    fullDescription: 'Manage multiple rooms and engineers from one centralized dashboard. Artists can see real-time availability and book instantly with a required deposit to secure their slot.',
    valueProposition: "Eliminate the 'texting dance' and cut admin overhead by 10+ hours a week.",
    priceRange: '$97/mo + Setup',
    features: ['Engineer Sync (Multi-staff)', 'Automated Deposits', 'SMS/Email Reminders', 'Mobile Management'],
    imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ai-aeo',
    name: 'AI Search & AEO',
    category: ServiceCategory.DATA,
    shortDescription: 'Dominate Google Maps and AI search engines like ChatGPT. Automate review requests the second a session wraps.',
    fullDescription: 'We optimize your studio to be the first choice when artists search for "studios near me" or ask AI assistants for recommendations. Includes automated feedback loops that turn happy artists into five-star reviews.',
    valueProposition: 'Be the first studio artists find when they search.',
    priceRange: 'Custom Quote',
    features: ['Local SEO Strategy', 'AI Engine Optimization', 'Auto Review Requests', 'Map Pack Dominance'],
    imageUrl: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'call-rescue',
    name: 'Missed Call Rescue',
    category: ServiceCategory.OPERATIONS,
    shortDescription: "Never lose an artist to a missed call again. Our system instantly texts back leads when you can't pick up the phone.",
    fullDescription: "If you're in the middle of a vocal take and miss a call, our system immediately sends a professional SMS to the caller: 'Hey, I'm currently in a session. How can I help?' This simple automation saves thousands in lost revenue.",
    valueProposition: 'Capture every lead, even when the red light is on.',
    priceRange: 'Standard Infrastructure',
    features: ['Instant SMS Text-back', 'Lead Notification', 'Studio Branding', '24/7 Availability'],
    imageUrl: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dm-funnels',
    name: 'Instagram DM Funnels',
    category: ServiceCategory.MARKETING,
    shortDescription: 'Turn "What\'s your rates?" DMs into paying clients. Automated lead capture for artists who find you on social media.',
    fullDescription: 'Stop letting leads die in the "Request" folder. Our Instagram automation detects pricing inquiries and sends artists your rate card and a booking link automatically.',
    valueProposition: "Stop losing leads to the 'Request' folder.",
    priceRange: 'Variable Setup Fee',
    features: ['Auto Rate Responses', 'Lead Capture', 'Artist CRM', 'Direct-to-Calendar'],
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'studio-pocket',
    name: 'Studio-In-Your-Pocket',
    category: ServiceCategory.TECHNOLOGY,
    shortDescription: 'Manage your entire facility from our mobile app. Includes Tap-to-Pay technology to collect balances on the spot.',
    fullDescription: 'A custom-branded mobile app for you and your staff. Chat with clients, manage bookings, and collect payments instantly by tapping their card to your phone.',
    valueProposition: 'Wrap the session, tap the phone, get paid.',
    priceRange: 'Mobile Access Included',
    features: ['Unified Inbox (IG/SMS)', 'Tap-to-Pay POS', 'Professional Biz Line', 'Push Notifications'],
    imageUrl: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800'
  }
];
