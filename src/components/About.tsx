import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code2, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "Computer Science Graduate",
      description:
        "Completed B.Tech in Computer Science Engineering from Ilahia College of Engineering and Technology with a strong foundation in software development and problem solving."
    },
    {
      icon: <Code2 className="w-6 h-6 text-secondary" />,
      title: "Full Stack Development",
      description:
        "Skilled in Python, Django, React, Flask, and REST API development. Experienced in building responsive web applications and backend systems."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-accent" />,
      title: "Project Experience",
      description:
        "Developed projects including a Resume Builder, AI-powered Tool Rental Management System, and an E-Bookstore website using modern web technologies."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-4 text-primary">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">
              About Me
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Building <span className="text-gradient">Modern Web Applications</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
            I am <strong>Athulkrishna P Shijo</strong>, a passionate Software Developer
            and Computer Science graduate. I enjoy building modern web applications
            using technologies like Python, Django, React, and Flask. I have worked
            on several academic and personal projects that focus on practical
            problem solving, clean code, and scalable system design. As a fresher,
            I am eager to start my professional journey and contribute to building
            impactful software solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 text-white">
                {item.icon}
              </div>

              <div className="mb-6 inline-block p-4 rounded-2xl bg-surface border border-white/5 group-hover:border-white/10 transition-colors">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;