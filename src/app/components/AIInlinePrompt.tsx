import { useState, useEffect, useRef } from 'react';

interface AIInlinePromptProps {
  position: { top: number; left: number };
  onClose: () => void;
  onSubmit: (prompt: string) => void;
  selectedText: string;
}

// Suggested actions
const suggestions = [
  { icon: '📄', label: 'Summarize', prompt: 'Summarize this text' },
  { icon: '✓', label: 'Extract action items', prompt: 'Extract action items from this text' },
  { icon: '⚠️', label: 'Identify risks', prompt: 'Identify potential risks and issues' },
  { icon: '✨', label: 'Improve writing', prompt: 'Improve the writing of this text' },
];

export default function AIInlinePrompt({ position, onClose, onSubmit, selectedText }: AIInlinePromptProps) {
  const [prompt, setPrompt] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSend = () => {
    if (!prompt.trim()) return;
    onSubmit(prompt);
  };

  const handleSuggestionClick = (suggestion: typeof suggestions[0]) => {
    onSubmit(suggestion.prompt);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      />
      
      {/* Floating prompt */}
      <div 
        className="fixed z-50 bg-white rounded-[8px] shadow-[0px_4px_16px_rgba(0,0,0,0.15)] border border-[#e0e0e0] w-[380px]"
        style={{ 
          top: `${position.top}px`, 
          left: `${position.left}px`,
          maxHeight: '400px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Input area */}
        <div className="p-[12px] border-b border-[#e0e0e0]">
          <div className="flex items-center gap-[8px]">
            <div className="flex items-center justify-center w-[16px] h-[16px]">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1.5V10.5" stroke="#1C2E28" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M3 4L6 1.5L9 4" stroke="#1C2E28" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 8L6 10.5L3 8" stroke="#1C2E28" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSend();
                if (e.key === 'Escape') onClose();
              }}
              placeholder="Ask AI anything..."
              className="flex-1 font-['Inter',sans-serif] text-[13px] text-[#0d0d0d] outline-none bg-transparent"
            />
            <button
              onClick={handleSend}
              disabled={!prompt.trim()}
              className={`flex items-center justify-center w-[24px] h-[24px] rounded-full transition-colors ${
                !prompt.trim()
                  ? 'bg-[#e0e0e0] cursor-not-allowed'
                  : 'bg-[#1c2e28] hover:bg-[#243830] cursor-pointer'
              }`}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path 
                  d="M11 1L5.5 6.5" 
                  stroke={!prompt.trim() ? '#8c8c8c' : 'white'} 
                  strokeWidth="1.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M11 1L7.5 11L5.5 6.5L1 4.5L11 1Z" 
                  stroke={!prompt.trim() ? '#8c8c8c' : 'white'}
                  strokeWidth="1.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Suggestions */}
        <div className="flex flex-col p-[8px] overflow-y-auto">
          <p className="font-['Inter',sans-serif] text-[10px] font-semibold text-[#8c8c8c] uppercase tracking-wide px-[8px] py-[4px]">
            Suggested
          </p>
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="flex items-center gap-[10px] p-[8px] rounded-[6px] hover:bg-[#f7f7f7] transition-colors text-left"
            >
              <span className="text-[16px]">{suggestion.icon}</span>
              <span className="font-['Inter',sans-serif] text-[13px] text-[#0d0d0d]">
                {suggestion.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
