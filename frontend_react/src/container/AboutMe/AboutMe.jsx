import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiTerminal, HiChip, HiLightningBolt, HiShieldCheck, HiCode } from 'react-icons/hi'
import { BsGithub } from 'react-icons/bs'
import { formatDistanceToNow } from 'date-fns'
import { GitHubCalendar } from 'react-github-calendar'
import { images } from '../../constants'

const AboutCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay, ease: "easeOut" }}
    whileHover={{ y: -3, scale: 1.01, transition: { duration: 0.3, ease: 'easeOut' } }}
    className="bg-black/80 rounded-sm p-6 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all duration-300 ease-out border border-secondary/20 hover:border-secondary group font-mono"
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-secondary/10 rounded-sm flex items-center justify-center mr-4 group-hover:bg-secondary/20 transition-colors duration-300 ease-out border border-secondary/20">
        <Icon className="w-6 h-6 text-secondary group-hover:scale-105 transition-transform duration-300 ease-out" />
      </div>
      <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors duration-300 ease-out">{title}</h3>
    </div>
    <p className="text-gray-400 group-hover:text-gray-300 leading-relaxed text-sm">{description}</p>
  </motion.div>
)

const StatCard = ({ number, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    className="text-center font-mono"
  >
    <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 text-glow">{number}</div>
    <div className="text-sm text-gray-500 uppercase tracking-widest">{label}</div>
  </motion.div>
)

const AboutMe = () => {
  const [text, setText] = useState('')
  const fullText = "> CS student focused on secure engineering, offensive security, and full-stack systems. (And yes, I use Arch btw)"
  const [gitData, setGitData] = useState({ events: [], loading: true })

  useEffect(() => {
    let index = 0
    setText('')
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 30)

    // Fetch GitHub Data
    fetch('https://api.github.com/users/MohamedEBR/events/public?per_page=15')
      .then(res => res.json())
      .then(async data => {
        const pushEvents = Array.isArray(data)
          ? data.filter(e => e.type === 'PushEvent').slice(0, 5)
          : []

        const enrichedEvents = await Promise.all(pushEvents.map(async (event) => {
          if (!event.payload?.commits || event.payload.commits.length === 0) {
            try {
              const res = await fetch(`https://api.github.com/repos/${event.repo.name}/commits/${event.payload.head}`)
              const commitData = await res.json()
              if (commitData.commit?.message) {
                return {
                  ...event,
                  payload: {
                    ...event.payload,
                    commits: [{ message: commitData.commit.message }]
                  }
                }
              }
            } catch (err) {
              console.error('Failed to fetch commit details:', err)
            }
          }
          return event
        }))

        setGitData({ events: enrichedEvents, loading: false })
      })
      .catch(err => {
        console.error(err)
        setGitData({ events: [], loading: false })
      })

    return () => clearInterval(timer)
  }, [])

  const stats = [
    { label: 'YRS_EXP', value: '4+', icon: HiLightningBolt },
    { label: 'PROJECTS', value: '15+', icon: HiChip },
    // { label: 'STACK', value: '10+', icon: HiTerminal },
  ]

  return (
    <section id="about" className="py-10 bg-primary relative overflow-hidden font-mono text-sm md:text-base">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="w-full px-[7%] relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-black/80 border border-secondary/30 px-6 py-2 rounded-sm backdrop-blur-sm flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary font-bold tracking-widest text-sm">./ABOUT_ME</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">

          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-4 space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-green-600">Mohamed?</span>
            </h2>

            <div className="bg-black/40 border-l-2 border-secondary p-5 rounded-r-sm backdrop-blur-sm min-h-[5em]">
              <p className="text-lg text-gray-300 italic">
                {text}<span className="animate-pulse text-secondary">_</span>
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-secondary text-black font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(0,255,65,0.4)] text-sm"
            >
              &gt; INITIATE_HANDSHAKE
            </motion.a>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <div>
                <h3 className="flex items-center text-white font-bold mb-2 uppercase tracking-wider text-xs">
                  <span className="text-secondary mr-2">&gt;</span> Background & Focus
                </h3>
                <p>
                  I’m a Computer Science student at the University of Toronto Mississauga with a strong foundation in software engineering and a growing focus on cybersecurity, CTFs, and offensive security. My background spans full-stack development, where I’ve built systems that combine solid backend engineering with intuitive, user-focused frontend design.
                </p>
              </div>

              <div>
                <h3 className="flex items-center text-white font-bold mb-2 uppercase tracking-wider text-xs">
                  <span className="text-secondary mr-2">&gt;</span> Engineering Philosophy
                </h3>
                <p>
                  I’m particularly interested in secure software engineering, systems-level thinking, and understanding how software breaks as much as how it’s built. I enjoy working in collaborative environments, learning from others, and continuously pushing my technical boundaries through projects.
                </p>
              </div>

              <div>
                <h3 className="flex items-center text-white font-bold mb-2 uppercase tracking-wider text-xs">
                  <span className="text-secondary mr-2">&gt;</span> Workflow
                </h3>
                <p>
                  Yes, I use Arch Linux and Neovim — btw. (Jokes aside, I care a lot about efficient workflows, low-level understanding, and knowing what’s actually happening under the hood.)
                </p>
              </div>
            </div>
          </motion.div>

          {/* MIDDLE: GitHub Activity & Commits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-5 w-full flex flex-col gap-6"
          >
            {/* GitHub Calendar Container */}
            <div className="bg-black/50 border border-gray-800 rounded-sm p-4 hover:border-secondary/30 transition-colors">
              <div className="flex items-center gap-2 mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <BsGithub className="text-lg text-white" />
                <span>Contribution_Map</span>
              </div>
              <div className="flex justify-center overflow-x-auto">
                <GitHubCalendar
                  username="MohamedEBR"
                  colorScheme="dark"
                  theme={{
                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                  }}
                  fontSize={11}
                  blockSize={10}
                  blockMargin={4}
                />
              </div>
            </div>

            {/* Recent Commits List */}
            <div className="flex flex-col gap-3">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                <HiTerminal className="text-secondary text-lg" />
                Recent_Commits (HEAD~5)
              </div>

              {gitData.loading ? (
                <div className="text-gray-500 text-xs animate-pulse">&gt; fetching_git_logs...</div>
              ) : (
                gitData.events.map((event, i) => (
                  <div key={event.id} className="bg-black/80 border border-gray-800 p-3 rounded-sm hover:border-secondary/50 transition-all group relative overflow-hidden">
                    {/* Decorative trace line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-800 group-hover:bg-secondary transition-colors" />

                    <div className="flex justify-between items-start mb-1 pl-3">
                      <span className="text-secondary font-bold text-sm truncate flex-1 min-w-0 pr-2">
                        {event.repo.name.replace('MohamedEBR/', '')}
                      </span>
                      <span className="text-gray-500 text-xs font-mono whitespace-nowrap">
                        {formatDistanceToNow(new Date(event.created_at), { addSuffix: true })}
                      </span>
                    </div>

                    <div className="pl-3">
                      <p className="text-gray-300 text-sm font-mono line-clamp-2 italic">
                        "{event.payload.commits?.[0]?.message || 'No commit message'}"
                      </p>
                      <div className="mt-2 flex items-center gap-2 text-xs text-gray-600 font-mono">
                        <span className="bg-gray-900 px-1 rounded text-secondary">SHA: {event.payload.head?.substring(0, 7) || 'unknown'}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>

          {/* RIGHT: Profile Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="xl:col-span-3 w-full flex flex-col gap-6"
          >
            {/* Profile Card */}
            <div className="bg-black/80 border border-gray-800 rounded-sm p-1 overflow-hidden shadow-2xl relative group">
              <div className="bg-[#1a1b26] px-4 py-2 flex items-center justify-between border-b border-gray-800">
                <div className="flex space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] text-gray-500 font-mono">user@profile: ~</div>
              </div>
              <div className="relative aspect-square overflow-hidden bg-white/5 transition-all duration-500">
                <img
                  src={images.uoftMain}
                  alt="University of Toronto"
                  className="w-full h-full object-cover transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none z-10" />

                {/* Floating Info Tag
                <div className="absolute bottom-4 left-4 bg-black/90 border border-secondary/50 px-3 py-1 backdrop-blur-md z-20">
                  <span className="text-secondary text-xs font-bold font-mono">STATUS: ONLINE</span>
                </div> */}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <div key={index} className="bg-black/50 border border-gray-800 p-3 flex flex-col items-center justify-center gap-1 hover:border-secondary/50 transition-colors group">
                  <stat.icon className="w-4 h-4 text-gray-500 group-hover:text-secondary transition-colors" />
                  <span className="text-xl font-bold text-white font-mono">{stat.value}</span>
                  <span className="text-[9px] text-gray-500 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Security Badge */}
            {/* <div className="bg-secondary/10 border border-secondary/20 p-4 flex items-center gap-4 rounded-sm">
              <div className="p-2 bg-secondary/20 rounded-full text-secondary">
                <HiShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-secondary font-bold uppercase tracking-wider mb-1">Security Clearance</div>
                <div className="text-white text-sm font-mono">Authorized Personnel Only</div>
              </div>
            </div> */}

            {/* Athletic Note */}
            <div className="bg-black/40 border border-gray-800 p-4 rounded-sm">
              <h3 className="flex items-center text-white font-bold mb-2 uppercase tracking-wider text-xs">
                <span className="text-secondary mr-2">&gt;</span> Athletic Discipline
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Competitive karate athlete, 2x national gold medalist. Competing at 2026 Nationals.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default AboutMe
