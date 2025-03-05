'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface TeamMember {
  id: number
  name: string
  role: string
  description: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Mohd Shoaib',
    role: 'Founder & CEO',
    description: 'Mohd Shoaib is an avid keynote speaker, blockchain architect, web3 developer, serial entrepreneur, seasoned industrialist and technology futurist. With over 14+ years of combined experience in the field of Blockchain Technology, Software Development, and Computer Architecture.',
    image: '/team1.jpg'
  },
  {
    id: 2,
    name: 'Sheikh Ruzual Islam',
    role: 'Founder & CMO',
    description: 'Sheikh comes with 14+ years of combined experience in the field of software development, social media marketing, ecommerce industry, and digital media strategy. He is an early mover in the web3 industry and actively contributes to the global media distribution of emerging Fintech, Blockchain, and De-Fi projects, positioning them for success on a worldwide scale.',
    image: '/team2.jpg'
  }
]

export function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const lineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <motion.div 
        className="max-w-[1400px] mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-12 md:pb-24 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={titleVariants}
      >
        <motion.h1 
          className="text-2xl md:text-[3.5rem] leading-tight md:leading-[1.2] font-bold mb-12 md:mb-24"
          variants={titleVariants}
        >
          <motion.div 
            className="flex flex-col md:flex-row md:items-baseline md:gap-4"
            variants={lineVariants}
          >
            <motion.span 
              className="text-[#00ab4f]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              OUR TEAM
            </motion.span>
            <span>CONSISTS OF HIGHLY</span>
          </motion.div>
          <motion.div variants={lineVariants}>QUALIFIED EXPERTS, EACH OF WHOM</motion.div>
          <motion.div 
            className="text-[#00ab4f]"
            variants={lineVariants}
          >
            HAS IN-DEPTH KNOWLEDGE AND MANY
          </motion.div>
          <motion.div 
            className="text-[#00ab4f]"
            variants={lineVariants}
          >
            YEARS OF EXPERIENCE IN THEIR FIELD.
          </motion.div>
        </motion.h1>

        <div className="flex overflow-hidden">
          <AnimatePresence mode="wait">
            {teamMembers.map((member, index) => (
              index === currentIndex && (
                <motion.div
                  key={member.id}
                  className="w-full flex-shrink-0 flex flex-col md:flex-row gap-6"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.div 
                    className="relative w-full md:w-[48%]"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.div 
                      className="absolute top-4 right-4 text-sm text-[#4ade80] bg-black/50 px-1"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      [{member.id}]
                    </motion.div>
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-[300px] md:h-[600px] object-cover"
                      style={{ filter: 'grayscale(100%) contrast(125%)' }}
                      whileHover={{ 
                        scale: 1.02,
                        filter: 'grayscale(0%) contrast(100%)'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                  <motion.div 
                    className="w-full md:w-[48%] pt-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <motion.h2 
                      className="text-3xl md:text-5xl font-bold mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {member.name}
                    </motion.h2>
                    <motion.p 
                      className="text-[#4ade80] text-lg md:text-xl mb-4 md:mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      {member.role}
                    </motion.p>
                    <motion.p 
                      className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      {member.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        <motion.button
          onClick={nextSlide}
          className="absolute bottom-4 md:bottom-12 right-4 md:right-8 flex items-center gap-2 text-white hover:text-[#4ade80] transition-colors group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className="text-base md:text-lg font-medium"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            NEXT
          </motion.span>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  )
}

