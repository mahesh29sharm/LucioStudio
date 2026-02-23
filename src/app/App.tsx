import { useState } from 'react';
import FileSystemPanel from './components/FileSystemPanel';
import DocumentPanel from './components/DocumentPanel';
import NotesPanel from './components/NotesPanel';

export default function App() {
  const [selectedDocument, setSelectedDocument] = useState<string>('Legal Case Brief');

  return (
    <div className="size-full flex bg-background">
      {/* Files/Folder Panel */}
      <FileSystemPanel onDocumentSelect={setSelectedDocument} selectedDocument={selectedDocument} />
      
      {/* Document Panel */}
      <DocumentPanel documentName={selectedDocument} />
      
      {/* Notes Panel */}
      <NotesPanel />
    </div>
  );
}
