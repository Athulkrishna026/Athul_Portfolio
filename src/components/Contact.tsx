import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9847925183",
      href: "tel:+919847925183"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "athulkrishnapshijo@gmail.com",
      href: "mailto:athulkrishnapshijo@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Kochi, Kerala, India",
      href: "https://maps.google.com/?q=Kochi,Kerala,India"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background flares */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 text-primary">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold tracking-wide uppercase">Available</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Let's build <br />
              <span className="text-gradient">something amazing <br /> together.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg font-light">
              I'm always open to discussing product design work, exciting full-stack opportunities, or partnerships. Let's connect and create the future.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.href}
                  target={info.label === 'Location' ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="flex items-center gap-6 p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all group"
                >
                  <div className="w-14 h-14 rounded-full bg-surface border border-white/5 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-1">{info.label}</h4>
                    <p className="text-xl font-medium text-gray-200 group-hover:text-white transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <form className="glass-card p-8 md:p-10 space-y-6">
              <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Name</label>
                  <input type="text" className="w-full bg-surfaceLight/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input type="email" className="w-full bg-surfaceLight/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea rows={5} className="w-full bg-surfaceLight/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none" placeholder="Tell me about your project..." />
              </div>

              <button type="button" className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2">
                Send Message
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Athulkrishna P Shijo. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/Athulkrishna026" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 border border-white/5 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/athuls026/" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 border border-white/5 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:athulkrishnapshijo@gmail.com" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 border border-white/5 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
