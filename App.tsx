
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
          <a href="#faq" className="hover:text-pink-500 transition-colors">FAQ</a>
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
          <div className="inline-block px-6 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-10">
            <span className="text-orange-500 text-[11px] font-black uppercase tracking-[0.2em]">The #1 Operating System for Studios</span>
          </div>
          
          <h1 className="text-6xl md:text-[110px] font-heading font-black leading-[0.85] mb-8 text-white uppercase italic tracking-tighter">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Business Empire</span> in Days.
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            Everything you need to automate your lead flow, rescue missed calls, and scale your client base without spending thousands on a team of assistants.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-16 py-6 rounded-2xl text-xl font-black uppercase tracking-wider text-white shadow-2xl"
            >
              Get Instant Access
            </button>
            
            <div className="flex items-center gap-4">
              <div className="flex text-yellow-500 text-sm">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-sm text-slate-400 font-medium"><span className="text-white font-bold">4.8 Rating</span> with 1,400+ clients worldwide</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="catalog" className="flex-grow max-w-7xl mx-auto w-full px-4 pb-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-white/40 mb-4">Introducing...</h2>
          <h3 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tight">Crowd Connect <span className="text-pink-500 italic">2.0</span></h3>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-6"></div>
        </div>

        {/* Filter Bar */}
        <div className="bg-[#16161a] border border-white/5 rounded-3xl p-4 mb-16 flex flex-col md:flex-row gap-6 items-center justify-between sticky top-24 z-30 shadow-2xl">
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
              placeholder="Search products..."
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

        {/* Testimonials Section */}
        <section className="mt-40 mb-32">
          <div className="text-center mb-16">
            <h4 className="text-sm font-bold tracking-[0.4em] uppercase text-white/40 mb-4">Real Results, Real Fast</h4>
            <h3 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tight">What do our clients say?</h3>
            <div className="w-24 h-1 bg-pink-500 mx-auto mt-6"></div>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <TestimonialCard text="Crowd Connect completely transformed my studio workflow. The missed call text-back feature alone paid for the entire year in week one!" author="Marcus V." />
            <TestimonialCard text="Best tips and advice I've ever seen in the industry. The automation setup is incredibly smooth." author="Sarah L." />
            <TestimonialCard text="I was skeptical about AI chatbots but the booking agent they built is saving me 10+ hours a week. Highly recommend." author="Steffen J." />
            <TestimonialCard text="The smart website funnel actually converts. Finally a web presence that makes money instead of just sitting there." author="Jason D." />
            <TestimonialCard text="10/10 service. The A2P registration was handled for me and everything works exactly as promised." author="Nacho R." />
            <TestimonialCard text="No fluff. Just the systems that work. Crowd Connect is the real deal." author="Eric M." />
          </div>
        </section>

        {/* Pricing/Access Box */}
        <section className="mt-40 bg-[#16161a] border border-white/10 rounded-[40px] p-8 md:p-16 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[100px] pointer-events-none"></div>
          
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-heading font-black uppercase mb-4 tracking-tighter">Ready to level up?</h3>
            <div className="w-16 h-1 bg-pink-500 mx-auto"></div>
          </div>

          <div className="space-y-6 mb-12">
            <PricingItem label="Full Business OS Suite" price="€700" check />
            <PricingItem label="AI Chatbot & Booking Integration" price="€200" check />
            <PricingItem label="Missed Call Rescue Automation" price="€150" check />
            <PricingItem label="A2P & SMS Compliance Handling" price="€100" check />
            <PricingItem label="Lifetime Access & Updates" price="€400" check />
            <div className="border-t border-white/5 pt-6 flex justify-between items-center text-white/40 font-medium">
              <span>Total Value</span>
              <span>€1550</span>
            </div>
            <div className="flex justify-between items-center text-white font-bold text-xl">
              <span>Normal Price</span>
              <span>€297</span>
            </div>
            <div className="flex justify-between items-center text-pink-500 font-black text-2xl">
              <span className="flex items-center gap-2">✨ New Year's Sale <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white font-bold">STILL ACTIVE</span></span>
              <span>€197</span>
            </div>
          </div>

          <button className="btn-primary w-full py-6 rounded-2xl text-2xl font-black uppercase tracking-wider text-white shadow-2xl mb-8">
            Get Instant Access
          </button>
          
          <div className="flex flex-col items-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6 opacity-40 invert grayscale" alt="PayPal" />
            <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em]">30-Day Money Back Guarantee</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mt-40 max-w-3xl mx-auto">
          <div className="text-center mb-16">
             <h3 className="text-4xl font-heading font-black uppercase tracking-tight">Questions?</h3>
             <div className="w-16 h-1 bg-pink-500 mx-auto mt-4"></div>
          </div>
          <div className="space-y-4">
            <FAQItem question="What is the ongoing software cost?" answer="The core infrastructure runs on Crowd Connect (GHL) which is $97/month. This replaces your CRM, booking site, email host, and automation tools." />
            <FAQItem question="Do I need technical skills?" answer="No. We handle the heavy lifting including DNS settings, A2P registration, and API connections. You focus on your business." />
            <FAQItem question="How long does setup take?" answer="Standard setups take about 6-8 business days once we have your EIN and business details for compliance." />
            <FAQItem question="Is there a money back guarantee?" answer="Yes! We offer a 30-day zero-risk guarantee. If you aren't completely satisfied, we'll refund your setup fee." />
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

const PricingItem = ({ label, price, check }: { label: string, price: string, check?: boolean }) => (
  <div className="flex justify-between items-center text-sm font-medium">
    <div className="flex items-center gap-3">
      {check && <i className="fa-solid fa-circle-check text-emerald-400"></i>}
      <span className="text-white/80">{label}</span>
    </div>
    <span className="text-white">{price}</span>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#16161a] border border-white/5 rounded-2xl overflow-hidden transition-all">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-lg font-bold text-white">{question}</span>
        <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${open ? 'rotate-180' : ''}`}></i>
      </button>
      <div className={`transition-all duration-300 ${open ? 'max-h-96 opacity-100 p-8 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <p className="text-slate-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

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
