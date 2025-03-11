import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { name: "INSTAGRAM", url: "http://instagram.com/digitalnotice", icon: <FaInstagram /> },
  { name: "LINKEDIN", url: "http://linkedin.com/company/digitalnotice", icon: <FaLinkedin /> },
  { name: "FACEBOOK", url: "https://facebook.com/digitalnoticemedia", icon: <FaFacebook /> },
  { name: "TWITTER", url: "http://twitter.com/digital_notice", icon: <FaTwitter /> },
];

export function ContactUs() {
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
      className="min-h-screen bg-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Background Avatar */}
      <motion.div 
        className="absolute right-0 top-0 h-full w-full md:w-1/2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-l from-blue-900/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-black/50 md:bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.img
          src="/avatar1.png"
          alt="Background Avatar"
          className="h-[113%] w-full object-cover object-left-top"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-24 h-full flex flex-col justify-between py-12 md:py-24 relative z-10">
        {/* Header Text */}
        <motion.div 
          className="flex flex-col items-start mb-8"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-2xl md:text-[4rem] font-bold leading-tight md:leading-none tracking-wide"
            variants={itemVariants}
          >
            <motion.div 
              className="text-[#00AB4F]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              START YOUR GROWTH
            </motion.div>
            <motion.div 
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              WITH US TODAY BY
            </motion.div>
            <motion.div 
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              COMPLETING THIS FORM
            </motion.div>
          </motion.h1>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          className="max-w-2xl space-y-8 md:space-y-12 mt-auto"
          variants={itemVariants}
        >
          <motion.div 
            className="space-y-6 md:space-y-8"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.input
                type="text"
                placeholder="NAME"
                className="w-full bg-transparent border-b border-gray-600/50 py-2 text-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors text-base md:text-lg"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.input
                type="tel"
                placeholder="PHONE"
                className="w-full bg-transparent border-b border-gray-600/50 py-2 text-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors text-base md:text-lg"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.input
                type="text"
                placeholder="TYPE OF SERVICE"
                className="w-full bg-transparent border-b border-gray-600/50 py-2 text-gray-400 placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors text-base md:text-lg"
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </motion.div>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full md:w-auto bg-green-500 text-white font-medium py-3 md:py-4 px-6 md:px-8 text-base md:text-lg hover:bg-green-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            SUBMIT THIS FORM
          </motion.button>
        </motion.div>

        {/* Contact Info & Footer */}
        <motion.div 
          className="mt-8 md:mt-12"
          variants={containerVariants}
        >
          <motion.div 
            className="mb-4"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-white text-lg md:text-xl mb-1"
              variants={itemVariants}
            >
              CONTACT US:
            </motion.h3>
            <motion.a 
              href="mailto:media@digitalnotice.in" 
              className="text-green-500 text-base md:text-lg"
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}
            >
              media@digitalnotice.in
            </motion.a>
          </motion.div>
          <motion.div 
            className="mb-8 md:mb-12"
            variants={itemVariants}
          >
            <motion.a 
              href="tel:+917011527879" 
              className="text-green-500 text-2xl md:text-[3.5rem] font-bold tracking-wider"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              +91 70 115 27 879
            </motion.a>
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 text-xs md:text-sm text-gray-500"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              WEBSITE BY:
              <motion.span 
                className="text-green-500 ml-1"
                whileHover={{ color: "#ffffff" }}
              >
                TEAM DIGITAL NOTICE
              </motion.span>
            </motion.div>
            <motion.div 
              className="text-gray-500 flex flex-col md:flex-row items-center gap-2 md:gap-4"
              variants={itemVariants}
            >
              <span>© 2018-2025 Digital Notice Media Labs - All Rights Reserved</span>
              <div className="flex gap-3 md:gap-4">
                <motion.a 
                  href="/Disclaimer.pdf"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Disclaimer
                </motion.a>
                <span className="text-gray-500">|</span>
                <motion.a 
                  href="/PrivacyPolicy.pdf"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Privacy Policy
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              className="flex flex-wrap gap-4 md:gap-6"
              variants={containerVariants}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-white transition-colors text-2xl"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}