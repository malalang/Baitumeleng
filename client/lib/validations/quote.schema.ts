import { z } from 'zod';

export const serviceItemSchema = z.object({
  name: z.string(),
  icon: z.any(),
  desc: z.string().optional(),
  color: z.string().optional(),
});

export const generalServicesSchema = z.array(serviceItemSchema);
export const digitalPrintingSchema = z.array(serviceItemSchema);

export type ServiceItem = z.infer<typeof serviceItemSchema>;

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
