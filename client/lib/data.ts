import { 
  Copy, 
  BookOpen, 
  Scan, 
  Pencil, 
  Type, 
  Mail, 
  Shirt, 
  Flag, 
  Box, 
  Square, 
  FileText, 
  Image as ImageIcon 
} from 'lucide-react';

export const GENERAL_SERVICES = [
  { name: 'Photocopies', icon: Copy, desc: 'High-speed black & white or color copies.' },
  { name: 'Binding', icon: BookOpen, desc: 'Spiral, wire, or perfect binding for documents.' },
  { name: 'Scanning', icon: Scan, desc: 'Digitalize your physical documents instantly.' },
  { name: 'Stationery', icon: Pencil, desc: 'Essential office supplies and paper goods.' },
  { name: 'Typing', icon: Type, desc: 'Professional document typing and formatting.' },
  { name: 'Email', icon: Mail, desc: 'Send and receive important documents via email.' },
];

export const DIGITAL_PRINTING = [
  { name: 'T-Shirt Printing', icon: Shirt, color: 'bg-blue-500' },
  { name: 'Banners', icon: Flag, color: 'bg-yellow-500' },
  { name: '3D Signage', icon: Box, color: 'bg-primary' },
  { name: 'Sign Boards', icon: Square, color: 'bg-green-500' },
  { name: 'Flyers', icon: FileText, color: 'bg-red-500' },
  { name: 'Posters', icon: ImageIcon, color: 'bg-purple-500' },
];
