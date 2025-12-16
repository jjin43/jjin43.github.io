import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Justin Jin | SDE',
  description:
    'Justin Jin - @jjin43 | Full-Stack Developer | Personal Portfolio Website',
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
