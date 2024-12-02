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

export const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl sm:text-3xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:flex-nowrap lg:justify-center"
          >
            {/* Project Image Section */}
            <div className="w-full lg:w-1/4 flex justify-center">
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={project.title}
                className="mb-6 rounded lg:mb-0"
              />
            </div>

            {/* Project Details Section */}
            <div className="w-full max-w-xl lg:w-3/4 px-4">
              <h6 className="mb-2 font-semibold text-lg">{project.title}</h6>
              <p className="mb-4 text-neutral-400 text-sm lg:text-base">
                {project.description}
              </p>

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
