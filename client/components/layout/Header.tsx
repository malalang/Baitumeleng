import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <Printer className="text-white h-6 w-6" />
          </div>
          <span className="text-2xl font-headline font-bold text-primary tracking-tighter">
            BAITUMELENG
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
          <Link href="/#quote" className="text-sm font-medium hover:text-primary transition-colors">Request Quote</Link>
          <Button asChild size="sm">
            <Link href="/#quote">Contact Us</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
