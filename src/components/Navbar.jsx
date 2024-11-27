
import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

export const Navbar = () => {
  return (
  <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <img src={logo}  className="h-20 w-auto mx-2 " alt="logo" />

    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <FaLinkedin />
    <FaGithub />
    <FaInstagram/>
    <FaSquareXTwitter/>
    </div>
   
    
    
     </nav>


  );


};
// export default Navbar;
