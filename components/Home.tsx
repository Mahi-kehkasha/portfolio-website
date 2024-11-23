'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm Maheen Kehkasha
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl mb-8 text-cyan-400"
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
          <a
            href="#about"
            className="bg-cyan-500 hover:bg-cyan-600 text-navy-blue font-bold py-2 px-4 rounded transition duration-300"
          >
            Explore Projects
          </a>
          <a
            href="#social"
            className="bg-transparent hover:bg-cyan-500 text-cyan-500 hover:text-navy-blue font-bold py-2 px-4 rounded border border-cyan-500 hover:border-transparent transition duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}

