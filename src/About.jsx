import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  const data = {
    name: "Reezayul hussain",
    image: "/images/about1.svg",
  };
  return (
      <div>
      <HeroSection {...data} />
    </div>
  )
}

export default About