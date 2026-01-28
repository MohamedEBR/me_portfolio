import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiDownload, HiMail, HiTerminal } from 'react-icons/hi'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { doc, getDoc, setDoc, updateDoc, increment, onSnapshot } from 'firebase/firestore'
import OptimizedImage from '../../components/OptimizedImage'
import MatrixRain from '../../components/MatrixRain'
import { useDarkMode } from '../../hooks'
import { images } from '../../constants'
import resumePdf from '../../assets/ME_Resume.pdf'
import { db } from '../../lib/firebase'

const TerminalLine = ({ text, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className={`font-mono ${className}`}
  >
    <span className="text-secondary mr-2">$</span>
    {text}
  </motion.div>
)

const SocialLink = ({ href, icon: Icon, label, delay = 0 }) => (
  <motion.a
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
    whileHover={{ scale: 1.1, textShadow: "0 0 8px #a6e3a1" }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-black/50 border border-secondary/50 rounded-sm flex items-center justify-center text-secondary hover:bg-secondary/20 hover:border-secondary transition-all duration-300 group"
    aria-label={label}
  >
    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
  </motion.a>
)

const Header = () => {
  const [isDarkMode] = useDarkMode()
  const [flagInput, setFlagInput] = useState('')
  const [score, setScore] = useState(0)
  const [showToast, setShowToast] = useState('')

  useEffect(() => {
    const docRef = doc(db, "game_stats", "ctf")
    const unsubscribe = onSnapshot(docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          setScore(docSnap.data().captures || 127)
        } else {
          setScore(127)
        }
      },
      (error) => {
        console.error("FIREBASE ERROR:", error.code, error.message)
        if (error.code === 'permission-denied') {
          console.warn("Check your Firestore Rules! They must be set to 'allow read, write: if true;' for this demo.")
        }
        console.warn("Real-time listener failed, using local fallback.", error)
        const saved = localStorage.getItem('ctf_score')
        setScore(saved ? parseInt(saved) : 127)
      }
    )

    return () => unsubscribe()
  }, [])

  const checkFlag = async () => {
    if (flagInput.trim() === 'EBR{yOu_FoUNd_mE!!}') {
      // Optimistic update
      const newScore = score + 1
      setScore(newScore)
      localStorage.setItem('ctf_score', newScore)
      setFlagInput('')
      setShowToast('SYSTEM BREACHED! Flag Captured. +1')
      setTimeout(() => setShowToast(''), 3000)

      try {
        const docRef = doc(db, "game_stats", "ctf")
        await updateDoc(docRef, {
          captures: increment(1)
        }).catch(async (err) => {
          if (err.code === 'not-found') {
            await setDoc(docRef, { captures: 128 })
          }
        })
      } catch (err) {
        // Silent fail on network
      }

    } else {
      setShowToast('ACCESS DENIED. Invalid Flag.')
      setTimeout(() => setShowToast(''), 2000)
    }
  }

  const handleCopyFlag = () => {
    navigator.clipboard.writeText('EBR{yOu_FoUNd_mE!!}')
    setShowToast('SECRET DATA COPIED TO CLIPBOARD...')
    setTimeout(() => setShowToast(''), 2000)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Particle Background - assuming it handles dark/light internal logic or CSS overrides it */}
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Scanline Overlay is global in CSS now, but we can add extra specific ones if needed */}

      <div className="relative z-20 w-full px-[7%] py-12 min-h-screen flex items-center justify-center flex-col font-mono">

        {/* Unified Terminal Window */}
        <div className="w-full bg-black/90 border border-secondary/30 rounded-lg shadow-[0_0_50px_rgba(166,227,161,0.15)] backdrop-blur-md overflow-hidden relative">

          {/* Terminal Title Bar */}
          <div className="bg-[#181825] border-b border-[#313244] p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#f38ba8]" />
              <div className="w-3 h-3 rounded-full bg-[#f9e2af]" />
              <div className="w-3 h-3 rounded-full bg-[#a6e3a1]" />
              <span className="ml-4 text-[#a6adc8] text-sm">root@archlinux:~</span>
            </div>
            <div
              onClick={handleCopyFlag}
              className="text-[#a6adc8] text-xs cursor-pointer hover:text-white hover:scale-105 transition-all active:text-secondary select-none"
              title="zsh process - PID: ???"
            >
              zsh
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 sm:p-14 grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px] gap-16 items-center">

            {/* Left Column: Command Line Interface */}
            <div className="space-y-6">
              <div className="space-y-2 text-gray-300 font-mono text-sm sm:text-base">
                <TerminalLine text="initializing secure session..." delay={0.2} />
                <TerminalLine text="loading modules: [react, node, security]..." delay={0.4} />
                <TerminalLine text="connected to portfolio_v2.0" delay={0.6} className="text-secondary" />
              </div>

              {/* Neofetch Block */}
              <div className="flex flex-col xl:flex-row gap-8 py-6 border-y border-gray-800/50">
                {/* ASCII Art - Arch Linux Logo */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-secondary font-bold whitespace-pre hidden xl:block leading-[6px] text-[6px] tracking-tighter select-none"
                >
                  {`
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠉⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃ ⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣹⣿⣿⣿⣿⣿⣿⠏   ⠘⣿⣿⣟⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣿⣿⣿⣿
⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣟⣿⣿⡿⣿⣞⣻⣿⢻⣿⣿⣛⣻⣿⡟     ⠹⣿⡟⣛⣾⣿⣟⣿⣟⣳⣿⣾⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⡟⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⡿       ⢹⣿⣿⣻⣿⣿⣿⣿⣟⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣷⣿⣿⣿⣿
⣿⣿⣿⣿⣸⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣿⣿⣯⣿⢿⡿⣿⣼⣿⡿⣿⡿⠁        ⢳⣿⢿⣿⣇⣿⣿⡿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣧⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⢻⣿⣿⡿⠃          ⢻⣾⣿⡿⣿⣿⣷⣿⣾⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿
⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣾⣿⣿⠃           ⠈⢿⢿⣿⢿⣿⣟⣿⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣼⣿⣿⣿⣿⣿⣿⣇⣿⣿⣿⣧⣿⣿⣟⣿⣿⣿⣿⣸⣿⡇             ⠘⣿⣇⣿⣿⣿⣿⣿⣿⣿⣼⣿⣿⣿⣼⣿⣿⣿⣿⣿⣿⣇⣿⣿⣿⣿
⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣾⣿⣿⢻⣏               ⠙⡟⣿⣿⣧⣿⣾⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⡟⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡌⢿⣷⣤              ⠸⣿⣿⣟⣿⢻⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣷⣿⣿⣿⣿
⣿⣿⣿⣿⣸⣿⣿⢿⣿⣿⣿⢯⣿⣿⢿⣿⢿⣿⣯⣿⢿⣿⡟  ⠈⠛⢿⣤⡀            ⠸⣿⡿⣿⢿⣿⡿⣹⣿⣿⣿⡿⣿⣿⣿⡿⣿⣿⣇⣿⣿⣿⣿
⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⡟⣿⣾⡟      ⠈⠙⠲⢄           ⠸⣷⣿⣾⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⡟⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟                       ⠸⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣷⣿⣿⣷⡟                         ⠹⣾⣿⣿⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣿⣿⣿⣿
⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟                           ⠘⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣿⣿⣿⣿
⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⡟                             ⠸⣿⢿⣿⣿⣿⣿⣿⣿⣿⣏⣿⣿⡿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⠏                               ⠘⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿
⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⠏                                 ⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿
⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⠏              ⢠⣴⣶⣶⣶⣦⣄              ⠘⣟⣿⢿⣿⣿⣿⣧⣿⣿⡿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⠋             ⢠⣾⣿⣼⣿⣿⣻⣿⣿⣷⡀             ⠈⣿⣿⣿⣿⣿⡿⣿⣿⣷⣿⣿⣿⣿
⣿⣿⣿⣿⣹⣿⣿⣿⣿⣿⣿⣿⠋             ⢠⣿⣶⣿⣹⣿⣿⣿⣿⣿⣿⡿⡄             ⠈⢷⣾⣿⣿⣿⣿⣿⣏⣿⣿⣿⣿
⣿⣿⣿⣿⢻⣿⣿⣾⣷⣿⣿⠃             ⢀⣾⣻⣿⣿⢿⣿⣿⣾⣿⣿⣿⡟⣷⡀             ⠈⢿⣻⣿⣧⣿⣿⡟⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣽⡿⣿⠃              ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠅              ⠈⢿⣽⡟⣿⣿⣷⣿⣿⣿⣿
⣿⣿⣿⣿⢹⣿⣿⣿⣿⠁               ⢸⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⡟⣿⣿         ⠉⠙⣶⣤⣤ ⠈⢻⣿⣿⣿⣯⣿⣿⣿⣿
⣿⣿⣿⣿⢿⣿⢿⣿⠃                ⢰⠿⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣔            ⠉⠛⣷⣶⣌⣃⡿⣿⡿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠃                 ⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠻               ⠙⠻⣟⣿⣿⣷⣿⣿⣿⣿
⣿⣿⣿⣿⣹⡾⠁              ⢀⢀⣀⣤⣴⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣯⣿⣧⣤⣀⡀              ⠈⠙⢷⣎⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠁          ⢀⣠⣤⣶⣾⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣼⣿⡿⣿⣿⣷⣶⣤⣄⡀           ⢿⣻⣿⣿⣿
⣿⣿⣿⡟        ⣠⣤⢶⣿⣿⣿⣯⣿⣻⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣷⣿⣿⣏⣿⢻⣿⣿⣿⣶⣤⣄        ⢻⣽⣿⣿
⣿⣿⡟     ⣠⣤⡾⢟⣿⣿⢿⣿⢿⣿⣯⣿⢿⡿⣿⣹⣿⡿⣿⡿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣟⣿⢿⣿⣏⢿⣿⡿⣿⢿⣿⣿⣹⡿⣿⣿⡿⢷⣦⣄⡀    ⢹⣿⣿
⣿⠏  ⣠⣴⣾⣿⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⡿⣿⣿⣷⣿⣾⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣯⣷⣤⣄  ⠹⣿
⢏⣠⣶⣾⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣿⣿⣿⣿⣶⣄⡹
                  `}
                </motion.div>

                {/* System Stats */}
                <div className="flex flex-col space-y-1 text-gray-400 font-mono text-sm">
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0 }} className="flex gap-4">
                    <span className="text-secondary font-bold w-16">OS</span> Arch Linux x86_64
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }} className="flex gap-4">
                    <span className="text-secondary font-bold w-16">Kernel</span> 6.8.9-arch
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className="flex gap-4">
                    <span className="text-secondary font-bold w-16">Uptime</span> 24h 13m
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 }} className="flex gap-4">
                    <span className="text-secondary font-bold w-16">Shell</span> zsh 5.9
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }} className="flex gap-4">
                    <span className="text-secondary font-bold w-16">Editor</span> Neovim
                  </motion.div>
                </div>

                {/* NVIM Logo */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-secondary/80 font-bold whitespace-pre hidden sm:block leading-[15px] text-[12px] tracking-normal select-none self-center"
                >
                  {`
          .          .
        ';;,.        ::'
      ,:::;,,        :ccc,
     ,::c::,,,,.     :cccc,
     ,cccc:;;;;;.    cllll,
     ,cccc;.;;;;;,   cllll;
     :cccc; .;;;;;;. coooo;
     ;llll;   ,:::::'loooo;
     ;llll:    ':::::loooo:
     :oooo:     .::::llodd:
     .;ooo:       ;cclooo:.
       .;oc        'coo;.
         .'         .,.

                  `}
                </motion.div>
              </div>

              {/* Main Intro */}
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="flex items-center gap-3 mb-2"
                >
                  <span className="text-secondary">➜</span>
                  <span className="text-secondary">~</span>
                  <span className="text-white">whoami</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                  className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight"
                >
                  Mohamed Ebraheem
                </motion.h1>

                <div className="text-xl sm:text-2xl text-secondary font-bold h-8 mb-6">
                  <TypeAnimation
                    sequence={[
                      'Full-Stack Developer', 2000,
                      'Offensive Security', 2000,
                      'Reverse Engineering', 2000,
                      'I use Arch and Nvim btw.', 2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                  className="text-gray-400 max-w-xl text-lg leading-relaxed"
                >
                  Specializing in offensive security, vulnerability research, and penetration testing.
                  Currently seeking opportunities to break, bypass, and eventually secure systems.
                </motion.p>
              </div>

              {/* Actions & Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="flex flex-wrap items-center gap-6 pt-4"
              >
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-secondary/10 border border-secondary text-secondary font-bold hover:bg-secondary hover:text-black transition-all"
                >
                  ./contact.sh
                </button>
                <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-600 text-gray-300 hover:border-white hover:text-white transition-all">
                  cat resume.pdf
                </a>

                <div className="flex items-center gap-4 ml-2">
                  <SocialLink href="https://github.com/MohamedEBR" icon={BsGithub} label="GitHub" />
                  <SocialLink href="https://www.linkedin.com/in/mohamed-ebraheem-294541240/" icon={BsLinkedin} label="LinkedIn" />
                </div>
              </motion.div>
            </div>

            {/* Right Column: Visuals (Profile) */}
            <div className="relative flex justify-center items-center h-full min-h-[500px]">
              {/* Tech Bracket Container */}
              <div className="relative w-full aspect-[4/5] max-w-[450px]">
                {/* Decorative Brackets */}
                <div className="absolute -top-4 -left-4 border-t-2 border-l-2 border-secondary/50 w-12 h-12" />
                <div className="absolute -top-4 -right-4 border-t-2 border-r-2 border-secondary/50 w-12 h-12" />
                <div className="absolute -bottom-4 -left-4 border-b-2 border-l-2 border-secondary/50 w-12 h-12" />
                <div className="absolute -bottom-4 -right-4 border-b-2 border-r-2 border-secondary/50 w-12 h-12" />

                <div className="w-full h-full overflow-hidden border border-secondary/30 shadow-[0_0_30px_rgba(166,227,161,0.1)] bg-black relative rounded-sm">
                  <OptimizedImage
                    src={images.profile}
                    alt="Profile"
                    className="w-full h-full opacity-90 transition-all hover:scale-105 hover:opacity-100"
                    style={{ objectPosition: 'center 15%' }}
                  />
                  {/* Digital overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

          </div>

          {/* Terminal Status Bar */}
          <div className="bg-[#181825] border-t border-[#313244] p-2 px-4 flex justify-between items-center text-xs text-[#a6adc8] font-mono">
            <div className="flex gap-4">
              <span className="text-secondary font-bold">NORMAL</span>
              <span>master*</span>
            </div>
            <div className="flex gap-4">
              <span>utf-8</span>
              <span>react</span>
              <span>100%</span>
              <span className="text-secondary">Ln 142, Col 1</span>
            </div>
          </div>
        </div>

        {/* CTF Game Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          className="mt-8 w-full max-w-lg mx-auto font-mono"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-black/80 border border-secondary/30 p-2 sm:p-4 rounded-sm backdrop-blur-md shadow-[0_0_20px_rgba(0,255,65,0.1)]">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xl">🚩</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest whitespace-nowrap">
                CTF_Module
              </span>
            </div>

            <div className="flex-1 w-full flex items-center gap-2 bg-black/50 border border-secondary/20 rounded px-3 py-2 focus-within:border-secondary transition-colors">
              <span className="text-secondary font-bold">&gt;</span>
              <input
                type="text"
                value={flagInput}
                onChange={(e) => setFlagInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && checkFlag()}
                placeholder="Enter valid flag string..."
                className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-gray-700 font-mono"
              />
            </div>

            <div className="flex items-center gap-2 px-2 border-l border-gray-800">
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-gray-500 uppercase">Captures</span>
                <span className="text-lg font-bold text-secondary leading-none">{score}</span>
              </div>
            </div>
          </div>
          {/* Success Message */}
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center mt-2 text-xs text-secondary font-bold"
            >
              {showToast}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 font-mono text-xs text-gray-500 animate-pulse"
      >
        -- SCROLL FOR MORE --
      </motion.div>
    </section>
  )
}

export default Header