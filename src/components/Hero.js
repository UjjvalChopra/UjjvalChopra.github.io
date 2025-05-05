import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--secondary-color);
  color: white;
  position: relative;
  padding: 0 20px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, var(--background-color), transparent);
  }
`;

const HeroContent = styled.div`
  max-width: 1000px;
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 30px;
  border: 5px solid rgba(255, 255, 255, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 15px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 30px;
  opacity: 0.9;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.8rem;
  margin: 0 15px;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const ScrollDownLink = styled.a`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.5rem;
  animation: bounce 2s infinite;
  z-index: 10;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-20px) translateX(-50%);
    }
    60% {
      transform: translateY(-10px) translateX(-50%);
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <ProfileImage>
          {/* Replace with your actual image */}
          <img src="/profile-placeholder.jpg" alt="Ujjval Chopra" />
        </ProfileImage>
        <HeroTitle>UJJVAL CHOPRA</HeroTitle>
        <HeroSubtitle>Machine Learning Engineer & Software Developer</HeroSubtitle>
        <p>
          Passionate about building intelligent systems and software solutions.
          Currently pursuing MS in Computer Science with concentration in AI at NYU.
        </p>
        <SocialLinks>
          <SocialLink href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="mailto:uc2062@nyu.edu">
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
      </HeroContent>
      <ScrollDownLink href="#about">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
          <path d="M12 21.883l-6.293-6.293-1.414 1.414 8.707 8.707 8.707-8.707-1.414-1.414-6.293 6.293v-21.883h-2v21.883z" fill="white"/>
        </svg>
      </ScrollDownLink>
    </HeroSection>
  );
};

export default Hero;