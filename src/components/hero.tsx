import { motion } from 'framer-motion'

export function Hero() {
  
  const scrollToSection = (section: string) => {
    const sectionId = section.toLowerCase()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-16 md:pt-0">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        <div className="h-[70vh] md:h-[80vh] w-full px-4 md:px-12 lg:px-24">
          <div className="h-full w-full scale-105 md:scale-100">
            <motion.img 
              src="/digital.png"
              alt="DIGITAL"
              className="w-full h-full object-contain opacity-75 md:opacity-100"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </motion.div>
      
      <div className="relative z-20 flex flex-col justify-between h-screen">
        {/* NOTICE text positioned absolutely for mobile - adjusted positioning */}
        <div className="lg:hidden absolute bottom-[50%] md:bottom-[30%] right-4">
          <motion.h2
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-[3.5rem] font-bold text-[#00AB4F] leading-none"
          >
            NOTICE
          </motion.h2>
        </div>


        <div className="container mx-auto px-4 md:px-6 mt-auto mb-0 md:mb-5">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8 md:space-y-0"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12 lg:gap-16 pb-6 md:pb-12">
              <motion.div 
                className="w-full md:flex-1 order-2 md:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <motion.div
                  className="group relative w-fit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-center gap-4 md:gap-8 py-3 md:py-4 px-2 cursor-pointer" onClick={() => scrollToSection('CONTACT')}>
                    <motion.span 
                      className="text-white font-bold text-base md:text-xl uppercase tracking-wider relative"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      Contact Us
                    </motion.span>
                    <motion.span 
                      className="inline-block"
                      whileHover={{ rotate: 45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-6 md:h-6">
                        <path 
                          d="M2 26L26 2M26 2H4.4M26 2V23.6" 
                          stroke="#00AB4F" 
                          className="group-hover:stroke-white transition-colors duration-300"
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500" />
                  <div className="absolute bottom-0 left-0 w-0 h-full bg-green-500 transition-all duration-200 ease-in-out group-hover:w-full -z-10" />
                </motion.div>
              </motion.div>

              <motion.div 
                className="w-full md:flex-1 order-1 md:order-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <p className="text-gray-200 text-sm md:text-base lg:text-lg text-left md:text-center max-w-md mx-auto border border-green-500 rounded-lg bg-black/50 p-4">
                  <span className='text-green-500'>Digital Notice Media Labs</span> is a media agency
                  specializing in web3 specific projects.
                </p>
              </motion.div>

              {/* NOTICE text for desktop only */}
              <div className="hidden lg:flex w-full md:flex-1 justify-end order-3">
                <motion.h2
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="text-[4vw] lg:text-[3.5vw] font-bold text-[#00AB4F] leading-none"
                >
                  NOTICE
                </motion.h2>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}