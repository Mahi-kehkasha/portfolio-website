'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const internships = [
  {
    title: 'Intern',
    company: 'Cumin Technologies',
    period: '2023 - 2024',
    details: [
      'Developed responsive UI using HTML5, CSS3, and React.js.',
      'Integrated RESTful APIs and ensured cross-browser compatibility.',
      "Contributed to feature enhancements for the 'FeeOn' financial software.",
      'Used Git for version control and collaborated effectively with team members.',
    ],
  },
  {
    title: 'Data Analyst Intern',
    company: 'Unitech Academy',
    period: '2024',
    details: [
      'Applied ML algorithms for data analysis and insights.',
      'Utilized NLP to process and interpret text data.',
      'Conducted analysis to extract trends and meaningful information.',
      'Developed and implemented models for data-driven projects, ensuring accurate results through data preprocessing.',
    ],
  },
];

export default function Internships() {
  return (
    <section id="internships" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Internships
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{internship.title}</CardTitle>
                  <CardDescription>
                    {internship.company} | {internship.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    {internship.details.map((detail, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
