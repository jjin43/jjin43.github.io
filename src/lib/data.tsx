import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Awards',
    hash: '#awards',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project-2.webp',
    title: 'Next-starter',
    description:
      'A Next.js starter template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, Stripe, testing tools and more.',
    technologies: ['Next.js', 'Tailwind', 'Shadcn/ui', 'Next-auth', 'Prisma'],
    link: 'https://example.com',
  },
  {
    image: '/images/project-1.webp',
    title: 'SocialHub',
    description:
      'SocialHub is a next-generation social media app developed using Next.js and Nest.js.',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    link: 'https://example.com',
  },
] as const;

export const experiencesData = [
  {
    title: 'Research Assistant & Teaching Assistant',
    company: 'J.Liang Lab @ ASU',
    description:
      'During this internship, I focused on two key areas: creating Wordpress plugins and managing website content, plugins, and settings.',
    period: 'Jan 2025 - Jul 2025',
    location: 'Tempe, AZ',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress'],
  },
  {
    title: 'Full-Stack Software Engineer Intern',
    company: 'ANDBOUNDS.com',
    description:
      'As a freelancer, I specialized in graphic design using Figma and website development using Next.js with Sanity CMS. I undertook projects independently, from design conceptualization to final implementation, ensuring client satisfaction.',
    period: '2023 - 2024',
    location: 'Remote',
    technologies: ['Next.js', 'TypeScript', 'Sanity CMS', 'Tailwind'],
  },
  {
    title: 'Frontend developer intern',
    company: 'Chop-chop, remote',
    description:
      'During my internship at Chop-Chop, I collaborated with an experienced IT team, focusing on tasks in Next.js. This experience provided valuable insights into teamwork and advanced my proficiency in Next.js.',
    period: '2024',
    location: 'Remote',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Frontend developer & UI designer',
    company: 'GeoScan, remote',
    description: `xxx`,
    period: '2024 - present',
    location: 'remote',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Leaflet'],
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.redux className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;

export const awardsData = [
  {
    title: 'Dean’s List',
    issuer: 'Arizona State University',
    year: '2025',
    description: 'Awarded for outstanding academic achievement.',
  },
  {
    title: 'Best Project Award',
    issuer: 'SocialHub Hackathon',
    year: '2024',
    description:
      'Recognized for developing an innovative social media platform.',
  },
] as const;
