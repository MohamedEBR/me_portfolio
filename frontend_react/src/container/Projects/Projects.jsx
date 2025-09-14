import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCode, HiExternalLink } from 'react-icons/hi'
import { BsGithub } from 'react-icons/bs'
import { FaReact, FaJava, FaPython, FaDocker, FaNodeJs } from 'react-icons/fa'
import { SiSpringboot, SiDjango, SiStripe, SiPostgresql, SiMongodb, SiTailwindcss, SiTypescript, SiMui, SiExpress, SiOpenai } from 'react-icons/si'
import OptimizedImage from '../../components/OptimizedImage'
import panaceaImg from '../../assets/panacea.png'
import discoverImg from '../../assets/discover.png'
import chatbotImg from '../../assets/chatbot.png'

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)

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
    }
    const Icon = icons[tech] || HiCode
    return <Icon className="w-4 h-4" />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white dark:bg-dark-secondary rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Overlay on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 flex items-center justify-center space-x-4"
            >
              {project.liveLink && (
                <motion.a
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ delay: 0.1 }}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-accent hover:text-white transition-colors duration-200"
                >
                  <HiExternalLink className="w-5 h-5" />
                </motion.a>
              )}
              
              {project.githubLink && (
                <motion.a
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ delay: 0.2 }}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-accent hover:text-white transition-colors duration-200"
                >
                  <BsGithub className="w-5 h-5" />
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${project.category === 'Full-Stack' 
            ? 'bg-accent/90 text-white' 
            : project.category === 'Frontend' 
            ? 'bg-blue-500/90 text-white'
            : 'bg-green-500/90 text-white'
          }`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.map((feature, idx) => (
              <li key={idx} className="text-xs text-gray-600 dark:text-gray-300 flex items-start">
                <span className="w-1 h-1 bg-accent rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium text-gray-700 dark:text-gray-300"
            >
              {getTechIcon(tech)}
              <span>{tech}</span>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex space-x-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-dark text-sm font-medium transition-colors duration-200"
              >
                Live Demo
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-accent text-sm font-medium transition-colors duration-200"
              >
                Source Code
              </a>
            )}
          </div>
          {/* Date removed as requested */}
          <span className="text-xs text-gray-500 dark:text-gray-400"></span>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: "Karate Club Management System",
      category: "Full-Stack",
      description: "Comprehensive management system for karate academies with member management, payment processing, and automated communications.",
      image: panaceaImg,
      features: [
        "JWT-based authentication with role-based access control",
        "Stripe payment integration for membership fees",
        "Automated email notifications using SendGrid",
        "Member and instructor dashboard with progress tracking",
        "Class scheduling and attendance management",
        "Responsive design optimized for mobile and desktop"
      ],
      technologies: ["React", "Spring Boot", "PostgreSQL", "Docker", "Stripe", "JWT"],
      liveLink: "https://panaceakarateacademy.ca/",
      githubLink: "https://github.com/MohamedEBR/panacea-2.0"
    },
    {
      id: 2,
      title: "DiscoverMyUni",
      category: "Full-Stack",
      description: "Collaborative team project featuring a university discovery platform with web scraping capabilities and machine learning integration.",
      image: discoverImg,
      features: [
        "Web scraping system for university data collection",
        "Machine learning algorithms for university recommendations",
        "Interactive university comparison tool",
        "Advanced search and filtering capabilities",
        "User review and rating system",
        "Real-time data synchronization"
      ],
      technologies: ["Django", "Python", "React", "Machine Learning"],
      githubLink: "https://github.com/discovermyuni/discovermyuni.org"
    },
    {
      id: 3,
      title: "AI SaaS Chat Bot (MERN + OpenAI)",
      category: "Full-Stack",
      description: "A full-stack AI chatbot platform inspired by ChatGPT, built with the MERN stack and OpenAI’s GPT models. Secure auth, per-user chat history, and modern UI/UX.",
      image: chatbotImg,
      features: [
        "Secure authentication with JWTs stored in signed, HTTP-only cookies",
        "User registration, login/logout, and persistent sessions",
        "Personal chat history saved per user with view/delete functionality",
        "Integrated OpenAI chat completions for conversational AI",
        "Request validation and error handling with express-validator",
        "Modular backend with structured controllers and routes for scalability"
      ],
      technologies: [
        "React", "TypeScript", "Node.js", "Express", "MongoDB", "Material UI", "OpenAI"
      ],
      liveLink: "https://github.com/MohamedEBR/AI-SaaS-Chat-Bot",
      githubLink: "https://github.com/MohamedEBR/AI-SaaS-Chat-Bot"
    }
  ]

  const filters = ['All', 'Full-Stack', 'Backend', 'Frontend']

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' || project.category === activeFilter
  )

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-primary">
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
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Teamwork, data pipelines, and student impact
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-white dark:bg-dark-secondary text-gray-700 dark:text-gray-300 hover:bg-accent/10 dark:hover:bg-accent/10 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent/5 to-accent-light/5 dark:from-accent/10 dark:to-accent-light/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to See More?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              These are just a few examples of my work. I'm constantly building new projects 
              and exploring emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                href="https://github.com/MohamedEBR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <BsGithub className="w-5 h-5 mr-2" />
                View All Projects
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-3 bg-white dark:bg-dark-secondary text-accent border-2 border-accent hover:bg-accent hover:text-white font-semibold rounded-full transition-colors duration-300"
              >
                Collaborate With Me
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects