import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
  Image as ImageIcon,
  Printer,
  ChevronRight,
  MapPin,
  Phone,
  Clock
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const GENERAL_SERVICES = [
  { name: 'Photocopies', icon: Copy, desc: 'High-speed black & white or color copies.' },
  { name: 'Binding', icon: BookOpen, desc: 'Spiral, wire, or perfect binding for documents.' },
  { name: 'Scanning', icon: Scan, desc: 'Digitalize your physical documents instantly.' },
  { name: 'Stationery', icon: Pencil, desc: 'Essential office supplies and paper goods.' },
  { name: 'Typing', icon: Type, desc: 'Professional document typing and formatting.' },
  { name: 'Email', icon: Mail, desc: 'Send and receive important documents via email.' },
];

const DIGITAL_PRINTING = [
  { name: 'T-Shirt Printing', icon: Shirt, color: 'bg-blue-500' },
  { name: 'Banners', icon: Flag, color: 'bg-yellow-500' },
  { name: '3D Signage', icon: Box, color: 'bg-primary' },
  { name: 'Sign Boards', icon: Square, color: 'bg-green-500' },
  { name: 'Flyers', icon: FileText, color: 'bg-red-500' },
  { name: 'Posters', icon: ImageIcon, color: 'bg-purple-500' },
];

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
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
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
            <Link href="#printing" className="text-sm font-medium hover:text-primary transition-colors">Digital Printing</Link>
            <Link href="#quote" className="text-sm font-medium hover:text-primary transition-colors">Request Quote</Link>
            <Button asChild size="sm">
              <Link href="#quote">Contact Us</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover brightness-[0.4]"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-widest mb-4">
              Premium Printing Services
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Your Business <span className="text-accent">Vision</span>, Brought to Life.
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Professional printing and business solutions tailored for your growth. 
              From high-speed photocopies to stunning 3D signage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-lg" asChild>
                <Link href="#quote">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/10 text-white hover:bg-white hover:text-primary border-white">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* General Services Grid */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Essential Business Services</h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              Reliable day-to-day services to keep your office or business running smoothly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GENERAL_SERVICES.map((service) => (
              <Card key={service.name} className="group hover:shadow-xl transition-all duration-300 border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-3 rounded-xl bg-secondary group-hover:bg-primary transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.desc}</p>
                  <Button variant="link" className="px-0 mt-4 group-hover:translate-x-2 transition-transform">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Printing Highlight Section */}
      <section id="printing" className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Advanced Printing Tech</span>
              <h2 className="text-4xl md:text-5xl text-white mt-4 mb-8">Professional Digital Printing Solutions</h2>
              <p className="text-white/80 text-lg mb-12">
                Make a bold statement with our large-format and custom printing services. 
                We use state-of-the-art equipment to ensure color accuracy and durability.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {DIGITAL_PRINTING.map((item) => (
                  <div key={item.name} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                    <div className={`p-2 rounded-lg ${item.color}`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square">
              <Image 
                src="https://picsum.photos/seed/baitumeleng-printing/800/800" 
                alt="Large scale printing" 
                fill 
                className="rounded-3xl object-cover shadow-2xl border-4 border-white/10"
                data-ai-hint="large format printing"
              />
              <div className="absolute -bottom-8 -left-8 bg-accent text-primary p-8 rounded-2xl shadow-xl max-w-xs">
                <span className="block text-4xl font-bold mb-1">100%</span>
                <span className="text-sm font-semibold uppercase tracking-wider">Quality Satisfaction Guarantee on every project.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section id="quote" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="lg:col-span-5 bg-secondary p-12 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl mb-6">Get Your Custom Quote</h2>
                  <p className="text-muted-foreground mb-12">
                    Ready to start your next project? Fill out the form and our team will get back to you with a competitive quote within 24 hours.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold">Visit Our Shop</p>
                        <p className="text-sm text-muted-foreground">123 Business Street, Local Mall, Area 45</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold">Call Us</p>
                        <p className="text-sm text-muted-foreground">+27 12 345 6789</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold">Working Hours</p>
                        <p className="text-sm text-muted-foreground">Mon - Fri: 8:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-primary/10">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Social Hub</p>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all">FB</div>
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all">IG</div>
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all">IN</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 p-12">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="bg-primary p-2 rounded-lg">
              <Printer className="text-white h-5 w-5" />
            </div>
            <span className="text-xl font-headline font-bold text-primary tracking-tighter">
              BAITUMELENG
            </span>
          </Link>
          <p className="text-muted-foreground max-w-sm mx-auto mb-8">
            Professional printing and business services you can trust. Since 2010.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Baitumeleng Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}