import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import { useState } from "react";

import NavBar from "./components/navBar/NavBar";
// import LandingPage from "./components/landingPage/LandingPage";
// import Feature from "./components/faeture/Feature";
// import Subscription from "./components/subscription/Subscription";
// import LinkModal from "./components/linkModal/LinkModal";
// import FAQs from "./components/faq/FAQs";
// import Opt from "./components/opt/Opt";
import Footer from "./components/footer/Footer";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Homepage from "./components/homepage/Homepage";
import Reset from "./components/auth/Reset";

import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UrlShort from "./components/urlshortner/UrlShortner";


function App() {

  return (
    <Router>
      <ToastContainer />
      
      <NavBar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/urlpage" element={<UrlShort />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
