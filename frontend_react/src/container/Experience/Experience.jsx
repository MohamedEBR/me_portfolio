import React from 'react'
import { motion } from 'framer-motion'
import { HiBriefcase, HiCalendar, HiLocationMarker, HiExternalLink } from 'react-icons/hi'
import { BsGithub } from 'react-icons/bs'

const ExperienceCard = ({ experience, index, isLast }) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center mb-12 lg:mb-16 relative`}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-4 lg:left-1/2 top-16 w-0.5 h-32 bg-gradient-to-b from-accent to-accent/20 transform lg:-translate-x-0.5 z-0"></div>
      )}
      
      {/* Timeline dot */}
      <div className={`absolute ${isEven ? 'left-4 lg:left-1/2' : 'left-4 lg:left-1/2'} top-6 w-8 h-8 bg-accent rounded-full border-4 border-white dark:border-dark-primary shadow-lg flex items-center justify-center transform lg:-translate-x-1/2 z-10`}>
        <HiBriefcase className="w-4 h-4 text-white" />
      </div>

      {/* Content */}
      <div className={`flex-1 ${isEven ? 'lg:pr-12 ml-12 lg:ml-0' : 'lg:pl-12 ml-12 lg:ml-0'} lg:w-1/2`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3, ease: 'easeOut' } }}
          className="bg-white dark:bg-dark-secondary rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
          {/* Company and Role */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {experience.role}
              </h3>
              <div className="flex items-center text-accent font-semibold mb-2">
                <HiBriefcase className="w-4 h-4 mr-2" />
                {experience.company}
              </div>
            </div>
            {experience.logo && (
              <img 
                src={experience.logo} 
                alt={`${experience.company} logo`}
                className="w-12 h-12 rounded-lg object-cover shadow-sm"
              />
            )}
          </div>

          {/* Date and Location */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <HiCalendar className="w-4 h-4 mr-2" />
              {experience.period}
            </div>
            <div className="flex items-center">
              <HiLocationMarker className="w-4 h-4 mr-2" />
              {experience.location}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Key Achievements */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {(experience.projectLink || experience.githubLink) && (
            <div className="flex gap-3 pt-2">
              {experience.projectLink && (
                <a
                  href={experience.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-accent hover:text-accent-dark transition-colors duration-200"
                >
                  <HiExternalLink className="w-4 h-4 mr-1" />
                  View Project
                </a>
              )}
              {experience.githubLink && (
                <a
                  href={experience.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-accent transition-colors duration-200"
                >
                  <BsGithub className="w-4 h-4 mr-1" />
                  Source Code
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineering Associate",
      company: "Mathematics & Computational Sciences Society (MCSS)",
      period: "Sep 2025 - Present",
      location: "Mississauga, ON (Hybrid)",
      description: "Contributing to student-facing apps with a focus on LLM features, Discord integration, and secure workflows.",
      achievements: [
        "Designed and integrated an LLM assistant that communicates with a Discord bot to answer FAQs, streamline student registration, and coordinate mentor meetings.",
        "Implemented accessibility-oriented bot commands (DM flows, role-based responses, and message templates) to make services easier to use for all students.",
        "Built workflow automation for DeerHacks registration (participant onboarding, confirmations, and support escalation) with auditability and rate limiting.",
        "Applied secure development practices: strict input validation, parameterized requests, XSS/injection mitigation, and structured logs for incident review."
      ],
      technologies: ["React", "APIs", "Discord Bot Integration", "LLM/RAG Concepts", "Secure Dev Practices", "Agile/Scrum"],
  projectLink: "https://deerhacks.ca/"
    },
    {
      role: "Web Development Lead",
      company: "UTASR — University of Toronto Autonomous Scale Racing",
      period: "September 2025 - Present",
      location: "Toronto, ON",
      description: "Promoted to lead the web team; manage delivery, code quality, and coordination with ML/hardware subteams.",
      achievements: [
        "Managed a team of 5–6 developers; ran sprint planning, backlog grooming, and code reviews to ensure consistent delivery.",
        "Aligned web features with analytics/visualization requirements from ML and hardware teams; improved cross-team communication.",
        "Shipped responsive dashboards, media components, and performance views to elevate team visibility and outreach."
      ],
      technologies: ["React", "Tailwind CSS", "GitHub Flow", "Agile/Scrum", "TypeScript/JavaScript"],
  projectLink: "https://utasrteam.ca/"
    },
    {
      role: "Web Developer",
      company: "UTASR — University of Toronto Autonomous Scale Racing",
      period: "October 2024 - September 2025",
      location: "Toronto, ON",
      description: "Contributed responsive UI components and performance improvements across the site.",
      achievements: [
        "Built accessible, responsive React components with Tailwind; improved mobile interaction and consistency.",
        "Delivered a grid carousel and performance visualizations within a two-week sprint under evolving requirements.",
        "Used GitHub PRs and reviews to keep the codebase maintainable and consistent."
      ],
  technologies: ["React", "Tailwind CSS", "GitHub", "Figma"],
  projectLink: "https://utasrteam.ca/"
    },
    {
      role: "Web Developer",
      company: "Panacea Karate Academy",
      period: "Jun 2024 - Present",
      location: "Mississauga, ON",
      description: "Full-stack platform powering the academy’s backend workflows (auth, enrollments, billing, communications).",
      achievements: [
        "Built a React + Material UI frontend with a Spring Boot + PostgreSQL backend for member, student, and program management.",
        "Implemented JWT authentication, password policy, and RBAC aligned with OWASP recommendations; added audit logging for traceability.",
        "Integrated Stripe Checkout with webhooks to automate billing and enrollment activation; added SendGrid for receipts.",
        "Containerized services with Docker to standardize environments and streamline deployment."
      ],
      technologies: ["React", "Material UI", "Spring Boot", "PostgreSQL", "Stripe", "Docker", "SendGrid", "JWT", "RBAC"],
  projectLink: "https://panaceakarateacademy.ca/"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Professional Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
              Experience
            </span>
          </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Shipping real features with security, clarity, and teamwork
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

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
              Ready for New Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I’m seeking internships and co-ops where I can contribute immediately, learn quickly, and ship secure, maintainable software.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Let’s Work Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience