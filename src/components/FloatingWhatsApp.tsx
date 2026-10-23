import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Clock, Check } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/mockData';
import { TypingIndicator } from './TypingIndicator';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const sendWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${encoded}`, '_blank');
  };

  const quickPrompts = [
    'Hi! I want to plan a family trip to Kashmir next month.',
    'Hello! Can you help us decide between Bali and Switzerland for our honeymoon?',
    'Hi Info Tripp, I would like to get a quote for the Rajasthan Royal Heritage package.',
    'Hi, I have elderly parents and want an easy-paced customized itinerary.',
    'What is your current visa assistance process?'
  ];

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (customMsg.trim()) {
      sendWhatsApp(customMsg);
      setCustomMsg('');
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up Dialog */}
      {isOpen && (
        <div 
          id="whatsapp-chat-popup"
          className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 animate-fadeIn"
        >
          {/* Header */}
          <div className="bg-[#071D3A] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#F15A24] flex items-center justify-center text-white font-bold text-sm shadow-xs">
                  IT
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#F15A24] border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="font-semibold text-sm leading-tight text-white">
                  Info Tripp Concierge Desk
                </h4>
                <p className="text-[11px] text-slate-200 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#F15A24]" />
                  <span>Human Specialist Online • 4m response</span>
                </p>
              </div>
            </div>
            <button
              id="close-whatsapp-popup-btn"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close WhatsApp chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs max-h-72 overflow-y-auto">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-2xs text-slate-700 leading-relaxed">
              👋 Namaste! Welcome to Info Tripp. How can our travel specialists simplify your next journey today?
            </div>

            {/* Subtle Typing Indicator */}
            <TypingIndicator />

            <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider pt-1">
              Tap a quick question:
            </div>

            <div className="space-y-1.5">
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    sendWhatsApp(prompt);
                    setIsOpen(false);
                  }}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-[#F15A24]/10 border border-slate-200 hover:border-[#F15A24]/50 text-slate-700 hover:text-[#071D3A] transition-all flex items-center justify-between group text-[11.5px]"
                >
                  <span className="line-clamp-2">{prompt}</span>
                  <Send className="w-3 h-3 text-slate-400 group-hover:text-[#F15A24] shrink-0 ml-1.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input */}
          <form onSubmit={handleCustomSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              id="whatsapp-custom-input"
              type="text"
              placeholder="Type your message..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:ring-1 focus:ring-[#071D3A]"
            />
            <button
              id="whatsapp-custom-send-btn"
              type="submit"
              className="p-2 bg-[#F15A24] hover:bg-[#D84815] text-white rounded-xl transition-colors shadow-xs"
              aria-label="Send WhatsApp message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        id="floating-whatsapp-trigger-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        aria-label="Open WhatsApp Concierge"
      >
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="font-semibold text-sm pr-1 hidden sm:inline tracking-wide">
          WhatsApp Concierge
        </span>
      </button>
    </div>
  );
};
