import React from "react";

import LandingPage from "../landingPage/LandingPage";
import Subscription from "../subscription/Subscription";
import Feature from "../faeture/Feature";
import LinkModal from "../linkModal/LinkModal";
import Opt from "../opt/Opt";
import FAQs from "../faq/FAQs";

type Props = {};

function Homepage({}: Props) {
  return (
    <div>
      <LandingPage />
      <div id="feature">
        <Feature />
      </div>
      <div id="sub">
        <Subscription />
      </div>
      <div id="linkmodal">
        <LinkModal />
      </div>
      <div id="faqs">
        <FAQs />
      </div>
      <div id="opt">
        <Opt />
      </div>
    </div>
  );
}

export default Homepage;
