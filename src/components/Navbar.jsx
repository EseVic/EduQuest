import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import { ArrowRight } from "lucide-react";
import { navLinks } from "../utils/navlinks";

import logo from "../assets/3mtt.jpeg";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="flex items-center justify-between w-full px-4 sm:px-6 md:px-16 py-2 sm:py-3 md:py-5 bg-[#0a0a0a] z-50 border-b border-gray-800 sticky top-0 left-0">
      <Link to={""} onClick={scrollToTop} className="flex items-center gap-x-2 sm:gap-x-4">
        <img src={logo} alt="logo" className="w-12 sm:w-14 md:w-16 object-cover" />
        <h1 className="ml-1 sm:ml-2 font-extrabold md:inline-block text-transparent text-[0.9rem] sm:text-[1rem] bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text">
          EduQuest
        </h1>
      </Link>
      <div className="hidden md:flex items-center md:gap-x-4 lg:gap-x-8">
        {navLinks.map((navLink) => (
          <ScrollLink
            key={navLink.id}
            activeClass="active"
            to={navLink.id}
            offset={-150}
            spy={true}
            smooth={true}
            duration={1000}
            className="py-2 sm:py-[6px] hover:text-fuchsia-100 px-1 sm:px-2 hover:border-b-4 hover:rounded font-medium hover:border-fuchsia-400 transition-all cursor-pointer"
          >
            {navLink.title}
          </ScrollLink>
        ))}
      </div>
  
      <Link
        to={"/auth/sign_in"}
        className="text-xs sm:text-sm md:text-base bg-gradient-to-r from-pink-500 to-blue-500 px-6 sm:px-8 lg:px-10 rounded-full text-white font-bold flex items-center py-2 sm:py-[10px] hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 transition-all"
      >
        Get Started <ArrowRight className="text-white h-4 w-4 ml-2 sm:ml-3" />
      </Link>
    </nav>
  );
  

};

export default Navbar;
