import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--secondary-color);
  color: white;
  padding: 50px 0 20px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  margin: 0 15px;
  transition: var(--transition);

  &:hover {
    color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const FooterText = styled.p`
  text-align: center;
  margin-bottom: 10px;
`;

const ContactInfo = styled.div`
  margin-bottom: 30px;
  text-align: center;
  
  p {
    margin: 5px 0;
  }
`;

const BackToTop = styled.a`
  display: block;
  margin-top: 20px;
  color: white;
  text-decoration: none;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary-color);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
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
        
        <ContactInfo>
          <p>uc2062@nyu.edu</p>
          <p>+1 (206) 619-0262</p>
          <p>New York, NY 10012</p>
        </ContactInfo>
        
        <FooterText>
          &copy; {new Date().getFullYear()} Ujjval Chopra. All rights reserved.
        </FooterText>
        
        <BackToTop href="#hero">
          Back to top
        </BackToTop>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;