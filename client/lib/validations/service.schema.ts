import { z } from 'zod';

// 1. Define sub-schemas for FAQs and Reviews
export const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const reviewSchema = z.object({
  name: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string(),
  date: z.string(),
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
  gallery: z.array(z.object({
    url: z.string(),
    alt: z.string(),
    hint: z.string().optional(),
  })).optional(),
  
  // SEO Details
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  
  // Optional FAQs specific to this service
  faqs: z.array(faqSchema).optional(),
  
  // Reviews specific to this service
  reviews: z.array(reviewSchema).optional(),
});

// Export the inferred types
export type ServiceItem = z.infer<typeof serviceItemSchema>;
export type FaqItem = z.infer<typeof faqSchema>;
export type ReviewItem = z.infer<typeof reviewSchema>;

export const generalServicesSchema = z.array(serviceItemSchema);
export const digitalPrintingSchema = z.array(serviceItemSchema);
