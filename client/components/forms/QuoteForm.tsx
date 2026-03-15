"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { quoteSchema, type QuoteFormData, SERVICE_CATEGORIES } from '@/lib/validations/quote.schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { Loader2, UploadCloud, FileCheck, X } from 'lucide-react';

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);

  const form = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      service: undefined,
      description: '',
      quantity: 1,
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  async function onSubmit(data: QuoteFormData) {
    setIsSubmitting(true);
    // Simulation of file upload and Supabase integration
    console.log('Form Data:', data);
    if (selectedFile) console.log('File to upload:', selectedFile.name);
    
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    
    toast({
      title: "Quote request sent successfully!",
      description: "Our team will review your requirements and send a formal quote within 24 hours.",
    });
    form.reset();
    setSelectedFile(null);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-bold">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} className="h-12 rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-bold">Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="name@example.com" type="email" {...field} className="h-12 rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-bold">Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="012 345 6789" {...field} className="h-12 rounded-xl" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-bold">Service Required</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {SERVICE_CATEGORIES.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
             <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary font-bold">Quantity</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} className="h-12 rounded-xl" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
          </div>
          <div className="md:col-span-2">
            <FormItem>
              <FormLabel className="text-primary font-bold">Upload Reference (Optional)</FormLabel>
              <FormControl>
                {!selectedFile ? (
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-2xl cursor-pointer bg-secondary/30 border-primary/10 hover:bg-secondary/50 transition-all group">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadCloud className="w-8 h-8 mb-2 text-primary/40 group-hover:text-primary transition-colors" />
                      <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">
                        Click to attach files
                      </p>
                    </div>
                    <input type="file" className="hidden" onChange={handleFileChange} />
                  </label>
                ) : (
                  <div className="flex items-center justify-between w-full h-32 p-6 border-2 border-primary/20 bg-primary/5 rounded-2xl animate-in fade-in slide-in-from-bottom-2">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary text-white rounded-xl shadow-lg">
                        <FileCheck className="w-6 h-6" />
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-sm font-bold text-primary truncate max-w-[150px] md:max-w-[200px]">
                          {selectedFile.name}
                        </p>
                        <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">
                          {(selectedFile.size / 1024).toFixed(1)} KB
                        </p>
                      </div>
                    </div>
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon" 
                      onClick={removeFile}
                      className="hover:bg-destructive/10 hover:text-destructive rounded-full"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                )}
              </FormControl>
            </FormItem>
          </div>
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary font-bold">Project Details</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us more (sizes, colors, materials)..." 
                  className="min-h-[120px] rounded-2xl"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full text-lg h-14 rounded-2xl shadow-xl shadow-primary/10 font-bold" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending Request...
            </>
          ) : (
            'Request My Quote Now'
          )}
        </Button>
      </form>
    </Form>
  );
}
