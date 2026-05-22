import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figmaNew,
  docker,
  nestjs,
  supabase,
  numpy,
  jira,
  leetcode,
  tensorflow,
  pytorch,
  python,
  pandas,
  scikitlearn,
  huggingface,
  featureEngineeringIcon,
  express,
  githubIcon,
  vscode,
  postman,
  vercel,
  bciProject,
  intelligraderProject,
  ware2door,
  gatepass,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Full Stack Developer',
    icon: web,
  },
  {
    title: 'System Engineer',
    icon: backend,
  },
  {
    title: 'AI / ML Engineer',
    icon: tensorflow,
  },
  {
    title: 'Problem Solver',
    icon: leetcode,
  },
];

const technologies: TTechnology[] = [
  // Frontend
  { name: 'HTML 5', icon: html },
  { name: 'CSS 3', icon: css },
  { name: 'JavaScript', icon: javascript },
  { name: 'TypeScript', icon: typescript },
  { name: 'React JS', icon: reactjs },
  { name: 'Figma', icon: figmaNew },
  // Backend
  { name: 'Node JS', icon: nodejs },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Express.js', icon: express },
  { name: 'Nest JS', icon: nestjs },
  { name: 'Supabase', icon: supabase },
  // AI / ML
  { name: 'Python', icon: python },
  { name: 'TensorFlow', icon: tensorflow },
  { name: 'Scikit-Learn', icon: scikitlearn },
  { name: 'Pandas', icon: pandas },
  { name: 'Numpy', icon: numpy },
  { name: 'Feature Engineering', icon: featureEngineeringIcon },
  { name: 'HuggingFace', icon: huggingface },
  { name: 'Deep Learning', icon: pytorch },
  // Tools & DevOps
  { name: 'Git', icon: git },
  { name: 'GitHub', icon: githubIcon },
  { name: 'Docker', icon: docker },
  { name: 'VS Code', icon: vscode },
  { name: 'Postman', icon: postman },
  { name: 'Vercel', icon: vercel },
  { name: 'Jira', icon: jira },
];

const experiences: TExperience[] = [
  {
    title: 'Full Stack MERN Developer',
    companyName: 'Freelance & Independent Projects',
    icon: reactjs,
    iconBg: '#383E56',
    date: 'Jan 2022 - Present',
    points: [
      'Architected and deployed production-grade MERN architectures utilizing React, Node.js, Express, and MongoDB.',
      'Developed multiple high-availability systems with critical functionalities, such as reliable Razorpay payment processing gateways.',
      'Integrated OpenAI and custom AI models into frontend systems for automated content generation and dynamic media synthesis.',
      'Implemented responsive, accessible, and highly interactive user interfaces powered by Tailwind CSS, Framer Motion, and Three.js.',
    ],
  },
  {
    title: 'Real-Time Systems Engineer',
    companyName: 'Open Source Projects',
    icon: nodejs,
    iconBg: '#E6DEDD',
    date: '2023 - Present',
    points: [
      'Designed real-time 1-on-1 secure technical interview platforms enabling seamless audio/video transmission over WebRTC.',
      'Engineered high-throughput WebSocket networks via Socket.io for low-latency live chat and active connection synchronization.',
      'Built automated code execution engines facilitating real-time evaluations inside an isolated virtual environment.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Ware2Door',
    description:
      'The Warehouse to Last-Mile Coordination Platform is designed to support and coordinate logistics operations from shipment initiation at the warehouse through transit handling and final delivery to the customer. The system enables different stakeholders—warehouse administrators, transit hub managers, local delivery agencies, and customers—to interact with shipment-related processes such as inventory management, scanning operations, delivery execution, exception handling (RTO), tracking, and customer support within a single platform.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'js',
        color: 'pink-text-gradient',
      },
      {
        name: 'ts',
        color: 'blue-text-gradient',
      },
      {
        name: 'nestjs',
        color: 'green-text-gradient',
      },
    ],
    image: ware2door,
    sourceCodeLink: 'https://github.com/Rag-2007/7_Ware2Door',
  },
  {
    name: 'Hostel Gatepass Management System',
    description:
      'A digital platform automating the granting, approving, and tracking of student movement with a structured digital workflow. It features role-based access, a multi-step approval chain, cryptographic QR codes, audit trails, and automated violation flagging.',
    tags: [
      {
        name: 'reactnative',
        color: 'blue-text-gradient',
      },
      {
        name: 'nestjs',
        color: 'green-text-gradient',
      },
    ],
    image: gatepass,
    sourceCodeLink: 'https://github.com/Rag-2007/GATEPASS',
    isUnderDevelopment: true,
  }
];

export type TAimlProject = {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  sourceCodeLink: string;
  isHackathonWinner?: boolean;
};

const aimlProjects: TAimlProject[] = [
    {
    name: 'Brain Computer Interfaces',
    description:
      'Engineered an advanced, end-to-end deep learning pipeline for decoding complex brain-computer interface (BCI) signals. Designed automated EEG artifact removal systems and implemented highly optimized ShallowConvNet and EEGNet architectures to achieve state-of-the-art classification of mental stress states (SAM40) and multi-class motor imagery (BCI Competition IV 2a).',
    tags: [
      { name: 'Brain Computer Interfaces', color: 'blue-text-gradient' },
      { name: 'ShallowConvnet', color: 'green-text-gradient' },
      { name: 'SAM40', color: 'pink-text-gradient' },
      { name: 'BCI Competition IV 2a', color: 'blue-text-gradient' },
    ],
    image: bciProject,
    sourceCodeLink: 'https://github.com/Rag-2007/Brain-Computer-Interfaces',
  },
  {
    name: 'IntelliGrader',
    description:
      'A Next-Generation AI Education Platform that empowers students with personalized learning and equips teachers with automated, intelligent evaluation workflows. Features include adaptive learning, a 24/7 AI tutor, smart PDF summarization, and AI-assisted grading utilizing a robust LLM ecosystem.',
    tags: [
      { name: 'LLM', color: 'blue-text-gradient' },
      { name: 'OpenAI', color: 'green-text-gradient' },
      { name: 'PostgreSQL', color: 'pink-text-gradient' },
      { name: 'Streamlit', color: 'blue-text-gradient' },
    ],
    image: intelligraderProject,
    sourceCodeLink: 'https://github.com/Rag-2007/INTELLIGRADER',
    isHackathonWinner: true,
  }
];

export { services, technologies, experiences, testimonials, projects, aimlProjects };
