
'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#rules', label: 'Rules' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  const closeSheet = () => setSheetOpen(false);

  const isHomePage = pathname === '/';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      closeSheet();
    } else {
      // If on a different page, just navigate to the hash link on the homepage.
      window.location.href = `/${href}`;
      closeSheet();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Image src="/AnalyticaLogo.svg" alt="Analytica Logo" width={32} height={32} />
          <span className="font-headline">Analytica</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className={cn(
                'transition-colors hover:text-primary',
                 'text-muted-foreground'
              )}
            >
              {label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/#features" onClick={(e) => handleNavClick(e, '/#features')}>Register Now</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" onClick={closeSheet} className="flex items-center gap-2 font-bold text-lg">
                    <Image src="/AnalyticaLogo.svg" alt="Analytica Logo" width={32} height={32} />
                    <span className="font-headline">Analytica</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col items-start gap-6 text-lg font-medium">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={cn(
                      'transition-colors hover:text-primary w-full',
                      'text-muted-foreground'
                    )}
                  >
                    {label}
                  </Link>
                ))}
                <Button asChild className="w-full mt-4">
                  <Link href="/#features" onClick={(e) => handleNavClick(e, '/#features')}>Register Now</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
