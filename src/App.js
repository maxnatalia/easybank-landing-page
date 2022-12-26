import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./Intro";
import Offering from "./Offering";
import Articles from "./Articles";
import Footer from "./Footer";
import Navigation from "./Navigation";

const App = () => {
  return (
    <>

      <Router>
        <Navigation />
        <Intro />
        <Offering />
        <Articles />
        <Routes>
          <Route path="/" element={<Articles />} />
        </Routes>
        <Footer />
      </Router>
      <div>
        

        

        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by Natalia Mazur-Żurek.
      </div>
    </>
  );
};

export default App;
