import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Mahi-kehkasha', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/maheen-kehkasha-68b658224', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:connectmaheenk@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="footer py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <a href="#" className="text-2xl font-bold text-gradient">
              Maheen Kehkasha
            </a>
            <p className="text-muted mt-2">
              Connect with me for collaborations, opportunities, and more.
            </p>
          </motion.div>

          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-xl"
                whileHover={{ y: -5, color: 'var(--primary-color)' }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-muted">
            © {new Date().getFullYear()} Maheen Kehkasha. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 