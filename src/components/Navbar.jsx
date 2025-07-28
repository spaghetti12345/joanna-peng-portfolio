import { useEffect, useState } from "react";
import jplogo from '../assets/jplogo.svg';
import linkedinIcon from "/linkedin-icon.svg"; // Adjust the path as necessary
import mailIcon from "/mail-icon.svg"; // Adjust the path as necessary
import resumeIcon from "/resume-icon.svg";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 bg-[rgba(0, 0, 0, 0.5)] backdrop-blur-lg shadow-lg transition-transform duration-200 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-10 relative">
          
          <a href="#home" className="font-mono text-xl font-bold text-white">
            <img src={jplogo} alt="logo" className="h-9 w-9"></img>
          </a>


          { /* HAMBURGER MENU ICON
                    <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div> */}

          <div className="absolute left-1/2 -translate-x-1/2 items-center space-x-5 text-xs">
            <a href="#about" className="text-[var(--light)] hover:text-[#E4C9FB] transition-colors"> about </a>
            <a href="#projects" className="text-[var(--light)] hover:text-[#E4C9FB] transition-colors"> projects </a>
            <a href="#hobbies" className="text-[var(--light)] hover:text-[#E4C9FB] transition-colors"> hobbies </a>
            <a href="#contact" className="text-[var(--light)] hover:text-[#E4C9FB] transition-colors"> contact </a>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="https://www.linkedin.com/in/joannapeng1234/"
              className="w-4 h-4 rounded-lg flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>

            <div className="w-4 h-4 rounded-md">
              <a href = "mailto:j85peng@uwaterloo.ca">
                <img src={mailIcon} alt="Mail" />
              </a>
              
            </div>

            <div className="w-4 h-4 rounded-md">
              <a href = "https://drive.google.com/file/d/1JqKELzXjVxfiTbkJM10PjEganCJ4UOAV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              >              
              <img src={resumeIcon} alt="Resume" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};
