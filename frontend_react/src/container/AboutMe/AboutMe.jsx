import React from 'react'
import { motion } from 'framer-motion'
import { HiAcademicCap, HiCode, HiStar, HiLightBulb, HiShieldCheck } from 'react-icons/hi'
import OptimizedImage from '../../components/OptimizedImage'
import { images } from '../../constants'

const AboutCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay, ease: "easeOut" }}
    whileHover={{ y: -3, scale: 1.01, transition: { duration: 0.3, ease: 'easeOut' } }}
    className="bg-white dark:bg-dark-secondary rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ease-out border border-gray-100 dark:border-gray-700 hover:border-accent/20 group"
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors duration-300 ease-out">
        <Icon className="w-6 h-6 text-accent group-hover:scale-105 transition-transform duration-300 ease-out" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-accent transition-colors duration-300 ease-out">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
)

const StatCard = ({ number, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    className="text-center"
  >
    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{number}</div>
    <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">{label}</div>
  </motion.div>
)

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Who is{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
                Mohamed?
              </span>
            </h2>
          </motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Full-stack developer and CS student focused on secure engineering, clean UX, and shipping reliable software with teams.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Academic Focus & Roles
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I’m a second-year Computer Science student at the University of Toronto Mississauga, specializing in Information Security and pursuing a Mathematics major. I currently serve as a Web Development Lead with UTASR and a Software Engineering Associate with MCSS, where I collaborate on applications that support the UTM community.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I thrive in agile, collaborative environments and enjoy turning requirements into secure, maintainable systems. My work spans frontend (React, Tailwind, Material UI) and backend (Spring Boot, Django), with production experience integrating payments, auth, and CI/CD.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8 border-t border-b border-gray-200 dark:border-gray-700">
              <StatCard number="4+" label="Years Experience" delay={0.1} />
              <StatCard number="15+" label="Projects Built" delay={0.2} />
              <StatCard number="10+" label="Technologies" delay={0.3} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Athletic Discipline
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Outside of tech, I’m a professional karate athlete — two-time national champion (back home) and current provincial champion in Canada — training with the goal of representing Canada internationally. The discipline and focus carry directly into how I build software.
              </p>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main UofT image */}
              <div className="col-span-2 relative">
                <div className="rounded-2xl shadow-xl bg-white dark:bg-dark-secondary p-4 inline-block">
                  <OptimizedImage
                    src={images.uoftMain}
                    alt="University of Toronto"
                    className="max-w-full h-auto object-contain rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <HiAcademicCap className="w-12 h-12 text-white" />
                </div>
              </div>
              
              {/* UTASR Logo - Bottom Left */}
              <div className="flex justify-center">
                <div className="rounded-xl shadow-lg bg-white dark:bg-dark-secondary p-4 inline-block min-w-[200px] min-h-[150px] flex items-center justify-center">
                  <OptimizedImage
                    src={images.utasrLogo}
                    alt="UTASR Logo"
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              </div>
              
              {/* UTMMCSS Logo - Bottom Right */}
              <div className="flex justify-center">
                <div className="rounded-xl shadow-lg bg-white dark:bg-dark-secondary p-4 inline-block min-w-[200px] min-h-[150px] flex items-center justify-center">
                  <OptimizedImage
                    src={images.utmmcssLogo}
                    alt="UTMMCSS Logo"
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AboutCard
            icon={HiShieldCheck}
            title="Security-Minded"
            description="OWASP-aligned practices, JWT auth, RBAC, audit trails, and input validation."
            delay={0.1}
          />
          <AboutCard
            icon={HiStar}
            title="Team Leadership"
            description="Lead 5–6 developers at UTASR; sprint planning, code reviews, and delivery ownership."
            delay={0.2}
          />
          <AboutCard
            icon={HiLightBulb}
            title="Impact @ MCSS"
            description="Designing an LLM assistant that integrates with a Discord bot to power student registration, accessibility features, mentor-meeting scheduling, and event support (e.g., DeerHacks)."
            delay={0.3}
          />
          <AboutCard
            icon={HiCode}
            title="Full-Stack Delivery"
            description="React + Tailwind/MUI on the frontend; Spring Boot/Django on the backend."
            delay={0.4}
          />
        </div>

        {/* Personal Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mt-20 bg-gradient-to-r from-accent/5 to-accent-light/5 dark:from-accent/10 dark:to-accent-light/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            My Philosophy
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            "Great software blends discipline and empathy: disciplined engineering for reliability and security, empathetic design for users and teammates."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe
