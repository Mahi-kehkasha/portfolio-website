'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/Mahi-kehkasha' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/maheen-kehkasha-68b658224/' },
  { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/yourtwitterhandle' },
]

export default function SocialMedia() {
  return (
    <section id="social" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Connect With Me
        </motion.h2>
        <motion.div
          className="flex justify-center space-x-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-gray-400 hover:text-cyan-400 transition duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <link.icon />
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

