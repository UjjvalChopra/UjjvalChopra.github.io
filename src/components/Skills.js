import React from 'react';
import styled from 'styled-components';
import { FaCode, FaDatabase, FaTools, FaServer, FaChartLine, FaCertificate } from 'react-icons/fa';

const SkillsSection = styled.section`
  background-color: var(--background-color);
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const SkillsCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
`;

const SkillCategory = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 30px;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  svg {
    font-size: 1.8rem;
    color: var(--primary-color);
    margin-right: 15px;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--primary-color);
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillTag = styled.span`
  background-color: #e8f4fd;
  color: var(--text-color);
  padding: 8px 15px;
  border-radius: 50px;
  font-size: 0.95rem;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
  }
`;

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      icon: <FaCode />,
      skills: ["Python", "Java", "C++", "JavaScript", "HTML/CSS", "SQL", "R", "MATLAB"]
    },
    {
      id: 2,
      title: "Frameworks & Libraries",
      icon: <FaDatabase />,
      skills: ["PyTorch", "TensorFlow", "Pandas", "NumPy", "Scikit-learn", "React.js", "Node.js", "Next.js", "Flask", "Firebase", "MySQL"]
    },
    {
      id: 3,
      title: "Developer Tools",
      icon: <FaTools />,
      skills: ["Git", "Docker", "Kubernetes", "PyCharm", "Visual Studio", "IntelliJ", "Azure", "DevOps"]
    },
    {
      id: 4,
      title: "Networking Tools",
      icon: <FaServer />,
      skills: ["Floodlight Controller", "Mininet", "Open Switch", "TCP/IP", "ARP"]
    },
    {
      id: 5,
      title: "Data Visualization",
      icon: <FaChartLine />,
      skills: ["Tableau", "PowerBI", "Matplotlib", "Seaborn", "D3.js"]
    },
    {
      id: 6,
      title: "Certifications",
      icon: <FaCertificate />,
      skills: ["Google Project Management Certification"]
    }
  ];

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <h2 className="section-title">Skills & Expertise</h2>
        <SkillsCategories>
          {skillCategories.map((category) => (
            <SkillCategory key={category.id}>
              <CategoryHeader>
                {category.icon}
                <CategoryTitle>{category.title}</CategoryTitle>
              </CategoryHeader>
              <SkillTags>
                {category.skills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </SkillCategory>
          ))}
        </SkillsCategories>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;