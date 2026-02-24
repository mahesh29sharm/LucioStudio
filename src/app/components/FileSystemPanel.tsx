import { useState } from 'react';
import {
  HomeIcon,
  SidebarIcon,
  SearchIcon,
  ThreeDotsIcon,
  PlusIcon,
  BellIcon,
  SettingsIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  FolderIcon,
  PDFFileIcon,
  WordFileIcon,
} from './icons';

interface FileSystemPanelProps {
  onDocumentOpen: (name: string) => void;
  activeDocumentName: string;
}

interface FileNode {
  name: string;
  type: 'folder' | 'pdf' | 'word';
  children?: FileNode[];
}

const fileStructure: FileNode[] = [
  {
    name: 'Lucio',
    type: 'folder',
    children: [
      { name: 'Legal Case Brief', type: 'pdf' },
      { name: 'Case Study Analysis', type: 'pdf' },
      { name: 'Summary of Findings', type: 'pdf' },
      { name: 'Customer Survey Results', type: 'pdf' },
      { name: 'Market Research Report', type: 'pdf' },
      { name: 'Project Proposal Agree..', type: 'word' },
    ]
  },
  {
    name: 'Trilegal',
    type: 'folder',
    children: [
      { name: 'Contract Agreement 2025', type: 'pdf' },
      { name: 'Legal Framework Document', type: 'pdf' },
      { name: 'Compliance Report Q1', type: 'pdf' },
    ]
  },
  {
    name: 'Important Documents',
    type: 'folder',
    children: [
      { name: 'Annual Financial Report', type: 'pdf' },
      { name: 'Strategic Planning Guide', type: 'pdf' },
      { name: 'Employee Handbook 2025', type: 'pdf' },
    ]
  },
  {
    name: 'Final Drafts',
    type: 'folder',
    children: [
      { name: 'Final Presentation Deck', type: 'pdf' },
      { name: 'Project Completion Report', type: 'pdf' },
    ]
  },
  {
    name: 'Hiring',
    type: 'folder',
    children: [
      { name: 'Candidate Evaluation Form', type: 'pdf' },
      { name: 'Interview Guidelines', type: 'pdf' },
    ]
  },
  {
    name: 'Reports and Stats',
    type: 'folder',
    children: [
      { name: 'Monthly Performance Report', type: 'pdf' },
      { name: 'Sales Analysis Q4 2024', type: 'pdf' },
      { name: 'Customer Satisfaction Survey', type: 'pdf' },
    ]
  },
];

function FolderItem({ node, onSelect, selectedDocument, depth = 0 }: {
  node: FileNode;
  onSelect: (name: string) => void;
  selectedDocument: string;
  depth?: number;
}) {
  const [isExpanded, setIsExpanded] = useState(node.name === 'Lucio');

  const handleClick = () => {
    if (node.type === 'folder') {
      setIsExpanded(!isExpanded);
    } else {
      onSelect(node.name);
    }
  };

  const isSelected = node.type !== 'folder' && selectedDocument === node.name;

  return (
    <div>
      <div
        onClick={handleClick}
        className={`h-[36px] relative rounded-[6px] cursor-pointer ${
          isSelected ? 'bg-[#ececec]' : ''
        }`}
      >
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                {node.type === 'folder' ? (
                  <>
                    <button className="content-stretch cursor-pointer flex items-center justify-center relative shrink-0 size-[20px]">
                      {isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
                    </button>
                    <FolderIcon />
                    <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0d0d0d] text-[12px]">
                      {node.name}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
                      {node.type === 'pdf' ? <PDFFileIcon /> : <WordFileIcon />}
                    </div>
                    <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0d0d0d] text-[12px]">
                      {node.name}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {node.type === 'folder' && isExpanded && node.children && node.children.length > 0 && (
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start pl-[24px] relative w-full">
            {node.children.map((child, idx) => (
              <FolderItem
                key={idx}
                node={child}
                onSelect={onSelect}
                selectedDocument={selectedDocument}
                depth={depth + 1}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function FileSystemPanel({ onDocumentOpen, activeDocumentName }: FileSystemPanelProps) {
  return (
    <div className="bg-sidebar content-stretch flex flex-col items-start relative shrink-0 w-full h-full">
      {/* Header */}
      <div className="h-[56px] relative shrink-0 w-full">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <HomeIcon />
                <p className="font-['Inter',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0d0d0d] text-[14px]">
                  Home
                </p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
                <SidebarIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="h-[36px] relative shrink-0 w-full">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start justify-center px-[4px] relative size-full">
            <div className="bg-[#f7f7f7] h-[32px] relative rounded-[8px] shrink-0 w-full">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
                  <SearchIcon />
                  <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#8c8c8c] text-[12px]">
                    Search
                  </p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#e0e0e0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="h-[36px] relative shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[8px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
              <div className="content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[20px]">
                <ThreeDotsIcon />
              </div>
              <svg width="4" height="12" viewBox="0 0 4 12" className="shrink-0">
                <text x="0" y="10" fill="#ECECEC" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">/</text>
              </svg>
              <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#8c8c8c] text-[12px] w-[30px] whitespace-pre-wrap">
                Doc..
              </p>
              <svg width="4" height="12" viewBox="0 0 4 12" className="shrink-0">
                <text x="0" y="10" fill="#ECECEC" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">/</text>
              </svg>
              <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#8c8c8c] text-[12px] w-[40px] whitespace-pre-wrap">
                Mydo..
              </p>
              <svg width="4" height="12" viewBox="0 0 4 12" className="shrink-0">
                <text x="0" y="10" fill="#ECECEC" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif">/</text>
              </svg>
              <p className="flex-[1_0_0] font-['Inter',sans-serif] font-medium leading-[1.6] min-h-px min-w-px not-italic relative text-[#8c8c8c] text-[12px] whitespace-pre-wrap overflow-hidden text-ellipsis">
                Legal D..
              </p>
            </div>
            <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
              <PlusIcon />
            </div>
          </div>
        </div>
      </div>

      {/* File Tree */}
      <div className="flex-[1_0_0] min-h-px min-w-px overflow-y-auto relative w-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[8px] py-[8px] relative w-full">
          {fileStructure.map((node, idx) => (
            <div key={idx} className="relative shrink-0 w-full">
              <FolderItem
                node={node}
                onSelect={onDocumentOpen}
                selectedDocument={activeDocumentName}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="h-[56px] relative shrink-0 w-full">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col items-start px-[12px] relative size-full">
            <div className="content-stretch flex items-center justify-between relative size-full">
              <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                <div className="bg-[#e0e0e0] content-stretch flex flex-col font-['Inter',sans-serif] font-semibold items-center justify-center leading-[0] not-italic relative rounded-full shrink-0 size-[32px] text-[14px] text-[#0d0d0d]">
                  <p className="leading-[1.6] whitespace-pre-wrap">M</p>
                </div>
                <p className="font-['Inter',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0d0d0d] text-[14px]">
                  Mahesh
                </p>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
                  <BellIcon />
                </div>
                <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
                  <SettingsIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}