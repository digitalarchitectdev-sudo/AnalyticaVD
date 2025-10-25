import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative w-full py-20 md:py-32 bg-gradient-to-b from-background to-background/70">
        <div className="container mx-auto text-center px-4">
            <div className="bg-accent/20 inline-block rounded-full px-4 py-1 text-sm font-semibold text-accent-foreground mb-4 border border-accent/30 shadow-sm">
                The Tech Event of the Year
            </div>
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-primary-foreground bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary pb-2">
                Analytica 2025
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
                Ignite Your Passion. Accelerate Your Future. Join the brightest minds in tech for a day of innovation, learning, and connection.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                <Button size="lg" asChild>
                    <Link href="/#register">
                        Register Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link href="#features">
                        Explore Events
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  );
}
