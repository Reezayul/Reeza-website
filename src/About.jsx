import React ,{ useEffect }from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from "./Context";

const About = () => {
  // const data = {
  //   name: "Reezayul hussain",
  //   image: "/images/about1.svg",
  // };
  const { updateAboutpage } = useGlobalContext();
  useEffect(() => {
    updateAboutpage();
  }, []);
  return (
      <div>
      <HeroSection  />
    </div>
  )
}

export default About