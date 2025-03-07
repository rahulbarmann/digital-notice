import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ABCCExch from "../../public/Partners Logo/400x200/Clients/ABCC Exchange.png";
import Acorn from "../../public/Partners Logo/400x200/Clients/Acorn Collective.png";
import Adhive from "../../public/Partners Logo/400x200/Clients/adhive.png";
import AssetStream from "../../public/Partners Logo/400x200/Clients/assetstream.png";
import blocklancer from "../../public/Partners Logo/400x200/Clients/block-lancer.png";
import beat from "../../public/Partners Logo/400x200/Clients/Beat.png";
import birdchain from "../../public/Partners Logo/400x200/Clients/birdchain.png";
import bitmart from "../../public/Partners Logo/400x200/Clients/Bitmart Exchange.png";
import bitxoxo from "../../public/Partners Logo/400x200/Clients/Bitxoxo Exchange.png";
import blockium from "../../public/Partners Logo/400x200/Clients/blockium.png";
import cloud from "../../public/Partners Logo/400x200/Clients/cloud-moolah.png";
import coin from "../../public/Partners Logo/400x200/Clients/coingecko.png";
import concert from "../../public/Partners Logo/400x200/Clients/concert-vr.png";
import dad from "../../public/Partners Logo/400x200/Clients/dad.png";
import ftech from "../../public/Partners Logo/400x200/Clients/ftech.png";
import grape from "../../public/Partners Logo/400x200/Clients/grapevine.png";
import hypd from "../../public/Partners Logo/400x200/Clients/hypd.png";
import la from "../../public/Partners Logo/400x200/Clients/la-token.png";
import lgo from "../../public/Partners Logo/400x200/Clients/lgo.png";
import lympo from "../../public/Partners Logo/400x200/Clients/Lympo.png";
import medi from "../../public/Partners Logo/400x200/Clients/medichain.png";
import mobu from "../../public/Partners Logo/400x200/Clients/mobu.png";
import monarch from "../../public/Partners Logo/400x200/Clients/cloud-moolah.png";
import nauticus from "../../public/Partners Logo/400x200/Clients/nauticus.png";
import neurograss from "../../public/Partners Logo/400x200/Clients/neurogress.png";
import okex from "../../public/Partners Logo/400x200/Clients/OKEx-logo_RGB-01.png";
import organic from "../../public/Partners Logo/400x200/Clients/Organic Token.png";
import ponder from "../../public/Partners Logo/400x200/Clients/ponder.png";
import q1 from "../../public/Partners Logo/400x200/Clients/q1net.png";
import robbotina from "../../public/Partners Logo/400x200/Clients/robbotina.png";
import somnium from "../../public/Partners Logo/400x200/Clients/somnium-space.png";
import sunmoney from "../../public/Partners Logo/400x200/Clients/sunmoney.png";
import tvtwo from "../../public/Partners Logo/400x200/Clients/TV TWO.png";
import velix from "../../public/Partners Logo/400x200/Clients/Velix.ID.png";


const companies = [
  {
    id: 1,
    name: "ABCC Exchange",
    logo: ABCCExch,
    width: 200,
  },
  {
    id: 2,
    name: "Acorn Collective",
    logo: Acorn,
    width: 200,
  },
  {
    id: 3,
    name: "Adhive",
    logo: Adhive,
    width: 200,
  },
  {
    id: 4,
    name: "Asset Stream",
    logo: AssetStream,
    width: 200,
  },
  {
    id: 5,
    name: "Block lancer",
    logo: blocklancer,
    width: 200,
  },
  {
    id: 6,
    name: "Beat",
    logo: beat,
    width: 200,
  },
  {
    id: 7,
    name: "Birdchain",
    logo: birdchain,
    width: 200,
  },
  {
    id: 8,
    name: "BitMart Exchange",
    logo: bitmart,
    width: 200,
  },
  {
    id: 9,
    name: "Bitxoxo Exchange",
    logo: bitxoxo,
    width: 200,
  },
  {
    id: 10,
    name: "Blockium",
    logo: blockium,
    width: 200,
  },
  {
    id: 11,
    name: "Cloud Moolah",
    logo: cloud,
    width: 200,
  },
  {
    id: 12,
    name: "Coingecko",
    logo: coin,
    width: 200,
  },
  {
    id: 13,
    name: "Concert VR",
    logo: concert,
    width: 200,
  },
  {
    id: 14,
    name: "DAD",
    logo: dad,
    width: 200,
  },
  {
    id: 15,
    name: "Ftech",
    logo: ftech,
    width: 200,
  },
  {
    id: 16,
    name: "Grapevine",
    logo: grape,
    width: 200,
  },
  {
    id: 17,
    name: "Hypd",
    logo: hypd,
    width: 200,
  },
  {
    id: 18,
    name: "La Token",
    logo: la,
    width: 200,
  },
  {
    id: 19,
    name: "LGO",
    logo: lgo,
    width: 200,
  },
  {
    id: 20,
    name: "Lympo",
    logo: lympo,
    width: 200,
  },
  {
    id: 21,
    name: "Medichain",
    logo: medi,
    width: 200,
  },
  {
    id: 22,
    name: "Mobu",
    logo: mobu,
    width: 200,
  },
  {
    id: 23,
    name: "Monarch",
    logo: monarch,
    width: 200,
  },
  {
    id: 24,
    name: "Nauticus",
    logo: nauticus,
    width: 200,
  },
  {
    id: 25,
    name: "Neurogress",
    logo: neurograss,
    width: 200,
  },
  {
    id: 26,
    name: "OK Exchange",
    logo: okex,
    width: 200,
  },
  {
    id: 27,
    name: "Organic Token",
    logo: organic,
    width: 200,
  },
  {
    id: 28,
    name: "Ponder",
    logo: ponder,
    width: 200,
  },
  {
    id: 29,
    name: "Q1 Net",
    logo: q1,
    width: 200,
  },
  {
    id: 30,
    name: "Robotina",
    logo: robbotina,
    width: 200,
  },
  {
    id: 31,
    name: "Somnium Space",
    logo: somnium,
    width: 200,
  },
  {
    id: 32,
    name: "Sun Money",
    logo: sunmoney,
    width: 200,
  },
  {
    id: 33,
    name: "TV Two",
    logo: tvtwo,
    width: 200,
  },
  {
    id: 34,
    name: "Velix Id",
    logo: velix,
    width: 200,
  }
];

export function Clients() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [visibleCompanies, setVisibleCompanies] = useState<number[]>([0, 1, 2]); // Initially show first 3
  
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isAutoScrolling) {
      interval = setInterval(() => {
        setActiveIndex((prev) => {
          const newIndex = prev >= companies.length - 1 ? 0 : prev + 1;
          updateVisibleCompanies(newIndex);
          return newIndex;
        });
      }, 3000); // Scroll every 3 seconds
    }
    
    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const updateVisibleCompanies = (centerIndex: number) => {
    // Calculate which companies should be visible (center +/- 1, with wrap-around)
    const total = companies.length;
    const prev = (centerIndex - 1 + total) % total;
    const next = (centerIndex + 1) % total;
    setVisibleCompanies([prev, centerIndex, next]);
  };

  const handleClientClick = (index: number) => {
    setActiveIndex(index);
    updateVisibleCompanies(index);
    setIsAutoScrolling(false); // Pause auto-scrolling when user interacts
    
    // Resume auto-scrolling after 5 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000);
    
    return () => clearTimeout(timeout);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
        className="absolute right-0 top-0 w-1/3 h-screen blur-[150px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Main content */}
      <div className="max-w-6xl mx-auto mt-7">
        {/* Heading */}
        <motion.h2 
          className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl mb-12 md:mb-24"
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

        {/* Client logos carousel */}
        <motion.div 
          className="mb-16"
          variants={itemVariants}
        >
          {/* Logo carousel */}
          <div className="relative px-4 py-12 overflow-hidden">
            {/* Left arrow */}
            <button 
              onClick={() => handleClientClick((activeIndex - 1 + companies.length) % companies.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/70 hover:bg-gray-700/70 p-2 rounded-full text-white"
              aria-label="Previous company"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Carousel container */}
            <div className="flex justify-center items-center gap-4 md:gap-8 transition-all duration-500">
              {visibleCompanies.map((companyIndex, i) => (
                <motion.div 
                  key={companies[companyIndex].id}
                  className={`relative cursor-pointer transition-all duration-500 ease-out flex-shrink-0 
                    ${i === 1 ? 'w-64 md:w-96 mx-4 z-20' : 'w-32 md:w-64 opacity-50 z-10'}`}
                  onClick={() => handleClientClick(companyIndex)}
                  whileHover={{ scale: i === 1 ? 1.05 : 1.1 }}
                  layout
                >
                  <div className={`
                    flex items-center justify-center p-6 rounded-xl h-40 md:h-56
                    ${i === 1 ? 'bg-white/65' : 'bg-gray-800/60'}
                  `}>
                    <img 
                      src={companies[companyIndex].logo}
                      alt={companies[companyIndex].name} 
                      className={`
                        object-contain max-h-full max-w-full transition-all
                        ${i === 1 ? 'transform scale-110' : 'filter grayscale hover:filter-none'}
                      `}
                    />
                  </div>
                  {i === 1 && (
                    <motion.div 
                      className="absolute -bottom-2 left-0 right-0 text-center bg-[#00AB4F] text-white py-1 px-4 mx-auto w-3/4 rounded-full shadow-lg"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {companies[companyIndex].name}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Right arrow */}
            <button 
              onClick={() => handleClientClick((activeIndex + 1) % companies.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/70 hover:bg-gray-700/70 p-2 rounded-full text-white"
              aria-label="Next company"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {companies.map((_, index) => (
              <button
                key={index}
                onClick={() => handleClientClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-[#00AB4F] w-8' : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`View client ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}