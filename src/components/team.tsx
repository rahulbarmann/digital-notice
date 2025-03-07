'use client'

import { Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Teams() {
    const team = [
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
            image: '/nipu.png', 
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
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
                className="w-full max-w-6xl mx-auto flex flex-col justify-center items-start"
                initial="hidden"
                animate="visible"
            >
                <motion.h1 
                    className="text-2xl md:text-5xl leading-tight md:leading-tight font-bold mb-12 md:mb-24 text-left"
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
                
                <motion.div 
                    className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
                    variants={containerVariants}
                >
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className="rounded-lg p-2 flex flex-col items-center space-y-3 cursor-pointer group"
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="w-44 h-48 overflow-hidden relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover mix-blend-screen group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-white text-lg font-semibold text-center">
                                {member.name}
                            </h3>
                            <h4 className="text-gray-400 text-sm text-center">
                                {member.position}
                            </h4>
                            <div className="flex space-x-3">
                                {member.linkedin && (
                                    <a 
                                        href={member.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-[#0077b5] transition-colors"
                                        aria-label={`LinkedIn profile of ${member.name}`}
                                    >
                                        <Linkedin size={20} />
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
                                        <Github size={20} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}