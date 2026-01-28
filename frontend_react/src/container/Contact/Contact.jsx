import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiCheck, HiTerminal } from 'react-icons/hi'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import emailjs from '@emailjs/browser'

const ContactInfo = ({ icon: Icon, title, info, href, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    className="flex items-center space-x-4 p-6 bg-black/80 rounded-sm shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all duration-300 border border-secondary/20 hover:border-secondary group font-mono"
  >
    <div className="w-12 h-12 bg-secondary/10 rounded-sm flex items-center justify-center group-hover:bg-secondary group-hover:text-black transition-all duration-300 border border-secondary/20">
      <Icon className="w-6 h-6 text-secondary group-hover:text-black transition-colors" />
    </div>
    <div>
      <h4 className="font-bold text-white mb-1 uppercase tracking-wider">{title}</h4>
      {href ? (
        <a
          href={href}
          className="text-gray-400 hover:text-secondary transition-colors duration-200"
        >
          {info}
        </a>
      ) : (
        <p className="text-gray-400">{info}</p>
      )}
    </div>
  </motion.div>
)

const SocialLink = ({ href, icon: Icon, label, delay = 0 }) => (
  <motion.a
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.3, delay }}
    whileHover={{ scale: 1.1, y: -2, transition: { duration: 0.3, ease: 'easeOut' } }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-black rounded-sm flex items-center justify-center text-gray-400 hover:text-secondary hover:bg-secondary/10 transition-all duration-300 shadow-md border border-secondary/20 hover:border-secondary group"
    aria-label={label}
  >
    <Icon className="w-5 h-5 group-hover:glow-secondary" />
  </motion.a>
)

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      const serviceId = process.env.REACT_APP_SERVICE_ID || 'your_service_id'
      const templateId = process.env.REACT_APP_TEMPLATE_ID || 'your_template_id'
      const publicKey = process.env.REACT_APP_PUBLIC_KEY || 'your_public_key'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Mohamed Ebraheem'
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)

    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')

      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email',
      info: 'ebraheemohamed26@gmail.com',
      href: 'mailto:ebraheemohamed26@gmail.com',
      delay: 0.1
    },
    {
      icon: HiPhone,
      title: 'Phone',
      info: '+1 (647) 767-6066',
      href: 'tel:+16477676066',
      delay: 0.2
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      info: 'Toronto, Ontario, Canada',
      delay: 0.3
    }
  ]

  return (
    <section id="contact" className="py-10 bg-primary relative overflow-hidden">
      {/* Background scanline effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] pointer-events-none bg-[length:100%_2px,3px_100%] opacity-20" />

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
            ./COMMUNICATION
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
            Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-600">Uplink</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            &gt; Secure channels open for collaboration and opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 font-mono">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="text-secondary mr-2">&gt;</span> Channel Information
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <ContactInfo key={index} {...item} />
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">
                Find Me On The Network
              </h4>
              <div className="flex space-x-4">
                <SocialLink
                  href="https://www.linkedin.com/in/mohamed-ebraheem-294541240/"
                  icon={BsLinkedin}
                  label="LinkedIn"
                  delay={0.1}
                />
                <SocialLink
                  href="https://github.com/MohamedEBR"
                  icon={BsGithub}
                  label="GitHub"
                  delay={0.2}
                />
                <SocialLink
                  href="https://www.instagram.com/momo.k.champ/"
                  icon={BsInstagram}
                  label="Instagram"
                  delay={0.3}
                />
              </div>
            </div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 p-6 bg-black/50 rounded-sm border border-secondary/20 relative"
            >
              <div className="absolute top-0 right-0 p-2 opacity-50">
                <HiTerminal className="text-secondary w-6 h-6" />
              </div>
              <h4 className="font-bold text-secondary mb-2 uppercase tracking-wide">
                Target Objectives:
              </h4>
              <ul className="text-gray-400 space-y-1 text-sm">
                <li>&gt; Offensive Security Internships</li>
                <li>&gt; Penetration Testing Co-ops</li>
                <li>&gt; Red Teaming Roles</li>
                <li>&gt; Security Research Collaborations</li>
                <li>&gt; Open Source Collaborations</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="bg-black/80 rounded-sm p-8 shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-secondary/20 relative"
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary" />

            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-2 h-6 bg-secondary mr-3 animate-pulse"></span>
              Transmit Message
            </h3>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-900/20 border border-green-700 rounded-sm flex items-center"
              >
                <HiCheck className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-green-200">
                  Transmision successful. Awaiting acknowledgement.
                </span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-900/20 border border-red-700 rounded-sm"
              >
                <span className="text-red-200">
                  Transmission failed. Signal lost. Please retry or use direct link.
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">
                  Sender Identity *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border bg-black text-white focus:outline-none focus:border-secondary transition-colors duration-200 font-mono ${errors.name
                    ? 'border-red-600'
                    : 'border-gray-800'
                    }`}
                  placeholder="ENTER_NAME"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 font-mono"> // ERROR: {errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">
                  Return Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border bg-black text-white focus:outline-none focus:border-secondary transition-colors duration-200 font-mono ${errors.email
                    ? 'border-red-600'
                    : 'border-gray-800'
                    }`}
                  placeholder="ENTER_EMAIL"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 font-mono"> // ERROR: {errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">
                  Transmission Header *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border bg-black text-white focus:outline-none focus:border-secondary transition-colors duration-200 font-mono ${errors.subject
                    ? 'border-red-600'
                    : 'border-gray-800'
                    }`}
                  placeholder="ENTER_SUBJECT"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500 font-mono"> // ERROR: {errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">
                  Payload *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 border bg-black text-white resize-none focus:outline-none focus:border-secondary transition-colors duration-200 font-mono ${errors.message
                    ? 'border-red-600'
                    : 'border-gray-800'
                    }`}
                  placeholder="ENTER_MESSAGE_CONTENT..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 font-mono"> // ERROR: {errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' } }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 border ${isSubmitting
                  ? 'bg-gray-800 border-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-secondary/10 border-secondary text-secondary hover:bg-secondary hover:text-black shadow-[0_0_10px_rgba(0,255,65,0.2)]'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div>
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <HiPaperAirplane className="w-5 h-5 transform rotate-90" />
                    <span>SEND_TRANSMISSION</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact