import { useState } from 'react';
import svgPaths from "../../imports/svg-93v474w8nx";
import imgScreenshot20250902At125003Pm1 from "figma:asset/0d2338383c70f86d3feb30592e05aa664dba716b.png";
import imgScreenshot20250821At105911Am1 from "figma:asset/f3108fdb441b102fc3d174c73083faa8cded5315.png";

interface PagesDrawerProps {
  onClose: () => void;
  onPageSelect?: (page: number) => void;
}

export default function PagesDrawer({ onClose, onPageSelect }: PagesDrawerProps) {
  const [selectedPage, setSelectedPage] = useState(1);
  const [activeTab, setActiveTab] = useState<'pages' | 'bookmarks' | 'comments'>('pages');

  const pages = [
    { number: 1, image: imgScreenshot20250902At125003Pm1, title: 'Cover Page' },
    { number: 2, image: imgScreenshot20250821At105911Am1, title: 'Executive Summary' },
  ];

  const handlePageSelect = (pageNumber: number) => {
    setSelectedPage(pageNumber);
    onPageSelect?.(pageNumber);
  };

  return (
    <div className="absolute bg-card h-full left-0 top-0 w-[240px] z-10 shadow-elevation-sm">
      <div className="content-stretch flex flex-col items-start relative size-full">
        {/* Header */}
        <div className="flex h-[48px] items-center justify-between px-[12px] relative shrink-0 w-full">
          {/* Tabs */}
          <div className="content-stretch flex gap-[8px] h-[32px] items-center relative rounded-[8px] shrink-0">
            <div className="bg-[#ececec] content-stretch flex h-full items-center justify-center relative rounded-[8px] shrink-0 w-[32px]">
              <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(179,183,197,0.2),0px_5px_12px_0px_rgba(179,183,197,0.05)]" />
              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]">
                <div className="relative shrink-0 size-[18px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g>
                      <path d={svgPaths.p284be8b0} stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M6.75 2.25V15.75" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
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

        {/* Pages List */}
        <div className="flex-[1_0_0] min-h-px min-w-px overflow-y-auto relative w-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
            {pages.map((page) => (
              <button
                key={page.number}
                onClick={() => handlePageSelect(page.number)}
                className={`relative shrink-0 w-full cursor-pointer ${
                  page.number === selectedPage ? 'border-[#597cec] border-2' : 'border-[#e0e0e0] border-[0.5px]'
                } border-solid rounded-[8px] overflow-hidden`}
              >
                <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full bg-white">
                  {/* Page Preview */}
                  <div className="relative w-full">
                    <img
                      alt={`Page ${page.number}`}
                      className="w-full h-auto rounded-[4px]"
                      src={page.image}
                    />
                  </div>

                  {/* Page Label */}
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0d0d0d] text-[12px]">
                      {page.title}
                    </p>
                    {page.number === selectedPage && (
                      <div className="relative shrink-0 size-[18px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <g>
                            <path d="M15 4.5L6.75 12.75L3 9" stroke="#597CEC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </g>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-r-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}