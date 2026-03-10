import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30 selection:text-white relative">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      
      {/* Background noise texture */}
      <div 
        className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
      />
    </div>
  );
}

export default App;
