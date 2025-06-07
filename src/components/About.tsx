import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools, FaUsers, FaDownload, FaEnvelope } from 'react-icons/fa';
import { Skill, ContainerVariants, ItemVariants } from '../types';

const About = () => {
  const skills: Skill[] = [
    {
      category: 'Programming Languages',
      icon: FaCode,
      items: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Node.js'],
    },
    {
      category: 'Web Development & Frameworks',
      icon: FaServer,
      items: ['React.js', 'Express.js', 'WordPress', 'RESTful APIs', 'Bootstrap'],
    },
    {
      category: 'Databases',
      icon: FaDatabase,
      items: ['NoSQL (MongoDB)'],
    },
    {
      category: 'Version Control',
      icon: FaTools,
      items: ['Git', 'GitHub'],
    },
    {
      category: 'Soft Skills',
      icon: FaUsers,
      items: ['Strong analytical skills', 'Problem-solving', 'Effective communication', 'Collaboration'],
    },
  ];

  const containerVariants: ContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: ItemVariants = {
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
    <section id="about" className="section-padding relative overflow-hidden">
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
          <h2 className="text-gradient text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted text-lg">Get to know more about my skills and experience</p>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          className="glass-effect p-8 rounded-2xl mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 cyber-glow">
              <img
                src="/images/profile.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Maheen Kehkasha</h3>
              <p className="text-muted mb-6 leading-relaxed">
                Results-driven Software Developer with expertise in full-stack web development and WordPress customization. 
                Skilled in MERN stack, RESTful APIs, and responsive design. Experienced trainer and team collaborator, 
                focused on building scalable, user-centric web solutions.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <motion.a
                  href="/Maheen-Kehkasha.pdf"
                  download
                  className="btn btn-primary group flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="mr-2 text-lg" />
                  <span>Download Resume</span>
                </motion.a>
                <motion.a
                  href="#contact"
                  className="btn btn-outline-primary group flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope className="mr-2 text-lg" />
                  <span>Contact Me</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-effect p-6 rounded-2xl h-full transform transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-primary-light text-primary mr-4 group-hover:scale-110 transition-transform duration-300 cyber-glow">
                    <skill.icon className="text-2xl" />
                  </div>
                  <h4 className="font-semibold text-lg text-gradient">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <motion.span
                      key={item}
                      className="skill-badge"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 