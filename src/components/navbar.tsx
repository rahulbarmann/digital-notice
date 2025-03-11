import { motion, AnimatePresence } from 'framer-motion'
import { NavItemProps } from '../types'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const NavItem = ({ label, isActive, onClick, isMobile = false }: NavItemProps & { onClick?: () => void, isMobile?: boolean }) => (
  <motion.button
    className={`${isMobile ? 'text-lg py-4 w-full text-center' : 'text-sm'} font-medium ${
      isActive ? 'text-green-500' : 'text-gray-300'
    } hover:text-green-500 transition-colors`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
)

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('HOME')

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = ['HOME', 'STATS', 'SERVICES', 'TEAM', 'CLIENTS', 'CONTACT']

  const scrollToSection = (section: string) => {
    const sectionId = section.toLowerCase()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(section)
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item,
        element: document.getElementById(item.toLowerCase())
      }))

      const currentSection = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <motion.nav 
        className="fixed w-full z-50 px-4 md:px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-xl md:text-2xl font-bold text-white flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('HOME')}
        >
          <span className="text-green-500">DIGITAL</span>
          NOTICE
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <NavItem 
              key={item} 
              label={item} 
              isActive={activeSection === item}
              onClick={() => scrollToSection(item)}
            />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-white p-2 mx-5 z-50 relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-0 bg-black/95 backdrop-blur-md z-40 md:hidden flex flex-col pt-20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <div className="flex flex-col items-center justify-start h-full gap-2 px-6 overflow-y-auto py-4">
              {navItems.map((item) => (
                <div key={item} className="w-full border-b border-gray-800/50 last:border-none">
                  <NavItem 
                    label={item} 
                    isActive={activeSection === item}
                    onClick={() => scrollToSection(item)}
                    isMobile={true}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

