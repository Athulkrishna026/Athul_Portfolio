import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Database, Code, Cpu } from 'lucide-react';

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Athul_Resume.pdf'; // Make sure to place resume.pdf in public folder
    link.download = 'Athulkrishna_P_Shijo_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-20 hidden lg:block p-4 glass-effect"
      >
        <Terminal className="text-primary w-8 h-8" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-20 hidden lg:block p-4 glass-effect"
      >
        <Database className="text-secondary w-8 h-8" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-40 right-32 hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 border border-white/10 backdrop-blur-md"
      >
        <Code className="text-white w-6 h-6" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-32 left-32 hidden lg:flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 border border-white/10 backdrop-blur-md rotate-12"
      >
        <Cpu className="text-white w-8 h-8" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-gray-300">Available</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-tight"
        >
          <span className="block text-white">Athulkrishna P Shijo</span>
          <span className="block text-gradient mt-2 pb-2">Full Stack Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Passionate about building scalable web applications, intelligent systems, and modern digital products natively from <strong className="text-white font-medium">Kochi, Kerala.</strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl glass-effect text-white font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
            Contact Me
          </a>
          <button onClick={handleResumeDownload} className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 group">
            <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            Resume
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold font-mono">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
