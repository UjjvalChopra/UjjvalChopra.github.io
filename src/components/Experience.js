import React from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceSection = styled.section`
  background-color: var(--background-color);
`;

const ExperienceContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 30px;
`;

const ExperienceCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ExperienceCard = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 30px;
  transition: var(--transition);
  border-left: 5px solid var(--primary-color);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ExperienceHeader = styled.div`
  margin-bottom: 20px;
`;

const JobTitle = styled.h3`
  color: var(--primary-color);
  font-size: 1.4rem;
  margin-bottom: 5px;
`;

const CompanyName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const ExperienceMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 15px;
  font-size: 0.95rem;
  color: var(--text-secondary);
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 8px;
  }
`;

const ResponsibilitiesList = styled.ul`
  list-style: none;
  
  li {
    position: relative;
    padding-left: 25px;
    margin-bottom: 10px;
    
    &:before {
      content: "•";
      color: var(--primary-color);
      font-weight: bold;
      font-size: 1.2rem;
      position: absolute;
      left: 0;
      top: -2px;
    }
  }
`;

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <h2 className="section-title">Work Experience</h2>
        <ExperienceCards>
          <ExperienceCard>
            <ExperienceHeader>
              <JobTitle>Graduate Research Assistant</JobTitle>
              <CompanyName>NYU Langone Alzheimer Research Analysis</CompanyName>
              <ExperienceMeta>
                <MetaItem>
                  <FaCalendarAlt />
                  <span>November 2024 - Present</span>
                </MetaItem>
                <MetaItem>
                  <FaMapMarkerAlt />
                  <span>New York City, NY</span>
                </MetaItem>
              </ExperienceMeta>
            </ExperienceHeader>
            <ResponsibilitiesList>
              <li>Analyzing PET/MR brain image data using MATLAB and Python, focusing on the locus coeruleus (LC) in the brainstem, incorporating quantitative techniques such as MRTM2, cross-correlation for feature detection, and Fourier analysis.</li>
              <li>Developed data pipelines with motion correction & smoothing for improved image preprocessing.</li>
              <li>Applying machine learning methodologies to improve brainstem region segmentation and advance Alzheimer's disease research.</li>
            </ResponsibilitiesList>
          </ExperienceCard>
          
          <ExperienceCard>
            <ExperienceHeader>
              <JobTitle>Project Manager</JobTitle>
              <CompanyName>National AI Institute Capstone Project</CompanyName>
              <ExperienceMeta>
                <MetaItem>
                  <FaCalendarAlt />
                  <span>January 2024 - June 2024</span>
                </MetaItem>
                <MetaItem>
                  <FaMapMarkerAlt />
                  <span>Seattle, WA</span>
                </MetaItem>
              </ExperienceMeta>
            </ExperienceHeader>
            <ResponsibilitiesList>
              <li>Led quantitative UX research for an AI orchestrator optimizing educational plans for 100+ children in speech-language therapy, collaborating with Speech-Language Pathologists (SLPs), design and technical teams to enhance workflow integration.</li>
              <li>Developed a centralized website prototype to improve workflow efficiency for SLPs by integrating data from three platforms currently in use.</li>
              <li>Collaborated cross-functionally to synthesize research findings into the iterative design process, ensuring equitable educational outcomes and monitoring project progression using an Agile methodology.</li>
            </ResponsibilitiesList>
          </ExperienceCard>
          
          <ExperienceCard>
            <ExperienceHeader>
              <JobTitle>Technical Product Intern</JobTitle>
              <CompanyName>Insights First at EvalueServe</CompanyName>
              <ExperienceMeta>
                <MetaItem>
                  <FaCalendarAlt />
                  <span>July 2022 - August 2022</span>
                </MetaItem>
                <MetaItem>
                  <FaMapMarkerAlt />
                  <span>Gurugram, HR</span>
                </MetaItem>
              </ExperienceMeta>
            </ExperienceHeader>
            <ResponsibilitiesList>
              <li>Managed project timelines by updating Gantt charts and participating in Agile sprints to ensure on-time deliverables.</li>
              <li>Automated data extraction through SQL queries and API calls, reducing manual effort and improving data processing efficiency for supporting data-driven decision making for Fortune 500 clients.</li>
              <li>Configured projects based on client requirements, developing customized Tableau and PowerBI dashboards, to improve real-time data insights.</li>
            </ResponsibilitiesList>
          </ExperienceCard>
        </ExperienceCards>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience;