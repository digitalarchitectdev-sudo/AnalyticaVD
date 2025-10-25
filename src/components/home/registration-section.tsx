import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function RegistrationSection() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdS6bzKZaj1LNvphulOgL9vPx7UZh8Zc8zj2Am6pQtMRj20sA/viewform";

  return (
    <section id="register" className="container mx-auto max-w-3xl py-12 md:py-24 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          Register for Analytica 2025
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Secure your spot today! Click the button below to open the registration form.
        </p>
      </div>
      <div className="text-center">
        <Button size="lg" asChild>
          <Link href={googleFormUrl} target="_blank" rel="noopener noreferrer">
            Register Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
