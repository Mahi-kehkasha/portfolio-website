import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaShoppingCart, FaBrain, FaLeaf, FaCar } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Blossomia – Flower E-commerce',
      description: 'Developed a modern, mobile-friendly flower store UI with elegant product showcases.',
      features: [
        'Designed smooth, responsive layouts using Bootstrap and React components',
        'Focused on clean UX, cross-device compatibility, and intuitive navigation'
      ],
      icon: FaLeaf,
      link: 'https://blossomia.netlify.app/',
      year: '2025',
      tech: ['React', 'Bootstrap', 'CSS']
    },
    {
      title: 'Personal Portfolio Website',
      description: 'Built a responsive portfolio using React.js and Next.js.',
      features: [
        'Implemented light/dark mode toggle for enhanced usability',
        'Optimized navigation, load times, and cross-platform performance'
      ],
      icon: FaReact,
      link: 'https://maheencodes.netlify.app',
      year: '2025',
      tech: ['React.js', 'Next.js', 'Tailwind CSS']
    },
    {
      title: 'Luxury Cars Website',
      description: 'Designed and built a stylish, fully responsive website for showcasing luxury cars.',
      features: [
        'Focused on clean layout, modern aesthetics, and smooth user experience across devices',
        'Emphasized visual appeal with structured sections and intuitive design'
      ],
      icon: FaCar,
      link: 'https://luxurycars-website.netlify.app/',
      year: '2025',
      tech: ['HTML', 'CSS']
    },
    
    {
      title: 'NLP-Based News Analysis',
      description: 'Created an NLP model using scikit-learn and NLTK for content categorization and sentiment analysis.',
      features: [
        'Delivered personalized recommendations, improving user interaction'
      ],
      icon: FaBrain,
      link: 'https://github.com/Mahi-kehkasha/NLP-20Newsgroup.git',
      year: '2024',
      tech: ['Python', 'scikit-learn', 'NLTK']
    },
   
    
    {
      title: 'E-commerce Application',
      description: 'Developed a full-stack MERN e-commerce platform with Stripe payment integration.',
      features: [
        'Integrated Twilio for real-time order notifications, enhancing engagement'
      ],
      icon: FaShoppingCart,
      link: 'https://github.com/Mahi-kehkasha/mern_ecommerce.git',
      year: '2024',
      tech: ['MERN Stack', 'Stripe', 'Twilio']
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="section-header scroll-reveal text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-gradient text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <p className="text-muted text-lg">Showcasing my development journey</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect p-6 rounded-2xl group hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary-light text-primary cyber-glow group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gradient mb-1">{project.title}</h3>
                  <div className="flex items-center gap-2 text-muted text-sm">
                    <span>{project.year}</span>
                    <span>•</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-primary transition-colors"
                    >
                      {project.link.includes('github.com') ? (
                        <>
                          <FaGithub />
                          <span>GitHub Repo</span>
                        </>
                      ) : (
                        <>
                          <FaExternalLinkAlt />
                          <span>Live Site</span>
                        </>
                      )}
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-white/90 mb-4">{project.description}</p>

              <div className="space-y-2 mb-4">
                {project.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-white/90 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 