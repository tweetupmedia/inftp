import React from 'react';
import { motion } from 'motion/react';

interface TypingIndicatorProps {
  label?: string;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  label = 'Specialist is typing...'
}) => {
  return (
    <div id="whatsapp-typing-indicator" className="flex items-center gap-2 pt-0.5">
      <div 
        id="typing-dots-bubble"
        className="bg-white px-3 py-2 rounded-2xl rounded-tl-none border border-slate-200 shadow-2xs inline-flex items-center gap-1.5"
      >
        <motion.span
          id="typing-dot-1"
          className="w-1.5 h-1.5 rounded-full bg-[#F15A24]"
          animate={{ y: [-2, 2], opacity: [0.5, 1] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 0
          }}
        />
        <motion.span
          id="typing-dot-2"
          className="w-1.5 h-1.5 rounded-full bg-[#071D3A]"
          animate={{ y: [-2, 2], opacity: [0.5, 1] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 0.18
          }}
        />
        <motion.span
          id="typing-dot-3"
          className="w-1.5 h-1.5 rounded-full bg-slate-400"
          animate={{ y: [-2, 2], opacity: [0.5, 1] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 0.36
          }}
        />
      </div>
      <span id="typing-label-text" className="text-[11px] text-slate-400 font-medium italic">
        {label}
      </span>
    </div>
  );
};
