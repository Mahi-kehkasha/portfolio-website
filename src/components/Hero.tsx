import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Mahi-kehkasha', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/maheen-kehkasha-68b658224', label: 'LinkedIn' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Darker overlay for better text visibility */}
        <img
          src="/images/Wallapage.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="container mx-auto px-4 py-20 relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Hi, I'm{' '}
              <span className="text-gradient inline-block relative">
                Maheen Kehkasha
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                />
              </span>
            </h1>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-semibold">
              <TypeAnimation
                sequence={[
                  'MERN Stack Developer',
                  1000,
                  'Wordpress Developer',
                  1000,
                  'Mern stack Trainer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gradient"
              />
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              I create beautiful and functional web applications with modern technologies.
              Let's build something amazing together!
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <motion.a
              href="#contact"
              className="btn btn-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get in Touch</span>
            </motion.a>
            <motion.a
              href="#projects"
              className="btn btn-outline-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Projects</span>
            </motion.a>
            <motion.a
              href="mailto:connectmaheenk@gmail.com"
              className="btn btn-primary group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Hire Me</span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link text-2xl glass-effect p-4 rounded-full group"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon className="group-hover:text-gradient transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-2 bg-primary rounded-full mt-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 