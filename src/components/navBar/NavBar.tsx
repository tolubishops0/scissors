import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import blueLink from "../../assets/blue-link.svg";
import blueline from "../../assets/blue-line.svg";
import menu from "../../assets/menu.svg";

type Props = {};

function NavBar({}: Props) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 940);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="flex items-center justify-between p-3 lg:p-0">
        {isSmallScreen && (
          <>
            <div className="flex items-center gap-1 max-w-sm">
              <img src={blueLink} alt="blueLink" />
              <img src={blueline} alt="blueline" />
              <p className="uppercase text-sm font-extrabold text-primaryTextColorBlue">
                scissor
              </p>
            </div>
            <div>
              <img
                src={menu}
                alt="menu"
                onClick={toggleMenu}
                className="cursor-pointer"
              />
            </div>
          </>
        )}
      </div>

      {isSmallScreen && (
        <div
          className={`${
            isMenuOpen
              ? "h-auto max-h-96 transition-all duration-500"
              : "max-h-0 transition-all duration-500"
          } overflow-hidden text-left`}>
          <ul className="bg-primaryTextColorBlue text-white font-semibold">
            <li className="py-2 pl-3">
              <a className="text-white " href="/">
                My Urls
             </a>
            </li>
            <li className="py-2 pl-3">
              <a href="#features">Features</a>
            </li>
            <li className="py-2 pl-3">
              <a href="#sub">Pricing</a>
            </li>
            <li className="py-2 pl-3">
              <a href="#linkmodal">Analytics</a>
            </li>
            <li className="py-2 pl-3">
              <a href="#faq">FAQs</a>
            </li>
            <hr />
            <li className="py-3 pl-3" onClick={handleLinkClick}>
              <a className="text-white" href="/login">
                Log in
             </a>
            </li>

            <li className="py-3 pl-3" onClick={handleLinkClick}>
              <a
                className="border-0 bg-white px-3 py-2 rounded-full text-primaryTextColorBlue"
                href="/">
                Try for free
             </a>
            </li>
          </ul>
        </div>
      )}

      {!isSmallScreen && (
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <img src={blueLink} alt="blueLink" className="w-10" />
            <img src={blueline} alt="blueline" className="w-[5px] h-auto" />
            <p className="uppercase text-3xl font-extrabold text-primaryTextColorBlue">
              scissor
            </p>
          </div>

          <div>
            <ul className="flex gap-x-10 font-semibold text-lg">
              <li className="text-primaryTextColorBlue group transition duration-300">
                <a href="/">My Urls</a>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primaryTextColorBlue"></span>
              </li>
              <li className="group transition duration-300">
                <a href="#feature">Feature</a>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primaryTextColorBlue"></span>
              </li>
              <li className="group transition duration-300">
                <a href="#sub">Pricing</a>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primaryTextColorBlue"></span>
              </li>
              <li className="group transition duration-300">
                <a href="/">Analytics</a>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primaryTextColorBlue"></span>
              </li>
              <li className="group transition duration-300">
                <a href="#faqs">FAQs</a>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primaryTextColorBlue"></span>
              </li>

              <li className="group transition duration-300">
                <a className="text-primaryTextColorBlue" href="/login">
                  Log in
               </a>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primaryTextColorBlue"></span>
              </li>
              <li>
                <a
                  className="border-0 bg-primaryTextColorBlue px-3 py-2 rounded-full text-white"
                  href="#linkmodal">
                  Try for free
               </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
