import { motion } from 'framer-motion';
import { BookOpen, GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-surfaceLight/20">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-4 text-primary">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">Academic</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Educational <span className="text-gradient">Background</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Decorative Elements */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative glass-card p-8 md:p-12 shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700 -mr-10 -mt-10" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
              <div className="p-4 rounded-2xl bg-surface border border-white/10 text-primary shadow-lg hidden md:block group-hover:rotate-12 transition-transform duration-500">
                <GraduationCap className="w-12 h-12" />
              </div>
              
              <div className="text-center md:text-left flex-grow">
                <div className="inline-flex text-primary font-mono text-sm tracking-widest mb-3 glass-effect px-3 py-1">
                  2021 — 2025
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                  Bachelor of Computer Science Engineering
                </h3>
                <h4 className="text-xl text-gray-400 font-medium mb-6">
                  Ilahia College of Engineering and Technology
                </h4>
                
                <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
                  <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">CGPA</span>
                  <div className="w-[1px] h-4 bg-white/20" />
                  <span className="text-2xl font-bold text-gradient">7.3</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
