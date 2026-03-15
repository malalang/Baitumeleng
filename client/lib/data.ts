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
import {
  type ServiceItem,
  generalServicesSchema,
  digitalPrintingSchema
} from './validations/quote.schema';

const rawGeneralServices = [
  {
    id: 'gen-1',
    slug: 'photocopies',
    name: 'Photocopies',
    category: 'general',
    icon: Copy,
    desc: 'High-speed black & white or color copies.',
    longDescription: 'Our high-volume photocopying service is designed for businesses and individuals who need crisp, clear duplicates at scale. We use industrial-grade Xerox machines to ensure every page looks as good as the original.',
    features: ['High-speed bulk printing', 'A4 & A3 sizes available', 'Auto-collation and stapling'],
    pricingNote: 'Starting from R0.50 per page'
  },
  {
    id: 'gen-2',
    slug: 'binding',
    name: 'Binding',
    category: 'general',
    icon: BookOpen,
    desc: 'Spiral, wire, or perfect binding for documents.',
    longDescription: 'Give your reports, thesis, or manuals a professional finish. We offer various binding styles that are durable and easy to flip through.',
    features: ['Spiral (Plastic) binding', 'Wire (Metal) binding', 'Clear acetate front covers'],
    pricingNote: 'Bulk discounts for students'
  },
  {
    id: 'gen-3',
    slug: 'scanning',
    name: 'Scanning',
    category: 'general',
    icon: Scan,
    desc: 'Digitalize your physical documents instantly.',
    longDescription: 'Convert your physical archives into searchable digital PDF files. Our high-speed document feeders can handle hundreds of pages in minutes.',
    features: ['Scan to Email or USB', 'High-resolution 600 DPI', 'OCR (Searchable PDF) available'],
  },
  {
    id: 'gen-4',
    slug: 'stationery',
    name: 'Stationery',
    category: 'general',
    icon: Pencil,
    desc: 'Essential office supplies and paper goods.',
    longDescription: 'Your one-stop shop for essential office and school supplies. From premium paper to writing instruments, we stock what you need to stay productive.',
    features: ['Bulk paper reams', 'Writing materials', 'Filing accessories'],
  },
  {
    id: 'gen-5',
    slug: 'typing',
    name: 'Typing',
    category: 'general',
    icon: Type,
    desc: 'Professional document typing and formatting.',
    longDescription: 'Need a handwritten draft turned into a professional document? Our typing service provides accurate, formatted digital files ready for submission.',
    features: ['CV Typing', 'Assignment formatting', 'Data entry services'],
  },
  {
    id: 'gen-6',
    slug: 'email-internet',
    name: 'Email & Internet',
    category: 'general',
    icon: Mail,
    desc: 'Send and receive important documents via email.',
    longDescription: 'Quick and secure internet access for all your administrative needs. Whether it is applying for a job, checking emails, or submitting online forms.',
    features: ['Secure document handling', 'Fast internet browsing', 'Public printing access'],
  },
];

const rawDigitalPrinting = [
  {
    id: 'dig-1',
    slug: 't-shirt-printing',
    name: 'T-Shirt Printing',
    category: 'digital-printing',
    icon: Shirt,
    color: 'bg-blue-500',
    isPopular: true,
    desc: 'Custom apparel for events, staff, or retail.',
    longDescription: 'Elevate your brand or event with custom-printed apparel. We use premium Heat Transfer and Screen Printing methods that ensure vibrant colors and long-lasting durability.',
    features: ['No minimum order', 'Full-color transfers', 'Cotton & Synthetic fabric support'],
    pricingNote: 'Discounts on 10+ shirts'
  },
  {
    id: 'dig-2',
    slug: 'banners',
    name: 'Banners',
    category: 'digital-printing',
    icon: Flag,
    color: 'bg-yellow-500',
    desc: 'PVC and Pull-up banners for maximum visibility.',
    longDescription: 'Perfect for events and storefronts, our high-quality PVC banners are weather-resistant and designed to grab attention from a distance.',
    features: ['Pull-up / Roller banners', 'Outdoor PVC with eyelets', 'UV-resistant inks'],
  },
  {
    id: 'dig-3',
    slug: '3d-signage',
    name: '3D Signage',
    category: 'digital-printing',
    icon: Box,
    color: 'bg-primary',
    isPopular: true,
    desc: 'Dimensional storefront and reception signs.',
    longDescription: 'Make your business stand out with custom 3D fabricated signs. We create dimensional logos and letters that give your brand a high-end, professional look.',
    features: ['Acrylic & Perspex fabrication', 'LED Backlighting options', 'Professional installation'],
  },
  {
    id: 'dig-4',
    slug: 'sign-boards',
    name: 'Sign Boards',
    category: 'digital-printing',
    icon: Square,
    color: 'bg-green-500',
    desc: 'Professional Chromadek and Correx boards.',
    longDescription: 'Durable signage solutions for long-term outdoor use or short-term event advertising. Available in various materials to suit your budget.',
    features: ['Chromadek (Steel) signs', 'Correx (Fluted plastic) boards', 'Reflective vinyl options'],
  },
  {
    id: 'dig-5',
    slug: 'flyers',
    name: 'Flyers',
    category: 'digital-printing',
    icon: FileText,
    color: 'bg-red-500',
    desc: 'Promotional marketing material to grow your brand.',
    longDescription: 'Get your message into the hands of your customers. Our flyers are printed on premium gloss or matt paper with high-impact color reproduction.',
    features: ['A5 & A6 standard sizes', 'Single or double-sided', 'Gloss or Matt finish'],
  },
  {
    id: 'dig-6',
    slug: 'posters',
    name: 'Posters',
    category: 'digital-printing',
    icon: ImageIcon,
    color: 'bg-purple-500',
    desc: 'High-impact large format poster printing.',
    longDescription: 'From A3 to A0 and beyond, our posters are perfect for event promotions, indoor decor, or informational displays in high-traffic areas.',
    features: ['A2, A1, A0 sizes', 'High-gloss photo paper', 'Custom size printing'],
  },
];

export const GENERAL_SERVICES: ServiceItem[] = generalServicesSchema.parse(rawGeneralServices);
export const DIGITAL_PRINTING: ServiceItem[] = digitalPrintingSchema.parse(rawDigitalPrinting);

// Helper to get all services in one list
export const ALL_SERVICES = [...GENERAL_SERVICES, ...DIGITAL_PRINTING];

export * from './validations/quote.schema';