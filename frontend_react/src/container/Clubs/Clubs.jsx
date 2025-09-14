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
      {!isLast && (
        <div className="absolute left-4 lg:left-1/2 top-16 w-0.5 h-32 bg-gradient-to-b from-accent to-accent/20 transform lg:-translate-x-0.5 z-0"></div>
      )}
      <div className={`absolute ${isEven ? 'left-4 lg:left-1/2' : 'left-4 lg:left-1/2'} top-6 w-8 h-8 bg-accent rounded-full border-4 border-white dark:border-dark-primary shadow-lg flex items-center justify-center transform lg:-translate-x-1/2 z-10`}>
        <HiBriefcase className="w-4 h-4 text-white" />
      </div>

      <div className={`flex-1 ${isEven ? 'lg:pr-12 ml-12 lg:ml-0' : 'lg:pl-12 ml-12 lg:ml-0'} lg:w-1/2`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3, ease: 'easeOut' } }}
          className="bg-white dark:bg-dark-secondary rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
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

          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {experience.description}
          </p>

          {experience.achievements?.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Contributions:</h4>
              <ul className="space-y-1">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {experience.technologies?.length > 0 && (
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
          )}

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
                  Learn More
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

const Clubs = () => {
  const experiences = [
    {
      role: "Software Engineering Associate",
      company: "Mathematics & Computational Sciences Society (MCSS)",
      period: "Aug 2025 - Present",
      location: "Mississauga, ON (Hybrid)",
      description: "Contributing to student-facing apps with a focus on LLM features, Discord integration, and secure workflows.",
      achievements: [
        "Designed and integrated an LLM assistant that communicates with a Discord bot to answer FAQs and coordinate mentor meetings.",
        "Implemented accessibility-oriented bot commands and workflow automation for DeerHacks registration.",
      ],
      technologies: ["React", "APIs", "Discord Bot Integration", "LLM/RAG Concepts", "Secure Dev Practices", "Agile/Scrum"],
      projectLink: "https://deerhacks.ca/"
    },
    {
      role: "Web Development Lead",
      company: "University of Toronto Autonomous Scale Racing (UTASR)",
      period: "Aug 2025 – Present",
      location: "Toronto, ON",
      description: "Led the web team; organized sprints, assigned tasks, reviewed code, and coordinated cross-team dependencies.",
      achievements: [
        "Led a team of 5–6 developers; organized sprints, assigned tasks, reviewed code, and coordinated cross-team dependencies with ML and hardware divisions.",
        "Implemented cloud storage and schema management for lap recordings and telemetry data, ensuring accessibility for training and analysis.",
        "Built dashboards to display real-time streaming data (state vectors, throttle, steering, car positions) and historical playback of previous laps with camera feeds.",
        "Integrated role-based authentication and secure dataflows from edge devices (Jetson) to cloud storage and React dashboards.",
        "Maintained a responsive React/Tailwind frontend, improving accessibility and usability across devices by 25%.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Real-time Streaming",
        "Telemetry",
        "Cloud Storage",
        "RBAC",
        "Jetson",
        "Dashboards",
        "GitHub Flow",
        "Agile/Scrum"
      ],
      projectLink: "https://utasrteam.ca/"
    },
    {
      role: "Web Developer",
      company: "University of Toronto Autonomous Scale Racing (UTASR)",
      period: "Oct 2024 - Aug 2025",
      location: "Toronto, ON",
      description: "Implemented responsive React + Tailwind UI components and collaborated in agile sprints to ship features.",
      achievements: [
        "Implemented responsive React + Tailwind UI components, ensuring cross-device usability and consistent design.",
        "Collaborated with a 3 person dev team, working in agile sprints with GitHub pull requests, branching strategies, and code reviews.",
        "Delivered features such as a custom grid carousel and performance dashboards under tight two-week sprint deadlines, improving usability by 25%.",
        "Strengthened collaboration by documenting workflows, resolving merge conflicts, and mentoring peers on GitHub best practices.",
      ],
      technologies: ["React", "Tailwind CSS", "GitHub", "Figma", "Agile/Scrum"],
      projectLink: "https://utasrteam.ca/"
    }
  ]

  return (
    <section id="clubs" className="py-20 bg-white dark:bg-dark-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Clubs & Extracurriculars
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Campus {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
              Involvement
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leadership and contributions outside of formal work experience
          </p>
        </motion.div>

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
      </div>
    </section>
  )
}

export default Clubs
