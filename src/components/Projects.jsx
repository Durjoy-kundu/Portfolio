// import { PROJECTS } from "../constants"
// export const  Projects = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4" >
//        <h1 className="my-20 text-center text-4xl">Projects</h1>
//        <div>
//         {PROJECTS.map((project, index) => (
//             <div key={index} className="mb-8 flex flex-warp lg:justify-center">
//                 <div className="w-full lg:w-1/4">
//                 <img 
//                 src= {project.image}
//                  alt= {project.title}
//                  width={150}
//                  height={project.title}
//                  className="mb-6 rounded"
//                  /> 
//                 </div>
//                 <div>
//                     <div className="w-full max-w-xl lg:w-3/4" >
//                         <h6 className="mb-2 font-semibold">{project.title}</h6>
//                         <p className="mb-4 text-neutral-400">{project.description}</p>
//                         {project.technologies.map((tech, index) => (
//                             <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}
//                             </span>
//                         ))}
//                     </div>
//                 </div>
                   
//             </div>
//          ))}
//     </div>
//     </div>
//   )
// }

import { PROJECTS } from "../constants";
import { motion } from "framer-motion"

export const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
      whileInView={{ opacity: 1, y:0 }}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl sm:text-3xl">Projects</motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:flex-nowrap lg:justify-center"
          >
            {/* Project Image Section */}
            <motion.div
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 1}}
             className="w-full lg:w-1/4 flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={project.title}
                className="mb-6 rounded lg:mb-0"
              />
            </motion.div>

            {/* Project Details Section */}
            <motion.div 
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100}}
            transition={{ duration: 1}}
            className="w-full max-w-xl lg:w-3/4 px-4">
              <h6 className="mb-2 font-semibold text-lg">{project.title}</h6>
              <p className="mb-4 text-neutral-400 text-sm lg:text-base">
                {project.description}
              </p>
              {/* Project Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-4 text-sm text-purple-400 underline hover:text-purple-300 transition"
                >
                  🔗 View Project
                </a>
              )}

              {/* Technologies Section */}
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
