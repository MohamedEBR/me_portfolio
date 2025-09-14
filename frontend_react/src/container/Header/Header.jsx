import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiDownload, HiMail, HiPhone } from 'react-icons/hi'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import OptimizedImage from '../../components/OptimizedImage'
import ParticleBackground from '../../components/ParticleBackground'
import { useDarkMode } from '../../hooks'
import { images } from '../../constants'
import resumePdf from '../../assets/ME_Resume.pdf'

const SocialLink = ({ href, icon: Icon, label, delay = 0 }) => (
  <motion.a
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all duration-300 ease-out group hover:shadow-lg hover:shadow-accent/25"
    aria-label={label}
  >
    <Icon className="w-5 h-5 group-hover:scale-105 transition-transform duration-300 ease-out" />
  </motion.a>
)

const Header = () => {
  const [isDarkMode] = useDarkMode()

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
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-accent to-gray-800"
    >
      {/* Particle Background */}
      <ParticleBackground isDark={isDarkMode} />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20"
      >
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Available for opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white">
                Mohamed
              </span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium h-16 flex items-center justify-center lg:justify-start">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'Web Dev Lead @ UTASR',
                  2000,
                  'MCSS Tech Associate',
                  2000,
                  'Information Security Specialist',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
              />
            </div>
          </motion.div>

          <motion.p 
            variants={itemVariants} 
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            Second-year Computer Science student at the University of Toronto Mississauga (Information Security + Mathematics). I build secure, scalable web applications and lead teams to ship real, student-impacting products.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-full transition-all duration-300 ease-out shadow-lg hover:shadow-xl group"
            >
              <HiMail className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-105" />
              Get In Touch
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 hover:border-white/40 font-semibold rounded-full transition-all duration-300 ease-out group"
            >
              <HiDownload className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-105" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 justify-center lg:justify-start">
            <span className="text-white/60 text-sm font-medium mr-2">Follow me:</span>
            <SocialLink
              href="https://github.com/MohamedEBR"
              icon={BsGithub}
              label="GitHub"
              delay={0.1}
            />
            <SocialLink
              href="https://www.linkedin.com/in/mohamed-ebraheem-294541240/"
              icon={BsLinkedin}
              label="LinkedIn"
              delay={0.2}
            />
            <SocialLink
              href="mailto:ebraheemohamed26@gmail.com"
              icon={HiMail}
              label="Email"
              delay={0.3}
            />
            <SocialLink
              href="tel:+16477676066"
              icon={HiPhone}
              label="Phone"
              delay={0.4}
            />
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glowing background effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent via-accent-light to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
            
            {/* Profile image container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", damping: 20, stiffness: 100, duration: 0.3 }}
              className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-white/20 shadow-2xl hover:shadow-3xl hover:border-white/30 transition-all duration-300 ease-out"
            >
              <OptimizedImage
                src={images.profile}
                alt="Mohamed Ebraheem"
                className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-102"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent transition-opacity duration-300"></div>
            </motion.div>

            {/* Floating tech icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
            >
              <OptimizedImage 
                src={images.react} 
                alt="React" 
                className="w-8 h-8"
              />
            </motion.div>

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
            >
              <OptimizedImage 
                src={images.node} 
                alt="Node.js" 
                className="w-8 h-8"
              />
            </motion.div>

            <motion.div
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -left-8 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
            >
              <OptimizedImage 
                src={images.python} 
                alt="Python" 
                className="w-7 h-7"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/60 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Header