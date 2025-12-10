'use client';

import { doom, useAsciiText } from 'react-ascii-text';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { contacts } from '@/lib/data';

export const Intro = () => {
  const { ref } = useSectionInView('Home');
  const asciiArt = useAsciiText({
    animationCharacters: ' ',
    animationDelay: 3000,
    animationInterval: 20,
    animationLoop: true,
    animationSpeed: 20,
    font: doom,
    text: ['JUSTIN JIN', '@jjin43'],
  }) as React.RefObject<HTMLPreElement | null>;

  return (
    <section
      ref={ref}
      id="home"
      className="flex max-w-full scroll-mt-96 flex-col items-center gap-5 text-center"
    >
      <div className="flex w-full justify-center px-2">
        <pre
          ref={asciiArt}
          className="select-none whitespace-pre text-center text-[8px] sm:text-[11px] md:text-[16px]"
        ></pre>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'tween',
          duration: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="flex items-center gap-3 rounded border px-3 py-0"
        >
          <span className="relative flex size-2">
            <span className="absolute flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative flex size-2 rounded-full bg-green-400"></span>
          </span>
          <span className="font-mono text-sm">Open for Hire!</span>
        </Link>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading max-w-3xl text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl"
      >
        Hello, I&#39;m{' '}
        <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
          Justin Jin
        </span>
        &nbsp;&mdash;&nbsp;
        <br className="hidden sm:block" />a full-stack software developer.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="text-muted-foreground max-w-xl text-sm sm:text-base"
      >
        Welcome to my personal website/portfolio.I&#39;m passionate about
        building modern web applications, cloud infrastrcture, and scalable
        systems.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col gap-2 sm:flex-row"
      >
        <Button asChild size="lg" className="w-full sm:w-44">
          <Link href="#contact">
            Hire Me! <Icons.arrowRight className="ml-2 size-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild className="w-full sm:w-44">
          <a href="/files/jjin43_resume.pdf" download>
            Download CV <Icons.download className="ml-2 size-4" />
          </a>
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
        }}
        className="mb-5 flex gap-2"
      >
        {contacts.map((contact) => (
          <Button variant="outline" size="icon" asChild key={contact.type}>
            <Link
              href={contact.href}
              aria-label={contact.ariaLabel}
              target={contact.type !== 'email' ? '_blank' : undefined}
            >
              <contact.icon className="size-5" />
            </Link>
          </Button>
        ))}
      </motion.div>
    </section>
  );
};
