import React, { Suspense, lazy } from 'react'
import { useDarkMode } from './hooks'
import Navbar from './components/Navbar/Navbar'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingSpinner from './components/LoadingSpinner'

// Lazy load components for better performance
const Header = lazy(() => import('./container/Header/Header'))
const AboutMe = lazy(() => import('./container/AboutMe/AboutMe'))
const Experience = lazy(() => import('./container/Experience/Experience'))
const Projects = lazy(() => import('./container/Projects/Projects'))
const Skills = lazy(() => import('./container/Skills/Skills'))
const Testimonials = lazy(() => import('./container/Testimonial/Testimonial'))
const Contact = lazy(() => import('./container/Contact/Contact'))

function App() {
  const [isDarkMode, toggleDarkMode] = useDarkMode()

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-primary transition-colors duration-300">
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        
        <main>
          <Suspense fallback={<LoadingSpinner />}>
            <Header />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <AboutMe />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <Experience />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <Projects />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <Skills />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <Testimonials />
          </Suspense>
          
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default App