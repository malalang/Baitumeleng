# **App Name**: Baitumeleng Services

## Core Features:

- Client Service Showcase: Display a modern, responsive landing page with a hero section and grids for General Services and Digital Printing, inspired by the physical branding.
- Custom Quote Request Form: A client-side form using React Hook Form and Zod, allowing users to select a service, upload relevant files, and input contact details for a service quote.
- Quote Submission & Storage: Handle the submission of quote requests from the client form and securely store the data using Supabase.
- Advanced SEO Metadata: Implement a global layout with advanced SEO metadata in `app/layout.tsx` for optimal search engine visibility.
- Admin Role-Based Authentication: Secure the admin dashboard with Supabase RBAC middleware, restricting access to 'admin' roles and redirecting unauthorized users.
- Admin Quote Management Dashboard: Provide a secure admin dashboard to view and manage all incoming service quote requests and general inquiries submitted from the client application.

## Style Guidelines:

- Primary color: A deep, professional blue (#1261C7), reflecting the brand's established identity and professional service. This color will be used for headings, call-to-action buttons, and key visual elements.
- Background color: A very light, desaturated blue (#EFF3F6), providing a clean and understated canvas that allows primary elements to stand out, maintaining visual harmony with the brand's core blue.
- Accent color: A vibrant, high-contrast yellow (#FFFC1C), directly inspired by the existing physical branding, used to draw attention to important text, highlights, and interactive components like form labels or section headers.
- Headline and body text font: 'Inter' (sans-serif), chosen for its modern, clean, and highly readable qualities, suitable for a professional business application across all content types.
- Use clear and intuitive icons that represent specific services (e.g., printer for photocopying, t-shirt for apparel printing), enhancing navigation and user understanding.
- A responsive layout prioritizing content readability and easy access to services. Utilize a distinct hero section on the landing page, followed by well-organized grid displays for service categories to enhance user experience across all devices.
- Incorporate subtle, tasteful animations for form submissions (e.g., success feedback), loading states, and transitions to provide a smooth and engaging user interface without distracting from content.