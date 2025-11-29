import React from 'react';
import { 
  Mic2, Sparkles, Music, Cpu, Download, Code, 
  Database, Book, Globe, Box, Palette, FileAudio, 
  MessageSquare, Tv, Video, ExternalLink
} from 'lucide-react';

export const IconHelper = ({ name, className }: { name?: string; className?: string }) => {
  const props = { className: className || "w-5 h-5" };

  switch (name) {
    case 'Mic2': return <Mic2 {...props} />;
    case 'Sparkles': return <Sparkles {...props} />;
    case 'Music': return <Music {...props} />;
    case 'Cpu': return <Cpu {...props} />;
    case 'Download': return <Download {...props} />;
    case 'Code': return <Code {...props} />;
    case 'Database': return <Database {...props} />;
    case 'Book': return <Book {...props} />;
    case 'Globe': return <Globe {...props} />;
    case 'Box': return <Box {...props} />;
    case 'Palette': return <Palette {...props} />;
    case 'FileAudio': return <FileAudio {...props} />;
    case 'MessageSquare': return <MessageSquare {...props} />;
    case 'Tv': return <Tv {...props} />;
    case 'Video': return <Video {...props} />;
    default: return <ExternalLink {...props} />;
  }
};