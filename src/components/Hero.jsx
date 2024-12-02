

import { HERO_CONTENT } from "/src/constants/index.js";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "motion/react"

const container = (delay) => ({
    hidden: {x: -100, opacity:0},
    visible:{
        x:0,
        opacity: 1, 
        transition: {duration: 0.5, delay: delay},
    },
});

export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:pb-12">
      <div className="flex flex-wrap items-center lg:flex-nowrap">
        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 px-4 lg:px-8">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            < motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-6 text-4xl sm:text-5xl lg:text-7xl font-thin tracking-tight lg:mt-12">
              Durjoy Kundu
            </ motion.h1>

            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible" 
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>


            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-4 max-w-md sm:max-w-lg text-base sm:text-lg font-light tracking-tight">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 px-4 lg:px-8">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 1, delay: 1.2}}
              src={profilePic}
              alt="Durjoy Kundu"
              className="rounded max-w-xs sm:max-w-sm lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
