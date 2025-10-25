import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[60vh] md:h-[80vh] flex items-end justify-end overflow-hidden">
        <video
            src="/HeroVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto text-right px-4 pb-20">
            
            <p className="mt-4 max-w-2xl ml-auto text-lg md:text-xl text-slate-200">
                Ignite Your Passion. Accelerate Your Future. Join the brightest minds in tech for a day of innovation, learning, and connection.
            </p>
            <div className="mt-8 flex justify-end gap-4">
                <Button size="lg" asChild>
                    <Link href="/#register">
                        Register Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white hover:text-primary">
                    <Link href="#features">
                        Explore Events
                    </Link>
                </Button>
            </div>
        </div>
    </section>
  );
}
