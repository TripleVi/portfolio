import {
  backend,
  chatbot,
  code,
  computer_store_be,
  computer_store_be2,
  computer_store_fe,
  computer_store_fe2,
  database,
  frontend,
  greenshowcase_detail,
  greenshowcase_landing,
  greenshowcase_products,
  greenshowcase_signin,
  tool,
  vHealth,
  vHealth2,
} from '@/assets/images'

interface Skill {
  name: string
  image: string
  tech: string[]
}

export const skills: Skill[] = [
  {
    name: 'Languages',
    image: code,
    tech: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++'],
  },
  {
    name: 'Frontend',
    image: frontend,
    tech: ['ReactJS', 'Flutter', 'Bootstrap', 'Tailwind CSS', 'daisyUI'],
  },
  {
    name: 'Backend',
    image: backend,
    tech: ['Express', 'NestJS', 'Flask'],
  },
  {
    name: 'Database',
    image: database,
    tech: ['MySQL', 'SQLite', 'MongoDB', 'Neo4j'],
  },
  {
    name: 'Other tools',
    image: tool,
    tech: ['Google Cloud', 'Firebase', 'Git', 'Agile Scrum'],
  },
]

interface Project {
  id: number
  name: string
  description: string
  hashtags: string[]
  images: string[]
  source: string
  descUrl: string
  url?: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Computer Store (frontend)',
    description:
      'An e-commerce website specializing in electronic devices, featuring a modern and user-friendly interface that allows customers to easily explore and purchase products online.',
    hashtags: ['ReactJS', 'TypeScript', 'Tailwind CSS', 'daisyUI'],
    images: [computer_store_fe, computer_store_fe2],
    source: 'https://github.com/TripleVi/computer-store-client-fe',
    descUrl: 'https://github.com/TripleVi/computer-store-client-fe/blob/main/README.md',
    url: 'https://vvv-store.vercel.app',
  },
  {
    id: 2,
    name: 'Computer Store (backend)',
    description:
      'A robust e-commerce backend system for electronic devices, designed with scalable architecture and secure APIs.',
    hashtags: ['NestJS', 'MySQL', 'Cloudinary'],
    images: [computer_store_be, computer_store_be2],
    descUrl: 'https://github.com/TripleVi/computer-store-client-be/blob/main/README.md',
    source: 'https://github.com/TripleVi/computer-store-client-be',
  },
  {
    id: 3,
    name: 'Green Showcase (frontend)',
    description:
      'A website for managing and showcasing outstanding graduation projects from all majors at Greenwich Vietnam University, with a modern and user-friendly interface.',
    hashtags: ['ReactJS', 'Bootstrap', 'Firebase'],
    images: [greenshowcase_landing, greenshowcase_products],
    source: 'https://github.com/TripleVi/fe-graduation-showcase',
    descUrl: 'https://github.com/TripleVi/fe-graduation-showcase/blob/main/README.md',
    url: 'https://greenshowcase.onrender.com',
  },
  {
    id: 4,
    name: 'Green Showcase (backend)',
    description:
      'A backend system for managing and showcasing graduation projects from all majors at Greenwich Vietnam University, ensuring reliable APIs and secure data processing.',
    hashtags: ['Express', 'MySQL', 'Firebase', 'Redis', 'Google Cloud'],
    images: [greenshowcase_signin, greenshowcase_detail],
    descUrl: 'https://github.com/TripleVi/be-graduation-showcase/blob/main/README.md',
    source: 'https://github.com/TripleVi/be-graduation-showcase',
  },
  {
    id: 5,
    name: 'Green Chatbot',
    description:
      'An AI-powered chatbot integrated into a graduation showcase website to enhance search and question answering capabilities.',
    hashtags: ['Flask', 'Gemini', 'LangChain', 'RAG'],
    images: [chatbot, chatbot],
    descUrl: 'https://github.com/TripleVi/green-chatbot/blob/main/README.md',
    source: 'https://github.com/TripleVi/gs-chatbot',
  },
  {
    id: 6,
    name: 'vHealth',
    description:
      'A modern, user-friendly mobile Flutter app for health and fitness tracking with diverse features, personalized insights, and social media to boost motivation and engagement.',
    hashtags: ['Flutter', 'Firebase', 'SQLite', 'Neo4j'],
    images: [vHealth, vHealth2],
    descUrl: 'https://github.com/TripleVi/fe-vHealth/blob/main/README.md',
    source: 'https://github.com/TripleVi/fe-vHealth',
  },
]

export const CVLink =
  'https://drive.google.com/file/d/1iertLOskpRwPm0hYCNe-dL1VLH02vawm/view?usp=drive_link'

export const FBLink = 'https://www.facebook.com/vuongvv3'

export const GitHubLink = 'https://github.com/TripleVi'

export const LinkedInLink = ''

export const email = 'vuongvv.it.work@gmail.com'

export const phoneNumber = '+84365466031'