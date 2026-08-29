import React from 'react'
import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'

const TestimonialCard = ({ name, role, company, image, testimonial, rating, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    className="bg-black/80 rounded-sm p-8 border border-secondary/30 relative font-mono shadow-[0_0_10px_rgba(0,0,0,0.5)]"
  >
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-secondary" />
    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-secondary" />

    {/* Quote */}
    <div className="mb-6 relative z-10">
      <div className="text-secondary/20 mb-4 font-black text-6xl font-serif absolute -top-8 -left-4 select-none">"</div>
      <p className="text-gray-300 text-lg leading-relaxed relative z-10 italic">
        {testimonial}
      </p>
    </div>

    <div className="border-t border-secondary/20 pt-6 mt-6 flex justify-between items-end">
      {/* Author */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-sm bg-secondary/10 border border-secondary/50 flex items-center justify-center text-secondary font-bold mr-4">
          {image || name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-white uppercase tracking-wide">{name}</h4>
          <p className="text-sm text-secondary">
            {role} @ {company}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <HiStar
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-secondary' : 'text-gray-800'}`}
          />
        ))}
      </div>
    </div>
  </motion.div>
)

const Testimonials = () => {
  const testimonials = [
    {
      name: "Joseph Charbel",
      role: "Eng Leader",
      company: "Fortis Games",
      testimonial:
        "Mohamed has shown a strong commitment to his goals, balancing his school, job, Karate coaching, and continuous learning without missing a beat. Mohamed takes feedback very well and demonstrates a growth mindset that enabled him to excel in every project he tackled. He is a strong team player and his leadership makes a tangible difference.",
      rating: 5,
      delay: 0.1
    }
  ]

  return (
    <section id="testimonials" className="py-10 bg-primary relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 font-mono"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary text-secondary rounded-sm text-sm font-bold mb-4 tracking-wider">
            ./LOGS // FEEDBACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-600">Logs</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            &gt; Decrypted feedback from mentors and collaborators.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>


      </div>
    </section>
  )
}

export default Testimonials
