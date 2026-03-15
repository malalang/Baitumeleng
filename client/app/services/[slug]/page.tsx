import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle2, 
  MessageSquare, 
  Clock,
  HelpCircle
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

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className={`p-8 rounded-3xl ${service.color || 'bg-white/10'} shadow-2xl`}>
                <Icon className="h-24 w-24 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-4 py-1 rounded-full bg-accent text-primary text-xs font-bold uppercase tracking-widest mb-4">
                  {service.category === 'general' ? 'General Service' : 'Digital Printing'}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
                  {service.name}
                </h1>
                <p className="text-xl text-white/80 leading-relaxed max-w-2xl font-medium">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Main Column */}
              <div className="lg:col-span-8">
                <div className="prose prose-lg max-w-none mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-primary">About this Service</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed font-medium whitespace-pre-wrap">
                    {service.longDescription}
                  </p>
                </div>

                {service.features && (
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-primary">
                      <CheckCircle2 className="text-primary h-6 w-6" /> Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <Card key={i} className="border-none bg-secondary/30">
                          <CardContent className="p-4 flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-accent shrink-0" />
                            <span className="font-bold text-primary/80">{feature}</span>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {service.pricingNote && (
                  <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-2xl mb-12">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="h-6 w-6 text-primary shrink-0" />
                      <div>
                        <h4 className="font-bold text-primary mb-1 text-lg">Pricing Information</h4>
                        <p className="text-muted-foreground font-medium">{service.pricingNote}</p>
                      </div>
                    </div>
                  </div>
                )}

                {service.faqs && service.faqs.length > 0 && (
                  <div className="mt-16">
                    <h3 className="text-2xl font-bold mb-8 text-primary">Frequently Asked Questions</h3>
                    <Accordion type="single" collapsible className="w-full">
                      {service.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left font-bold text-lg text-primary">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-muted-foreground text-base font-medium">
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
                <Card className="sticky top-24 border-none shadow-2xl bg-primary text-white overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Request a Quote</h3>
                    <p className="text-white/80 mb-8 font-medium">
                      Ready to get started with your {service.name} project? Our team is ready to assist you.
                    </p>
                    <div className="space-y-4">
                      <Button asChild size="lg" className="w-full bg-accent text-primary hover:bg-white transition-all font-bold">
                        <Link href={`/#quote`}>Get My Quote Now</Link>
                      </Button>
                      <div className="flex items-center justify-center gap-2 py-4">
                        <Clock className="h-4 w-4 text-accent" />
                        <span className="text-sm font-bold uppercase tracking-wider">Response within 24 hours</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 p-6 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="bg-accent p-2 rounded-lg">
                        <MessageSquare className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-wider text-accent">Need Help?</p>
                        <p className="font-black">+27 12 345 6789</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
