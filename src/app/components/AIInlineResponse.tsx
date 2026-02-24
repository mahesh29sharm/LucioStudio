import { useState, useEffect } from 'react';

interface AIInlineResponseProps {
  prompt: string;
  onAccept: (response: string) => void;
  onDiscard: () => void;
}

export default function AIInlineResponse({ prompt, onAccept, onDiscard }: AIInlineResponseProps) {
  const [isGenerating, setIsGenerating] = useState(true);
  const [generatedResponse, setGeneratedResponse] = useState('');
  const [displayedResponse, setDisplayedResponse] = useState('');

  // Generate response on mount
  useEffect(() => {
    const generateResponse = async () => {
      await new Promise(resolve => setTimeout(resolve, 800));
      const mockResponse = generateMockResponse(prompt);
      setGeneratedResponse(mockResponse);
    };
    generateResponse();
  }, [prompt]);

  // Stream the response
  useEffect(() => {
    if (generatedResponse && displayedResponse.length < generatedResponse.length) {
      const timeout = setTimeout(() => {
        setDisplayedResponse(generatedResponse.slice(0, displayedResponse.length + 2));
      }, 20);
      return () => clearTimeout(timeout);
    } else if (generatedResponse && displayedResponse.length >= generatedResponse.length) {
      setIsGenerating(false);
    }
  }, [generatedResponse, displayedResponse]);

  const generateMockResponse = (prompt: string): string => {
    const lower = prompt.toLowerCase();
    if (lower.includes('summarize') || lower.includes('summary')) {
      return `This document discusses a legal case involving a skiing accident. The key points include:\n\n• The collision resulted in serious injuries and a manslaughter charge\n• The trial court initially dismissed the charge due to insufficient evidence\n• The appellate court reversed this decision, finding probable cause\n• The case establishes important precedents for reckless conduct definitions`;
    } else if (lower.includes('action') || lower.includes('extract')) {
      return `1. Review the Colorado Court of Appeals decision in detail\n2. Analyze the definition of "reckless conduct" as applied in this case\n3. Prepare briefing on probable cause standards for preliminary hearings\n4. Consider implications for similar cases involving recreational activities`;
    } else if (lower.includes('risk') || lower.includes('issue')) {
      return `⚠️ Legal Precedent: This case may establish a lower threshold for reckless manslaughter charges\n⚠️ Evidentiary Standards: The appellate court's reversal suggests different standards for preliminary hearings\n⚠️ Liability Concerns: Recreational activity participants may face increased exposure to criminal liability`;
    } else if (lower.includes('improve') || lower.includes('writing')) {
      return `The Colorado Court of Appeals examined a skiing accident case that resulted in a manslaughter charge. Following a thorough review of the evidence, the appellate court determined that sufficient probable cause existed to proceed with the case, reversing the trial court's initial dismissal. This decision has established significant legal precedents regarding the interpretation of reckless conduct in recreational settings.`;
    } else {
      return `Based on your query, the document outlines important judicial proceedings regarding a skiing accident case. The court's analysis focused on establishing probable cause for criminal charges, with particular attention to defining reckless conduct standards. This determination carries significant implications for similar cases in the future.`;
    }
  };

  const isResponseComplete = generatedResponse && displayedResponse.length >= generatedResponse.length;

  return (
    <div className="my-[16px] p-[12px] bg-[#f7f7f7] rounded-[8px] border border-[#e0e0e0]">
      {/* AI Badge */}
      <div className="flex items-center gap-[6px] mb-[12px]">
        <div className="flex items-center justify-center w-[16px] h-[16px] bg-[#1c2e28] rounded-[4px]">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1V9" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
            <path d="M2.5 3.5L5 1L7.5 3.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5 6.5L5 9L2.5 6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="font-['Inter',sans-serif] text-[11px] font-semibold text-[#1c2e28]">
          AI Response
        </span>
      </div>

      {/* Generating state */}
      {isGenerating && !generatedResponse && (
        <div className="flex items-center gap-[8px] py-[8px]">
          <div className="flex gap-[3px]">
            <div className="w-[6px] h-[6px] bg-[#1c2e28] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-[6px] h-[6px] bg-[#1c2e28] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-[6px] h-[6px] bg-[#1c2e28] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          <span className="font-['Inter',sans-serif] text-[12px] text-[#8c8c8c]">
            Generating...
          </span>
        </div>
      )}

      {/* Response text */}
      {generatedResponse && (
        <>
          <div className="font-['Inter',sans-serif] text-[14px] text-[#0d0d0d] leading-[1.6] whitespace-pre-wrap mb-[12px]">
            {displayedResponse}
            {!isResponseComplete && (
              <span className="inline-block w-[2px] h-[14px] bg-[#1c2e28] ml-[2px] animate-pulse"></span>
            )}
          </div>

          {/* Action buttons */}
          {isResponseComplete && (
            <div className="flex items-center gap-[8px] pt-[8px] border-t border-[#e0e0e0]">
              <button
                onClick={() => onAccept(displayedResponse)}
                className="flex items-center gap-[6px] px-[10px] py-[6px] rounded-[6px] bg-[#1c2e28] hover:bg-[#243830] transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-['Inter',sans-serif] text-[12px] font-medium text-white">
                  Accept
                </span>
              </button>
              <button
                onClick={onDiscard}
                className="flex items-center gap-[6px] px-[10px] py-[6px] rounded-[6px] hover:bg-[#ffe5e5] transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M9 3L3 9" stroke="#E43438" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 3L9 9" stroke="#E43438" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-['Inter',sans-serif] text-[12px] font-medium text-[#E43438]">
                  Discard
                </span>
              </button>
              <button
                onClick={onDiscard}
                className="flex items-center justify-center w-[28px] h-[28px] rounded-[6px] hover:bg-[#e0e0e0] transition-colors ml-auto"
                title="Try again"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C8.44639 2 9.74608 2.60879 10.6543 3.58" stroke="#8c8c8c" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M10 2V4H8" stroke="#8c8c8c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
