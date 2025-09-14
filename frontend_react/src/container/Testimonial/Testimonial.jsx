import React from 'react'
import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'

const TestimonialCard = ({ name, role, company, image, testimonial, rating, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    className="bg-white dark:bg-dark-secondary rounded-2xl p-8 shadow-card border border-gray-100 dark:border-gray-700 hover:shadow-card-hover transition-all duration-300"
  >
    {/* Quote */}
    <div className="mb-6">
      <svg 
        className="w-10 h-10 text-accent/20 mb-4" 
        fill="currentColor" 
        viewBox="0 0 32 32"
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed italic">
        "{testimonial}"
      </p>
    </div>

    {/* Rating */}
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => (
        <HiStar 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
        />
      ))}
    </div>

    {/* Author */}
    <div className="flex items-center">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-accent-dark flex items-center justify-center text-white font-bold mr-4">
        {image || name.charAt(0)}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {role} at {company}
        </p>
      </div>
    </div>
  </motion.div>
)

const Testimonials = () => {
  const testimonials = [
    {
      name: "Joseph Charbel",
      role: "Engineering Leader",
      company: "Fortis Games",
      testimonial:
        "Over the past two years, I've had the pleasure of mentoring Mohamed as he embarked on his journey in software development. Throughout this time, Mohamed has shown an strong commitment to his goals, balancing his school, job, Karate coaching, and continuous learning without missing a beat. Every week we discuss next steps and skills to learn and he would jump into it right away. Mohamed takes feedback very well and demonstrates a growth mindset that enabled him to excel in every project he tackled with constant iteration and improvements. On the personal side, Mohamed is caring and a strong team player, that manifests daily with his Karate coaching and his ability to push himself and others beyond their limits, Mohamed's leadership and support make a tangible difference. I have no doubt that Mohamed's combination of technical proficiency, dedication to continuous improvement, and exceptional interpersonal skills will make him a valuable asset wherever his career takes him. It's been a pleasure to witness his growth and development, and I wholeheartedly recommend him for any future endeavours.",
      rating: 5,
      delay: 0.1
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-dark-secondary">
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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What People{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
              Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Feedback from professors, teammates, and mentors I've had the pleasure to work with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 p-8 bg-accent/5 dark:bg-accent/10 rounded-2xl border border-accent/20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to Work Together?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and interesting projects. 
            Let's create something amazing together!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials