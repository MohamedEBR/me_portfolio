import React from 'react'
import { motion } from 'framer-motion'

const MotionWrap = (Component, classNames) => function HOC() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`${classNames} app__flex`}
    >
      <Component />
    </motion.div>
  )
}

export default MotionWrap