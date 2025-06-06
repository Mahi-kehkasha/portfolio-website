import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaTimes, FaDownload } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      
      if (mobileMenu && 
          !mobileMenu.contains(event.target as Node) && 
          mobileMenuButton && 
          !mobileMenuButton.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = ['About', 'Experience', 'Projects', 'Contact'];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-2xl sm:text-3xl md:text-4xl font-bold relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              MK
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-base lg:text-lg font-semibold relative group ${
                    isActive 
                      ? 'text-primary dark:text-primary' 
                      : 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary'
                  } transition-colors duration-300`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  } transition-transform duration-300`} />
                </motion.a>
              );
            })}
            
            {/* Download Resume Button */}
            <motion.a
              href="/Maheen-Kehkasha.pdf"
              download
              className="btn btn-primary group flex items-center space-x-2 px-4 py-2 rounded-lg text-base lg:text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="text-lg" />
              <span>Resume</span>
            </motion.a>

            <motion.button
              onClick={toggleTheme}
              className="p-2.5 sm:p-3 rounded-full glass-effect hover:shadow-glow transition-all duration-300 relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {isDark ? (
                <FaSun className="text-xl sm:text-2xl text-yellow-400 relative z-10" />
              ) : (
                <FaMoon className="text-xl sm:text-2xl text-gray-600 relative z-10" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            id="mobile-menu-button"
            className="md:hidden p-2.5 rounded-lg glass-effect hover:shadow-glow relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6 text-gray-700 dark:text-gray-200 relative z-10" />
            ) : (
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-200 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="glass-effect rounded-xl p-4 space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.toLowerCase();
                  return (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className={`block text-lg font-semibold px-4 py-3 rounded-lg ${
                        isActive 
                          ? 'text-primary dark:text-primary bg-primary/10' 
                          : 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-primary/5'
                      } transition-all duration-300`}
                      whileHover={{ x: 10 }}
                      whileTap={{ x: 0 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </motion.a>
                  );
                })}

                {/* Download Resume Button in Mobile Menu */}
                <motion.a
                  href="/Maheen-Kehkasha.pdf"
                  download
                  className="flex items-center space-x-2 px-4 py-3 rounded-lg text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-primary/5 transition-all duration-300"
                  whileHover={{ x: 10 }}
                  whileTap={{ x: 0 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaDownload className="text-xl" />
                  <span>Download Resume</span>
                </motion.a>

                <motion.button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-lg font-semibold text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-primary/5 transition-all duration-300"
                  whileHover={{ x: 10 }}
                  whileTap={{ x: 0 }}
                >
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                  {isDark ? (
                    <FaSun className="text-xl text-yellow-400" />
                  ) : (
                    <FaMoon className="text-xl text-gray-600" />
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header; 