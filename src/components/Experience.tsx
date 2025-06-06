import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';
import { Experience as ExperienceType, ContainerVariants, ItemVariants } from '../types';

const Experience = () => {
  const experiences: ExperienceType[] = [
    {
      title: 'MERN Stack Trainer',
      company: 'Skillcave',
      location: 'Bengaluru, India',
      period: '2025 – present',
      icon: FaGraduationCap,
      link: 'https://skillcave.in',
      responsibilities: [
        'Delivered hands-on training sessions on MERN Stack (MongoDB, Express.js, React.js, Node.js)',
        'Designed and structured curriculum covering full-stack concepts, RESTful APIs, CRUD operations, authentication, and deployment',
        'Mentored students through project development, debugging, and Git/GitHub version control best practices',
        'Conducted code reviews and provided one-on-one support to help students strengthen problem-solving and coding skills',
        'Developed internal tools and live demo projects to illustrate key MERN stack functionalities in real-world applications',
        'Received positive feedback for clear instruction, technical depth, and ability to simplify complex topics'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Aril Shared Services',
      location: 'Remote',
      period: '2025 – present',
      icon: FaLaptopCode,
      projects: [
        {
          name: 'CSAS NGO Official Website',
          role: 'Web Developer',
          link: 'https://www.centersas.org/',
          responsibilities: [
            'Designed and developed the official CSAS NGO website using WordPress, emphasizing accessibility, mobile responsiveness, and user engagement',
            'Customized themes and integrated key plugins for streamlined donation processing, event management, and volunteer registration workflows',
            'Ensured cross-browser compatibility and optimized site speed for a seamless user experience',
            'Collaborated closely with the NGO team to align website content and features with organizational objectives',
            'Handled ongoing site maintenance, backups, and implemented basic SEO strategies'
          ]
        },
        {
          name: 'Skillcave Website',
          role: 'Web Developer',
          link: 'https://skillcave.in/',
          responsibilities: [
            'Developed and managed the Skillcave platform website, focusing on usability and responsive design',
            'Ensured smooth navigation and performance across devices and browsers'
          ]
        }
      ]
    }
  ];

  const containerVariants: ContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: ItemVariants = {
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
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="section-header scroll-reveal text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-gradient text-5xl md:text-6xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted text-xl">My journey in software development and training</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-12"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect p-8 rounded-2xl hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="p-4 rounded-xl bg-primary-light text-primary cyber-glow">
                  <experience.icon className="text-3xl" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                    <h3 className="text-3xl font-bold text-gradient">{experience.title}</h3>
                    {experience.link && (
                      <motion.a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-md flex items-center gap-2 text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt />
                        Visit Website
                      </motion.a>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-muted text-lg">
                    <span className="font-medium text-white/90">{experience.company}</span>
                    <span>•</span>
                    <span>{experience.location}</span>
                    <span>•</span>
                    <span className="text-primary">{experience.period}</span>
                  </div>
                </div>
              </div>

              {experience.projects ? (
                <div className="space-y-8">
                  {experience.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="pl-4 border-l-2 border-primary/20">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                        <h4 className="text-2xl font-semibold text-white">{project.name}</h4>
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary btn-md flex items-center gap-2 text-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt />
                          Visit Website
                        </motion.a>
                      </div>
                      <p className="text-muted text-lg mb-4">Role: {project.role}</p>
                      <ul className="space-y-3">
                        {project.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-white/90 text-lg">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : experience.responsibilities ? (
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-white/90 text-lg">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 