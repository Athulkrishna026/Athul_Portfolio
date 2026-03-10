import { motion } from 'framer-motion';
import { Terminal, Lightbulb, Database, Monitor, Cpu, Code2 } from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      title: "Programming Languages",
      icon: <Terminal className="w-5 h-5 text-primary" />,
      skills: ["Python", "JavaScript", "Java", "C++", "C"]
    },
    {
      title: "Frontend",
      icon: <Monitor className="w-5 h-5 text-accent" />,
      skills: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "React", "Angular"]
    },
    {
      title: "Backend",
      icon: <Database className="w-5 h-5 text-secondary" />,
      skills: ["Node.js", "Flask", "Express.js"]
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5 text-primary" />,
      skills: ["MongoDB", "SQL"]
    },
    {
      title: "Tools & Platforms",
      icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
      skills: ["GitHub", "VS Code", "Postman", "Thunder Client", "Power BI", "Google Cloud"]
    },
    {
      title: "IoT & Embedded Systems",
      icon: <Cpu className="w-5 h-5 text-secondary" />,
      skills: ["Arduino", "ESP32", "Sensors"]
    }
  ];

  return (
    <section id="tech-stack" className="py-24 relative bg-surfaceLight/30">
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-4 text-primary">
            <Code2 className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">Arsenal</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Technology <span className="text-gradient">Stack</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            A comprehensive toolkit of programming languages, frameworks, and modern tools used to build high-performance distributed systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="p-2 rounded-lg bg-surface flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg tracking-tight">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/10 hover:border-primary/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
