import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './Context'
import Services from './Services';
import Contact from './Contact';


const Home = () => {
  // const data = {
  //   name: "REEZA WEBSITE",
  //   image: "/images/hero.svg",
  // };
  const { updateHomePage } = useGlobalContext();
  useEffect(() => {
    updateHomePage();
  }, []);
  
  return (
      <div>
      <HeroSection />
      <Services />
      <Contact/>
    </div>
  )
}

export default Home