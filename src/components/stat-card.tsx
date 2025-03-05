import { motion } from 'framer-motion'

interface StatCardProps {
  title: string
  value: string
  description: string
  index: number
  variant?: 'green'
}

export function StatCard({ title, value, description, index, variant }: StatCardProps) {
  return (
    <motion.div 
      className={`relative group overflow-hidden border h-[400px] ${variant === 'green' ? 'bg-green-500' : 'border-green-500/30 bg-black/50'}`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* This div acts as the sliding overlay */}
      <div 
        className="absolute inset-0 bg-green-500 transform -translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"
      />
      
      {/* Content wrapper */}
      <motion.div 
        className="relative z-10 p-8 h-full flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <div>
          <motion.h3 
            className={`text-[2rem] font-bold ${variant === 'green' ? 'text-black' : 'text-white group-hover:text-black'} transition-colors duration-300 mb-3`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className={`text-base ${variant === 'green' ? 'text-black/90' : 'text-gray-400 group-hover:text-black/90'} transition-colors duration-300 max-w-[90%]`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {description}
          </motion.p>
        </div>
        
        <motion.div 
          className="flex justify-between items-end mt-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <motion.p 
            className={`text-[5rem] leading-none font-bold ${variant === 'green' ? 'text-black' : 'text-white group-hover:text-black'} transition-colors duration-300`}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 200
            }}
          >
            {value}
          </motion.p>
          <motion.span 
            className={`text-sm ${variant === 'green' ? 'text-black/70' : 'text-green-500/50 group-hover:text-black/70'} transition-colors duration-300`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {index}]
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

