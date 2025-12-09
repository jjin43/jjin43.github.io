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
    name: 'Experiences',
    hash: '#experiences',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Awards',
    hash: '#awards',
  },
  {
    name: 'Gallery',
    hash: '#gallery',
  },
  {
    name: 'Contacts',
    hash: '#contacts',
  },
] as const;

export const projectsData = [
  {
    image: '/images/project_1.webp',
    title: 'Next-starter',
    description:
      'A Next.js starter template, packed with features like TypeScript, Tailwind CSS, Next-auth, Eslint, Stripe, testing tools and more.',
    technologies: ['Next.js', 'Tailwind', 'Shadcn/ui', 'Next-auth', 'Prisma'],
    link: 'https://devpost.com/software/health-insurance-for-dummys',
  },
  {
    image: '/images/project_2.webp',
    title: 'SocialHub',
    description:
      'SocialHub is a next-generation social media app developed using Next.js and Nest.js.',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    link: 'https://devpost.com/software/onemanarmy-vi4827',
  },
] as const;

export const experiencesData = [
  {
    title: 'Research Assistant & Teaching Assistant',
    company: 'J.Liang Lab @ ASU',
    description:
      'Conducted research in AI medical imaging and assisted in teaching undergraduate courses:',
    bulletPoints: [
      'Trained vision deep learning AI models in medical imaging on the ASU supercomputers with A100 GPUs',
      'Utilized SLURM job scheduler and shell scripting for training automation on a UNIX environment',
      'Modified in-house Swin Transformer and multi-task DINO models (ViT) using pyTorch, leveraged annotator metadata in Chest X-ray datasets and improving the training pipeline, improving classification and localization AUC/Dice performance by ~2% (Significant margin in SOTA research).',
      'Evaluated multi-task models on classification, localization, and segmentation using accuracy, FROC, Dice, etc.',
      'Utilized GitHub Copilot (GenAI) to learn and design model training pipelines, delivering in-house model improvements within 3 months',
      'Assisted in teaching vision transformer courses, teaching 50+ undergraduate students concepts in deep learning and transformer architectures',
    ],
    period: 'Jan 2025 - Jul 2025',
    location: 'Tempe, AZ',
    technologies: [
      'Python',
      'PyTorch',
      'Vision Transformers',
      'SLURM',
      'A100 GPU',
    ],
  },
  {
    title: 'Backend Software Engineer Intern',
    company: 'ANDBOUNDS.com',
    description:
      'Led backend infrastructure modernization and microservices deployment:',
    bulletPoints: [
      'Migrated monolithic Node.js backend to RPC microservices architecture, improving scalability and maintainability',
      'Containerized services into Docker Alpine images, deployed and scaled with Kubernetes clusters on GCP',
      'Integrated Tyk Open Source API Gateway for API exposure and rate limiting with Istio service mesh',
      'Built GitLab CI/CD pipelines for automated testing, validation, and deployment to Kubernetes',
      'Implemented Infrastructure as Code using Terraform and Helm for automated deployments and version control',
      'Maintained and upgraded NoSQL MongoDB with secure and monitored access for the new architecture',
    ],
    period: 'Aug 2023 - May 2024',
    location: 'Scottsdale, AZ',
    technologies: [
      'Node.js',
      'Docker',
      'Kubernetes',
      'GCP',
      'Terraform',
      'MongoDB',
    ],
  },
  {
    title: 'Embedded Software Developer',
    company: 'Sun Devil Rocketry @ ASU',
    description:
      'Developed flash driver on a custom STM32 rocket microcontroller:',
    bulletPoints: [
      'Developed an embedded flash driver in C on an STM32 chip to store real-time data from all sensor modules',
      'Utilized the HAL library to assert chip select pins and program the DMA controller to read/write data via the SPI bus',
      'Implemented Direct Memory Access (DMA) without header blocking to meet high throughput requirements',
      'Implemented timeout/failure safe restarts and flash functionalities such as status check, enable/disable, block erase',
    ],
    period: '2024',
    location: 'Tempe, AZ',
    technologies: ['C', 'STM32', 'Embedded C', 'HAL Library', 'SPI', 'DMA'],
  },
] as const;

export const skillsData = [
  { name: 'C', icon: <Icons.c className="size-12" /> },
  { name: 'C++', icon: <Icons.cpp className="size-12" /> },
  { name: 'C#', icon: <Icons.csharp className="size-12" /> },
  { name: 'Java', icon: <Icons.java className="size-12" /> },
  { name: 'Python', icon: <Icons.python className="size-12" /> },
  { name: 'JavaScript', icon: <Icons.javascript className="size-12" /> },
  { name: 'TypeScript', icon: <Icons.typescript className="size-12" /> },
  { name: 'Go', icon: <Icons.go className="size-12" /> },
  { name: 'Rust', icon: <Icons.rust className="size-12" /> },
  { name: 'Solidity', icon: <Icons.solidity className="size-12" /> },
  { name: 'SQL', icon: <Icons.sql className="size-12" /> },
  { name: 'HTML', icon: <Icons.html className="size-12" /> },
  { name: 'CSS', icon: <Icons.css className="size-12" /> },
  { name: 'Tailwind', icon: <Icons.tailwind className="size-12" /> },
  { name: 'React', icon: <Icons.react className="size-12" /> },
  { name: 'Node.js', icon: <Icons.node className="size-12" /> },
  { name: 'Next.js', icon: <Icons.nextjs className="size-12" /> },
  { name: 'Redux', icon: <Icons.redux className="size-12" /> },
  { name: 'UNIX', icon: <Icons.unix className="size-12" /> },
  { name: 'Git', icon: <Icons.git className="size-12" /> },
  { name: 'Docker', icon: <Icons.docker className="size-12" /> },
  { name: 'K8S', icon: <Icons.kubernetes className="size-12" /> },
  { name: 'Helm', icon: <Icons.helm className="size-12" /> },
  { name: 'AWS', icon: <Icons.aws className="size-12" /> },
  { name: 'GCP', icon: <Icons.gcp className="size-12" /> },
  { name: 'CI/CD', icon: <Icons.cicd className="size-12" /> },
  { name: 'JUnit', icon: <Icons.junit className="size-12" /> },
  { name: 'Terraform', icon: <Icons.terraform className="size-12" /> },
] as const;

export const awardsData = [
  {
    title: 'Top 10% - Magna Cum Laude',
    issuer: 'Arizona State University',
    year: '2025',
  },
  {
    title: '2nd Place',
    issuer: 'ASU x SUI Blockchain Hackathon',
    year: '2024',
  },
  {
    title: '3rd Place',
    issuer: 'Sun Hack 5.5 Hackathon',
    year: '2023',
  },
  {
    title: '2nd Place',
    issuer: 'Cal Hacks 10.0: InterSystem Challenge',
    year: '2023',
  },
  {
    title: '2nd Place',
    issuer: 'Devil’s Invent X DASSH Hackathon',
    year: '2023',
  },
  {
    title: '1st Place - Best Use of External Data',
    issuer: 'Arizona ASA DataFest Competition',
    year: '2022',
  },
] as const;

export const galleryImages = [
  {
    src: '/images/gallery_1.webp',
    alt: 'Gallery image 1',
  },
  {
    src: '/images/gallery_2.webp',
    alt: 'Gallery image 2',
  },
  {
    src: '/images/gallery_3.webp',
    alt: 'Gallery image 3',
  },
  {
    src: '/images/gallery_4.webp',
    alt: 'Gallery image 4',
  },
] as const;
