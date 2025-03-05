import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import { Stats } from './components/stats'
import { Services } from './components/services'
import { TeamCarousel } from './components/team'
import { Clients } from './components/clients'
import { ContactUs } from './components/contactus'
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <motion.section 
        id="home"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Hero />
      </motion.section>
      <motion.section 
        id="stats"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Stats />
      </motion.section>
      <motion.section 
        id="services"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Services />
      </motion.section>
      <motion.section 
        id="team"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <TeamCarousel />
      </motion.section>
      <motion.section 
        id="clients"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Clients />
      </motion.section>
      <motion.section 
        id="contact"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <ContactUs />
      </motion.section>
    </div>
  )
}

