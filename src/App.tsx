import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/navBar/NavBar";
import LandingPage from "./components/landingPage/LandingPage";
import Feature from "./components/faeture/Feature";
import Subscription from "./components/subscription/Subscription";
import LinkModal from "./components/linkModal/LinkModal";

function App() {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <Feature />
      <Subscription />
      <LinkModal />
      {/* <Router>
        <Route exact path="/" component={} />
      </Router> */}
    </div>
  );
}

export default App;
