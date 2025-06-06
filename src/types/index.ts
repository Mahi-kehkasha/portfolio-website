import { IconType } from 'react-icons';
import { Variants } from 'framer-motion';

export interface Skill {
  category: string;
  icon: IconType;
  items: string[];
}

export interface Project {
  name: string;
  role: string;
  link: string;
  responsibilities: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  icon: IconType;
  link?: string;
  responsibilities?: string[];
  projects?: Project[];
}

export type ContainerVariants = Variants;

export type ItemVariants = Variants; 