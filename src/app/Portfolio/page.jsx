"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaFacebookF, FaInstagram,  FaGithub, FaCode, FaTerminal, FaDatabase, FaServer, FaArrowRight, FaTools } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTypescript, SiTailwindcss, SiExpress, SiPrisma, SiJavascript, SiReact, SiNodedotjs } from "react-icons/si";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // --- DATA STRUCTURES ---
  const skillCategories = [
    { name: "Frontend", skills: ["HTML", "CSS", "Javascript", "React.js", "Next.js", "TailwindCss","TypeScript"], icon: <FaCode className="text-blue-500" /> },
    { name: "Backend", skills: ["Node.js", "Express.js",], icon: <FaServer className="text-orange-500" /> },
    { name: "Database", skills: ["MySql", "MongoDb", "Prisma"], icon: <FaDatabase className="text-green-500" /> },
    { name: "Core", skills: ["DSA", "UI/UX", "Clean Code"], icon: <FaTerminal className="text-purple-500" /> },
    { name: "Tools & Deployment",skills: ["Git", "GitHub", "Netlify", "Vercel"],icon: <FaTools className="text-pink-500 text-2xl" />}
  ];

  const projects = [
    {
      title: "Fusion Market",
      desc: "Full-stack E-commerce engine with Shadcn UI and MongoDB.",
      tech: [<SiNextdotjs />, <SiTypescript />, <SiMongodb />, <SiExpress />],
      link: "https://github.com/BiswajitBeheraDev/Fusion-Market_MERN",
      img: "/Screenshot 2026-02-18 170958.png",
      color: "from-purple-500/20 to-blue-500/20"
    },
    {
      title: "3D Weather Map",
      desc: "Interactive 3D weather visualization using live API data.",
      tech: [<SiNextdotjs />, <SiTailwindcss />, <SiJavascript />],
      link: "https://github.com/BiswajitBeheraDev/Weathermap",
      img: "/Weather.jpg",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Password Generator",
      desc: "Security-focused tool with real-time feedback logic.",
      tech: [<SiReact />, <SiTailwindcss />, <SiJavascript />],
      link: "https://github.com/BiswajitBeheraDev/Password_Generator",
      img: "/download 2.jpg", // Changed to a known valid path to avoid the 404
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Ecommerce site",
      desc: "Modern shopping experience with product management.",
      tech: [<SiReact />, <SiTailwindcss />],
      link: "https://github.com/BiswajitBeheraDev/E-commercesite",
      img: "/download 2.jpg",
      color: "from-green-500/20 to-emerald-500/20"
    }
  ];

  // --- ANIMATIONS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[120px]"></div>
      </div>

      {/* Premium Navbar */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-white/5 py-5 px-6 md:px-12 flex justify-between items-center z-[100]">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          className="text-lg font-bold tracking-tighter flex items-center gap-2"
        >
          <span className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-lg font-black italic">B</span>
          BISWAJIT BEHERA
        </motion.h1>
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-medium text-zinc-400">
          {["about", "skills", "projects", "contact"].map((item) => (
            <a key={item} href={`#${item}`} className="hover:text-white transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-52 pb-32 flex flex-col items-center text-center px-4 overflow-hidden">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-12 group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-white/10 p-1 bg-zinc-900">
             <Image src="/bikun.jpg.jpeg" alt="Biswajit" fill className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </motion.div>

        <motion.div style={{ opacity }}>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-500 font-mono text-sm mb-4 block tracking-widest uppercase">Available for freelance</motion.span>
            <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-6xl md:text-8xl font-black tracking-[-0.04em] mb-8 leading-[0.9]">
              Crafting <span className="text-zinc-500 italic font-light">Digital</span><br />Experiences
            </motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-zinc-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed mb-12">
              Merging aesthetics with high-performance code. Specialized in building scalable <span className="text-white font-normal underline decoration-blue-500/50 underline-offset-4">Next.js ecosystems</span>.
            </motion.p>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 max-w-6xl mx-auto py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} className="md:col-span-2 bg-zinc-900/50 border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-md">
                <h2 className="text-sm font-bold uppercase tracking-widest text-blue-500 mb-6">About the developer</h2>
                <p className="text-2xl font-light text-zinc-300 leading-snug">
                    I’m <span className="text-white font-medium">Biswajit Amrit Ranjan Behera</span>, 
                    a modern Web Developer building high-performance applications using 
                    <span className="text-white underline decoration-purple-500">React.js and Next.js</span>. 
                    I focus on clean architecture, reusable components, and scalable solutions 
                    that deliver fast, accessible, and engaging user experiences.
                </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-[2.5rem] flex flex-col justify-between text-white">
                <FaCode size={40} className="opacity-50" />
                <div>
                    <h3 className="text-3xl font-bold leading-tight">10+ Projects Deployed</h3>
                    {/* <p className="text-blue-100 text-sm mt-2 font-light">From AWS VPS to Vercel edge networks.</p> */}
                </div>
            </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 max-w-6xl mx-auto py-32 px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter italic">Technical <br /><span className="text-blue-500 not-italic uppercase">Arsenal</span></h2>
            <p className="text-zinc-500 text-sm max-w-[200px] uppercase tracking-widest leading-loose text-right">Always evolving, always learning.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.04] transition-all">
              <div className="mb-6 opacity-80 text-2xl">{cat.icon}</div>
              <h3 className="text-zinc-500 text-[10px] uppercase tracking-widest mb-4 font-bold">{cat.name}</h3>
              <div className="flex flex-col gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="text-sm font-medium text-zinc-300">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 max-w-7xl mx-auto py-32 px-6">
        <h2 className="text-center text-sm font-bold tracking-[0.4em] uppercase text-zinc-500 mb-20 italic">Curated Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div 
                key={index} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                variants={fadeInUp} 
                className="group relative"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/5">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill 
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 group-hover:opacity-100"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-4 text-2xl">
                        {project.tech.map((icon, i) => <span key={i} className="text-white drop-shadow-lg">{icon}</span>)}
                    </div>
                </div>
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-bold mb-2 tracking-tight">{project.title}</h3>
                    <p className="text-zinc-500 font-light max-w-md italic">{project.desc}</p>
                </div>
                <a href={project.link} target="_blank" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                    <FaArrowRight className="-rotate-45" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 max-w-5xl mx-auto py-40 px-6">
        <div className="bg-gradient-to-b from-zinc-900 to-black border border-white/5 rounded-[3rem] p-12 md:p-24 text-center overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">Ready to ship <br /> your <span className="text-zinc-500">vision?</span></h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="mailto:beherabiswajit344@gmail.com" className="group bg-white text-black px-12 py-5 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all">
                Let's talk <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://wa.me/916371675164" className="bg-zinc-800 text-white px-12 py-5 rounded-full font-bold hover:bg-zinc-700 transition-all">
                Quick Chat
              </a>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center bg-black/50">
        <div className="flex justify-center gap-10 mb-8">
            <a href="https://github.com/BiswajitBeheraDev" className="text-zinc-600 hover:text-white transition-colors text-xl"><FaGithub /></a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors text-xl"><FaInstagram /></a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors text-xl"><FaFacebookF /></a>
        </div>
        <p className="text-[10px] text-zinc-700 tracking-[0.5em] uppercase font-bold italic">
          © {new Date().getFullYear()} Handcrafted by Biswajit
        </p>
      </footer>
    </div>
  );
}