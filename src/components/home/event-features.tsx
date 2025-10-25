import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export function EventFeatures() {
  const features = PlaceHolderImages;

  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            What to Expect
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A full day packed with activities designed to inspire and challenge you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} className="flex flex-col overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={feature.imageUrl}
                    alt={feature.description}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={feature.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col">
                <CardTitle className="font-headline text-xl capitalize mb-2">{feature.id.replace('_', ' ')}</CardTitle>
                <CardDescription className="flex-1">{feature.description}</CardDescription>
                <Button variant="link" asChild className="p-0 h-auto mt-4 self-start">
                    <Link href="/register">
                        Learn More <ArrowRight className="ml-2 h-4 w-4"/>
                    </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
