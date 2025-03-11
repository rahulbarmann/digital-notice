import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
// clients
import ABCCExch from "../../src/PartnersLogo/400x200/Clients/ABCC Exchange.png";
import Acorn from "../../src/PartnersLogo/400x200/Clients/Acorn Collective.png";
import Adhive from "../../src/PartnersLogo/400x200/Clients/adhive.png";
import AssetStream from "../../src/PartnersLogo/400x200/Clients/assetstream.png";
import blocklancer from "../../src/PartnersLogo/400x200/Clients/block-lancer.png";
import beat from "../../src/PartnersLogo/400x200/Clients/Beat.png";
import birdchain from "../../src/PartnersLogo/400x200/Clients/birdchain.png";
import bitmart from "../../src/PartnersLogo/400x200/Clients/Bitmart Exchange.png";
import bitxoxo from "../../src/PartnersLogo/400x200/Clients/Bitxoxo Exchange.png";
import blockium from "../../src/PartnersLogo/400x200/Clients/blockium.png";
import cloud from "../../src/PartnersLogo/400x200/Clients/cloud-moolah.png";
import coin from "../../src/PartnersLogo/400x200/Clients/coingecko.png";
import concert from "../../src/PartnersLogo/400x200/Clients/concert-vr.png";
import dad from "../../src/PartnersLogo/400x200/Clients/dad.png";
import ftech from "../../src/PartnersLogo/400x200/Clients/ftech.png";
import grape from "../../src/PartnersLogo/400x200/Clients/grapevine.png";
import hypd from "../../src/PartnersLogo/400x200/Clients/hypd.png";
import la from "../../src/PartnersLogo/400x200/Clients/la-token.png";
import lgo from "../../src/PartnersLogo/400x200/Clients/lgo.png";
import lympo from "../../src/PartnersLogo/400x200/Clients/Lympo.png";
import medi from "../../src/PartnersLogo/400x200/Clients/medichain.png";
import mobu from "../../src/PartnersLogo/400x200/Clients/mobu.png";
import monarch from "../../src/PartnersLogo/400x200/Clients/cloud-moolah.png";
import nauticus from "../../src/PartnersLogo/400x200/Clients/nauticus.png";
import neurograss from "../../src/PartnersLogo/400x200/Clients/neurogress.png";
import okex from "../../src/PartnersLogo/400x200/Clients/OKEx-logo_RGB-01.png";
import organic from "../../src/PartnersLogo/400x200/Clients/Organic Token.png";
import ponder from "../../src/PartnersLogo/400x200/Clients/ponder.png";
import q1 from "../../src/PartnersLogo/400x200/Clients/q1net.png";
import robbotina from "../../src/PartnersLogo/400x200/Clients/robbotina.png";
import somnium from "../../src/PartnersLogo/400x200/Clients/somnium-space.png";
import sunmoney from "../../src/PartnersLogo/400x200/Clients/sunmoney.png";
import tvtwo from "../../src/PartnersLogo/400x200/Clients/TV TWO.png";
import velix from "../../src/PartnersLogo/400x200/Clients/Velix.ID.png";

// partners
import aba from "../../src/PartnersLogo/400x200/Events/aba 1.png";
import ABA from "../../src/PartnersLogo/400x200/Events/ABA-summit.png";
import altcoin from "../../src/PartnersLogo/400x200/Events/altcoin-mag.png";
import ascential from "../../src/PartnersLogo/400x200/Events/ascential.png";
import b2e from "../../src/PartnersLogo/400x200/Events/b2e-asia.png";
import be2020 from "../../src/PartnersLogo/400x200/Events/be2020.png";
import bfc from "../../src/PartnersLogo/400x200/Events/bfc.png";
import blife from "../../src/PartnersLogo/400x200/Events/blife.png";
import blockbeats from "../../src/PartnersLogo/400x200/Events/blockbeats.png";
import blockchainevent from "../../src/PartnersLogo/400x200/Events/blockchain-eventon.png";
import blockckshow from "../../src/PartnersLogo/400x200/Events/blockshow.png";
import blockonomic from "../../src/PartnersLogo/400x200/Events/bloconomic.png";
import bs from "../../src/PartnersLogo/400x200/Events/bs.png";
import cgc from "../../src/PartnersLogo/400x200/Events/cgc-one.png";
import chainplus from "../../src/PartnersLogo/400x200/Events/chainplus-1.png";
import chainpoint from "../../src/PartnersLogo/400x200/Events/chainpoint.png";
import chainway from "../../src/PartnersLogo/400x200/Events/chainway.png";
import coinsbank from "../../src/PartnersLogo/400x200/Events/coinsbank.png";
import cointelegraph from "../../src/PartnersLogo/400x200/Events/Cointelegraph.png";
import cryptochicks from "../../src/PartnersLogo/400x200/Events/cryptochicks.png";
import deltasummit from "../../src/PartnersLogo/400x200/Events/delta-summit.png";
import descLogo from "../../src/PartnersLogo/400x200/Events/descLogo.png";
import dfine from "../../src/PartnersLogo/400x200/Events/dfine.png";
import dreamhatcher from "../../src/PartnersLogo/400x200/Events/dreamhatcher.png";
import dubaipolice from "../../src/PartnersLogo/400x200/Events/dubai-police-big.png";
import duxes from "../../src/PartnersLogo/400x200/Events/duxes.png";
import dwtc from "../../src/PartnersLogo/400x200/Events/DWTC.png";
import gba from "../../src/PartnersLogo/400x200/Events/GBA.png";
import gbf from "../../src/PartnersLogo/400x200/Events/GBF.png";
import kbw from "../../src/PartnersLogo/400x200/Events/kbw2019.png";
import labw from "../../src/PartnersLogo/400x200/Events/LABW-2018.png";
import llghy from "../../src/PartnersLogo/400x200/Events/LL-Ghy.png";
import manila from "../../src/PartnersLogo/400x200/Events/manila.png";
import mbw from "../../src/PartnersLogo/400x200/Events/mbw.png";
import satoshi from "../../src/PartnersLogo/400x200/Events/satoshi-united.png";
import startupassam from "../../src/PartnersLogo/400x200/Events/startup-assam.png";
import tokenfest from "../../src/PartnersLogo/400x200/Events/tokenfest.png";
import untraceable from "../../src/PartnersLogo/400x200/Events/untraceable.png";
import wbf from "../../src/PartnersLogo/400x200/Events/wbf-logo.png";


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

const eventPartners = [
  { id: 1, name: "ABA Summit", logo: ABA, width: 200 },
  { id: 2, name: "Altcoin Magazine", logo: altcoin, width: 200 },
  { id: 3, name: "Ascential", logo: ascential, width: 200 },
  { id: 4, name: "B2E Asia", logo: b2e, width: 200 },
  { id: 5, name: "BE2020", logo: be2020, width: 200 },
  { id: 6, name: "BFC", logo: bfc, width: 200 },
  { id: 7, name: "Blife", logo: blife, width: 200 },
  { id: 8, name: "BlockBeats", logo: blockbeats, width: 200 },
  { id: 9, name: "Blockchain Eventon", logo: blockchainevent, width: 200 },
  { id: 10, name: "BlockShow", logo: blockckshow, width: 200 },
  { id: 11, name: "Bloconomic", logo: blockonomic, width: 200 },
  { id: 12, name: "BS", logo: bs, width: 200 },
  { id: 13, name: "CGC One", logo: cgc, width: 200 },
  { id: 14, name: "ChainPlus", logo: chainplus, width: 200 },
  { id: 15, name: "ChainPoint", logo: chainpoint, width: 200 },
  { id: 16, name: "ChainWay", logo: chainway, width: 200 },
  { id: 17, name: "CoinsBank", logo: coinsbank, width: 200 },
  { id: 18, name: "CoinTelegraph", logo: cointelegraph, width: 200 },
  { id: 19, name: "Crypto Chicks", logo: cryptochicks, width: 200 },
  { id: 20, name: "Delta Summit", logo: deltasummit, width: 200 },
  { id: 21, name: "Desc", logo: descLogo, width: 200 },
  { id: 22, name: "Dfine", logo: dfine, width: 200 },
  { id: 23, name: "DreamHatcher", logo: dreamhatcher, width: 200 },
  { id: 24, name: "Dubai Police", logo: dubaipolice, width: 200 },
  { id: 25, name: "Duxes", logo: duxes, width: 200 },
  { id: 26, name: "DWTC", logo: dwtc, width: 200 },
  { id: 27, name: "GBA", logo: gba, width: 200 },
  { id: 28, name: "GBF", logo: gbf, width: 200 },
  { id: 29, name: "KBW 2019", logo: kbw, width: 200 },
  { id: 30, name: "LABW 2018", logo: labw, width: 200 },
  { id: 31, name: "LL Ghy", logo: llghy, width: 200 },
  { id: 32, name: "Manila", logo: manila, width: 200 },
  { id: 33, name: "MBW", logo: mbw, width: 200 },
  { id: 34, name: "Satoshi United", logo: satoshi, width: 200 },
  { id: 35, name: "Startup Assam", logo: startupassam, width: 200 },
  { id: 36, name: "Token Fest", logo: tokenfest, width: 200 },
  { id: 37, name: "Untraceable", logo: untraceable, width: 200 },
  { id: 38, name: "WBF", logo: wbf, width: 200 },
  { id: 39, name: "ABA", logo: aba, width: 200 }
];


export function Clients() {
  // Separate state for each carousel
  const [clientActiveIndex, setClientActiveIndex] = useState(0);
  const [partnerActiveIndex, setPartnerActiveIndex] = useState(0);
  const [clientAutoScrolling, setClientAutoScrolling] = useState(true);
  const [partnerAutoScrolling, setPartnerAutoScrolling] = useState(true);
  const [visibleCompanies, setVisibleCompanies] = useState<number[]>([0, 1, 2]); // Initially show first 3
  const [visiblePartners, setVisiblePartners] = useState<number[]>([0, 1, 2]); // Initially show first 3
  
  // Client carousel auto-scrolling
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (clientAutoScrolling) {
      interval = setInterval(() => {
        setClientActiveIndex((prev) => {
          const newIndex = prev >= companies.length - 1 ? 0 : prev + 1;
          updateVisibleCompanies(newIndex);
          return newIndex;
        });
      }, 5000); // Scroll every 5 seconds
    }
    
    return () => clearInterval(interval);
  }, [clientAutoScrolling]);

  // Partner carousel auto-scrolling - separate effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (partnerAutoScrolling) {
      interval = setInterval(() => {
        setPartnerActiveIndex((prev) => {
          const newIndex = prev >= eventPartners.length - 1 ? 0 : prev + 1;
          updateVisiblePartners(newIndex);
          return newIndex;
        });
      }, 5000); // Scroll every 5 seconds
    }
    
    return () => clearInterval(interval);
  }, [partnerAutoScrolling]);

  const updateVisibleCompanies = (centerIndex: number) => {
    // Calculate which companies should be visible (center +/- 1, with wrap-around)
    const total = companies.length;
    const prev = (centerIndex - 1 + total) % total;
    const next = (centerIndex + 1) % total;
    setVisibleCompanies([prev, centerIndex, next]);
  };

  const handleClientClick = (index: number) => {
    setClientActiveIndex(index);
    updateVisibleCompanies(index);
    setClientAutoScrolling(false); // Pause auto-scrolling when user interacts
    
    // Resume auto-scrolling after 5 seconds of inactivity
    const timeout = setTimeout(() => {
      setClientAutoScrolling(true);
    }, 5000);
    
    return () => clearTimeout(timeout);
  };

  const updateVisiblePartners = (centerIndex: number) => {
    // Calculate which partners should be visible (center +/- 1, with wrap-around)
    const total = eventPartners.length;
    const prev = (centerIndex - 1 + total) % total;
    const next = (centerIndex + 1) % total;
    setVisiblePartners([prev, centerIndex, next]);
  };

  const handlePartnerClick = (index: number) => {
    setPartnerActiveIndex(index);
    updateVisiblePartners(index);
    setPartnerAutoScrolling(false); // Pause auto-scrolling when user interacts
    
    // Resume auto-scrolling after 5 seconds of inactivity
    const timeout = setTimeout(() => {
      setPartnerAutoScrolling(true);
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
              onClick={() => handleClientClick((clientActiveIndex - 1 + companies.length) % companies.length)}
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
                  key={`company-${companies[companyIndex].id}`}
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
              onClick={() => handleClientClick((clientActiveIndex + 1) % companies.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/70 hover:bg-gray-700/70 p-2 rounded-full text-white"
              aria-label="Next company"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap">
            {companies.map((_, index) => (
              <button
                key={`client-dot-${index}`}
                onClick={() => handleClientClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  clientActiveIndex === index ? 'bg-[#00AB4F] w-8' : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`View client ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Event partners heading */}
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
            EVENTS AND CONFERENCES WE{' '}
          </motion.span>
          <motion.span 
            className="text-[#00AB4F]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            PROUDLY PARTNER WITH
          </motion.span>
        </motion.h2>

        {/* Partner logos carousel */}
        <motion.div 
          className="mb-16"
          variants={itemVariants}
        >
          <div className="relative px-4 py-12 overflow-hidden">
            {/* Left arrow */}
            <button 
              onClick={() => handlePartnerClick((partnerActiveIndex - 1 + eventPartners.length) % eventPartners.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/70 hover:bg-gray-700/70 p-2 rounded-full text-white"
              aria-label="Previous partner"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Carousel container */}
            <div className="flex justify-center items-center gap-4 md:gap-8 transition-all duration-500">
              {visiblePartners.map((partnerIndex, i) => (
                <motion.div 
                  key={`partner-${eventPartners[partnerIndex].id}`}
                  className={`relative cursor-pointer transition-all duration-500 ease-out flex-shrink-0 
                    ${i === 1 ? 'w-64 md:w-96 mx-4 z-20' : 'w-32 md:w-64 opacity-50 z-10'}`}
                  onClick={() => handlePartnerClick(partnerIndex)}
                  whileHover={{ scale: i === 1 ? 1.05 : 1.1 }}
                  layout
                >
                  <div className={`
                    flex items-center justify-center p-6 rounded-xl h-40 md:h-56
                    ${i === 1 ? 'bg-gradient-to-br from-white/65 to-white/50' : 'bg-gray-800/60'}
                  `}>
                    <img 
                      src={eventPartners[partnerIndex].logo}
                      alt={eventPartners[partnerIndex].name} 
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
                      {eventPartners[partnerIndex].name}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Right arrow */}
            <button 
              onClick={() => handlePartnerClick((partnerActiveIndex + 1) % eventPartners.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/70 hover:bg-gray-700/70 p-2 rounded-full text-white"
              aria-label="Next partner"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap">
            {eventPartners.map((_, index) => (
              <button
                key={`partner-dot-${index}`}
                onClick={() => handlePartnerClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  partnerActiveIndex === index ? 'bg-[#00AB4F] w-8' : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`View partner ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}