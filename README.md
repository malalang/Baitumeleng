# Baitumeleng Services

A comprehensive, professional printing and business services platform built with a modern full-stack architecture.

## Overview

Baitumeleng Services provides high-quality digital printing, 3D signage, custom apparel, and essential administrative support. This repository contains both the public-facing client application and the secure administrative dashboard for project management.

## Project Structure

This is a monorepo containing two main Next.js applications:

- **/client**: The public-facing website where customers can browse services, view project galleries, and request custom quotes.
- **/admin**: A secure dashboard for staff to manage incoming quote requests, track customer interactions, and view business analytics.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI (Radix UI primitives)
- **Form Handling**: React Hook Form with Zod validation
- **Backend/Database**: Supabase (PostgreSQL, Storage, Auth)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 20.9 or higher
- npm or pm

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:malalang/studio.git
   cd studio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To run the applications in development mode:

- **Client App**: `npm run dev:client` (Runs on http://localhost:9002)
- **Admin App**: `npm run dev:admin` (Runs on http://localhost:3000)

## Features

- **Dynamic Service Pages**: Rich informational pages for every service category.
- **Custom Quote Engine**: Sophisticated multi-step quote request form with file upload support.
- **Admin Dashboard**: Real-time project tracking and customer management.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Advanced SEO**: Pre-configured metadata for optimal search visibility.

## License

© 2024 Baitumeleng Services. All rights reserved.
