import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { GENERAL_SERVICES, DIGITAL_PRINTING  } from '@/lib/data';
import { ServiceItem } from '@/lib/validations/service.schema';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/20">
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl mb-6">Our Full Suite of Services</h1>
            <p className="text-xl text-muted-foreground">
              From essential business administrative support to high-impact digital printing and signage solutions.
            </p>
          </div>

          {/* General Services Section */}
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold">General Business Services</h2>
              <div className="flex-1 h-px bg-border"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GENERAL_SERVICES.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>

          {/* Digital Printing Section */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold">Digital Printing & Signage</h2>
              <div className="flex-1 h-px bg-border"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DIGITAL_PRINTING.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Baitumeleng Services. Professional Printing Solutions.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-none shadow-sm h-full flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className={`p-3 rounded-xl ${service.color || 'bg-secondary'} group-hover:bg-primary transition-colors`}>
          <Icon className={`h-6 w-6 ${service.color ? 'text-white' : 'text-primary'} group-hover:text-white`} />
        </div>
        <CardTitle className="text-xl">{service.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <p className="text-muted-foreground line-clamp-2">{service.desc}</p>
        <div className="mt-6">
          <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
            <Link href={`/services/${service.slug}`}>
              View Details <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
