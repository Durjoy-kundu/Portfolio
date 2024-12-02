
// import logo from "../assets/logo.png"
// import { FaLinkedin } from "react-icons/fa"
// import { FaGithub } from "react-icons/fa"
// import { FaSquareXTwitter } from "react-icons/fa6"
// import { FaInstagram } from "react-icons/fa"

// export const Navbar = () => {
//   return (
//   <nav className=" mb-20 flex items-center justify-between py-6">
//     <div className="flex flex-shrink-0 items-center">
//     <img src={logo}  className="h-20 w-auto mx-2 " alt="logo" />

//     </div>
//     <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//     <FaLinkedin />
//     <FaGithub />
//     <FaInstagram/>
//     <FaSquareXTwitter/>
//     </div>
   
    
    
//      </nav>


//   );


// };
// // export default Navbar;


import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} className="h-20 w-auto mx-2" alt="logo" />
      </div>

      {/* Social Media Icons Section */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/durjoy-kundu-4b859420b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Durjoy-kundu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/Durjoykundu07"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};
