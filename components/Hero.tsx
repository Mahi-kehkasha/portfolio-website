'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@/components/ui/button';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I&lsquo;m Maheen Kehkasha
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl mb-8 text-primary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TypeAnimation
            sequence={[
              'Web Developer',
              2000,
              'AI Enthusiast',
              2000,
              'React Developer',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button onClick={() => scrollToSection('projects')}>
            Explore Projects
          </Button>
          <Button variant="outline" onClick={() => scrollToSection('contact')}>
            Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
