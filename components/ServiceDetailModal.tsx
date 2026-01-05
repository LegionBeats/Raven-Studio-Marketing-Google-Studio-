
import React from 'react';
import { Service } from '../types';

interface ServiceDetailModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-2xl transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-[#0a0a0c] w-full max-w-5xl rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col md:flex-row max-h-[95vh] border border-white/10 animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-all border border-white/10"
        >
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>

        <div className="md:w-1/2 h-72 md:h-auto overflow-hidden relative">
          <img 
            src={service.imageUrl} 
            alt={service.name}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-transparent to-[#0a0a0c]"></div>
        </div>

        <div className="md:w-1/2 p-8 md:p-16 overflow-y-auto">
          <div className="mb-10">
            <span className="px-5 py-2 bg-pink-500/10 text-pink-500 text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8 inline-block border border-pink-500/20">
              {service.category}
            </span>
            <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-6 uppercase leading-none tracking-tighter italic">
              {service.name}
            </h2>
            <p className="text-slate-400 text-xl font-medium leading-relaxed mb-10">
              {service.fullDescription}
            </p>
          </div>

          <div className="space-y-12 mb-12">
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-pink-500"></span>
                Value Proposition
              </h4>
              <p className="text-pink-500 text-2xl font-black leading-tight italic tracking-tight">
                "{service.valueProposition}"
              </p>
            </div>
            
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-pink-500"></span>
                Features Included
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-white/60 text-sm font-bold flex items-center gap-3">
                    <i className="fa-solid fa-check text-emerald-400 text-xs"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-left">
              <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] block mb-2">Setup Investment</span>
              <span className="text-4xl font-black text-white tracking-tighter">{service.priceRange}</span>
            </div>
            <button className="btn-primary px-10 py-5 rounded-2xl text-lg font-black uppercase tracking-wider text-white shadow-2xl transform hover:scale-105 transition-all">
              Reserve Setup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
