import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  CheckCircle2,
  Star,
  ArrowRight,
  Quote
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { 
  GENERAL_SERVICES, 
  DIGITAL_PRINTING, 
  WHY_CHOOSE_US, 
  PRICING_PACKAGES, 
  TESTIMONIALS 
} from '@/lib/data';

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

  const processSteps = [
    { title: 'Inquiry', desc: 'Submit your request via our form or call us.' },
    { title: 'Quotation', desc: 'Receive a detailed formal quote within 24 hours.' },
    { title: 'Production', desc: 'Our experts handle your project with strict quality checks.' },
    { title: 'Delivery', desc: 'Pick up your order or have it delivered to your doorstep.' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[650px] flex items-center overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover brightness-[0.35]"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <Badge className="mb-6 px-4 py-1.5 text-sm bg-accent text-primary hover:bg-accent border-none font-bold uppercase tracking-wider">
                Premium Printing & Business Services
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter leading-[1.1]">
                Your Business <span className="text-accent">Vision</span>, Brought to Life.
              </h1>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed font-medium">
                Professional administrative support and high-impact digital signage. 
                Experience excellence with Baitumeleng Services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-16 px-10 text-lg font-bold" asChild>
                  <Link href="#quote">Get a Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-primary border-white/40 font-bold" asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Statistics Bar */}
        <div className="bg-primary py-12 relative z-20 -mt-12 mx-4 md:mx-auto max-w-6xl rounded-[32px] shadow-2xl">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-black text-accent mb-1 tracking-tighter">15+</p>
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-black text-accent mb-1 tracking-tighter">5k+</p>
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-black text-accent mb-1 tracking-tighter">12k+</p>
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Projects Done</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-black text-accent mb-1 tracking-tighter">24h</p>
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest">Avg. Turnaround</p>
              </div>
            </div>
          </div>
        </div>

        {/* Partners / Trust Bar */}
        <div className="bg-white py-16">
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
        <section className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/10 mb-4 font-bold uppercase tracking-widest">Why Baitumeleng</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tighter">Setting the Professional Standard</h2>
              <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                We combine years of industry expertise with the latest technology to deliver results that exceed expectations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {WHY_CHOOSE_US.map((item, i) => (
                <Card key={i} className="border-none shadow-sm rounded-[32px] p-8 hover:shadow-xl transition-all duration-300 bg-white group">
                  <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <item.icon className="h-7 w-7 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-medium text-sm leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* General Services Overview */}
        <section id="services" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 tracking-tighter">Essential Business Services</h2>
              <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
              <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg font-medium">
                Reliable day-to-day administrative support to keep your office running smoothly.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {GENERAL_SERVICES.slice(0, 6).map((service) => (
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-500 border-none shadow-sm bg-white overflow-hidden rounded-[32px]">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2 pt-8 px-8">
                    <div className="p-3.5 rounded-2xl bg-secondary group-hover:bg-primary transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <CardTitle className="text-2xl text-primary font-bold">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-muted-foreground line-clamp-2 font-medium leading-relaxed">{service.desc}</p>
                    <Button variant="link" className="px-0 mt-6 font-bold text-primary group-hover:translate-x-2 transition-transform h-auto p-0" asChild>
                      <Link href={`/services/${service.slug}`}>
                        Learn more <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <Badge className="bg-accent text-primary hover:bg-accent mb-6 font-bold uppercase">Advanced Technology</Badge>
                <h2 className="text-4xl md:text-6xl text-white mt-4 mb-8 tracking-tighter font-bold leading-[1.1]">Professional Digital <br/> Printing Solutions</h2>
                <p className="text-white/80 text-xl mb-12 font-medium leading-relaxed">
                  Make a bold statement with our large-format and custom printing services. 
                  We ensure color accuracy and extreme durability on every project.
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
              <div className="relative aspect-square">
                <Image 
                  src="https://picsum.photos/seed/baitumeleng-printing/800/800" 
                  alt="Large scale printing" 
                  fill 
                  className="rounded-[40px] object-cover shadow-2xl border-8 border-white/5"
                  data-ai-hint="large format printing"
                />
                <div className="absolute -bottom-8 -left-8 bg-accent text-primary p-8 rounded-[32px] shadow-2xl max-w-xs border-4 border-primary">
                  <span className="block text-5xl font-black mb-2 tracking-tighter">100%</span>
                  <span className="text-sm font-bold uppercase tracking-wider leading-tight block">Quality Satisfaction Guarantee on every single project.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Guide Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tighter">Our Seamless Workflow</h2>
              <p className="text-muted-foreground text-lg font-medium">Getting your project from idea to reality is easier than ever.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <div key={i} className="relative text-center group">
                  <div className="w-20 h-20 rounded-[24px] bg-secondary text-primary font-black text-3xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-accent transition-all duration-300">
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-primary text-xl mb-3">{step.title}</h4>
                  <p className="text-muted-foreground font-medium text-sm leading-relaxed px-4">{step.desc}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-px bg-primary/10 -z-10 -ml-10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tighter">Popular Service Bundles</h2>
              <p className="text-muted-foreground text-lg font-medium">Transparent pricing for our most requested high-quality printing packages.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {PRICING_PACKAGES.map((pkg, i) => (
                <Card key={i} className={`border-none rounded-[40px] shadow-sm flex flex-col overflow-hidden ${pkg.popular ? 'ring-4 ring-accent bg-white scale-105 z-10' : 'bg-white/80'}`}>
                  {pkg.popular && (
                    <div className="bg-accent text-primary text-center py-2 font-black uppercase text-xs tracking-[0.2em]">Best Value</div>
                  )}
                  <CardHeader className="p-10 pb-6 text-center">
                    <CardTitle className="text-2xl font-bold text-primary mb-2">{pkg.name}</CardTitle>
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-4xl font-black text-primary">{pkg.price}</span>
                      <span className="text-muted-foreground font-bold text-sm uppercase">incl. VAT</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-10 pt-0 flex-1">
                    <ul className="space-y-4">
                      {pkg.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-muted-foreground font-medium">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-10 pt-0">
                    <Button className={`w-full h-14 rounded-2xl font-bold text-lg ${pkg.popular ? 'bg-primary' : 'bg-secondary text-primary hover:bg-primary hover:text-white'}`} asChild>
                      <Link href="#quote">Order This Package</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tighter">Voice of Our Clients</h2>
              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-5 w-5 text-accent fill-accent" />)}
              </div>
              <p className="text-muted-foreground text-lg font-medium">Why South African businesses choose Baitumeleng year after year.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-secondary/20 p-10 rounded-[40px] border border-border/50 relative">
                  <Quote className="h-12 w-12 text-accent/20 absolute top-8 right-8" />
                  <p className="text-primary/80 font-medium italic mb-8 leading-relaxed text-lg">"{t.content}"</p>
                  <div>
                    <p className="font-black text-primary">{t.name}</p>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Request Section */}
        <section id="quote" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-[40px] overflow-hidden shadow-2xl border">
                <div className="lg:col-span-5 bg-secondary/50 p-12 flex flex-col justify-between">
                  <div>
                    <h2 className="text-4xl text-primary mb-6 font-bold tracking-tighter">Get Your Custom Quote</h2>
                    <p className="text-muted-foreground mb-12 text-lg font-medium leading-relaxed">
                      Ready to start? Fill out the form and our team will get back to you with a competitive quote within 24 hours.
                    </p>
                    
                    <div className="space-y-8">
                      <div className="flex items-start gap-5">
                        <div className="bg-primary/10 p-3 rounded-2xl">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-primary">Visit Our Shop</p>
                          <p className="text-muted-foreground font-medium">123 Business Street, Pretoria, 0001</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5">
                        <div className="bg-primary/10 p-3 rounded-2xl">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-primary">Call Us Directly</p>
                          <p className="text-muted-foreground font-medium">+27 12 345 6789</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-5">
                        <div className="bg-primary/10 p-3 rounded-2xl">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-lg text-primary">Working Hours</p>
                          <p className="text-muted-foreground font-medium">Mon - Fri: 8:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-primary/10">
                    <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4">Connect With Us</p>
                    <div className="flex gap-4">
                      <Link href="#" className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all">
                        <Facebook className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all">
                        <Instagram className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link href="#" className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all">
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
