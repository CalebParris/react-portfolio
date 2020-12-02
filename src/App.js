import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/react-portfolio/" component={About} />
          <Route exact path="/react-portfolio/about/" component={About} />
          <Route exact path="/react-portfolio/contact/" component={Contact} />
          <Route exact path="/react-portfolio/portfolio/" component={Portfolio} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
