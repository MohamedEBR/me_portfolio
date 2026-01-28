import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCode, HiDatabase, HiCloud, HiShieldCheck, HiMail, HiTerminal } from 'react-icons/hi'
import {
  FaReact, FaJava, FaPython, FaJsSquare, FaGitAlt, FaDocker, FaAws,
  FaLinux, FaCode, FaMicrochip, FaDatabase, FaServer, FaTerminal,
  FaGithub, FaNodeJs
} from 'react-icons/fa'
import {
  SiSpringboot, SiDjango, SiPostgresql, SiMongodb, SiTailwindcss,
  SiTypescript, SiNextdotjs, SiJsonwebtokens,
  SiGithubactions, SiMysql, SiKubernetes, SiKotlin, SiMui,
  SiArchlinux, SiNeovim, SiC, SiCplusplus, SiR,
  SiGnubash, SiGooglecloud, SiMicrosoftazure,
  SiNginx, SiRedis, SiFirebase, SiSupabase,
  SiVisualstudiocode, SiIntellijidea, SiPycharm, SiJupyter,
  SiCsharp, SiPytorch, SiTensorflow, SiScikitlearn
} from 'react-icons/si'
import { BiTerminal, BiBrain } from 'react-icons/bi'
import { TbMathFunction, TbCpu } from 'react-icons/tb'

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = (name) => {
    const icons = {
      // Languages
      'Java': FaJava,
      'Python': FaPython,
      'C': SiC,
      'C++': SiCplusplus,
      'C#': SiCsharp,
      'JavaScript': FaJsSquare,
      'TypeScript': SiTypescript,
      'SQL': HiDatabase,
      'R': SiR,
      'Kotlin': SiKotlin,
      'Bash': SiGnubash,

      // Frameworks
      'Spring Boot': SiSpringboot,
      'React': FaReact,
      'Node.js': FaNodeJs,
      'Express': FaServer,
      'Django': SiDjango,
      'Flask': FaServer,
      'FastAPI': FaServer,
      'Next.js': SiNextdotjs,
      'Tailwind CSS': SiTailwindcss,
      'Material UI': SiMui,

      // ML / AI
      'PyTorch': SiPytorch,
      'TensorFlow': SiTensorflow,
      'Scikit-Learn': SiScikitlearn,
      'OpenCV': TbCpu,
      'XGBoost': TbMathFunction,
      'Pandas': FaDatabase,
      'NumPy': TbMathFunction,

      // Databases
      'PostgreSQL': SiPostgresql,
      'MySQL': SiMysql,
      'MongoDB': SiMongodb,
      'Redis': SiRedis,
      'Firebase': SiFirebase,
      'Supabase': SiSupabase,

      // Cloud & DevOps
      'AWS': FaAws,
      'GCP': SiGooglecloud,
      'Azure': SiMicrosoftazure,
      'Docker': FaDocker,
      'Kubernetes': SiKubernetes,
      'NGINX': SiNginx,
      'Linux': FaLinux,
      'Arch Linux': SiArchlinux,
      'GitHub Actions': SiGithubactions,
      'Jenkins': FaServer,
      'TravisCI': FaServer,

      // Security & Auth
      'JWT': SiJsonwebtokens,
      'OWASP': HiShieldCheck,
      'RBAC': HiShieldCheck,

      // Tools
      'Git': FaGitAlt,
      'GitHub': FaGithub,
      'VS Code': SiVisualstudiocode,
      'IntelliJ IDEA': SiIntellijidea,
      'PyCharm': SiPycharm,
      'Neovim': SiNeovim,
      'Jupyter': SiJupyter,
      'Terminal': FaTerminal,
    }
    const IconComponent = icons[name] || HiCode
    return IconComponent
  }

  const Icon = getIcon(skill.name)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group font-mono"
    >
      <div className="bg-black/80 rounded-sm p-4 border border-secondary/20 hover:border-secondary h-full flex flex-col items-center text-center transition-all duration-300 shadow-[0_0_5px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(166,227,161,0.2)]">
        {/* Skill Icon */}
        <div className="mb-3 p-2 rounded-sm bg-secondary/5 border border-secondary/10 group-hover:bg-secondary/10 transition-colors">
          <Icon className={`w-8 h-8 text-gray-400 group-hover:text-secondary transition-colors duration-300`} />
        </div>

        {/* Skill Name */}
        <h3 className="text-sm font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
          {skill.name}
        </h3>

        {/* Hover effect - Corner Brackets */}
        {isHovered && (
          <>
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-secondary" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-secondary" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-secondary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-secondary" />
          </>
        )}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Languages')

  const skillCategories = {
    'Languages': [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 90 },
      { name: 'C', level: 70 },
      { name: 'C++', level: 75 },
      { name: 'C#', level: 70 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'SQL', level: 80 },
      { name: 'R', level: 60 },
      { name: 'Kotlin', level: 60 },
      { name: 'Bash', level: 75 },
    ],
    'Frameworks': [
      { name: 'Spring Boot', level: 85 },
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 80 },
      { name: 'Django', level: 80 },
      { name: 'Flask', level: 75 },
      { name: 'FastAPI', level: 75 },
      { name: 'Next.js', level: 70 },
    ],
    'ML / AI': [
      { name: 'PyTorch', level: 80 },
      { name: 'TensorFlow', level: 70 },
      { name: 'Scikit-Learn', level: 85 },
      { name: 'OpenCV', level: 65 },
      { name: 'XGBoost', level: 85 },
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 90 },
    ],
    'Cloud & DevOps': [
      { name: 'AWS', level: 70 },
      { name: 'GCP', level: 60 },
      { name: 'Azure', level: 60 },
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 65 },
      { name: 'NGINX', level: 70 },
      { name: 'Linux', level: 90 },
      { name: 'Jenkins', level: 60 },
      { name: 'TravisCI', level: 60 },
    ],
    'Databases': [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'Redis', level: 70 },
      { name: 'Firebase', level: 75 },
      { name: 'Supabase', level: 70 },
    ],
    'Tools': [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 90 },
      { name: 'IntelliJ IDEA', level: 85 },
      { name: 'PyCharm', level: 85 },
      { name: 'Neovim', level: 85 },
      { name: 'Jupyter', level: 85 },
    ]
  }

  return (
    <section id="skills" className="py-10 bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none" />

      <div className="w-full px-[7%] relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 font-mono"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary text-secondary rounded-sm text-sm font-bold mb-4 tracking-wider">
            ./SKILLS_MATRIX
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-600">Arsenal</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 font-mono">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 text-sm border transition-all duration-300 ${activeTab === category
                ? 'bg-secondary text-black border-secondary font-bold shadow-[0_0_15px_rgba(166,227,161,0.4)]'
                : 'bg-black/50 text-gray-500 border-gray-800 hover:border-secondary hover:text-secondary'
                }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Skills Grid - Fixed Height Container to prevent jumpiness */}
        <div className="min-h-[300px]">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
          >
            <AnimatePresence mode='popLayout'>
              {skillCategories[activeTab].map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 font-mono"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-3 bg-secondary text-black font-bold hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(166,227,161,0.2)]"
          >
            &gt; EXECUTE_PROJECT_VIEWER
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
