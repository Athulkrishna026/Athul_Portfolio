import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PowerX",
      subtitle: "Tool Management System with AI Chatbot",
      description: "A comprehensive tool booking and management system featuring role-based access control, an integrated AI chatbot for intuitive booking queries, and automated email notifications for seamless operations.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Chatbot API"],
      links: { github: "#", live: "#" },
      featured: true,
    },
    {
      title: "Instructo",
      subtitle: "AI Tutor Platform",
      description: "An intelligent learning platform powered by AI. Features NLP-based responses for personalized tutoring, real-time backend processing, and a scalable full-stack architecture designed for high availability.",
      techStack: ["Python", "Flask", "React", "MongoDB", "NLP"],
      links: { github: "#", live: "#" },
      featured: true,
    },
    {
      title: "E-Bookstore Website",
      subtitle: "Full-Stack E-commerce Platform",
      description: "A complete e-commerce solution for digital and physical books. Includes features like a dynamic shopping cart, wishlist, comprehensive order management system, and secure JWT-based authentication.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      links: { github: "#", live: "#" },
      featured: false,
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-surfaceLight/20">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-4 text-primary">
            <FolderGit2 className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            A selection of my recent work focusing on full-stack development, AI integration, and scalable architecture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 flex flex-col group relative overflow-hidden ${project.featured ? 'border-primary/20 md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Decorative background glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3 rounded-xl bg-surface/80 border border-white/5 text-primary">
                  <FolderGit2 className="w-8 h-8" />
                </div>
                <div className="flex gap-3">
                  <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.links.live} className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <h4 className="text-sm font-medium text-secondary mb-4 tracking-wide uppercase">{project.subtitle}</h4>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map(tech => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
