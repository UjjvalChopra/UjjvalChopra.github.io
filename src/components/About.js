import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  background-color: var(--background-color);
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;

  @media (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 20px;
    font-size: 1.1rem;
  }

  h3 {
    margin-bottom: 15px;
    font-size: 1.8rem;
    color: var(--primary-color);
  }
`;

const AboutImage = styled.div`
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  @media (max-width: 868px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <h2 className="section-title">About Me</h2>
        <AboutContent>
          <AboutText>
            <h3>Hello, I'm Ujjval!</h3>
            <p>
              I am a Machine Learning Engineer and Software Developer currently pursuing my Master's in Computer Science 
              with a concentration in Artificial Intelligence at New York University.
            </p>
            <p>
              With a background in Human Centered Design and Engineering with a specialization in Data Science from the 
              University of Washington, I bring a unique perspective that combines technical expertise with user-centered 
              design principles.
            </p>
            <p>
              My passion lies in developing innovative solutions using AI and machine learning technologies. I am 
              particularly interested in applying AI to solve real-world problems, especially in healthcare and 
              educational contexts.
            </p>
            <p>
              Currently, I'm working as a Graduate Research Assistant at NYU Langone, where I analyze brain image 
              data using MATLAB and Python to advance Alzheimer's disease research.
            </p>
          </AboutText>
          <AboutImage>
            {/* Replace with your actual image */}
            <img src="/about-placeholder.jpg" alt="Ujjval Chopra Working" />
          </AboutImage>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;