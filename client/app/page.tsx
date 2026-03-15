import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  ArrowRight,
  Star,
  Quote,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  HelpCircle
} from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  GENERAL_SERVICES, 
  DIGITAL_PRINTING, 
  WHY_CHOOSE_US, 
  PRICING_PACKAGES,
  TESTIMONIALS,
  HOME_FAQS,
  LATEST_PROJECTS
} from '@/lib/data';

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[750px] flex items-center overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover brightness-[0.3]"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-6 px-4 py-1.5 text-sm bg-accent text-primary hover:bg-accent border-none font-bold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-4 duration-700">
                15+ Years of Printing Excellence
              </Badge>
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tighter animate-in fade-in slide-in-from-bottom-6 duration-700">
                Your Brand, <span className="text-accent italic font-serif">Perfectly</span> Realized.
              </h1>
              <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed max-w-2xl font-medium animate-in fade-in slide-in-from-bottom-8 duration-700">
                From high-speed administrative services to high-impact digital signage. 
                Experience the Baitumeleng standard of quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                <Button size="lg" className="h-16 px-10 text-lg shadow-xl shadow-primary/20 font-bold" asChild>
                  <Link href="#quote">Start a Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-primary border-white/40 transition-all font-bold" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Partners / Trust Bar */}
        <div className="bg-white py-12 border-b">
          <div className="container mx-auto px-4">
            <p className="text-center text-xs font-black text-muted-foreground uppercase tracking-[0.3em] mb-10">Trusted by Leading Organizations</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
              {['TECHCORP', 'EDUPLUS', 'CITYGOV', 'VITALITY', 'GLOBALMED'].map((brand) => (
                <span key={brand} className="text-2xl font-black text-primary tracking-tighter">{brand}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl mb-8 leading-tight text-primary font-bold">Why South Africa's Businesses Choose Us</h2>
                <p className="text-lg text-muted-foreground mb-12 max-w-xl font-medium">
                  We've built our reputation on precision, speed, and reliability. 
                  Every project is treated with the same commitment to perfection.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {WHY_CHOOSE_US.map((item, index) => (
                    <div key={index} className="group flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                        <item.icon className="h-6 w-6 text-accent group-hover:text-primary transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <Image 
                    src="https://picsum.photos/seed/baitumeleng-quality/800/600" 
                    width={800} 
                    height={600} 
                    alt="Quality Control" 
                    className="object-cover"
                    data-ai-hint="printing quality"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-0"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Work / Gallery */}
        <section className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl text-left">
                <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 font-bold">Our Gallery</Badge>
                <h2 className="text-4xl md:text-5xl text-primary font-bold">Featured Projects</h2>
                <p className="text-muted-foreground mt-4 text-lg font-medium">A glimpse into the physical results we deliver for our diverse clientele.</p>
              </div>
              <Button asChild variant="outline" className="font-bold border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="/services">View All Case Studies</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {LATEST_PROJECTS.map((project, index) => (
                <div key={index} className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    data-ai-hint={project.hint}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <p className="text-accent text-xs font-black uppercase tracking-widest mb-2">{project.category}</p>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Printing Highlight */}
        <section id="printing" className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
                  <Image 
                    src="https://picsum.photos/seed/baitumeleng-printing/800/800" 
                    alt="Large scale printing" 
                    fill 
                    className="rounded-[40px] object-cover shadow-2xl border-8 border-white/5"
                    data-ai-hint="large format printing"
                  />
                  <div className="absolute -bottom-10 -right-10 bg-accent text-primary p-8 rounded-3xl shadow-2xl max-w-xs border-4 border-primary animate-bounce-slow">
                    <p className="font-bold text-lg leading-tight mb-2">"Highest quality printing in the region."</p>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <Badge className="bg-accent text-primary hover:bg-accent mb-6 font-bold uppercase">Digital Mastery</Badge>
                <h2 className="text-4xl md:text-6xl text-white mt-4 mb-8 tracking-tighter font-bold">Premium Signage & Large Format</h2>
                <p className="text-white/90 text-xl mb-12 leading-relaxed font-medium">
                  We combine artistic vision with industrial-grade technology. 
                  Whether it's a dimensional 3D storefront sign or a fleet of custom uniforms, 
                  we ensure your brand is unforgettable.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {DIGITAL_PRINTING.slice(0, 6).map((item) => (
                    <Link key={item.id} href={`/services/${item.slug}`} className="group flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white hover:text-primary transition-all duration-300">
                      <div className={`p-2.5 rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-bold text-lg text-white group-hover:text-primary transition-colors">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Packages Section */}
        <section className="py-24 bg-background border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-16">
              <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 font-bold uppercase">Simple Pricing</Badge>
              <h2 className="text-4xl md:text-5xl mb-6 text-primary font-bold">Popular Print Packages</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                Bundled services designed to provide maximum value for your marketing budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRICING_PACKAGES.map((pkg, index) => (
                <Card key={index} className={`flex flex-col border-2 transition-all duration-500 hover:shadow-2xl ${pkg.popular ? 'border-accent shadow-2xl scale-105 bg-white relative z-10' : 'border-border'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-primary text-xs font-black uppercase rounded-full">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="pt-10">
                    <CardTitle className="text-2xl text-primary font-bold">{pkg.name}</CardTitle>
                    <CardDescription className="font-medium">Starting from</CardDescription>
                    <p className="text-5xl font-black text-primary mt-4 tracking-tighter">{pkg.price}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-4 text-left">
                      {pkg.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground font-semibold">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pb-10">
                    <Button className="w-full h-14 text-lg font-bold shadow-lg" variant={pkg.popular ? 'default' : 'outline'} asChild>
                      <Link href="#quote">Get Started Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 font-bold uppercase">FAQs</Badge>
                <h2 className="text-4xl md:text-5xl text-primary font-bold mb-6">Frequently Asked Questions</h2>
                <p className="text-muted-foreground text-lg font-medium mb-8">
                  Everything you need to know about working with us. 
                  Can't find the answer you're looking for? Reach out to our team.
                </p>
                <div className="flex items-center gap-4 p-6 bg-secondary/30 rounded-3xl border border-dashed border-primary/20">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Still have questions?</p>
                    <p className="text-sm font-medium text-muted-foreground">Call us at +27 12 345 6789</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {HOME_FAQS.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border rounded-2xl px-6 bg-secondary/10 border-border/50">
                      <AccordionTrigger className="text-left font-bold text-lg text-primary hover:no-underline">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed font-medium pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Request Section */}
        <section id="quote" className="py-24 bg-secondary/30 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border">
                <div className="lg:col-span-5 bg-primary p-12 text-white flex flex-col justify-between">
                  <div>
                    <h2 className="text-4xl text-white mb-6 tracking-tighter font-bold">Let's Bring Your Vision To Life</h2>
                    <p className="text-white/80 mb-12 text-lg font-medium">
                      Fill out the form and our expert team will provide a comprehensive, formal quote within 24 hours.
                    </p>
                    
                    <div className="space-y-8">
                      <div className="flex items-start gap-5">
                        <div className="bg-accent p-3 rounded-2xl shadow-lg">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-accent">Visit Our Shop</p>
                          <p className="text-white/70 font-medium">123 Business Street, Pretoria, 0001</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5">
                        <div className="bg-accent p-3 rounded-2xl shadow-lg">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-accent">Call Us Directly</p>
                          <p className="text-white/70 font-medium">+27 12 345 6789</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5">
                        <div className="bg-accent p-3 rounded-2xl shadow-lg">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-accent">Business Hours</p>
                          <p className="text-white/70 font-medium text-sm">Mon - Fri: 08:00 - 18:00</p>
                          <p className="text-white/70 font-medium text-sm">Saturday: 09:00 - 13:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-xs font-black text-accent uppercase tracking-[0.2em] mb-4">Connect With Us</p>
                    <div className="flex gap-4">
                      <Link href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all text-white">
                        <Facebook className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all text-white">
                        <Instagram className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all text-white">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all text-white">
                        <Twitter className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 p-12 lg:p-16">
                  <QuoteForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
