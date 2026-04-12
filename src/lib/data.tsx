export const contacts = [
  {
    type: 'email',
    label: 'justinjinaz@gmail.com',
    href: 'mailto:justinjinaz@gmail.com',
    icon: Icons.mail,
    ariaLabel: 'Email',
  },
  {
    type: 'linkedin',
    label: 'linkedin.com/in/jjin43',
    href: 'https://www.linkedin.com/in/jjin43/',
    icon: Icons.linkedin,
    ariaLabel: 'LinkedIn',
  },
  {
    type: 'github',
    label: 'github.com/jjin43',
    href: 'https://github.com/jjin43/',
    icon: Icons.github,
    ariaLabel: 'GitHub',
  },
  {
    type: 'x',
    label: 'x.com/justinjin43',
    href: 'https://x.com/justinjin43',
    icon: Icons.x,
    ariaLabel: 'X',
  },
] as const;
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
    title: 'Health Insurance 4 Dummies',
    description:
      'An AI-powered web app that predicts health insurance costs using a feed-forward neural network (MLP), and generate a detailed breakdown using LLM APIs. Trained on A80 GPUs on sponsor servers.',
    technologies: [
      'TensorFlow',
      'Convex-React',
      'Tailwind CSS',
      'Python Flask',
      'Together AI - LLM APIs',
      'SaaS',
    ],
    link: 'https://devpost.com/software/health-insurance-for-dummys',
  },
  {
    image: '/images/project_2.webp',
    title: 'OpenSource Records',
    description:
      'An Web3 dApp for allowing users to buy/sell music as NFTs, , supports Ethos crypto wallet plugin, built on the SUI blockchain. Integrated NFT.storage IPFS for decentralized storage and implemented smart contracts in Move for secure transactions. Deployed on SUI Testnet.',
    technologies: [
      'Web3',
      'React.js',
      'Smart Contracts',
      'IPFS',
      'Move (Rust-based)',
      'Minting',
    ],
    link: 'https://devpost.com/software/onemanarmy-vi4827',
  },
] as const;

export const experiencesData = [
  {
    title: 'Research Assistant',
    company: 'J.Liang Lab @ ASU',
    bulletPoints: [
      'Built scalable Python data pipelines and AI models for large medical imaging datasets on Linux GPU clusters (A100).',
      'Extended in-house PyTorch multi-task model to support metadata-driven learning, increasing avg. performance by ~10%.',
      'Reduced preprocessing and validation runtime by 30% per epoch (40 min →30 min) through optimized parallel data loading and efficient augmentation.',
      'Evaluated multi-task models on classification, localization, and segmentation using accuracy, FROC, Dice, etc.',
      'Built evaluation and reproducibility pipeline with automated logging, metrics (Dice, FROC), and reporting via WandB.',
      'Automated batch experiments using shell scripts and SLURM scheduler in a distributed HPC environment.',
    ],
    period: 'Jan 2025 - Jul 2025',
    location: 'Tempe, AZ',
    tech: [
      'Python',
      'Pandas',
      'NumPy',
      'PyTorch',
      'Swin Transformers',
      'WandB',
      'SLURM',
      'A100 GPU',
      'LinuxHPC',
    ],
  },
  {
    title: 'Teaching Assistant',
    company: 'ASU - CSE 498: AI Computer Vision',
    bulletPoints: [
      'Introduced ~60 students to tools such as PyTorch, Sci-Kit Learn, and WandB for hands-on projects',
      'Guided students through debugging model training pipelines, data preprocessing, and generating evaluation metrics.',
    ],
    period: 'May 2025 - July 2025',
    location: 'Tempe, AZ',
    tech: ['Python', 'PyTorch', 'Sci-Kit Learn', 'WandB', 'Jupyter Notebooks'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'ANDBOUNDS Custom Footcare',

    bulletPoints: [
      'Re-architected an ASP.NET Core monolith into 18 gRPC microservices, containerized with Docker and deployed to Kubernetes on GCP with rolling updates and HPA, enabling independent zero-downtime service deployments.',
      'Implemented Tyk API Gateway and Istio service mesh to provide load balancing, rate limiting, and secure service-to-service communication (mTLS).',
      'Enhanced React homepage with scroll-driven animations and modern UI interactions.',
      'Built GitLab CI/CD pipelines with xUnit test automation, Helm-based Kubernetes deployments, and Terraform infrastructure provisioning; reduced release time from 1 hour manual process to <10 minutes automated.',
      'Leveraged GitHub Copilot (GenAI) to accelerate service decomposition and boilerplate generation, contributing to the delivery of the migrated platform within 6 months.',
    ],
    period: 'Aug 2023 - May 2024',
    location: 'Scottsdale, AZ',
    tech: [
      'Microservices',
      'ASP.NET Core',
      'React',
      'MongoDB',
      'Docker',
      'Kubernetes',
      'GCP',
      'Helm',
      'Terraform',
      'GitLab CI/CD',
    ],
  },
  {
    title: 'Embedded Software Developer',
    company: 'Sun Devil Rocketry @ ASU',
    bulletPoints: [
      'UNPAID Club Project',
      'Developed embedded firmware for custom ARM Cortex-M7 microcontroller in C using HAL, including sensor and external flash drivers; enabled reliable data collection for two-stage rockets across 2 launches up to ~41,000 ft.',
      'Reduced CPU blocking 13× (1.3 ms →0.1 ms) by implementing non-blocking DMA.',
    ],
    period: 'Aug 2022 - May 2023',
    location: 'Tempe, AZ',
    tech: ['Embedded C', 'ARM Cortex-M', 'HAL', 'UART', 'SPI', 'DMA'],
  },
] as const;

export const langData = [
  { name: 'C', icon: <Icons.c className="size-12" /> },
  { name: 'C++', icon: <Icons.cpp className="size-12" /> },
  { name: 'C#', icon: <Icons.csharp className="size-12" /> },
  { name: 'Java', icon: <Icons.java className="size-12" /> },
  { name: 'Python', icon: <Icons.python className="size-12" /> },
  { name: 'JavaScript', icon: <Icons.javascript className="size-12" /> },
  { name: 'TypeScript', icon: <Icons.typescript className="size-12" /> },
  { name: 'Go', icon: <Icons.go className="size-12" /> },
  { name: 'Solidity', icon: <Icons.solidity className="size-12" /> },
  { name: 'SQL', icon: <Icons.sql className="size-12" /> },
  { name: 'HTML', icon: <Icons.html className="size-12" /> },
  { name: 'CSS', icon: <Icons.css className="size-12" /> },
  { name: 'YAML', icon: <Icons.yaml className="size-12" /> },
  { name: 'Bash', icon: <Icons.bash className="size-12" /> },
] as const;

export const techData = [
  { name: 'PyTorch', icon: <Icons.sqlite className="size-12" /> },
  { name: 'Tailwind', icon: <Icons.tailwind className="size-12" /> },
  { name: 'React', icon: <Icons.react className="size-12" /> },
  { name: 'Angular', icon: <Icons.angular className="size-12" /> },
  { name: '.NET', icon: <Icons.aspnet className="size-12" /> },
  { name: 'Spring', icon: <Icons.spring className="size-12" /> },
  { name: 'Flask', icon: <Icons.flask className="size-12" /> },
  { name: 'MongoDB', icon: <Icons.mongodb className="size-12" /> },
  { name: 'PostgreSQL', icon: <Icons.postgresql className="size-12" /> },
  { name: 'Redis', icon: <Icons.redis className="size-12" /> },
  { name: 'Node.js', icon: <Icons.node className="size-12" /> },
  { name: 'Linux', icon: <Icons.unix className="size-12" /> },
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
    title: 'Top 10% - BS & MS in 4 Years',
    issuer: 'Arizona State University',
    year: '2025',
    tech: ['Magna Cum Laude'],
  },
  {
    title: '2nd Place',
    issuer: 'ASU x SUI Blockchain Hackathon',
    year: '2024',
    tech: ['Web3', 'dApp', 'Move'],
  },
  {
    title: '3rd Place',
    issuer: 'Sun Hack 5.5 Hackathon',
    year: '2023',
    tech: ['Web3', 'dApp', 'Solidity'],
  },
  {
    title: '2nd Place',
    issuer: 'Cal Hacks 10.0: InterSystem Challenge',
    year: '2023',
    tech: ['AI/ML', 'LLM', 'Python'],
  },
  {
    title: '2nd Place',
    issuer: 'Devil’s Invent X DASSH Hackathon',
    year: '2023',
    tech: ['IoT', 'Arduino', 'C#'],
  },
  {
    title: '1st Place - Best Use of External Data',
    issuer: 'Arizona ASA DataFest Competition',
    year: '2022',
    tech: ['Data Analysis', 'Pandas', 'R'],
  },
] as const;

export const galleryData = [
  {
    src: '/images/gallery_1.webp',
    alt: 'Cal Hacks 10.0',
  },
  {
    src: '/images/gallery_2.webp',
    alt: 'ASU X SUI Hackathon',
  },
  {
    src: '/images/gallery_3.webp',
    alt: 'Hacks 4 Humanity',
  },
  {
    src: '/images/gallery_4.webp',
    alt: 'Sun Hack 5.5',
  },
  {
    src: '/images/gallery_5.webp',
    alt: 'Meme',
  },
] as const;
