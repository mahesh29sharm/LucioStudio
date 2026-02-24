import { useState } from 'react';
import svgPaths from "../../imports/svg-lyr48eiteo";

interface CommentsDrawerProps {
  onClose: () => void;
}

interface Comment {
  id: number;
  author: string;
  initial: string;
  time: string;
  text: string;
  color: string;
}

export default function CommentsDrawer({ onClose }: CommentsDrawerProps) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'Sarah Chen',
      initial: 'S',
      time: '2:45 PM Today',
      text: 'Please review the contract terms on page 3 before our meeting tomorrow.',
      color: '#FFE4CC',
    },
    {
      id: 2,
      author: 'Michael Torres',
      initial: 'M',
      time: '11:20 AM Today',
      text: 'The liability clause needs to be updated to match the latest requirements.',
      color: '#E6FBEF',
    },
    {
      id: 3,
      author: 'Jessica Lee',
      initial: 'J',
      time: 'Yesterday',
      text: 'Great work on the executive summary! Very clear and concise.',
      color: '#E6E6FA',
    },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
      
      setComments([
        {
          id: Date.now(),
          author: 'You',
          initial: 'Y',
          time: `${timeString} Today`,
          text: newComment,
          color: '#FFDCE5',
        },
        ...comments,
      ]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (id: number) => {
    setComments(comments.filter(c => c.id !== id));
  };

  return (
    <div className="absolute bg-card h-full left-0 top-0 w-[280px] z-10 shadow-elevation-sm">
      <div className="content-stretch flex flex-col items-start relative size-full">
        {/* Header */}
        <div className="flex h-[48px] items-center justify-between px-[12px] relative shrink-0 w-full">
          {/* Tabs */}
          <div className="content-stretch flex gap-[8px] h-[32px] items-center relative rounded-[8px] shrink-0">
            <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[32px]">
              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]">
                <div className="relative shrink-0 size-[18px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g>
                      <path d={svgPaths.p284be8b0} stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M6.75 2.25V15.75" stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[32px]">
              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]">
                <div className="relative shrink-0 size-[18px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g>
                      <path d="M7 2V8L9.5 5.75L12 8V2" stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p26c0f500} stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[#ececec] content-stretch flex h-full items-center justify-center relative rounded-[8px] shrink-0 w-[32px]">
              <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(179,183,197,0.2),0px_5px_12px_0px_rgba(179,183,197,0.05)]" />
              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]">
                <div className="relative shrink-0 size-[18px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g clipPath="url(#clip0_7_1940)">
                      <path d={svgPaths.p1e836e00} stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p294d1c80} stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p219f4900} stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1940">
                        <rect fill="white" height="18" width="18" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button onClick={onClose} className="content-stretch flex items-center justify-center relative shrink-0 size-[24px] cursor-pointer">
            <div className="relative shrink-0 size-[18px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <g>
                  <path d="M13.5 4.5L4.5 13.5" stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  <path d="M4.5 4.5L13.5 13.5" stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
          </button>
        </div>

        {/* Comments List */}
        <div className="flex-[1_0_0] min-h-px min-w-px overflow-y-auto relative w-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
            {/* New Comment Input */}
            <div className="bg-white relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between p-[8px] relative w-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center min-h-px min-w-px relative">
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <div className="bg-[#e6fbef] content-stretch flex flex-col items-center justify-center p-[4.706px] relative rounded-[47.059px] shrink-0 size-[32px]">
                        <p className="font-['Poppins',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[13.176px]">M</p>
                      </div>
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                        <p className="font-['Inter',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0d0d0d] text-[14px]">You</p>
                      </div>
                    </div>
                    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex items-start px-[12px] py-[8px] relative w-full">
                          <input
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Add a comment..."
                            className="bg-transparent border-none font-['Inter',sans-serif] font-medium leading-[1.6] not-italic outline-none relative w-full text-[#0d0d0d] text-[12px]"
                          />
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
                    <div className="h-[28px] relative rounded-[4px] shrink-0">
                      <button
                        onClick={() => setNewComment('')}
                        className="content-stretch flex gap-[8px] h-full items-center overflow-clip px-[8px] relative rounded-[inherit] cursor-pointer"
                      >
                        <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0d0d0d] text-[12px]">Cancel</p>
                      </button>
                      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    </div>
                    <button
                      onClick={handleAddComment}
                      className="bg-[#1c2e28] content-stretch flex flex-col gap-[8px] h-[28px] items-start justify-center overflow-clip px-[8px] relative rounded-[4px] shrink-0 cursor-pointer"
                    >
                      <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[12px] text-white">Comment</p>
                    </button>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#597cec] border-l-2 border-solid inset-0 pointer-events-none" />
            </div>

            {/* Existing Comments */}
            {comments.map((comment) => (
              <div key={comment.id} className="relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative w-full bg-white">
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col items-center relative shrink-0" style={{ backgroundColor: comment.color }}>
                      <div className="content-stretch flex flex-col items-center justify-center p-[4.706px] relative rounded-[47.059px] shrink-0 size-[32px]">
                        <p className="font-['Poppins',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#0d0d0d] text-[13.176px]">{comment.initial}</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                        <p className="font-['Inter',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0d0d0d] text-[14px]">{comment.author}</p>
                      </div>
                      <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#8c8c8c] text-[10px]">{comment.time}</p>
                    </div>
                  </div>
                  <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] w-full">{comment.text}</p>
                </div>
                <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}