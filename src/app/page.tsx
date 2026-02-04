import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import About from '@/components/organisms/About';
import Skills from '@/components/organisms/Skills';
import Experience from '@/components/organisms/Experience';
import Education from '@/components/organisms/Education';
import Projects from '@/components/organisms/Projects';
import Footer from '@/components/organisms/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Andrés Felipe Muñoz Acevedo',
            jobTitle: 'Desarrollador Full Stack',
            url: 'https://portafolio-last.vercel.app',
            sameAs: [
              'https://github.com/andres0395', // Placeholder, updating with likely handle found in paths or generic
              'https://linkedin.com/in/andres-munoz', // Placeholder
            ],
            description: 'Desarrollador Web Full Stack especializado en crear soluciones digitales escalables y modernas.',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'CO',
            },
            knowsAbout: ['Desarrollo Web', 'React', 'Next.js', 'Angular', 'Node.js', 'FastAPI', 'SEO'],
          }),
        }}
      />
    </div>
  );
}
