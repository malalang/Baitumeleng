import { z } from 'zod';

// 1. Define a sub-schema for FAQs
export const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

// 2. The enhanced Service Item Schema
export const serviceItemSchema = z.object({
  // Core Identifiers
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  category: z.enum(['general', 'digital-printing']),
  
  // UI & Card Details
  icon: z.any(), // Using any to accommodate React functional components (Lucide icons)
  color: z.string().optional(),
  desc: z.string().optional(), // Short description for the homepage cards
  isPopular: z.boolean().optional().default(false), // To highlight specific services on the main page
  
  // Service Page Content
  longDescription: z.string().optional(), // Main body copy for the service page
  features: z.array(z.string()).optional(), // Key bullet points (e.g., "Fast turnaround", "Full color")
  benefits: z.array(z.string()).optional(), // Why choose us for this service
  pricingNote: z.string().optional(), // e.g., "Starting at R150", "Bulk discounts available"
  
  // Media
  imageUrl: z.string().optional(), // Main hero image for the service page
  gallery: z.array(z.string()).optional(), // Array of image URLs to show previous work
  
  // SEO Details
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  
  // Optional FAQs specific to this service
  faqs: z.array(faqSchema).optional(),
});

// Export the inferred type for use in your components
export type ServiceItem = z.infer<typeof serviceItemSchema>;
export type FaqItem = z.infer<typeof faqSchema>;

export const generalServicesSchema = z.array(serviceItemSchema);
export const digitalPrintingSchema = z.array(serviceItemSchema);

// ... keep your existing quoteSchema below



export const quoteSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  service: z.string().min(1, 'Please select a service'),
  description: z.string().min(10, 'Please provide more details about your request'),
  quantity: z.coerce.number().min(1, 'Quantity must be at least 1'),
  fileUrl: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
