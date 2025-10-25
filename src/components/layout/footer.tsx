import { Code2 } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-headline">Analytica</span>
          </Link>
        </div>
      </div>
       <div className="pb-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Analytica. All rights reserved.
        </div>
    </footer>
  );
}
