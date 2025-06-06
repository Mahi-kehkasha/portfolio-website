import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      credentialId: 'fcca54b9eeb-7239-45a7-b7b5-87e3be8ce357-jaads',
      issued: 'Jan 2025',
      expires: 'Oct 2025'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      credentialId: 'fcca54b9eeb-7239-45a7-b7b5-87e3be8ce357-rwd',
      issued: 'Jan 2025',
      expires: 'Jun 2025'
    },
    {
      title: 'Salesforce Developer Basics',
      issuer: 'Simplilearn',
      issued: '2025'
    }
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
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="section-header scroll-reveal text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-gradient text-5xl md:text-6xl font-bold mb-4">Certificates</h2>
          <p className="text-muted text-xl">Professional certifications and achievements</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect p-8 rounded-2xl hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-primary-light text-primary cyber-glow">
                  <FaAward className="text-3xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gradient mb-4">{cert.title}</h3>
                  <div className="space-y-3">
                    <p className="text-white/90 text-lg">
                      <span className="font-medium">Issuer:</span> {cert.issuer}
                    </p>
                    {cert.credentialId && (
                      <p className="text-white/90 text-lg">
                        <span className="font-medium">Credential ID:</span> {cert.credentialId}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-4 text-lg">
                      <p className="text-white/90">
                        <span className="font-medium">Issued:</span> {cert.issued}
                      </p>
                      {cert.expires && (
                        <>
                          <span className="text-muted">•</span>
                          <p className="text-white/90">
                            <span className="font-medium">Expires:</span> {cert.expires}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates; 