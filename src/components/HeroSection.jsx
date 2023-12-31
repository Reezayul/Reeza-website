import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../Styles/Button";
import { useGlobalContext } from "../Context";

const HeroSection = () => {
  const {name,image} = useGlobalContext();
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">ABOUT MYSELEF</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            I am 2023 pass-out B.tech graduate and I am a front-end developer with a specialization in React.js. I am
            passionate about using my skills and knowledge to make a positive
            impact in the industry.
          </p>
          <Button className="btn hireme-btn">
            <Link to={"contacts"}>Hire me</Link>
          </Button>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero-image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
