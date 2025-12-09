import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Justin Jin | SDE',
  description:
    "Hello, I'm Justin Jin, a full-stack developer in the US. I enjoy building web application and scalable systems. With a diverse set of skills, and an expert at using genAI tools, you can count on me to complete tasks with quality and speed.",
  keywords: [
    'Justin Jin',
    'Full-Stack Developer',
    'Software Engineer',
    'AI',
    'Kubernetes',
    'React/Next.js',
    'Programming',
    'Portfolio',
    'Projects',
    'Website',
  ],
  url: env.SITE_URL || 'https://jjin43.github.io/',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
