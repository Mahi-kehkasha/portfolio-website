'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const qualifications = [
  {
    title: 'Bachelor of Computer Applications',
    institution: 'Bengaluru North University',
    year: '2024',
    details: 'CGPA: 8.29',
  },
];

export default function Qualifications() {
  return (
    <section id="qualifications" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Qualifications
        </motion.h2>
        <Accordion type="single" collapsible className="w-full">
          {qualifications.map((qual, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <div className="text-left">
                  <h3 className="text-xl font-semibold">{qual.title}</h3>
                  <p className="text-primary">{qual.institution}</p>
                  <p className="text-sm text-muted-foreground">{qual.year}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{qual.details}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
