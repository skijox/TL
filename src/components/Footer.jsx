// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import T from "../assets/T.png";
const Footer = () => {

  const handleClick = () => {
    // Scroll to top of the page (if needed)
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-black-200 py-10">
      <div className="container mx-auto px-12">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex items-center">
          <img src={T} alt="Taha logo" className="w-9 h-9 object-contain mr-2 mb-3" />

        <h2 className="text-white text-[15px] font-bold mb-4">Taha Lamine</h2>
            <br/>
            <p className="text-gray-400 text-[12px] ml-8">
              Exploring the world of XR and AI with insights on tech and innovation.
            </p>
          </div>
          <div className="gap-6 pl-7">
            <Link to="/" className="text-gray-400 hover:text-white mx-2 mb-2 md:mb-0">
              Home
            </Link>
            <Link to="/#about" className="text-gray-400 hover:text-white mx-2 mb-2 md:mb-0">
              About
            </Link>
            <button
              onClick={handleClick} // Handles click to navigate and scroll
              className="text-gray-400 hover:text-white mx-2 mb-2 md:mb-0"
            >
              Blogs
            </button>
            <Link to="/#contact" className="text-gray-400 hover:text-white mx-2">
              Contact
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="w-full md:w-1/3 flex justify-end gap-4 pr-4">
            {/* GitHub Icon */}
            <div className="relative group">
              <a href="https://github.com/Lamine-Taha" target="_blank" rel="noopener noreferrer">
                <img
                  src="src/assets/github.png"
                  alt="GitHub"
                  className="w-8 h-8 hover:opacity-80 transition duration-300 ease-in-out"
                />
              </a>
              {/* Tooltip for GitHub */}
              <div className="absolute bottom-[120%] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GitHub
              </div>
            </div>

            {/* Instagram Icon */}
            <div className="relative group">
              <a href="https://instagram.com/tahalamiine" target="_blank" rel="noopener noreferrer">
                <img
                  src="src/assets/instagram.png"
                  alt="Instagram"
                  className="w-8 h-8 hover:opacity-80 transition duration-300 ease-in-out"
                />
              </a>
              {/* Tooltip for Instagram */}
              <div className="absolute bottom-[120%] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Instagram
              </div>
            </div>

            {/* LinkedIn Icon */}
            <div className="relative group">
              <a href="https://www.linkedin.com/in/tahalamine/" target="_blank" rel="noopener noreferrer">
                <img
                  src="src/assets/linkedin.png"
                  alt="LinkedIn"
                  className="w-8 h-8 hover:opacity-80 transition duration-300 ease-in-out"
                />
              </a>
              {/* Tooltip for LinkedIn */}
              <div className="absolute bottom-[120%] left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                LinkedIn
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-[14px]">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <p className="text-gray-400 text-[14px]">Made with ❤️～ Taha Lamine</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
