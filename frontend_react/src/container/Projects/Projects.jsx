import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiCode, HiExternalLink, HiLockClosed } from 'react-icons/hi'
import { BsGithub } from 'react-icons/bs'
import { FaReact, FaJava, FaPython, FaDocker, FaNodeJs } from 'react-icons/fa'
import { SiSpringboot, SiDjango, SiStripe, SiPostgresql, SiMongodb, SiTailwindcss, SiTypescript, SiMui, SiExpress, SiOpenai, SiFastapi, SiPytorch, SiRedis, SiScikitlearn, SiGnubash, SiC, SiLinux } from 'react-icons/si'
import OptimizedImage from '../../components/OptimizedImage'
import panaceaImg from '../../assets/panacea.png'
import automlImg from '../../assets/automl.png'
import picoFlagImg from '../../assets/picoctf_flag.png'
import networkSecurityImg from '../../assets/network_security.png'
import myShellImg from '../../assets/myshell.png'
import aegisImg from '../../assets/aegis.svg'
import signalForgeImg from '../../assets/signalforge.svg'

const projects = [
  {
    id: 0,
    title: "Aegis",
    category: "Security",
    description: "A Go workload-identity and authorization control plane that exchanges verified mTLS identity for short-lived, audience-bound credentials with explainable ReBAC decisions.",
    image: aegisImg,
    features: [
      "SPIFFE Identity over mTLS",
      "Explainable ReBAC",
      "Tamper-Evident Audit Chain"
    ],
    technologies: ["Go", "PostgreSQL", "Docker", "Kubernetes", "Prometheus", "JWT"],
    liveLink: null,
    githubLink: "https://github.com/MohamedEBR/aegis-control-plane"
  },
  {
    id: 1,
    title: "SignalForge",
    category: "Security",
    description: "A detection-as-code and replay lab that normalizes cloud, identity, workload, application, and network telemetry into explainable, evidence-backed incidents.",
    image: signalForgeImg,
    features: [
      "Five Telemetry Adapters",
      "Versioned ATT&CK Rules",
      "126K Events/Second"
    ],
    technologies: ["Python", "Pydantic", "Docker", "GitHub Actions", "AWS", "Azure"],
    liveLink: null,
    githubLink: "https://github.com/MohamedEBR/signalforge"
  },
  {
    id: 2,
    title: "SentinelFlow",
    category: "Security",
    description: "An end-to-end network intrusion-detection pipeline with Zeek/Argus ingestion, deployable feature contracts, explainable alerts, and hardened model artifacts.",
    image: networkSecurityImg,
    features: [
      "0.987 PR AUC",
      "Zeek / PCAP Ingestion",
      "Explainable Detection API"
    ],
    technologies: ["Python", "XGBoost", "PyTorch", "Zeek", "Scikit-Learn", "Pydantic"],
    liveLink: null,
    githubLink: "https://github.com/MohamedEBR/network_intrusion_detection"
  },
  {
    id: 3,
    title: "AutoML",
    category: "Full-Stack",
    description: "A multi-agent ML platform where specialized agents collaborate to prepare data, train models, and surface experiment progress through a chat-first interface.",
    image: automlImg,
    features: [
      "Agentic Orchestration",
      "Real-Time Training Views",
      "Typed ML Workflows"
    ],
    technologies: ["React", "TypeScript", "FastAPI", "PyTorch", "OpenAI", "Redis"],
    liveLink: null,
    githubLink: "https://github.com/FriedricNietzsche/AutoML"
  },
  {
    id: 4,
    title: "Karate Club Management",
    category: "Full-Stack",
    description: "Secure management system for martial arts academy. Implemented RBAC, payment gateways, and automated alert systems.",
    image: panaceaImg,
    features: [
      "JWT-based RBAC",
      "Encrypted Payment Processing",
      "Automated Notifications"
    ],
    technologies: ["React", "Spring Boot", "PostgreSQL", "Docker", "Stripe", "JWT"],
    liveLink: "https://panaceakarateacademy.ca/",
    githubLink: "https://github.com/MohamedEBR/panacea-2.0"
  },
  {
    id: 5,
    title: "picoCTF Writeups",
    category: "Security",
    description: "Documented challenge solutions and exploit scripts spanning cryptography, binary exploitation, reverse engineering, and web security.",
    image: picoFlagImg,
    features: [
      "Reproducible Walkthroughs",
      "Exploit Scripts",
      "Security Fundamentals"
    ],
    technologies: ["Python", "Bash", "C", "Cryptography", "Reverse Engineering"],
    liveLink: null,
    githubLink: "https://github.com/MohamedEBR/picoCTF"
  },
  {
    id: 6,
    title: "MyShell",
    category: "Systems",
    description: "A custom Unix-like shell implementation in C. Supporting process creation (fork/exec), signal handling, and I/O redirection.",
    image: myShellImg,
    features: [
      "Process Management (Fork/Exec)",
      "Signal Handling",
      "I/O Redirection"
    ],
    technologies: ["C", "Linux", "Bash", "Systems Programming"],
    liveLink: null,
    githubLink: null
  }
]

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.1,
      ease: "easeOut"
    }
  })
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: { duration: 0.3 }
  }
}

const iconVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 20, opacity: 0 },
  hover: i => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: "easeOut"
    }
  })
}

const ProjectCard = ({ project, index }) => {
  const getTechIcon = (tech) => {
    const icons = {
      'React': FaReact,
      'Node.js': FaNodeJs,
      'Java': FaJava,
      'Python': FaPython,
      'TypeScript': SiTypescript,
      'Spring Boot': SiSpringboot,
      'Django': SiDjango,
      'Express': SiExpress,
      'Docker': FaDocker,
      'PostgreSQL': SiPostgresql,
      'MongoDB': SiMongodb,
      'Tailwind CSS': SiTailwindcss,
      'Stripe': SiStripe,
      'Material UI': SiMui,
      'OpenAI': SiOpenai,
      'FastAPI': SiFastapi,
      'PyTorch': SiPytorch,
      'Redis': SiRedis,
      'Scikit-Learn': SiScikitlearn,
      'Bash': SiGnubash,
      'C': SiC,
      'Linux': SiLinux,
    }
    const Icon = icons[tech] || HiCode
    return <Icon className="w-3 h-3 text-secondary" />
  }

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-black/80 dark:bg-black/90 rounded-sm overflow-hidden border border-secondary/30 hover:border-secondary transition-colors duration-300 group relative"
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-secondary" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-secondary" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-secondary" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-secondary" />

      {/* Project Image View */}
      <div className="relative h-48 overflow-hidden border-b border-secondary/30 transition-all duration-500">
        <OptimizedImage
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
        />

        {/* Scanline overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%]" />

        {/* Links Overlay */}
        <motion.div
          variants={overlayVariants}
          className="absolute inset-0 bg-black/80 flex items-center justify-center space-x-6 z-20"
        >
          {project.liveLink && (
            <motion.a
              custom={0}
              variants={iconVariants}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group/link"
            >
              <div className="w-12 h-12 bg-secondary/10 border border-secondary rounded-full flex items-center justify-center text-secondary group-hover/link:bg-secondary group-hover/link:text-black transition-all duration-300">
                <HiExternalLink className="w-6 h-6" />
              </div>
              <span className="text-secondary text-xs mt-2 font-mono uppercase">Deploy</span>
            </motion.a>
          )}

          {project.githubLink && (
            <motion.a
              custom={1}
              variants={iconVariants}
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group/link"
            >
              <div className="w-12 h-12 bg-secondary/10 border border-secondary rounded-full flex items-center justify-center text-secondary group-hover/link:bg-secondary group-hover/link:text-black transition-all duration-300">
                <BsGithub className="w-6 h-6" />
              </div>
              <span className="text-secondary text-xs mt-2 font-mono uppercase">Source</span>
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Project Info */}
      <div className="p-6 font-mono">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-secondary/70 uppercase">[{project.id.toString().padStart(2, '0')}] // {project.category}</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary hover:underline decoration-secondary underline-offset-4 transition-all duration-300">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4 border-t border-gray/20 pt-4">
          {project.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-1 px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-medium text-gray-300 hover:border-secondary hover:text-secondary transition-colors duration-300"
            >
              {getTechIcon(tech)}
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Security', 'Full-Stack', 'Systems']

  const filteredProjects = React.useMemo(() => projects.filter(project =>
    activeFilter === 'All' || project.category === activeFilter
  ), [activeFilter])

  return (
    <section id="projects" className="py-10 bg-primary relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full px-[7%] relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 font-mono"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary text-secondary rounded-sm text-sm font-bold mb-4 tracking-wider">
            ./PROJECTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
            Security Systems & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-600">Selected Work</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto border-l-2 border-secondary/50 pl-4 text-left md:text-center md:border-l-0 md:pl-0">
            &gt; Public, testable systems backed by measured evidence.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12 font-mono"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 border transition-all duration-300 uppercase text-sm tracking-widest ${activeFilter === filter
                ? 'bg-secondary text-black border-secondary font-bold shadow-[0_0_15px_rgba(0,255,65,0.4)]'
                : 'bg-transparent text-gray-500 border-gray-800 hover:border-secondary hover:text-secondary'
                }`}
            >
              [{filter}]
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 font-mono"
        >
          <div className="bg-black/50 border border-secondary/20 p-8 md:p-12 relative overflow-hidden group hover:border-secondary/50 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <HiLockClosed className="w-24 h-24 text-secondary" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
              Analyze More Data?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto relative z-10">
              Access the full repository archive to view all tools and experimental projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="https://github.com/MohamedEBR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-secondary text-black font-bold hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(0,255,65,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                <BsGithub className="w-5 h-5 mr-2" />
                ACCESS_GITHUB_REPO
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-3 bg-transparent text-secondary border border-secondary hover:bg-secondary/10 font-bold transition-colors duration-300"
              >
                INITIATE_COLLAB
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
