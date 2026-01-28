import React from 'react'
import { motion } from 'framer-motion'
import { HiCalendar, HiLocationMarker, HiExternalLink } from 'react-icons/hi'
import { BsGithub } from 'react-icons/bs'

const ExperienceCard = ({ experience, index, isLast }) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center mb-12 lg:mb-16 relative font-mono`}
    >
      {!isLast && (
        <div className="absolute left-4 lg:left-1/2 top-16 w-0.5 h-32 bg-secondary/30 transform lg:-translate-x-0.5 z-0"></div>
      )}

      <div className={`flex-1 ${isEven ? 'lg:pr-12 ml-12 lg:ml-0' : 'lg:pl-12 ml-12 lg:ml-0'} lg:w-1/2`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5, transition: { duration: 0.3, ease: 'easeOut' } }}
          className="bg-black/80 rounded-sm p-6 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all duration-300 border border-secondary/20 hover:border-secondary relative"
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-secondary/50"></div>

          <div className="flex items-start justify-between mb-4 flex-col sm:flex-row">
            <div>
              <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wider">
                {experience.role}
              </h3>
              <div className="flex items-center text-secondary font-bold mb-2">
                <span className="mr-2">&gt;</span>
                {experience.company}
              </div>
            </div>
            {experience.logo && (
              <div className="mt-2 sm:mt-0 p-1 bg-white/10 rounded-sm">
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-12 h-12 object-cover"
                />
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-4 mb-4 text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-4">
            <div className="flex items-center">
              <HiCalendar className="w-4 h-4 mr-2" />
              {experience.period}
            </div>
            <div className="flex items-center">
              <HiLocationMarker className="w-4 h-4 mr-2" />
              {experience.location}
            </div>
          </div>

          <p className="text-gray-400 mb-4 leading-relaxed text-sm">
            {experience.description}
          </p>

          {experience.achievements?.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-bold text-white mb-2 uppercase">Key Contributions:</h4>
              <ul className="space-y-1">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-start">
                    <span className="text-secondary mr-2 mt-0.5">$</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {experience.technologies?.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-bold text-white mb-2 uppercase">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-bold border border-secondary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(experience.projectLink || experience.githubLink) && (
            <div className="flex gap-3 pt-2 mt-4 border-t border-gray-800">
              {experience.projectLink && (
                <a
                  href={experience.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-secondary hover:text-white transition-colors duration-200 font-bold"
                >
                  <HiExternalLink className="w-4 h-4 mr-1" />
                  INIT_LINK
                </a>
              )}
              {experience.githubLink && (
                <a
                  href={experience.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gray-500 hover:text-secondary transition-colors duration-200 font-bold"
                >
                  <BsGithub className="w-4 h-4 mr-1" />
                  ACCESS_REPO
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
    }
  ]

  return (
    <section id="clubs" className="py-10 bg-primary relative overflow-hidden">
      {/* Background vertical lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px)] bg-[size:4rem_100%] opacity-20 pointer-events-none" />

      <div className="w-full px-[7%] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 font-mono"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary text-secondary rounded-sm text-sm font-bold mb-4 tracking-wider">
            ./EXTRACURRICULARS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
            Campus <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-600">Involvement</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto border-b border-gray-800 pb-4">
            &gt; Leadership and contributions outside of formal work experience
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
