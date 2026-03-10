import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    "Cisco Certified Network Associate (CCNA)",
    "Deloitte Data Analytics Job Simulation",
    "Deloitte Cyber Job Simulation",
    "NPTEL Python for Data Science",
    "Keltron Web Development using JavaScript"
  ];

  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-4 text-accent">
            <Award className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">Achievements</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 flex items-start gap-4 group"
            >
              <div className="mt-1 flex-shrink-0 text-primary group-hover:text-secondary transition-colors">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <p className="text-lg text-gray-200 font-medium group-hover:text-white transition-colors">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
