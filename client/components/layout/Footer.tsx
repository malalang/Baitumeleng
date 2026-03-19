import React from 'react';
import Link from 'next/link';
import { Printer, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <Printer className="text-white h-6 w-6" />
              </div>
              <span className="text-2xl font-headline font-bold text-primary tracking-tighter uppercase">
                BAITUMELENG
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed font-medium">
              Empowering South African businesses with world-class printing and administrative solutions since 2010. 
              Quality you can feel, service you can trust.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-primary uppercase tracking-widest text-xs mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors font-semibold">All Services</Link></li>
              <li><Link href="/#printing" className="text-muted-foreground hover:text-primary transition-colors font-semibold">Digital Printing</Link></li>
              <li><Link href="/#quote" className="text-muted-foreground hover:text-primary transition-colors font-semibold">Request Quote</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors font-semibold">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary uppercase tracking-widest text-xs mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground font-semibold">info@baitumeleng.co.za</li>
              <li className="text-muted-foreground font-semibold">+27 67 946 2796</li>
              <li className="text-muted-foreground text-sm font-medium">123 Business Street, Pretoria, 0001</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground font-bold">
            &copy; {new Date().getFullYear()} Baitumeleng Services. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary font-black uppercase tracking-widest">Privacy Policy</Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-primary font-black uppercase tracking-widest">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
