'use client'

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsArrowDownRightCircle } from "react-icons/bs";
import { motion } from 'framer-motion';

export default function Teams() {
    const team = [
        {
            image: '/Shoaib.png',
            name: 'Mohd Shoaib',
            position: 'Co Founder & CEO',
            linkedin: 'https://www.linkedin.com/in/msloveskills/',
        },
        {
            image: '/Sheikh.png',
            name: 'Shekh Razaul Islam',
            position: 'Lead, Finance & Operations',
            linkedin: 'https://www.linkedin.com/in/sheikhrazaulislam/',
        },
        {
            image: '/Jesu.png',
            name: 'Jesu Neelkamal Borah',
            position: 'Lead, Communications',
            linkedin: 'https://www.linkedin.com/in/thesmartobject/',
        },
        {
            image: '/Rahul.png',
            name: 'Rahul Barman',
            position: 'Lead, Tech',
            linkedin: 'https://www.linkedin.com/in/rahulbarmann/',
            github: 'https://github.com/rahulbarmann'
        },
        {
            image: '/Dhrupad.png',
            name: 'Dhrupad Das',
            position: 'Advisor, Product & Legal',
            linkedin: 'https://www.linkedin.com/in/dhrupad-das1905/',
        },
        {
            image: '/Sumit.png',
            name: 'Sumit Mazumdar',
            position: 'Developer, Full Stack',
            linkedin: 'https://www.linkedin.com/in/sum1t-here/',
            github: 'https://github.com/sum1t-here'
        },
        {
            image: '/Vansh.png',
            name: 'Vansh Sahay',
            position: 'Developer, Blockchain',
            linkedin: 'https://www.linkedin.com/in/vanshsahay/',
            github: 'https://github.com/VanshSahay'
        },
        {
            image: '/Nipu.png', 
            name: 'Nipu Das', 
            position: 'Developer, UI/UX',
            linkedin: 'https://www.linkedin.com/in/nipu-das-99a365279/',
            github: 'https://github.com/manchain'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

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
    };
  
    const lineVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <div className="min-h-screen relative flex flex-col justify-center items-center py-16">
            <motion.div 
                className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center"
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className="text-center mb-16 md:mb-24 relative"
                    variants={titleVariants}
                >
                    <motion.div 
                        className="flex flex-col items-center justify-center"
                        variants={lineVariants}
                    >
                        <motion.span 
                            className="text-[#00ab4f] text-6xl md:text-8xl font-bold relative"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            MEET OUR
                        </motion.span>
                        
                        <motion.div 
                            className="flex flex-row items-center justify-center gap-3 text-2xl md:text-5xl mt-4"
                            variants={lineVariants}
                        >
                            <BsArrowDownRightCircle /> CREATIVE TEAM
                        </motion.div>
                    </motion.div>
                </motion.div>
                
                <motion.div 
                    className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
                    variants={containerVariants}
                >
                    {team.map((member, index) => (
                        <div 
                            key={index} 
                            className="rounded-lg p-4 flex flex-col items-center space-y-3 cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-opacity-80"
                        >
                            <div className="w-60 h-56 overflow-hidden relative rounded-lg">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-[120%] h-[120%] object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <h4 className="text-white text-lg font-semibold text-center group-hover:text-[#4ade80] transition-colors">
                                {member.name}
                            </h4>
                            <h3 className="text-gray-400 text-sm text-center">
                                {member.position}
                            </h3>
                            <div className="flex space-x-3">
                                {member.linkedin && (
                                    <a 
                                        href={member.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-[#0077b5] transition-colors"
                                        aria-label={`LinkedIn profile of ${member.name}`}
                                    >
                                        <FaLinkedin size={20} />
                                    </a>
                                )}
                                {member.github && (
                                    <a 
                                        href={member.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-[#4ade80] transition-colors"
                                        aria-label={`GitHub profile of ${member.name}`}
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}