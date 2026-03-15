import { z } from 'zod';
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

export type ServiceItem = {
  name: string;
  icon: any;
  desc?: string;
  color?: string;
};

export const GENERAL_SERVICES: ServiceItem[] = [
  { name: 'Photocopies', icon: Copy, desc: 'High-speed black & white or color copies.' },
  { name: 'Binding', icon: BookOpen, desc: 'Spiral, wire, or perfect binding for documents.' },
  { name: 'Scanning', icon: Scan, desc: 'Digitalize your physical documents instantly.' },
  { name: 'Stationery', icon: Pencil, desc: 'Essential office supplies and paper goods.' },
  { name: 'Typing', icon: Type, desc: 'Professional document typing and formatting.' },
  { name: 'Email', icon: Mail, desc: 'Send and receive important documents via email.' },
];

export const DIGITAL_PRINTING: ServiceItem[] = [
  { name: 'T-Shirt Printing', icon: Shirt, color: 'bg-blue-500' },
  { name: 'Banners', icon: Flag, color: 'bg-yellow-500' },
  { name: '3D Signage', icon: Box, color: 'bg-primary' },
  { name: 'Sign Boards', icon: Square, color: 'bg-green-500' },
  { name: 'Flyers', icon: FileText, color: 'bg-red-500' },
  { name: 'Posters', icon: ImageIcon, color: 'bg-purple-500' },
];

export const SERVICE_CATEGORIES = [
  'Photocopies',
  'Binding',
  'Scanning',
  'Stationery',
  'Typing',
  'Email',
  'T-Shirt Printing',
  'Banners',
  '3D Signage',
  'Sign Boards',
  'Flyers',
  'Posters',
] as const;

export const quoteSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  service: z.enum(SERVICE_CATEGORIES, {
    errorMap: () => ({ message: 'Please select a valid service' }),
  }),
  description: z.string().min(10, 'Please provide more details about your request'),
  quantity: z.coerce.number().min(1, 'Quantity must be at least 1'),
  fileUrl: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
