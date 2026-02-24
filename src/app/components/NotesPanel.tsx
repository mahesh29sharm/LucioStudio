import { useState } from 'react';
import svgPaths from "../../imports/svg-lqme1g60np";

interface Note {
  id: string;
  title: string;
  content: string;
  lastUpdated: string;
}

const initialNotes: Note[] = [
  { id: '1', title: 'New Notes', content: '', lastUpdated: '6 Aug 2025' },
  { id: '2', title: 'Merger Agreements', content: 'Notes about merger agreements and key considerations...', lastUpdated: '8 Aug 2025' },
  { id: '3', title: 'Conflicts in interest', content: 'Potential conflicts to watch out for...', lastUpdated: '9 Aug 2025' },
  { id: '4', title: 'Data privacy concerns', content: 'Data privacy regulations and compliance requirements...', lastUpdated: '12 Aug 2025' },
  { id: '5', title: 'Regulatory changes', content: 'Recent regulatory updates and their impact...', lastUpdated: '23 Aug 2025' },
  { id: '6', title: 'Market competition analysis', content: 'Competitive landscape and market positioning...', lastUpdated: '29 Aug 2025' },
  { id: '7', title: 'People Vs. Hall Sample Case Brief', content: 'Case brief summary and key points...', lastUpdated: '29 Aug 2025' },
];

// Notes Icon
function NotesIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p2c0d600} fill="#F7F7F7" />
          <path d={svgPaths.p206de380} fill="#1C2E28" />
          <path d={svgPaths.p83f3200} fill="#1C2E28" />
          <path d={svgPaths.p112e1c00} fill="#1C2E28" />
          <path d={svgPaths.p3c5ce900} fill="#1C2E28" />
          <path d={svgPaths.p37663000} fill="#1C2E28" />
          <path d={svgPaths.p7d0100} fill="#1C2E28" />
          <path d={svgPaths.p372b2770} fill="#1C2E28" />
          <path d={svgPaths.p28973600} fill="#1C2E28" />
          <path d={svgPaths.p25cc5880} fill="#1C2E28" />
          <path d={svgPaths.p380f3a80} fill="#1C2E28" />
          <path d={svgPaths.p182fe800} fill="#1C2E28" />
          <path d={svgPaths.p1f401e00} fill="#1C2E28" />
          <path d={svgPaths.p365cbec0} fill="#1C2E28" />
          <path d={svgPaths.p387bda80} fill="#1C2E28" />
          <path d={svgPaths.p11a49300} fill="#1C2E28" />
          <path d={svgPaths.p11d73a80} fill="#E0E0E0" />
        </g>
      </svg>
    </div>
  );
}

// Search Icon
function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path d={svgPaths.p23694300} stroke="#8C8C8C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p8cdb700} stroke="#8C8C8C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

// Filter Icon
function FilterIcon() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path d="M1.16797 2.91602H12.8346" stroke="#8C8C8C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M3.5 7H10.5" stroke="#8C8C8C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.25 11.084H8.75" stroke="#8C8C8C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

// Sort Icon
function SortIcon() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path d={svgPaths.p1197d400} stroke="#8C8C8C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.08203 11.6673V2.33398" stroke="#8C8C8C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p35f9e180} stroke="#8C8C8C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.91797 2.33398V11.6673" stroke="#8C8C8C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

// Plus Icon
function PlusIcon() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path d="M2.33398 7H11.6673" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 2.33398V11.6673" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

// Three Dots Icon
function ThreeDotsIcon() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path d={svgPaths.pa0db800} stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pcc83880} stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2a7aed00} stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

// Back Arrow Icon
function BackArrowIcon() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <path d="M11.25 13.5L6.75 9L11.25 4.5" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export default function NotesPanel() {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const handleNewNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: 'Untitled Note',
      content: '',
      lastUpdated: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
    setEditTitle(newNote.title);
    setEditContent(newNote.content);
    setIsEditing(true);
  };

  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
    setEditTitle(note.title);
    setEditContent(note.content);
    setIsEditing(false);
  };

  const handleBack = () => {
    if (isEditing && selectedNote) {
      // Save changes
      setNotes(notes.map(note => 
        note.id === selectedNote.id 
          ? { ...note, title: editTitle, content: editContent, lastUpdated: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) }
          : note
      ));
    }
    setSelectedNote(null);
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (selectedNote) {
      setNotes(notes.map(note => 
        note.id === selectedNote.id 
          ? { ...note, title: editTitle, content: editContent, lastUpdated: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) }
          : note
      ));
      setSelectedNote({ ...selectedNote, title: editTitle, content: editContent });
    }
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (selectedNote && window.confirm('Are you sure you want to delete this note?')) {
      setNotes(notes.filter(note => note.id !== selectedNote.id));
      setSelectedNote(null);
      setIsEditing(false);
    }
  };

  // Note Detail View
  if (selectedNote) {
    return (
      <div className="bg-card relative shrink-0 w-full h-full">
        <div className="content-stretch flex flex-col items-start relative size-full">
          {/* Header */}
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
              <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full">
                {/* Back Button */}
                <button 
                  onClick={handleBack}
                  className="content-stretch flex items-center justify-center relative shrink-0 size-[20px] cursor-pointer"
                >
                  <BackArrowIcon />
                </button>

                {/* Actions */}
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  {isEditing ? (
                    <button
                      onClick={handleSave}
                      className="bg-[#1c2e28] content-stretch flex gap-[8px] h-[28px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer"
                    >
                      <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[12px] text-white">
                        Save
                      </p>
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={handleEdit}
                        className="bg-[#1c2e28] content-stretch flex gap-[8px] h-[28px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer"
                      >
                        <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[12px] text-white">
                          Edit
                        </p>
                      </button>
                      <button
                        onClick={handleDelete}
                        className="content-stretch flex items-center justify-center relative shrink-0 size-[20px] cursor-pointer"
                      >
                        <ThreeDotsIcon />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Note Content */}
          <div className="flex-[1_0_0] min-h-px min-w-px overflow-y-auto relative w-full">
            <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] py-[16px] relative w-full">
              {/* Title */}
              {isEditing ? (
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="bg-transparent border-none font-['Inter',sans-serif] font-semibold leading-[1.6] not-italic outline-none relative w-full text-[#0d0d0d] text-[16px]"
                  placeholder="Note title..."
                />
              ) : (
                <p className="font-['Inter',sans-serif] font-semibold leading-[1.6] not-italic relative w-full text-[#0d0d0d] text-[16px]">
                  {selectedNote.title}
                </p>
              )}

              {/* Last Updated */}
              <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#8c8c8c] text-[10px]">
                Last Updated: {selectedNote.lastUpdated}
              </p>

              {/* Content */}
              {isEditing ? (
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="bg-transparent border-none font-['Inter',sans-serif] font-normal leading-[1.6] min-h-[400px] not-italic outline-none relative w-full text-[#0d0d0d] text-[14px] resize-none"
                  placeholder="Start typing your note..."
                />
              ) : (
                <p className="font-['Inter',sans-serif] font-normal leading-[1.6] not-italic relative w-full text-[#0d0d0d] text-[14px] whitespace-pre-wrap">
                  {selectedNote.content || 'No content yet. Click Edit to add content.'}
                </p>
              )}
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#e0e0e0] border-l-[0.5px] border-solid inset-0 pointer-events-none" />
      </div>
    );
  }

  // Notes List View
  return (
    <div className="bg-card relative shrink-0 w-full h-full">
      <div className="content-stretch flex flex-col items-start relative size-full">
        {/* Header */}
        <div className="relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
            <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full">
              {/* Title */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
                  <div className="flex items-center justify-center relative shrink-0">
                    <div className="-scale-y-100 flex-none rotate-180">
                      <div className="relative size-[18px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                          <g>
                            <path d={svgPaths.p284be8b0} stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                            <path d="M6.75 2.25V15.75" stroke="#0D0D0D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['Inter',sans-serif] font-semibold leading-[1.6] not-italic relative shrink-0 text-[#0d0d0d] text-[14px]">
                  Your Notes
                </p>
              </div>

              {/* Actions */}
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  {/* Search */}
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px] cursor-pointer">
                    <SearchIcon />
                  </div>
                  {/* Filter */}
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px] cursor-pointer">
                    <FilterIcon />
                  </div>
                  {/* Sort */}
                  <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px] cursor-pointer">
                    <SortIcon />
                  </div>
                </div>

                {/* New Note Button */}
                <button
                  onClick={handleNewNote}
                  className="bg-[#1c2e28] content-stretch flex gap-[8px] h-[28px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-[#243830] transition-colors"
                >
                  <PlusIcon />
                  <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[12px] text-white">
                    New Note
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Notes List */}
        <div className="flex-[1_0_0] min-h-px min-w-px overflow-y-auto relative w-full">
          <div className="content-stretch flex flex-col items-start relative w-full">
            {notes.map((note) => (
              <div key={note.id} className="relative shrink-0 w-full">
                <button
                  onClick={() => handleNoteClick(note)}
                  className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full cursor-pointer hover:bg-[#fafafa] transition-colors text-left"
                >
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                    <NotesIcon />
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                      <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#0d0d0d] text-[12px]">
                        {note.title}
                      </p>
                      <div className="content-stretch flex items-center justify-center relative shrink-0">
                        <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#8c8c8c] text-[10px]">
                          Last Updated
                        </p>
                        <div className="content-stretch flex items-center justify-end relative shrink-0 w-[80px]">
                          <p className="font-['Inter',sans-serif] font-medium leading-[1.6] not-italic relative shrink-0 text-[#333] text-[10px]">
                            {note.lastUpdated}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
                      <ThreeDotsIcon />
                    </div>
                  </div>
                </button>
                <div className="h-0 relative w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 1">
                      <line stroke="#E0E0E0" x2="320" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e0e0] border-l-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}