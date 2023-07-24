import React from "react";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";
import Customers from "./pages/Customers";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import PastProjects from "./pages/PastProjects";
import Services from "./pages/Services";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import ReactGA from "react-ga";

const TRACKING_ID = "UA-251691643-1"; // TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div>
      <FloatingButtons />
      <Navbar />

      <Hero />
      <Brands />
      <About />
      <Product />
      <Customers />
      <Services />
      <PastProjects />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
