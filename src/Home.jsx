import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './Context'


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
      <HeroSection  />
    </div>
  )
}

export default Home