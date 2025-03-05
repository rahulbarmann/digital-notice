import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const companies = [
  {
    id: 1,
    name: "BitMart",
    logo: "/bitmart.png",
    width: 200,
    description: "We executed an impactful marketing strategy for BitMart, which included the release of a well-crafted press release to highlight the platform's latest advancements and the production of promotional videos to engage the audience and amplify brand visibility"
  },
  {
    id: 2,
    name: "Wazirx",
    logo: "/wazirx.png",
    width: 300,
    description: "We implemented a comprehensive marketing strategy for Wazirx, which included the launch of targeted advertising campaigns in cryptocurrency media, creation of high-quality content, including analytical articles, blogs and videos"
  },
  {
    id: 3,
    name: "IoTeX",
    logo: "/iotex.png",
    width: 200,
    description: "We implemented a dynamic marketing strategy for IoTeX, which included the creation of an engaging promotional video highlighting the platform's cutting-edge features and the announcement of an upcoming hardware test initiative"
  }
]

export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayCompanies, setDisplayCompanies] = useState(companies)

  useEffect(() => {
    const prevIndex = (currentIndex - 1 + companies.length) % companies.length
    const nextIndex = (currentIndex + 1) % companies.length
    setDisplayCompanies([
      companies[prevIndex],
      companies[currentIndex],
      companies[nextIndex]
    ])
  }, [currentIndex])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % companies.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      className="min-h-screen bg-black text-white p-4 md:p-8 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Gradient overlay */}
      <motion.div 
        className="absolute right-0 top-0 w-1/3 h-screen bg-blue-900/20 blur-[150px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Main content */}
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2 
          className="text-3xl md:text-5xl lg:text-7xl font-bold max-w-4xl mb-12 md:mb-24"
          variants={itemVariants}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            COMPANIES AND ORGANIZATIONS WITH WHOM{' '}
          </motion.span>
          <motion.span 
            className="text-[#00AB4F]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            WE HAVE COOPERATED
          </motion.span>
        </motion.h2>

        {/* Company logos */}
        <motion.div 
          className="h-[300px] md:h-[400px] mb-12 md:mb-24 relative"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {displayCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={false}
                animate={{
                  y: (index - 1) * (window.innerWidth < 768 ? 100 : 150),
                  opacity: index === 1 ? 1 : 0.3,
                  filter: index === 1 ? 'blur(0px)' : 'blur(4px)',
                  scale: index === 1 ? 1 : 0.8,
                }}
                transition={{ 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 120,
                  damping: 20
                }}
                whileHover={{ scale: index === 1 ? 1.05 : 0.85 }}
                className="absolute cursor-pointer"
              >
                <motion.img 
                  src={company.logo}
                  alt={`${company.name} logo`}
                  style={{
                    width: window.innerWidth < 768 ? company.width * 0.7 : company.width,
                    height: 'auto'
                  }}
                  className="transition-opacity"
                  whileHover={{ 
                    filter: "brightness(1.2)",
                    rotate: [0, -2, 2, -2, 0],
                    transition: {
                      rotate: {
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }
                    }
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="text-gray-300 max-w-xl text-base md:text-lg"
            >
              {companies[currentIndex].description}
            </motion.p>
          </AnimatePresence>
          
          {/* Next button */}
          <motion.button 
            className="flex items-center gap-2 text-white hover:text-[#00AB4F] transition-colors group"
            onClick={handleNext}
            aria-label="Next company"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              NEXT
            </motion.span>
            <motion.div
              animate={{ 
                x: [0, 5, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ 
                x: [0, 10, 0],
                transition: {
                  duration: 0.8,
                  repeat: Infinity
                }
              }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}

