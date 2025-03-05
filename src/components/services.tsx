import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Service {
  id: string
  number: string
  title: string
  description: string
}

const services: Service[] = [
  {
    id: '1',
    number: '01',
    title: 'DApp DEVELOPMENT',
    description: 'Design and develop decentralized applications (DApps) with cutting-edge blockchain technology. Our solutions include NFT marketplaces, DeFi platforms, and Web3 social networks, all built with scalability and user experience in mind.',
  },
  {
    id: '2',
    number: '02',
    title: 'SMART CONTRACT BUILDING',
    description: 'Develop secure and efficient smart contracts for various blockchain platforms. Our expertise covers ERC standards, DeFi protocols, and custom contract development with thorough testing and auditing processes.',
  },
  {
    id: '3',
    number: '03',
    title: 'Web3 STRATEGY CONSULTING',
    description: 'Conduct in-depth market research to identify opportunities and risks within the Web3 ecosystem. Advise on the most suitable blockchain platform for specific use cases, considering factors like scalability, security, and community support.',
  },
  {
    id: '4',
    number: '04',
    title: 'BRAND DEVELOPMENT',
    description: 'Create compelling Web3 brand identities that resonate with your target audience. Our comprehensive branding services include visual identity design, messaging strategy, and community-building frameworks.',
  },
  {
    id: '5',
    number: '05',
    title: 'Web3 MARKETING AND PR',
    description: 'Execute targeted marketing campaigns specifically designed for Web3 projects. Services include community management, social media strategy, content creation, influencer partnerships, and blockchain-specific PR initiatives.',
  },
]

export function Services() {
  const [activeService, setActiveService] = useState<string | null>(null)

  const toggleService = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 lg:p-16">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h1 
          className="text-3xl md:text-5xl lg:text-7xl font-bold mb-12 md:mb-20"
          variants={itemVariants}
        >
          <motion.div 
            className="text-[#00AB4F]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            SERVICES WE
          </motion.div>
          <motion.div 
            className="text-white mt-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            PROVIDE TO OUR CLIENTS
          </motion.div>
        </motion.h1>

        <motion.div 
          className="space-y-6 md:space-y-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              className="border-b border-gray-800"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <motion.div
                className="flex items-start md:items-center justify-between cursor-pointer group pb-6 md:pb-8"
                onClick={() => toggleService(service.id)}
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                  <motion.span
                    className={`text-2xl md:text-3xl lg:text-4xl font-bold ${
                      service.id === activeService ? 'text-[#00ab4f]' : 'text-white'
                    }`}
                    animate={{ 
                      scale: service.id === activeService ? 1.1 : 1,
                      color: service.id === activeService ? "#00ab4f" : "#ffffff"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.number}
                  </motion.span>
                  <motion.span
                    className={`text-xl md:text-2xl lg:text-4xl font-bold ${
                      service.id === activeService ? 'text-[#00ab4f]' : 'text-white'
                    }`}
                    animate={{ 
                      color: service.id === activeService ? "#00ab4f" : "#ffffff"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.title}
                  </motion.span>
                </div>
                <motion.div
                  animate={{ 
                    rotate: service.id === activeService ? 45 : 0,
                    x: service.id === activeService ? 0 : 10
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className={`w-5 h-5 md:w-6 md:h-6 ${service.id === activeService ? 'text-[#00ab4f]' : 'text-white'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </motion.div>
              <AnimatePresence>
                {service.id === activeService && (
                  <motion.div 
                    className="pb-6 md:pb-8 text-gray-400 max-w-2xl text-base md:text-lg"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    {service.description}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

