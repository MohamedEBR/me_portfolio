import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiCode, HiDatabase, HiCloud, HiShieldCheck, HiMail } from 'react-icons/hi'
import { 
  FaReact, FaJava, FaPython, FaJsSquare, FaGitAlt, FaDocker, FaAws,
  FaLinux
} from 'react-icons/fa'
import { 
  SiSpringboot, SiDjango, SiPostgresql, SiMongodb, SiTailwindcss,
  SiTypescript, SiNextdotjs, SiStripe, SiJsonwebtokens,
  SiGithubactions, SiMysql, SiKubernetes, SiKotlin, SiMui
} from 'react-icons/si'
import { BiTerminal } from 'react-icons/bi'

const SkillCard = ({ skill, index, category }) => {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = (name) => {
    const icons = {
      // Languages
      'Java': FaJava,
      'Python': FaPython,
      'JavaScript': FaJsSquare,
      'TypeScript': SiTypescript,
      'Kotlin': SiKotlin,
      'SQL': HiDatabase,
      
      // Frontend
      'React': FaReact,
      'Next.js': SiNextdotjs,
      'Tailwind CSS': SiTailwindcss,
      'Material UI': SiMui,
      
      // Backend
      'Spring Boot': SiSpringboot,
      'Django': SiDjango,
      'Node.js': HiCode,
      
      // Databases
      'PostgreSQL': SiPostgresql,
      'MongoDB': SiMongodb,
      'MySQL': SiMysql,
      
      // DevOps & Cloud
      'Docker': FaDocker,
      'AWS': FaAws,
      'GitHub Actions': SiGithubactions,
      'Kubernetes': SiKubernetes,
      'Linux': FaLinux,
      
      // Security & Auth
      'JWT': SiJsonwebtokens,
      'OWASP': HiShieldCheck,
      'RBAC': HiShieldCheck,
      
      // APIs & Integration
      'Stripe': SiStripe,
      'SendGrid': HiMail,
      'REST APIs': HiCode,
      
      // Tools
      'Git': FaGitAlt,
      'GitHub': FaGitAlt,
      'Terminal': BiTerminal,
    }
    return icons[name] || HiCode
  }

  const getCategoryColor = (cat) => {
    const colors = {
      'Languages': 'from-blue-500 to-blue-600',
      'Frontend': 'from-green-500 to-green-600',
      'Backend': 'from-purple-500 to-purple-600',
      'Database': 'from-orange-500 to-orange-600',
      'DevOps': 'from-red-500 to-red-600',
      'Security': 'from-yellow-500 to-yellow-600',
      'Tools': 'from-gray-500 to-gray-600'
    }
    return colors[cat] || 'from-accent to-accent-dark'
  }

  const Icon = getIcon(skill.name)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ scale: 1.03, y: -3, transition: { duration: 0.3, ease: 'easeOut' } }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="bg-white dark:bg-dark-secondary rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ease-out border border-gray-100 dark:border-gray-700 hover:border-accent/20 h-full flex flex-col items-center text-center">
        {/* Skill Icon */}
        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${getCategoryColor(category)} mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 ease-out`}>
          <Icon className="w-8 h-8 text-white group-hover:scale-105 transition-transform duration-300 ease-out" />
        </div>

        {/* Skill Name */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors duration-300 ease-out">
          {skill.name}
        </h3>

        {/* Proficiency Level */}
        <div className="w-full mb-3">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
            <span>Proficiency</span>
            <span>{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 0.8, delay: index * 0.05 + 0.3, ease: "easeOut" }}
              className={`h-2 rounded-full bg-gradient-to-r ${getCategoryColor(category)}`}
            />
          </div>
        </div>

        {/* Experience */}
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.experience}
        </span>

        {/* Hover effect */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-0 bg-accent/5 rounded-xl pointer-events-none"
          />
        )}
      </div>
    </motion.div>
  )
}

const CategorySection = ({ title, skills, icon: Icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay, ease: "easeOut" }}
    className="mb-12"
  >
    <div className="flex items-center mb-8 group">
      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors duration-300 ease-out">
        <Icon className="w-6 h-6 text-accent group-hover:scale-105 transition-transform duration-300 ease-out" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors duration-300 ease-out">{title}</h3>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {skills.map((skill, index) => (
        <SkillCard 
          key={skill.name} 
          skill={skill} 
          index={index} 
          category={title}
        />
      ))}
    </div>
  </motion.div>
)

const Skills = () => {
  const skillCategories = {
    'Languages': [
      { name: 'Java', level: 90, experience: '2+ years' },
      { name: 'Python', level: 85, experience: '4+ years' },
      { name: 'JavaScript', level: 85, experience: '4+ years' },
      { name: 'TypeScript', level: 75, experience: '4+ years' },
      { name: 'Kotlin', level: 60, experience: '2+ years' },
      { name: 'SQL', level: 80, experience: '2+ years' },
    ],
    'Frontend': [
      { name: 'React', level: 90, experience: '3+ years' },
      { name: 'Next.js', level: 70, experience: '6+ months' },
      { name: 'Tailwind CSS', level: 85, experience: '3+ years' },
      { name: 'Material UI', level: 80, experience: '3+ years' },
    ],
    'Backend': [
      { name: 'Spring Boot', level: 85, experience: '1+ years' },
      { name: 'Django', level: 80, experience: '1+ years' },
      { name: 'Node.js', level: 70, experience: '3+ years' },
      { name: 'REST APIs', level: 85, experience: '3+ years' },
    ],
    'Database': [
      { name: 'PostgreSQL', level: 80, experience: '1+ years' },
      { name: 'MongoDB', level: 75, experience: '3+ years' },
      { name: 'MySQL', level: 70, experience: '1+ years' },
    ],
    'DevOps': [
      { name: 'Docker', level: 75, experience: '1+ years' },
      { name: 'GitHub Actions', level: 80, experience: '1+ years' },
      { name: 'AWS', level: 60, experience: '6+ months' },
      { name: 'Linux', level: 75, experience: '2+ years' },
    ],
    'Security': [
      { name: 'JWT', level: 85, experience: '1+ years' },
      { name: 'OWASP', level: 70, experience: '1+ years' },
      { name: 'RBAC', level: 80, experience: '1+ years' },
    ],
    'Tools': [
      { name: 'Git', level: 90, experience: '3+ years' },
      { name: 'GitHub', level: 90, experience: '3+ years' },
      { name: 'Stripe', level: 80, experience: '6+ months' },
      { name: 'SendGrid', level: 75, experience: '6+ months' },
    ]
  }

  const categoryIcons = {
    'Languages': HiCode,
    'Frontend': FaReact,
    'Backend': SiSpringboot,
    'Database': HiDatabase,
    'DevOps': HiCloud,
    'Security': HiShieldCheck,
    'Tools': FaGitAlt
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Proficient in modern development technologies with hands-on experience 
            building real-world applications
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <CategorySection
              key={category}
              title={category}
              skills={skills}
              icon={categoryIcons[category]}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-accent/5 to-accent-light/5 dark:from-accent/10 dark:to-accent-light/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Technology is constantly evolving, and I'm committed to staying current with 
              the latest trends, frameworks, and best practices in software development.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              See My Work
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
