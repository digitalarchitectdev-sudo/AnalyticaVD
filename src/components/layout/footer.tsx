import { Code2 } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
       <div className="pb-4 pt-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Analytica. All rights reserved.
        </div>
    </footer>
  );
}
