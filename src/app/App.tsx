import { useState } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import FileSystemPanel from './components/FileSystemPanel';
import DocumentPanel from './components/DocumentPanel';
import NotesPanel from './components/NotesPanel';

interface OpenDocument {
  id: string;
  name: string;
}

export default function App() {
  const [openDocuments, setOpenDocuments] = useState<OpenDocument[]>([
    { id: '1', name: 'Legal Case Brief' }
  ]);
  const [activeDocumentId, setActiveDocumentId] = useState<string>('1');

  const handleDocumentOpen = (name: string) => {
    // Check if document is already open
    const existingDoc = openDocuments.find(doc => doc.name === name);
    if (existingDoc) {
      // Just switch to it
      setActiveDocumentId(existingDoc.id);
      return;
    }

    // Add new document
    const newDoc: OpenDocument = {
      id: Date.now().toString(),
      name: name
    };
    setOpenDocuments([...openDocuments, newDoc]);
    setActiveDocumentId(newDoc.id);
  };

  const handleDocumentClose = (id: string) => {
    const newDocs = openDocuments.filter(doc => doc.id !== id);
    setOpenDocuments(newDocs);

    // If closing active document, switch to first available or clear
    if (id === activeDocumentId) {
      if (newDocs.length > 0) {
        setActiveDocumentId(newDocs[0].id);
      } else {
        setActiveDocumentId('');
      }
    }
  };

  const activeDocument = openDocuments.find(doc => doc.id === activeDocumentId);
  const activeDocumentName = activeDocument ? activeDocument.name : '';

  return (
    <div className="size-full flex bg-background">
      <PanelGroup direction="horizontal">
        {/* Files/Folder Panel */}
        <Panel defaultSize={20} minSize={15} maxSize={35}>
          <FileSystemPanel 
            onDocumentOpen={handleDocumentOpen}
            activeDocumentName={activeDocumentName}
          />
        </Panel>
        
        {/* Resize Handle */}
        <PanelResizeHandle className="w-[1px] bg-border hover:bg-accent transition-colors duration-150 hover:w-[3px] cursor-col-resize" />
        
        {/* Document Panel */}
        <Panel defaultSize={50} minSize={30}>
          <DocumentPanel 
            openDocuments={openDocuments}
            activeDocumentId={activeDocumentId}
            onTabChange={setActiveDocumentId}
            onTabClose={handleDocumentClose}
          />
        </Panel>
        
        {/* Resize Handle */}
        <PanelResizeHandle className="w-[1px] bg-border hover:bg-accent transition-colors duration-150 hover:w-[3px] cursor-col-resize" />
        
        {/* Notes Panel */}
        <Panel defaultSize={30} minSize={20} maxSize={40}>
          <NotesPanel />
        </Panel>
      </PanelGroup>
    </div>
  );
}