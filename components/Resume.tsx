'use client'

import { motion } from 'framer-motion'

export default function Resume() {
  const handleDownload = () => {
    // In a real application, you would implement the actual download functionality here
    console.log('Downloading resume...')
  }

  return (
    <section id="resume" className="py-20 bg-navy-blue-light">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Resume
        </motion.h2>
        <motion.p
          className="text-lg mb-8 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Download my resume to learn more about my experience and skills.
        </motion.p>
        <motion.button
          className="bg-cyan-500 hover:bg-cyan-600 text-navy-blue font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
          onClick={handleDownload}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Download Resume
        </motion.button>
      </div>
    </section>
  )
}

