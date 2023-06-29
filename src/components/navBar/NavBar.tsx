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
    setIsSmallScreen(window.innerWidth <= 900);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
              <Link className="text-white " to="/">
                My Urls
              </Link>
            </li>
            <li className="py-2 pl-3">Features</li>
            <li className="py-2 pl-3">Pricing</li>
            <li className="py-2 pl-3">Analytics</li>
            <li className="py-2 pl-3">FAQs</li>
            <hr />
            <li className="py-3 pl-3">
              <Link className="text-white" to="/">
                Log in
              </Link>
            </li>

            <li className="py-3 pl-3">
              <Link
                className="border-0 bg-white px-3 py-2 rounded-full text-primaryTextColorBlue"
                to="/">
                Try for free
              </Link>
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
                <Link to="/">My Urls</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primaryTextColorBlue"></span>
              </li>
              <li className="group transition duration-300">
                <Link to="/">Feature</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primaryTextColorBlue"></span>
              </li>
              <li className="group transition duration-300">
                <Link to="/">Pricing</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primaryTextColorBlue"></span>
              </li>
              <li className="group transition duration-300">
                <Link to="/">Analytics</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primaryTextColorBlue"></span>
              </li>
              <li className="group transition duration-300">
                <Link to="/">FAQs</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primaryTextColorBlue"></span>
              </li>

              <li className="group transition duration-300">
                <Link className="text-primaryTextColorBlue" to="/">
                  Log in
                </Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primaryTextColorBlue"></span>
              </li>
              <li>
                <Link
                  className="border-0 bg-primaryTextColorBlue px-3 py-2 rounded-full text-white"
                  to="/">
                  Try for free
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
