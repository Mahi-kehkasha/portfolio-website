'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiPostman,
  SiMongodb,
  SiNextdotjs,
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';
import ResumeDownload from './ResumeDownload';

const skills = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'next.js', icon: SiNextdotjs },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Python', icon: FaPython },
  { name: 'SQL', icon: TbSql },
  { name: 'Postman', icon: SiPostman },
  { name: 'Bootstrap', icon: FaBootstrap },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Detail-oriented developer with expertise in software development, data
          processing, and system optimization. Proficient in JavaScript, React,
          and Next.js, with experience building dynamic web applications and
          optimizing performance. Skilled in leveraging Python to automate
          processes. Strong problem-solving abilities focused on creating
          efficient solutions and ensuring timely project delivery. Dedicated to
          maintaining coding best practices and developing technical solutions
          that drive success.
        </motion.p>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {skills.map((skill, index) => (
            <Card key={skill.name}>
              <CardContent className="flex flex-col items-center justify-center p-4">
                <skill.icon className="text-3xl mb-2 text-primary" />
                <span className="text-xs text-center">{skill.name}</span>
              </CardContent>
            </Card>
          ))}
        </motion.div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ResumeDownload />
        </motion.div>
      </div>
    </section>
  );
}
