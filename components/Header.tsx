'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Qualifications', href: '#qualifications' },
  { name: 'Internships', href: '#internships' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header({
  activeSection,
  scrollToSection,
}: {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}) {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          MK
        </motion.div>
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => scrollToSection(item.name.toLowerCase())}
                className={`text-sm ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </button>
            </motion.li>
          ))}
        </ul>
        <ThemeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.name.toLowerCase());
                    // Close the sheet after clicking
                    document
                      .querySelector('[data-radix-collection-item]')
                      ?.click();
                  }}
                  className={`text-sm ${
                    activeSection === item.name.toLowerCase()
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
