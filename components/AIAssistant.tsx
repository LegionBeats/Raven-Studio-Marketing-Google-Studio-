
import React, { useState, useRef, useEffect } from 'react';
import { getServiceRecommendation } from '../services/geminiService';
import { Service, ChatMessage } from '../types';

interface AIAssistantProps {
  services: Service[];
}

const AIAssistant: React.FC<AIAssistantProps> = ({ services }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Yo! I'm your Automation Scout. Tell me about your business bottleneck, and I'll find the perfect workflow from our catalog." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await getServiceRecommendation(inputValue, services);
      const assistantMessage: ChatMessage = { role: 'assistant', content: response || "System error. Please try again." };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Failed to connect to automation core." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* FAB */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 w-16 h-16 rounded-3xl shadow-2xl z-50 flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-white text-black' : 'btn-primary text-white'
        }`}
      >
        {isOpen ? (
          <i className="fa-solid fa-xmark text-xl"></i>
        ) : (
          <i className="fa-solid fa-robot text-2xl"></i>
        )}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-28 right-8 w-[90vw] md:w-[400px] bg-[#16161a] rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] z-50 flex flex-col border border-white/10 overflow-hidden transition-all duration-500 origin-bottom-right ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
      }`} style={{ maxHeight: '70vh' }}>
        
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-white">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center border border-white/20">
              <i className="fa-solid fa-bolt text-lg"></i>
            </div>
            <div>
              <h4 className="font-black uppercase tracking-widest text-sm">Crowd Bot 2.0</h4>
              <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Automation Intelligence</p>
            </div>
          </div>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-[#0a0a0c] min-h-[400px] no-scrollbar">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] px-5 py-4 rounded-3xl text-sm leading-relaxed font-medium ${
                msg.role === 'user' 
                  ? 'bg-white text-black rounded-tr-none' 
                  : 'bg-[#16161a] text-white/80 border border-white/5 rounded-tl-none'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#16161a] px-5 py-4 rounded-3xl rounded-tl-none border border-white/5">
                <div className="flex gap-1.5">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-6 bg-[#16161a] border-t border-white/5 flex gap-3">
          <input 
            type="text" 
            placeholder="Ask about your infrastructure..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-grow px-5 py-3.5 bg-black/40 rounded-2xl border border-white/10 outline-none focus:ring-1 focus:ring-pink-500 text-sm text-white"
          />
          <button 
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
            className="w-12 h-12 rounded-2xl btn-primary text-white flex items-center justify-center disabled:bg-white/10 disabled:text-white/20 transition-all shadow-xl"
          >
            <i className="fa-solid fa-arrow-up text-lg"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
