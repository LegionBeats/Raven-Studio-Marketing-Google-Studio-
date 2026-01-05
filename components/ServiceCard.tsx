
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-[#16161a] rounded-[32px] overflow-hidden shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 border border-white/5 hover:border-white/20 cursor-pointer flex flex-col h-full transform hover:-translate-y-2"
    >
      <div className="h-56 overflow-hidden relative">
        <img 
          src={service.imageUrl} 
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16161a] via-transparent to-transparent"></div>
        <div className="absolute top-6 left-6 flex gap-2">
          <span className="px-4 py-1.5 bg-black/50 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-full border border-white/10">
            {service.category}
          </span>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-3xl font-heading font-black text-white mb-3 group-hover:text-pink-500 transition-colors uppercase italic tracking-tighter">
          {service.name}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-medium">
          {service.shortDescription}
        </p>
        
        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] block mb-1">Target Price</span>
            <span className="text-white font-black text-xl tracking-tight">{service.priceRange}</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
            <i className="fa-solid fa-arrow-right text-lg"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
