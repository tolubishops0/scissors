import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import blueLink from "../../assets/blue-link.svg";
import blueline from "../../assets/blue-line.svg";
import menu from "../../assets/menu.svg";
import user from "../../assets/user.png";

import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

import { toast } from "react-toastify";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import Loader from "../loader/Loader";

type Props = {};

function NavBar({}: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userName, setUserName] = useState(" ");

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 940);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const logoutUser = () => {
    setIsLoading(true);

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsLoading(false);

        toast.success("logged out successfully");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        setIsLoading(false);

        toast.error(error.message);
      });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Check if the user is logged in based on the URL
    const loggedIn = location.pathname === "/urlpage";
    setIsLoggedIn(loggedIn);
  }, [location.pathname]);

  //monitor signed in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserName(user.displayName || "");
        // ...
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <nav>
      {/* <ToastContainer /> */}
      {isLoading && <Loader />}
      <div className="flex items-center justify-between p-3 lg:p-0">
        {isSmallScreen && (
          <>
            <div className="flex items-center gap-1 max-w-sm">
              <img src={blueLink} alt="blueLink" className="w-[15%]" />
              <img src={blueline} alt="blueline" className="w-[2%]" />
              <p className="uppercase text-xs md:text-sm font-extrabold text-primaryTextColorBlue">
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
            <li className="py-2 pl-3" onClick={handleLinkClick}>
              <a className="text-white " href="/">
                My Urls
              </a>
            </li>
            <li className="py-2 pl-3" onClick={handleLinkClick}>
              <a href="#features">Features</a>
            </li>
            <li className="py-2 pl-3" onClick={handleLinkClick}>
              <a href="#sub">Pricing</a>
            </li>
            <li className="py-2 pl-3" onClick={handleLinkClick}>
              <a href="#linkmodal">Analytics</a>
            </li>
            <li className="py-2 pl-3" onClick={handleLinkClick}>
              <a href="#faqs">FAQs</a>
            </li>
            <hr />
            {isLoggedIn ? (
              <li className="py-3 pl-3" onClick={logoutUser}>
                <a className="text-white" href="/">
                  Log out
                </a>
              </li>
            ) : (
              location.pathname !== "/urlpage" &&
              location.pathname !== "/login" && (
                <li className="py-3 pl-3" onClick={handleLinkClick}>
                  <a className="text-white" href="/login">
                    Log in
                  </a>
                </li>
              )
            )}

            {isLoggedIn ? (
              <li className="py-3 pl-3">
                <a className="text-white flex items-center" href="/">
                  <img src={user} alt="user" />
                  <p className=""> Hi, {userName ? userName : "user"}</p>
                </a>
              </li>
            ) : (
              <li className="py-3 pl-3" onClick={handleLinkClick}>
                <a
                  className="border-0 bg-white px-3 py-2 rounded-full text-primaryTextColorBlue"
                  href="#linkmodal">
                  Try for free
                </a>
              </li>
            )}
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
              {isLoggedIn ? (
                //
                <li className="group transition duration-300">
                  <a
                    onClick={logoutUser}
                    className="text-primaryTextColorBlue"
                    href="/">
                    Log Out
                  </a>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primaryTextColorBlue"></span>
                </li>
              ) : (
                location.pathname !== "/urlpage" &&
                location.pathname !== "/login" && (
                  <li
                    className="group transition duration-300"
                    onClick={handleLinkClick}>
                    <a className="text-primaryTextColorBlue" href="/login">
                      Log in
                    </a>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primaryTextColorBlue"></span>
                  </li>
                )
              )}
              {isLoggedIn ? (
                <li className="" onClick={logoutUser}>
                  <a
                    className="text-primaryTextColorBlue flex items-center font-semibold"
                    href="#">
                    <img src={user} alt="user" />
                    <p className=""> Hi, {userName ? userName : "user"}</p>
                  </a>
                </li>
              ) : (
                <li>
                  <a
                    className="border-0 bg-primaryTextColorBlue px-3 py-2 rounded-full text-white"
                    href="#linkmodal">
                    Try for free
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
