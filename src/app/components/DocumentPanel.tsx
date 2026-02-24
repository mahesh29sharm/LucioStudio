import { useState } from 'react';
import svgPaths from "../../imports/svg-7wafoh0qzb";
import imgDocument from "figma:asset/f3108fdb441b102fc3d174c73083faa8cded5315.png";
import PagesDrawer from './PagesDrawer';
import BookmarksDrawer from './BookmarksDrawer';
import CommentsDrawer from './CommentsDrawer';

interface OpenDocument {
  id: string;
  name: string;
}

interface DocumentPanelProps {
  openDocuments: OpenDocument[];
  activeDocumentId: string;
  onTabChange: (id: string) => void;
  onTabClose: (id: string) => void;
}

type DrawerType = 'pages' | 'bookmarks' | 'comments' | null;

// PDF File Icon for tab
function TabPDFIcon() {
  return (
    <div className="h-[17.111px] overflow-clip relative shrink-0 w-[14px]">
      <div className="absolute inset-[4.54%_5.56%_4.55%_6.94%]">
        <div className="absolute inset-[4.54%_5.56%_4.55%_6.94%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.249 15.5556">
            <path d={svgPaths.p2c780180} fill="#E43438" />
          </svg>
        </div>
        <div className="absolute inset-[25.42%_5.57%_65.06%_64.89%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.13505 1.62847">
            <path d={svgPaths.pb922700} fill="#6B0D12" />
          </svg>
        </div>
        <div className="absolute inset-[4.54%_5.58%_66.48%_64.89%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.13403 4.95833">
            <path d={svgPaths.p26ed4680} fill="white" opacity="0.5" />
          </svg>
        </div>
        <div className="absolute flex flex-col font-['Inter',sans-serif] font-semibold inset-[58.33%_13.43%_12.5%_15.28%] justify-center leading-[0] not-italic text-[3.56px] text-center text-white">
          <p className="leading-[1.6] whitespace-pre-wrap">PDF</p>
        </div>
      </div>
    </div>
  );
}

// Close Icon for tab
function CloseIcon() {
  return (
    <div className="flex-none h-[7.31px] rotate-[87.07deg] scale-y-97 skew-x-[-14.67deg] w-[8.788px]">
      <div className="relative size-full">
        <div className="absolute inset-[-6.22%_-5.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6974 8.2194">
            <g>
              <path d="M0.4546 0.4546L9.2428 7.7648" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="0.909176" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function DocumentPanel({ openDocuments, activeDocumentId, onTabChange, onTabClose }: DocumentPanelProps) {
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);
  const [zoomLevel, setZoomLevel] = useState(100);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 25, 50));
  };

  const toggleDrawer = (drawer: DrawerType) => {
    setActiveDrawer(activeDrawer === drawer ? null : drawer);
  };

  const activeDocument = openDocuments.find(doc => doc.id === activeDocumentId);
  const documentName = activeDocument ? activeDocument.name : '';

  return (
    <div className="bg-[#f7f7f7] content-stretch flex flex-col items-start justify-center relative flex-1 h-full">
      {/* Tab Area */}
      <div className="bg-[#f7f7f7] h-[40px] relative shrink-0 w-full overflow-x-auto">
        <div className="flex flex-row items-end overflow-clip rounded-[inherit] h-full">
          <div className="content-stretch flex items-end px-[4px] relative h-full gap-[4px]">
            {openDocuments.map((doc) => {
              const isActive = doc.id === activeDocumentId;
              return (
                <div 
                  key={doc.id}
                  className={`h-[36px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 ${isActive ? 'bg-[#fafafa]' : 'bg-[#ececec]'}`}
                >
                  <div className="content-stretch flex gap-[5px] h-full items-center justify-center overflow-clip p-[10px] relative rounded-[inherit]">
                    <TabPDFIcon />
                    <button
                      onClick={() => onTabChange(doc.id)}
                      className="font-['Inter',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0d0d0d] text-[10px] cursor-pointer hover:opacity-80 max-w-[120px] truncate"
                    >
                      {doc.name}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onTabClose(doc.id);
                      }}
                      className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px] cursor-pointer hover:opacity-60 transition-opacity"
                    >
                      <div className="h-[10.219px] relative shrink-0 w-[10.607px]">
                        <div className="absolute contents inset-[-0.54%_0.56%_0.09%_-0.56%]">
                          <div className="absolute flex inset-[-0.54%_12.07%_0.09%_16.22%] items-center justify-center">
                            <CloseIcon />
                          </div>
                          <div className="absolute flex inset-[14.32%_0.56%_16%_-0.56%] items-center justify-center">
                            <div className="flex-none h-[7.31px] rotate-[-0.27deg] scale-y-97 skew-x-[-14.67deg] w-[8.788px]">
                              <div className="relative size-full">
                                <div className="absolute inset-[-6.22%_-5.17%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.69737 8.21942">
                                    <g>
                                      <path d={svgPaths.p3dfb9680} stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="1.5" strokeWidth="0.909176" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div aria-hidden="true" className="absolute border-[#e0e0e0] border-l-[0.5px] border-r-[0.5px] border-solid border-t-[0.5px] inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Document Controls */}
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full">
          <div className="bg-[#fafafa] h-[48px] relative rounded-tl-[4px] shrink-0 w-full">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
                {/* Left Controls */}
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  {/* Menu */}
                  <button
                    onClick={() => toggleDrawer('pages')}
                    className="content-stretch flex items-center justify-center relative shrink-0 size-[24px] cursor-pointer"
                  >
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g>
                          <path d="M3 9H15" stroke={activeDrawer === 'pages' ? '#0D0D0D' : '#595959'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M3 13.5H15" stroke={activeDrawer === 'pages' ? '#0D0D0D' : '#595959'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d="M3 4.5H15" stroke={activeDrawer === 'pages' ? '#0D0D0D' : '#595959'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                  </button>

                  {/* Bookmark */}
                  <button
                    onClick={() => toggleDrawer('bookmarks')}
                    className="content-stretch flex items-center justify-center relative shrink-0 size-[24px] cursor-pointer"
                  >
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g>
                          <path d="M7 2V8L9.5 5.75L12 8V2" stroke={activeDrawer === 'bookmarks' ? '#0D0D0D' : '#595959'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p26c0f500} stroke={activeDrawer === 'bookmarks' ? '#0D0D0D' : '#595959'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                      </svg>
                    </div>
                  </button>

                  {/* Comments */}
                  <button
                    onClick={() => toggleDrawer('comments')}
                    className="content-stretch flex items-center justify-center relative shrink-0 size-[24px] cursor-pointer"
                  >
                    <div className="relative shrink-0 size-[18px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g clipPath="url(#clip0_comments)">
                          <path d={svgPaths.p3d5ebfc0} stroke={activeDrawer === 'comments' ? '#0D0D0D' : '#595959'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          <path d={svgPaths.p2ee89760} stroke={activeDrawer === 'comments' ? '#0D0D0D' : '#595959'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        </g>
                        <defs>
                          <clipPath id="clip0_comments">
                            <rect fill="white" height="18" width="18" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </button>

                  {/* Divider */}
                  <div className="flex h-[18px] items-center justify-center relative shrink-0 w-0">
                    <div className="flex-none rotate-90">
                      <div className="h-0 relative w-[18px]">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 1">
                            <line stroke="#E0E0E0" x2="18" y1="0.5" y2="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Page Number */}
                  <div className="content-stretch flex items-center relative shrink-0">
                    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
                      <div className="bg-[#f7f7f7] content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[20px]">
                        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                        <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] w-[6px] whitespace-pre-wrap">1</p>
                      </div>
                      <p className="font-['Poppins',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#8c8c8c] text-[10px]">/</p>
                      <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#8c8c8c] text-[12px]">2</p>
                    </div>
                  </div>
                </div>

                {/* Right Controls */}
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                  {/* Zoom Controls */}
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                      <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#8c8c8c] text-[12px]">{zoomLevel}%</p>
                      <div className="relative shrink-0 size-[14px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                          <g>
                            <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#8C8C8C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          </g>
                        </svg>
                      </div>
                    </div>

                    {/* Zoom Out */}
                    <button
                      onClick={handleZoomOut}
                      className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px] cursor-pointer"
                    >
                      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]">
                        <div className="relative shrink-0 size-[18px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g>
                              <path d={svgPaths.p126da180} stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d={svgPaths.pa5ce9c0} stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M6 8.25H10.5" stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </button>

                    {/* Zoom In */}
                    <button
                      onClick={handleZoomIn}
                      className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px] cursor-pointer"
                    >
                      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]">
                        <div className="relative shrink-0 size-[18px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g>
                              <path d={svgPaths.p126da180} stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d={svgPaths.pa5ce9c0} stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M8.25 6V10.5" stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M6 8.25H10.5" stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="flex h-[18px] items-center justify-center relative shrink-0 w-0">
                    <div className="flex-none rotate-90">
                      <div className="h-0 relative w-[18px]">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 1">
                            <line stroke="#F7F7F7" x2="18" y1="0.5" y2="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Scan/Capture and Pencil */}
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    {/* Scan Selected */}
                    <div className="bg-[#ececec] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]">
                      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      <div className="content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 size-[24px]">
                        <div className="relative shrink-0 size-[18px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g>
                              <path d={svgPaths.p10e2c270} stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d={svgPaths.p31307100} stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d={svgPaths.p2ed227e0} stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d={svgPaths.p213c7000} stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M6.75 2.25H7.5" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M6.75 15.75H8.25" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M10.5 2.25H11.25" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M2.25 6.75V7.5" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M15.75 6.75V8.25" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M2.25 10.5V11.25" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Pencil */}
                    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]">
                      <div className="content-stretch flex items-center justify-center relative rounded-[5px] shrink-0 size-[24px]">
                        <div className="relative shrink-0 size-[18px]">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g>
                              <path d={svgPaths.p1bf7e00} stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d={svgPaths.p1bcff000} stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="flex h-[18px] items-center justify-center relative shrink-0 w-0">
                    <div className="flex-none rotate-90">
                      <div className="h-0 relative w-[18px]">
                        <div className="absolute inset-[-1px_0_0_0]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 1">
                            <line stroke="#E0E0E0" x2="18" y1="0.5" y2="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat and Bookmark Icons */}
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    {/* Chat */}
                    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]">
                      <div className="relative rounded-[5px] shrink-0 size-[24px]">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g>
                              <path d={svgPaths.p1bb47df0} stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M5.25 8.25H12.75" stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M5.25 11.25H9.75" stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                              <path d="M5.25 5.25H11.25" stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Bookmark */}
                    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]">
                      <div className="relative rounded-[5px] shrink-0 size-[24px]">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2">
                          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                            <g>
                              <path d={svgPaths.p331ee780} stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* More Options */}
                  <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[24px]">
                    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center justify-center min-h-px min-w-px py-px relative">
                      <div className="relative shrink-0 size-[18px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <g>
                            <path d={svgPaths.p3f4e600} stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d={svgPaths.p2aca4e80} stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d={svgPaths.p10b1cef0} stroke="#595959" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Document Viewer */}
          <div className="bg-[#fafafa] flex-[1_0_0] min-h-px min-w-px relative w-full overflow-hidden">
            <div className="flex flex-row items-center justify-center size-full overflow-auto">
              <div className="content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[16px] relative">
                <div 
                  className="pointer-events-none relative rounded-[12px] transition-transform duration-200"
                  style={{ 
                    transform: `scale(${zoomLevel / 100})`,
                    transformOrigin: 'center center'
                  }}
                >
                  <img
                    alt={documentName}
                    className="max-w-none object-cover rounded-[12px]"
                    src={imgDocument}
                    style={{ width: '600px', height: 'auto' }}
                  />
                  <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 rounded-[12px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.25)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Drawers */}
      {activeDrawer === 'pages' && <PagesDrawer onClose={() => setActiveDrawer(null)} />}
      {activeDrawer === 'bookmarks' && <BookmarksDrawer onClose={() => setActiveDrawer(null)} />}
      {activeDrawer === 'comments' && <CommentsDrawer onClose={() => setActiveDrawer(null)} />}
    </div>
  );
}