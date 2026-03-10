import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Luminar Technolab",
      period: "2025 - Present",
      description: [
        "Built responsive web applications using React and Flask/Node.js backend",
        "Designed REST APIs and scalable database structures",
        "Improved application performance, debugging, and code maintainability"
      ]
    },
    {
      role: "Web Developer Intern",
      company: "Keltron",
      period: "2024",
      description: [
        "Developed responsive websites using HTML, CSS, JavaScript, and Bootstrap",
        "Optimized website loading speeds and cross-browser responsiveness",
        "Collaborated with cross-functional teams to deploy and maintain projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-4 text-secondary">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">Journey</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-white ring-4 ring-background z-10" />

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right md:pr-12'}`}
                >
                  <div className={`glass-card p-8 inline-block w-full ${index % 2 === 0 ? 'md:ml-12' : ''}`}>
                    <div className={`flex items-center gap-3 text-primary mb-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono text-sm tracking-widest">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-xl text-gray-400 font-medium mb-6">{exp.company}</h4>
                    
                    <ul className={`space-y-3 text-gray-400 ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 ${index % 2 === 0 ? '' : 'md:order-last'}`} />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                {/* Empty Space for the other side */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
