import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, 
  MessageSquare, 
  Clock,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Award
} from 'lucide-react';
import { ALL_SERVICES } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export async function generateStaticParams() {
  return ALL_SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = ALL_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  const processSteps = [
    { title: 'Inquiry', desc: 'Submit your request via our form or call us for a custom consultation.' },
    { title: 'Quotation', desc: 'Receive a detailed formal quote based on your specific requirements.' },
    { title: 'Production', desc: 'Our experts handle the printing and fabrication with strict quality checks.' },
    { title: 'Delivery', desc: 'Pick up your order or have it delivered directly to your doorstep.' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <div className={`p-10 rounded-[40px] ${service.color || 'bg-white/10'} shadow-2xl shrink-0 animate-in fade-in zoom-in duration-700`}>
                <Icon className="h-24 w-24 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <Badge className="bg-accent text-primary mb-6 font-bold uppercase tracking-widest px-4 py-1 border-none">
                  {service.category === 'general' ? 'Essential Business Service' : 'Premium Digital Printing'}
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter uppercase leading-[1.1]">
                  {service.name}
                </h1>
                <p className="text-2xl text-white/80 leading-relaxed font-medium max-w-2xl">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              {/* Main Column */}
              <div className="lg:col-span-8">
                {/* About Section */}
                <div className="mb-20">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary tracking-tight">Expert {service.name} Solutions</h2>
                  <div className="prose prose-lg max-w-none text-xl text-muted-foreground leading-relaxed font-medium whitespace-pre-wrap">
                    {service.longDescription || "We provide top-tier services tailored to your professional needs. Our commitment to quality ensures that every project, regardless of size, is executed with precision and care."}
                  </div>
                </div>

                {/* Features Grid */}
                {service.features && (
                  <div className="mb-20">
                    <h3 className="text-2xl font-bold mb-10 flex items-center gap-3 text-primary uppercase tracking-wider">
                      <CheckCircle2 className="text-accent h-7 w-7" /> Key Service Advantages
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 rounded-3xl bg-secondary/30 border border-primary/5 hover:bg-white hover:shadow-xl transition-all duration-300">
                          <div className="h-3 w-3 rounded-full bg-accent shrink-0" />
                          <span className="font-bold text-primary/80 text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Process Section */}
                <div className="mb-20 py-16 px-10 rounded-[48px] bg-secondary/20 border border-border">
                  <h3 className="text-2xl font-bold mb-12 text-primary text-center uppercase tracking-widest">Our Seamless Process</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processSteps.map((step, i) => (
                      <div key={i} className="relative text-center">
                        <div className="w-12 h-12 rounded-2xl bg-primary text-accent font-black text-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                          {i + 1}
                        </div>
                        <h4 className="font-bold text-primary mb-2">{step.title}</h4>
                        <p className="text-sm text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
                        {i < processSteps.length - 1 && (
                          <div className="hidden lg:block absolute top-6 -right-4 w-8 h-px bg-primary/20"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Value Props */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                  <div className="p-8 rounded-3xl bg-white shadow-sm border border-border flex flex-col gap-4">
                    <Zap className="h-8 w-8 text-accent fill-accent/20" />
                    <h4 className="font-bold text-primary text-lg">Fast Turnaround</h4>
                    <p className="text-sm text-muted-foreground font-medium">Small jobs completed same-day; large projects within 3-5 days.</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-white shadow-sm border border-border flex flex-col gap-4">
                    <ShieldCheck className="h-8 w-8 text-accent fill-accent/20" />
                    <h4 className="font-bold text-primary text-lg">Guaranteed Quality</h4>
                    <p className="text-sm text-muted-foreground font-medium">We use only premium industrial-grade materials and inks.</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-white shadow-sm border border-border flex flex-col gap-4">
                    <Award className="h-8 w-8 text-accent fill-accent/20" />
                    <h4 className="font-bold text-primary text-lg">Expert Knowledge</h4>
                    <p className="text-sm text-muted-foreground font-medium">Over 15 years of industry experience at your service.</p>
                  </div>
                </div>

                {/* Pricing Info */}
                {service.pricingNote && (
                  <div className="bg-accent/10 border-l-8 border-accent p-10 rounded-r-[40px] mb-20 shadow-sm">
                    <div className="flex items-start gap-6">
                      <HelpCircle className="h-10 w-10 text-primary shrink-0" />
                      <div>
                        <h4 className="font-bold text-primary mb-3 text-2xl tracking-tight">Investment Information</h4>
                        <p className="text-muted-foreground text-lg font-medium leading-relaxed">{service.pricingNote}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* FAQs */}
                {service.faqs && service.faqs.length > 0 && (
                  <div className="mt-24">
                    <h3 className="text-3xl font-bold mb-10 text-primary tracking-tight">Common Questions About {service.name}</h3>
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {service.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border rounded-3xl px-8 bg-white shadow-sm">
                          <AccordionTrigger className="text-left font-bold text-xl text-primary py-6 hover:no-underline">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-lg font-medium pb-8 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}
              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-4">
                <div className="sticky top-28 space-y-8">
                  <Card className="border-none shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] bg-primary text-white overflow-hidden rounded-[40px]">
                    <div className="p-10">
                      <h3 className="text-3xl font-bold mb-6 tracking-tighter uppercase">Ready to Start?</h3>
                      <p className="text-white/80 mb-10 text-lg font-medium leading-relaxed">
                        Join thousands of satisfied clients. Get a tailored, formal quote for your {service.name} project today.
                      </p>
                      <div className="space-y-6">
                        <Button asChild size="lg" className="w-full h-16 bg-accent text-primary hover:bg-white transition-all font-black text-lg rounded-2xl shadow-xl shadow-black/10">
                          <Link href={`/#quote`}>Request My Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                        <div className="flex items-center justify-center gap-2 py-4 border-t border-white/10">
                          <Clock className="h-5 w-5 text-accent" />
                          <span className="text-sm font-bold uppercase tracking-widest text-accent">Response in 24 Hours</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/5 p-8 border-t border-white/10">
                      <div className="flex items-center gap-5">
                        <div className="bg-accent p-3 rounded-2xl shadow-lg">
                          <MessageSquare className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-1">Direct Line</p>
                          <p className="font-bold text-xl">+27 12 345 6789</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Secondary Sidebar Widget */}
                  <div className="p-10 rounded-[40px] bg-secondary/30 border border-border">
                    <h4 className="font-bold text-primary mb-6 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" /> Professional Standard
                    </h4>
                    <ul className="space-y-4">
                      {['Official Tax Invoices', 'Bulk Order Support', 'Custom Consultations', 'Nationwide Delivery'].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground font-bold text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
