import Header from "../template/Header.jsx";
import Footer from "../template/Footer.jsx";

import Hero from "./Hero.jsx";
import AboutMe from "./AboutMe.jsx";  
import Certificates from "./Certificates.jsx";  
import Social from "./Social.jsx";

export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Certificates />
      <Social />
      <Footer />
    </>
  );
}
