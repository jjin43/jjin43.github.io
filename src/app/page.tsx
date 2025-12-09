import { About } from '@/components/about';
import Awards from '@/components/awards';
import { Contact } from '@/components/contact';
import { Experiences } from '@/components/experiences';
import { Footer } from '@/components/footer';
import { Gallery } from '@/components/gallery';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';
import { SectionDivider } from '@/components/section-divider';
import { ThemeToggle } from '@/components/theme-toggle';

const HomePage = async () => {
  return (
    <>
      <div className="container flex flex-col items-center">
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <Experiences />
        <Projects />
        <Awards />
        <Gallery />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
    </>
  );
};

export default HomePage;
