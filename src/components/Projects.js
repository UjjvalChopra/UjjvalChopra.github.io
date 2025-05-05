import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  background-color: #f5f5f5;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--primary-color);
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: var(--text-color);
  margin-bottom: 20px;
  line-height: 1.6;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  background-color: #e8f4fd;
  color: var(--primary-color);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  font-weight: 500;
  color: var(--primary-color);
  
  svg {
    margin-right: 8px;
  }
`;

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Pico-LLM Project",
      description: "Implemented nucleus sampling (top-p) across multiple language model architectures, conducting comparative analysis of token diversity metrics. Generated quantitative visualizations demonstrating the impact of sampling parameters on text generation quality, showing token diversity.",
      image: "/project1-placeholder.jpg",
      tech: ["PyTorch", "LLMs", "NLP", "Python"],
      github: "https://github.com/",
      demo: "https://demo.com/"
    },
    {
      id: 2,
      title: "Software-Defined Networking Implementation",
      description: "Developed a Layer-3 routing application using OpenFlow protocol and Floodlight controller, achieving 95% packet delivery rates in complex network topologies with up to 10 hosts. Implemented a distributed load balancer using round-robin algorithms.",
      image: "/project2-placeholder.jpg",
      tech: ["OpenFlow", "Floodlight", "Networking", "Java"],
      github: "https://github.com/",
      demo: "https://demo.com/"
    },
    {
      id: 3,
      title: "Predictive Charge-Off Risk Analysis",
      description: "Developed a machine learning solution to predict charge-off likelihood for bank clients using financial datasets with over 400,000 entries. Preprocessed and converted data into JSON format to train a Large Language Model (LLM) using Transformers, leveraging BERT.",
      image: "/project3-placeholder.jpg",
      tech: ["BERT", "Transformers", "Machine Learning", "Python"],
      github: "https://github.com/",
      demo: "https://demo.com/"
    }
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <h2 className="section-title">My Projects</h2>
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    <span>GitHub</span>
                  </ProjectLink>
                  <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;