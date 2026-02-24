import { useState } from 'react';
import svgPaths from "../../imports/svg-2kceuh7iwg";

interface BookmarksDrawerProps {
  onClose: () => void;
}

interface Bookmark {
  id: number;
  name: string;
  pageNumber: number;
}

export default function BookmarksDrawer({ onClose }: BookmarksDrawerProps) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([
    { id: 1, name: 'Introduction', pageNumber: 1 },
    { id: 2, name: 'Key Findings', pageNumber: 5 },
    { id: 3, name: 'Conclusion', pageNumber: 12 },
  ]);

  const handleRemoveBookmark = (id: number) => {
    setBookmarks(bookmarks.filter(b => b.id !== id));
  };

  return (
    <div className="absolute bg-card h-full left-0 top-0 w-[240px] z-10 shadow-elevation-sm">
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
            <div className="bg-[#ececec] content-stretch flex h-full items-center justify-center relative rounded-[8px] shrink-0 w-[32px]">
              <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(179,183,197,0.2),0px_5px_12px_0px_rgba(179,183,197,0.05)]" />
              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]">
                <div className="relative shrink-0 size-[18px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g>
                      <path d="M7 2V8L9.5 5.75L12 8V2" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p26c0f500} stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[32px]">
              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]">
                <div className="relative shrink-0 size-[18px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g clipPath="url(#clip0_7_1940)">
                      <path d={svgPaths.p1e836e00} stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p294d1c80} stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p219f4900} stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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

        {/* Bookmarks List */}
        <div className="flex-[1_0_0] min-h-px min-w-px overflow-y-auto relative w-full">
          <div className="content-stretch flex flex-col items-start relative w-full">
            {bookmarks.map((bookmark) => (
              <button
                key={bookmark.id}
                className="content-stretch flex gap-[8px] items-center px-[12px] py-[12px] relative shrink-0 w-full cursor-pointer hover:bg-[#fafafa] transition-colors text-left"
              >
                <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
                  <div className="relative shrink-0 size-[18px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                      <g>
                        <path d="M7 2V8L9.5 5.75L12 8V2" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p26c0f500} stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0d0d0d] text-[12px]">
                  {bookmark.name}
                </p>
                <button
                  onClick={() => handleRemoveBookmark(bookmark.id)}
                  className="content-stretch flex items-center justify-center relative shrink-0 size-[16px] cursor-pointer"
                >
                  <div className="relative shrink-0 size-[14px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <g>
                        <path d="M13.5 4.5L4.5 13.5" stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M4.5 4.5L13.5 13.5" stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                </button>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}