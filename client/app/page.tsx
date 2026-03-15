import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Printer,
  ChevronRight,
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
  Twitter
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center overflow-hidden">
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
            <Badge className="mb-6 px-4 py-1.5 text-sm bg-accent text-primary hover:bg-accent/90 border-none font-bold uppercase tracking-wider">
              Trusted by 5000+ Clients
            </Badge>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-[1.05] tracking-tighter">
              Your Vision <span className="text-accent italic font-serif">In Print.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-medium">
              High-impact printing and professional business services. 
              We bring your brand to life with precision and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-16 px-10 text-lg shadow-xl shadow-primary/20" asChild>
                <Link href="#quote">Start My Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-primary border-white/20 transition-all" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <div className="bg-primary py-8 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent mb-1">15+</p>
              <p className="text-xs md:text-sm text-white/60 uppercase tracking-widest font-bold">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent mb-1">24h</p>
              <p className="text-xs md:text-sm text-white/60 uppercase tracking-widest font-bold">Avg. Turnaround</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent mb-1">100%</p>
              <p className="text-xs md:text-sm text-white/60 uppercase tracking-widest font-bold">Quality Guarantee</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent mb-1">5k+</p>
              <p className="text-xs md:text-sm text-white/60 uppercase tracking-widest font-bold">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Why South Africa's Businesses Choose Us</h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-xl">
                We're more than just a print shop. We are your business growth partners, 
                dedicated to delivering high-quality results every single time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {WHY_CHOOSE_US.map((item, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
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

      {/* Essential Services Grid */}
      <section id="services" className="py-24 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1">Administrative Support</Badge>
            <h2 className="text-4xl md:text-5xl mb-6">Essential Business Services</h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              Reliable daily operations are the backbone of your success. 
              We handle the details so you can focus on the big picture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GENERAL_SERVICES.slice(0, 6).map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border-none shadow-sm bg-white overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-3 rounded-2xl bg-secondary group-hover:bg-primary transition-colors duration-500">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{service.desc}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="link" className="px-0 group-hover:translate-x-2 transition-transform text-primary font-bold" asChild>
                    <Link href={`/services/${service.slug}`}>
                      Explore Service <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Printing Highlight Section */}
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
                <div className="absolute -bottom-10 -right-10 bg-accent text-primary p-8 rounded-3xl shadow-2xl max-w-xs border-4 border-primary">
                  <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-primary" />)}
                  </div>
                  <p className="font-bold text-lg leading-tight mb-2">"Highest quality printing in the region."</p>
                  <p className="text-xs uppercase tracking-widest font-black opacity-60">Verified Business Customer</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="bg-accent text-primary hover:bg-accent/90 mb-6 font-bold uppercase">Advanced Technology</Badge>
              <h2 className="text-4xl md:text-6xl text-white mt-4 mb-8 tracking-tighter">Digital Printing & Signage</h2>
              <p className="text-white/70 text-xl mb-12 leading-relaxed">
                Make a bold statement with our large-format solutions. 
                We use the latest UV-resistant inks and premium substrates to ensure your brand stands out.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DIGITAL_PRINTING.slice(0, 6).map((item) => (
                  <Link key={item.id} href={`/services/${item.slug}`} className="group flex items-center gap-4 bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white hover:text-primary transition-all duration-300">
                    <div className={`p-2.5 rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-bold text-lg">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">Popular Print Packages</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get the best value with our curated business and marketing bundles.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PACKAGES.map((pkg, index) => (
              <Card key={index} className={`flex flex-col border-2 ${pkg.popular ? 'border-accent shadow-2xl scale-105 bg-white relative z-10' : 'border-border'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-primary text-xs font-black uppercase rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>Starting from</CardDescription>
                  <p className="text-5xl font-black text-primary mt-4">{pkg.price}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-4 text-left">
                    {pkg.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground font-medium">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full h-12 text-lg font-bold" variant={pkg.popular ? 'default' : 'outline'} asChild>
                    <Link href="#quote">Order Package</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6">Simple 4-Step Process</h2>
            <p className="text-muted-foreground text-lg">How we bring your ideas from concept to reality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -z-0"></div>
            {[
              { title: 'Request Quote', desc: 'Fill out our simple form with your details.' },
              { title: 'Approve Proof', desc: 'We send you a digital preview for your sign-off.' },
              { title: 'Production', desc: 'We print using our high-end equipment.' },
              { title: 'Fast Delivery', desc: 'Collect in-store or we deliver to your door.' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-primary flex items-center justify-center text-3xl font-black text-primary mb-6 shadow-xl">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Card key={i} className="bg-white/5 border-white/10 text-white p-8">
                <Quote className="h-10 w-10 text-accent mb-6 opacity-50" />
                <p className="text-lg italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-black">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-xs text-white/60 uppercase font-bold tracking-widest">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section id="quote" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border">
              <div className="lg:col-span-5 bg-primary p-12 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-4xl text-white mb-6 tracking-tighter">Let's Build Something Great Together</h2>
                  <p className="text-white/70 mb-12 text-lg">
                    Ready to start your next project? Our team is waiting to provide a competitive, formal quote.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <div className="bg-accent p-3 rounded-2xl">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Visit Our Shop</p>
                        <p className="text-white/60">123 Business Street, Local Mall, Area 45, Pretoria</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="bg-accent p-3 rounded-2xl">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Call Us Directly</p>
                        <p className="text-white/60">+27 12 345 6789</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <div className="bg-accent p-3 rounded-2xl">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">Business Hours</p>
                        <p className="text-white/60">Monday - Friday: 08:00 - 18:00</p>
                        <p className="text-white/60">Saturday: 09:00 - 13:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-xs font-black text-accent uppercase tracking-[0.2em] mb-4">Connect With Us</p>
                  <div className="flex gap-4">
                    <Link href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all">
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all">
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-all">
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

      {/* Footer */}
      <footer className="bg-white border-t py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 mb-6">
                <div className="bg-primary p-2 rounded-lg">
                  <Printer className="text-white h-6 w-6" />
                </div>
                <span className="text-2xl font-headline font-bold text-primary tracking-tighter">
                  BAITUMELENG
                </span>
              </Link>
              <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
                Empowering South African businesses with world-class printing and administrative solutions since 2010. 
                Quality you can feel, service you can trust.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-primary uppercase tracking-widest text-xs mb-6">Navigation</h4>
              <ul className="space-y-4">
                <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">All Services</Link></li>
                <li><Link href="#printing" className="text-muted-foreground hover:text-primary transition-colors">Digital Printing</Link></li>
                <li><Link href="#quote" className="text-muted-foreground hover:text-primary transition-colors">Request Quote</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-primary uppercase tracking-widest text-xs mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="text-muted-foreground">info@baitumeleng.co.za</li>
                <li className="text-muted-foreground">+27 12 345 6789</li>
                <li className="text-muted-foreground text-sm">123 Business Street, Pretoria, 0001</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground font-medium">
              &copy; {new Date().getFullYear()} Baitumeleng Services. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary font-bold uppercase tracking-widest">Privacy Policy</Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-primary font-bold uppercase tracking-widest">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
