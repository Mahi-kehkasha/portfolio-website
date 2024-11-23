'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const contactInfo = [
  { icon: FaEnvelope, href: 'mailto:connectmaheenk@gmail.com' },
  { icon: FaGithub, href: 'https://github.com/Mahi-kehkasha' },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/maheen-kehkasha-68b658224',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-4">
              Feel free to reach out to me for any inquiries or collaboration
              opportunities.
            </p>
            <div className="flex justify-start space-x-4 mb-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-focus transition-colors"
                >
                  <item.icon className="text-2xl" />
                  <span className="sr-only">{item.icon.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit">Send Message</Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
