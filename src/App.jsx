import { useState } from "react";

// import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Offers from "./components/offers/Offers";
import Trust from "./components/trust/Trust";
import Projects from "./components/projects/Projects";
import Stages from "./components/stages/Stages";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Offers />
      <Trust />
      <Projects />
      <Stages />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
