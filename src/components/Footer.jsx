import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import { socialLinks } from "../utils/navlinks";

import imageMtt from "../assets/3mtt.jpeg";
import ihs from "../assets/ihs.jpeg";
import nitda from "../assets/nitda.jpeg";

import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center gap-6 py-14 mt-14 md:mt-24"
      id="contact"
    >
      <div className="flex flex-col items-center justify-center gap-y-8">
        <h3 className="text-2xl font-bold uppercase">our partners</h3>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <Link to={"https://3mtt.nitda.gov.ng/"} target="_blank">
            <img
              src={imageMtt}
              alt="3MTT"
              className="h-[100px] w-[190px] object-cover rounded-md"
            />
          </Link>

          <Link to={"https://www.ihstowers.com/"} target="_blank">
            <img
              src={ihs}
              alt="ihs"
              className="h-[100px] w-[190px] object-cover rounded-md"
            />
          </Link>

          <Link to={"https://nitda.gov.ng/"} target="_blank">
            <img
              src={nitda}
              alt="nitda"
              className="h-[100px] w-[190px] object-cover rounded-md"
            />
          </Link>
        </div>
      </div>
      <div className="flex gap-x-6 items-center">
        {socialLinks.map((link) => (
          <Link to={link.href} key={link.title} target="_blank">
            {link.icon}
          </Link>
        ))}
      </div>
      <p className="text-sm text-gray-400">
        Copyright ©{new Date().getFullYear()} Veecode
      </p>

      <div className="absolute flex flex-col items-center bottom-3 right-0 md:bottom-6 md:right-12 px-6 gap-y-4 animate-bounce">
        <ArrowUp
          className="h-8 w-8 md:h-10 md:w-10 border rounded-full p-2 hover:bg-gray-900 cursor-pointer"
          onClick={scrollToTop}
        />
      </div>
    </section>
  );
};

export default Footer;