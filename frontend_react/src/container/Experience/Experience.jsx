import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCalendar, HiLocationMarker, HiExternalLink, HiAcademicCap, HiBriefcase } from 'react-icons/hi'
import { BsGithub } from 'react-icons/bs'
import { images } from '../../constants'

const TimelineCard = ({ data, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full md:w-[calc(50%-1.5rem)] flex flex-col font-mono"
    >
      <motion.div
        className="bg-black/80 rounded-sm p-6 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(166,227,161,0.2)] transition-all duration-300 border border-secondary/20 hover:border-secondary relative flex-1 flex flex-col h-full"
      >
        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-secondary/50"></div>

        {/* Role & Company */}
        <div className="flex items-start justify-between mb-4 flex-col sm:flex-row">
          <div>
            <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wider">
              {data.role}
            </h3>
            <div className="flex items-center text-secondary font-bold mb-2">
              <span className="mr-2">&gt;</span>
              {data.company}
            </div>
          </div>
          {data.logo && (
            <div className="mt-2 sm:mt-0 p-1 bg-white/10 rounded-sm">
              <img
                src={data.logo}
                alt={`${data.company} logo`}
                className="w-12 h-12 object-cover"
              />
            </div>
          )}
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 mb-4 text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-4">
          <div className="flex items-center">
            <HiCalendar className="w-4 h-4 mr-2" />
            {data.period}
          </div>
          <div className="flex items-center">
            <HiLocationMarker className="w-4 h-4 mr-2" />
            {data.location}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 mb-4 leading-relaxed text-sm">
          {data.description}
        </p>

        {/* Achievements/Contributions */}
        {data.achievements?.length > 0 && (
          <div className="mb-4 flex-grow">
            <h4 className="text-sm font-bold text-white mb-2 uppercase">Execution Logs:</h4>
            <ul className="space-y-1">
              {data.achievements.map((item, idx) => (
                <li key={idx} className="text-sm text-gray-400 flex items-start">
                  <span className="text-secondary mr-2 mt-0.5">$</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        {data.technologies?.length > 0 && (
          <div className="mb-4 pt-4 border-t border-gray-800">
            <h4 className="text-sm font-bold text-white mb-2 uppercase">Tech_Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {data.technologies.map((tech, idx) => (
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

        {/* Links */}
        {(data.projectLink || data.githubLink) && (
          <div className="flex gap-3 pt-2 mt-auto border-t border-gray-800">
            {data.projectLink && (
              <a
                href={data.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-secondary hover:text-white transition-colors duration-200 font-bold"
              >
                <HiExternalLink className="w-4 h-4 mr-1" />
                LIVE_TARGET
              </a>
            )}
            {data.githubLink && (
              <a
                href={data.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-gray-500 hover:text-secondary transition-colors duration-200 font-bold"
              >
                <BsGithub className="w-4 h-4 mr-1" />
                ACCESS_SOURCE
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work') // 'work' | 'clubs'

  const workExperience = [
    {
      role: "Software Engineering Intern — Identity & Access Management",
      company: "Shopify",
      period: "May 2026 - Present",
      location: "Remote, Canada",
      description: "Working within Shopify's Trust (Security) organization to ship production identity and access-management systems for credential lifecycle, device trust, PKI, workload identity, and authorization.",
      achievements: [
        "Helped deliver TPM-backed Linux authentication across 7 distributions, supporting 500+ verified mTLS requests at over 99% success.",
        "Built audit infrastructure for hundreds of short-lived credential operations, reaching 100% request, device-binding, and expiration metadata coverage with atomic audit recording.",
        "Consolidated two access-management services into one, validated critical workflows end to end, and removed the dominant source of noisy server-error signals.",
        "Found and fixed two authorization vulnerabilities in the first week and authored a workload-identity design using mTLS and audience-bound short-lived tokens."
      ],
      technologies: ["Ruby on Rails", "Go", "Terraform", "PKI / X.509", "TPM", "mTLS", "OAuth", "GCP"]
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

  const clubExperience = [
    {
      role: "Software Engineering Associate",
      company: "Math & CS Society (MCSS)",
      period: "Aug 2025 - Present",
      location: "Mississauga, ON",
      description: "Building developer-facing platforms for 500+ students and designing secure backend architectures.",
      achievements: [
        "Designed a secure backend intent/action architecture that eliminated direct LLM-to-SQL execution.",
        "Implemented rate limiting and abuse protection for event subscription APIs, preventing circumvention.",
        "Built a shared session system using Redis and JWT authentication for scalable conversational context.",
        "Deployed production platform improving reliability through iterative monitoring and user feedback."
      ],
      technologies: ["React", "Redis", "JWT", "LLM Integration", "Secure Architecture"],
      projectLink: "https://deerhacks.ca/",
      logo: images.utmmcssLogo
    },
    {
      role: "Web Development Lead",
      company: "UTASR Autonomous Racing",
      period: "Oct 2024 – Present",
      location: "Mississauga, ON",
      description: "Leading a 6-member engineering team to build real-time telemetry platforms and Node.js/TS backend services.",
      achievements: [
        "Designed and implemented backend services in Node.js and TypeScript, processing thousands of telemetry messages.",
        "Built optimized TCP and WebSocket pipelines, reducing end-to-end latency by 30% through edge-case hardening.",
        "Deployed services on AWS (EC2/NGINX) achieving 99% uptime with TLS/JWT auth.",
        "Authored internal technical documentation to support maintainability and rapid contributor onboarding."
      ],
      technologies: [
        "Node.js", "TypeScript", "WebSockets", "AWS (EC2/NGINX)", "TCP", "Telemetry", "React"
      ],
      projectLink: "https://utasrteam.ca/",
      logo: images.utasrLogo
    }
  ]

  const educationData = [
    {
      role: "Honours Bachelor of Science",
      company: "University of Toronto",
      period: "Expected 2028",
      location: "Toronto, ON",
      description: "Information Security Specialist and Mathematics Major.",
      achievements: [
        "GPA: 3.75 / 4.0",
        "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Software Design, Computer Organization",
        "Machine Learning, Probability I & II, Linear Regression Analysis, Linear Algebra II, Calculus III"
      ],
      technologies: ["Information Security", "Systems", "Algorithms", "Software Design", "Machine Learning", "Mathematics"],
      logo: images.uoftMain // Assuming this image exists from previous steps
    }
  ]

  let activeData = []
  if (activeTab === 'work') activeData = workExperience
  else if (activeTab === 'clubs') activeData = clubExperience
  else if (activeTab === 'education') activeData = educationData

  return (
    <section id="experience" className="py-10 bg-primary relative overflow-hidden">
      {/* Background vertical lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px)] bg-[size:4rem_100%] opacity-20 pointer-events-none" />

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
            ./CAREER_PATH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-600">&</span> Education
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto border-b border-gray-800 pb-4">
            &gt; Validated skills in production environments and academic excellence.
          </p>
        </motion.div>

        {/* Custom Toggle Switch */}
        <div className="flex justify-center mb-16 px-4">
          <div className="bg-black/50 border border-gray-800 p-1 rounded-full flex relative font-mono text-sm sm:text-base">
            {/* Sliding Background */}
            <motion.div
              layout
              animate={{
                x: activeTab === 'work' ? 0 : activeTab === 'clubs' ? '100%' : '200%',
                width: '33.33%'
              }}
              className="absolute top-1 bottom-1 left-1 bg-secondary rounded-full"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />

            <button
              onClick={() => setActiveTab('work')}
              className={`relative z-10 px-6 py-3 rounded-full transition-colors duration-300 flex items-center gap-2 w-40 justify-center ${activeTab === 'work' ? 'text-black font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              <HiBriefcase className="w-4 h-4" />
              <span>WORK</span>
            </button>
            <button
              onClick={() => setActiveTab('clubs')}
              className={`relative z-10 px-6 py-3 rounded-full transition-colors duration-300 flex items-center gap-2 w-40 justify-center ${activeTab === 'clubs' ? 'text-black font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              <HiAcademicCap className="w-4 h-4" />
              <span>CLUBS</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`relative z-10 px-6 py-3 rounded-full transition-colors duration-300 flex items-center gap-2 w-40 justify-center ${activeTab === 'education' ? 'text-black font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              <HiAcademicCap className="w-4 h-4" />
              <span>EDUCATION</span>
            </button>
          </div>
        </div>

        {/* Timeline/Grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {activeData.map((item, index) => (
                <TimelineCard
                  key={`${activeTab}-${index}`}
                  data={item}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
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
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-3 bg-secondary text-black font-bold hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(166,227,161,0.2)]"
          >
            &gt; HIRE_ME
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
