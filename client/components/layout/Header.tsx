import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Printer, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <Printer className="text-white h-6 w-6" />
          </div>
          <span className="text-2xl font-headline font-bold text-primary tracking-tighter uppercase">
            BAITUMELENG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm font-semibold hover:text-primary transition-colors">Services</Link>
          <Link href="/about" className="text-sm font-semibold hover:text-primary transition-colors">About Us</Link>
          <Button asChild size="sm" className="font-bold">
            <Link href="/#quote">Contact Us</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:bg-secondary">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l-primary/10">
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="flex items-center gap-2">
                  <div className="bg-primary p-1.5 rounded-md">
                    <Printer className="text-white h-4 w-4" />
                  </div>
                  <span className="text-lg font-bold text-primary tracking-tighter uppercase">
                    BAITUMELENG
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6">
                <SheetClose asChild>
                  <Link 
                    href="/services" 
                    className="text-lg font-bold text-primary hover:text-accent transition-colors py-2 border-b border-border/50"
                  >
                    Services
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    href="/about" 
                    className="text-lg font-bold text-primary hover:text-accent transition-colors py-2 border-b border-border/50"
                  >
                    About Us
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link 
                    href="/#quote" 
                    className="text-lg font-bold text-primary hover:text-accent transition-colors py-2 border-b border-border/50"
                  >
                    Request Quote
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild className="w-full font-bold h-12 text-lg mt-4 shadow-lg shadow-primary/10">
                    <Link href="/#quote">Contact Us Now</Link>
                  </Button>
                </SheetClose>
              </nav>
              <div className="absolute bottom-8 left-6 right-6">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Support</p>
                <p className="text-sm font-bold text-primary">+27 12 345 6789</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
