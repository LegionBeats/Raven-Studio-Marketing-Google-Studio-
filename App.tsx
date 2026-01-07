
import React, { useState, useMemo } from 'react';
import { SERVICES } from './constants';
import { Service, ServiceCategory } from './types';
import ServiceCard from './components/ServiceCard';
import AIAssistant from './components/AIAssistant';
import ServiceDetailModal from './components/ServiceDetailModal';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'All'>('All');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    return SERVICES.filter(service => {
      const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0c] selection:bg-pink-500 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-lg flex items-center justify-center font-black text-lg shadow-lg">C</div>
          <span className="text-xl font-black tracking-tighter uppercase font-heading">Crowd <span className="text-pink-500">Connect</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
          <a href="#catalog" className="hover:text-pink-500 transition-colors">Infrastructure</a>
          <a href="#catalog" className="hover:text-pink-500 transition-colors">Automation</a>
          <a href="#strategy" className="hover:text-pink-500 transition-colors">Strategy Session</a>
        </div>
        <button className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all">
          Member Login
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-44 pb-32 px-4 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-purple-900/20 via-transparent to-transparent opacity-50 pointer-events-none blur-3xl"></div>
        <div className="absolute top-20 right-[-10%] w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-block px-6 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full mb-10">
            <span className="text-pink-500 text-[11px] font-black uppercase tracking-[0.2em]">The Operating System for Modern Studios</span>
          </div>
          
          <h1 className="text-6xl md:text-[110px] font-heading font-black leading-[0.85] mb-8 text-white uppercase italic tracking-tighter">
            Your Studio, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">On Autopilot.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop letting sessions slip through the cracks while you're in the booth. We build the AI-powered systems that capture your leads, book your engineers, and handle your billing—so you can focus on the music.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-16 py-6 rounded-2xl text-xl font-black uppercase tracking-wider text-white shadow-2xl"
            >
              Book Your Studio Strategy Session
            </button>
            <p className="text-xs text-white/40 font-bold uppercase tracking-widest">See our automation in action the moment you click.</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="catalog" className="flex-grow max-w-7xl mx-auto w-full px-4 pb-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-white/40 mb-4">Introducing...</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tight">Studio Manager <span className="text-pink-500 italic">2.0</span></h3>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-6"></div>
        </div>

        {/* Filter Bar */}
        <div className="bg-[#16161a] border border-white/5 rounded-3xl p-4 mb-16 flex flex-col md:flex-row gap-6 items-center justify-between shadow-2xl">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto">
            {['All', ...Object.values(ServiceCategory)].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as any)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  selectedCategory === cat 
                    ? 'bg-white text-black' 
                    : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input 
              type="text"
              placeholder="Search features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3.5 bg-black/40 border border-white/10 rounded-2xl focus:ring-1 focus:ring-pink-500 outline-none transition-all text-sm font-medium text-white"
            />
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>

        {/* Strategy Session Section (Replaces Pricing) */}
        <section id="strategy" className="mt-40 bg-[#16161a] border border-white/10 rounded-[40px] p-8 md:p-16 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[100px] pointer-events-none"></div>
          
          <div className="text-center mb-12">
            <h4 className="text-xs font-bold tracking-[0.4em] uppercase text-white/40 mb-4">Take the shortcut</h4>
            <h3 className="text-4xl md:text-5xl font-heading font-black uppercase mb-4 tracking-tighter">What we’ll cover in your <br/> <span className="text-pink-500 italic">15-minute Strategy Session:</span></h3>
            <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
          </div>

          <div className="space-y-8 mb-12">
            <PitchItem 
              num="01" 
              label="The Leak Audit" 
              desc="We'll find exactly where you're losing artists in your current DM and booking flow." 
            />
            <PitchItem 
              num="02" 
              label="The AI Roadmap" 
              desc="A custom plan to train a chatbot on your specific gear list and hourly rates." 
            />
            <PitchItem 
              num="03" 
              label="The 'Tap-to-Pay' Setup" 
              desc="How to turn your smartphone into a credit card reader in under 5 minutes." 
            />
          </div>

          <button className="btn-primary w-full py-6 rounded-2xl text-2xl font-black uppercase tracking-wider text-white shadow-2xl mb-8">
            Claim Your Studio Audit
          </button>
          
          <div className="flex justify-center items-center gap-6 opacity-40 grayscale">
            <i className="fa-brands fa-apple-pay text-3xl"></i>
            <i className="fa-brands fa-google-pay text-3xl"></i>
            <i className="fa-brands fa-stripe text-3xl"></i>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-40 mb-32">
          <div className="text-center mb-16">
            <h4 className="text-sm font-bold tracking-[0.4em] uppercase text-white/40 mb-4">Studio Owners Say</h4>
            <h3 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tight">The Red Light Is On.</h3>
            <div className="w-24 h-1 bg-pink-500 mx-auto mt-6"></div>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <TestimonialCard text="Missed call text-back is a game changer. I caught a 4-hour lockout booking while I was in the middle of a mix session." author="Dave S., Studio A" />
            <TestimonialCard text="The AI receptionist actually knows my outboard gear. Artists get their technical questions answered at 2 AM while I'm asleep." author="Lexi P., Head Engineer" />
            <TestimonialCard text="Deposits are automated now. No more no-shows or 'forgetting the cash' at the end of a long night." author="Marcus J., Facility Manager" />
          </div>
        </section>

      </main>

      <AIAssistant services={SERVICES} />

      <footer className="bg-black/80 backdrop-blur-xl border-t border-white/5 py-16 px-4 text-center mt-20">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-lg flex items-center justify-center font-black text-lg">C</div>
          <span className="text-xl font-black tracking-tighter uppercase font-heading">Crowd <span className="text-pink-500">Connect</span></span>
        </div>
        <p className="text-white/20 text-xs font-bold uppercase tracking-[0.3em] mb-8">© Copyrights by Crowd Connect. All Rights Reserved.</p>
        <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-white/40">
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          <a href="#" className="hover:text-white transition-colors">Login</a>
        </div>
      </footer>

      {selectedService && (
        <ServiceDetailModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
};

const PitchItem = ({ num, label, desc }: { num: string, label: string, desc: string }) => (
  <div className="flex gap-6 items-start">
    <span className="text-pink-500 font-black text-2xl font-heading opacity-50">{num}</span>
    <div>
      <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-tight">{label}</h4>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  </div>
);

const TestimonialCard = ({ text, author }: { text: string, author: string }) => (
  <div className="bg-[#16161a] border border-white/5 p-8 rounded-3xl shadow-xl transition-all hover:scale-[1.02] hover:bg-white/5 group">
    <div className="flex text-pink-500 mb-6 gap-1">
      {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star text-xs"></i>)}
    </div>
    <p className="text-white/80 text-lg leading-relaxed mb-6 font-medium italic">"{text}"</p>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600"></div>
      <p className="text-white font-black text-sm uppercase tracking-widest">{author}</p>
    </div>
  </div>
);

export default App;
