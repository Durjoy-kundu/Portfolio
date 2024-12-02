
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion"

export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:pb-12">
      {/* Heading */}
      <h1 className="my-10 text-center text-3xl sm:text-4xl font-semibold">
        About <span className="text-neutral-500">Me</span>
      </h1>

      {/* Content Section */}
      <div className="flex flex-wrap items-center">
        {/* Image Section */}
        <motion.div 
        whileInView={{opacity: 1, x:0 }}
        initial={{ opacity: 0, x: -100}}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 px-4 lg:px-8">
          <div className="flex justify-center">
            <img
              className="rounded-2xl max-w-xs sm:max-w-md lg:max-w-lg"
              src={aboutImg}
              alt="About"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
        whileInView={{ opacity: 1, x:0 }}
        initial={{ opacity:0, x:100 }}
        transition={{duration:0.5}}
        className="w-full lg:w-1/2 px-4 lg:px-8">
          <div className="flex justify-center lg:justify-start text-center lg:text-left">
            <p className="my-4 max-w-md sm:max-w-lg text-base sm:text-lg font-light leading-relaxed">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
