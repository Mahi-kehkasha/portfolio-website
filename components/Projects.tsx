'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Password Generator',
    description:
      'Developed a secure password generator using HTML, CSS, and JavaScript with customizable options for length and character types.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    details: [
      'Customizable password length and character inclusion (uppercase, lowercase, numbers, special characters).',
      'Responsive and user-friendly interface for seamless use across devices.',
      'Generates random, secure passwords meeting modern security standards.',
    ],
    link: 'https://benevolent-genie-3848e8.netlify.app/',
  },
  {
    title: 'To-Do List Application',
    description:
      'Created an interactive To-Do List application with HTML, CSS, and JavaScript for task management.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    details: [
      'Add, edit, and delete tasks with real-time updates.',
      'User-friendly interface with responsive design for all devices.',
      'Persistent task storage using localStorage for seamless user experience.',
    ],
    link: '#', // Replace with the actual link when available
  },
  {
    title: 'E-commerce Application',
    description:
      'Final year project: Developed an E-commerce web app using EJS, Express.js, Node.js, and MongoDB.',
    technologies: [
      'EJS',
      'Express.js',
      'Node.js',
      'MongoDB',
      'Bootstrap',
      'JavaScript',
    ],
    details: [
      'Integrated secure authentication with bcrypt and session management.',
      'Implemented PayPal and Razorpay payment gateways.',
      'Designed responsive UI with Bootstrap and JavaScript.',
      'Optimized MongoDB database and added Twilio SMS notifications.',
    ],
    link: 'https://github.com/Mahi-kehkasha/mern_ecommerce.git',
  },
  {
    title: 'NLP (Natural Language Processing)',
    description:
      'Developed an NLP model using Python, NLTK, and SpaCy for text classification.',
    technologies: ['Python', 'NLTK', 'SpaCy', 'Word2Vec', 'TF-IDF'],
    details: [
      'Applied tokenization, lemmatization, and stemming for preprocessing.',
      'Built a sentiment analysis model using Word2Vec and TF-IDF.',
      'Evaluated with accuracy and precision metrics.',
    ],
    link: 'https://github.com/Mahi-kehkasha/NLP-20Newsgroup.git',
  },
  {
    title: 'AI Chatbot',
    description:
      'Developed an interactive AI-powered chatbot with real-time responses.',
    technologies: ['React.js', 'Node.js', 'Express.js'],
    details: [
      'Implemented secure authentication and a responsive UI for enhanced user experience.',
      'Integrated REST API for seamless communication between the frontend and backend.',
      'Deployed the application on Netlify for frontend and Render for backend hosting.',
    ],
    link: 'https://lucky-pegasus-e54bd8.netlify.app/login',
    repo: 'https://github.com/Mahi-kehkasha/chatbot.git',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Developed a responsive portfolio website to showcase projects and skills, with a professional and interactive design.',
    technologies: ['React.js', 'Next.js', 'JavaScript', 'CSS', 'Bootstrap'],
    details: [
      'Implemented light and dark theme toggle for improved user experience.',
      'Designed a dynamic navigation bar with separate header and footer components.',
      'Incorporated animations and AI-themed elements for visual appeal.',
      'Ensured a fully responsive design optimized for all devices.',
      'Added sections for About, Qualifications, Projects, Internship, Resume Download, and Social Media links.',
    ],
    link: ' ',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-primary/10 text-primary text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {project.details.map((detail, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
