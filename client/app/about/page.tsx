import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, 
  Award, 
  Users, 
  Target, 
  History,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-24 text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-accent text-primary mb-6 font-bold border-none">Est. 2010</Badge>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter text-white">
              Commitment to Excellence <br className="hidden md:block" /> Since Day One.
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
              Based in the heart of South Africa, Baitumeleng Services has been the trusted partner for businesses and individuals seeking premium printing and administrative solutions for over 15 years.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <Image 
                  src="https://picsum.photos/seed/baitumeleng-history/800/1000" 
                  width={800} 
                  height={1000} 
                  alt="Our History" 
                  className="rounded-[40px] object-cover shadow-2xl"
                  data-ai-hint="old printing press"
                />
                <div className="absolute -bottom-8 -right-8 bg-accent p-10 rounded-3xl shadow-xl hidden md:block border-4 border-primary">
                  <p className="text-primary font-black text-5xl">15+</p>
                  <p className="text-primary/80 font-bold uppercase tracking-widest text-xs">Years of Growth</p>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <div className="bg-primary p-2 rounded-lg">
                    <History className="h-5 w-5 text-accent" />
                  </div>
                  <span className="font-black uppercase tracking-[0.2em] text-sm text-primary">Our Journey</span>
                </div>
                <h2 className="text-4xl md:text-5xl tracking-tight text-primary font-bold">From Local Roots to Regional Excellence.</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-medium">
                  <p>
                    Baitumeleng Services started in 2010 with a single high-speed photocopier and a vision: to provide the community with professional administrative support that was often out of reach.
                  </p>
                  <p>
                    As the digital landscape evolved, so did we. We invested in state-of-the-art large-format printers, 3D fabrication tools, and specialized staff to ensure that "Quality" wasn't just a buzzword, but a measurable result on every project.
                  </p>
                  <p>
                    Today, we serve thousands of clients across the region, from local students printing their first thesis to multinational corporations requiring complex 3D signage and branding.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-1.5 rounded-lg shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Community First</p>
                      <p className="text-sm text-muted-foreground font-medium">Proudly South African and locally operated.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/20 p-1.5 rounded-lg shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-primary">Eco-Conscious</p>
                      <p className="text-sm text-muted-foreground font-medium">Implementing sustainable ink and paper practices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-24 bg-secondary/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl mb-6 text-primary font-bold">Built on Strong Foundations</h2>
              <p className="text-muted-foreground text-lg font-medium">The values that drive every decision we make.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-10 rounded-[32px] shadow-sm border space-y-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  To empower individuals and businesses by providing accessible, high-quality printing and branding solutions that turn ideas into tangible success.
                </p>
              </div>
              <div className="bg-white p-10 rounded-[32px] shadow-sm border space-y-6">
                <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  To be the leading innovator in digital printing and business services in South Africa, recognized for our speed, precision, and customer care.
                </p>
              </div>
              <div className="bg-white p-10 rounded-[32px] shadow-sm border space-y-6">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Our Commitment</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  We commit to transparency in pricing, uncompromising quality in production, and a service-oriented mindset that puts your needs at the center of our work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to bring your vision to life?</h2>
                <p className="text-xl text-white/80 max-w-xl mx-auto mb-12 leading-relaxed font-medium">
                  Join the thousands of businesses who trust us with their branding and printing needs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button size="lg" className="h-16 px-10 text-lg bg-accent text-primary hover:bg-white font-black" asChild>
                    <Link href="/#quote">Start Your Quote</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-16 px-10 text-lg text-white border-white/20 hover:bg-white/10 font-bold" asChild>
                    <Link href="/services">Browse Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground font-bold">
            &copy; {new Date().getFullYear()} Baitumeleng Services. Excellence in Print.
          </p>
        </div>
      </footer>
    </div>
  );
}
