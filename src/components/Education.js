import React from 'react';
import styled from 'styled-components';

const EducationSection = styled.section`
  background-color: #f5f5f5;
`;

const EducationContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 30px;
`;

const EducationTimeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: var(--primary-color);
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  @media (max-width: 768px) {
    &::after {
      left: 31px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  
  &:nth-child(odd) {
    left: 0;
  }
  
  &:nth-child(even) {
    left: 50%;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    
    &:nth-child(odd), &:nth-child(even) {
      left: 0;
    }
  }
`;

const TimelineContent = styled.div`
  padding: 20px 25px;
  background-color: white;
  position: relative;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: var(--primary-color);
  border-radius: 50%;
  z-index: 1;
  top: 35px;
  
  ${TimelineItem}:nth-child(odd) & {
    right: -12.5px;
  }
  
  ${TimelineItem}:nth-child(even) & {
    left: -12.5px;
  }
  
  @media (max-width: 768px) {
    left: 19px;
    ${TimelineItem}:nth-child(odd) &, ${TimelineItem}:nth-child(even) & {
      left: 19px;
      right: auto;
    }
  }
`;

const SchoolName = styled.h3`
  margin-bottom: 10px;
  color: var(--primary-color);
  font-size: 1.4rem;
`;

const Degree = styled.h4`
  margin-bottom: 5px;
  font-size: 1.1rem;
`;

const Duration = styled.p`
  font-style: italic;
  margin-bottom: 15px;
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const CourseList = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <EducationContainer>
        <h2 className="section-title">My Education</h2>
        <EducationTimeline>
          <TimelineItem>
            <TimelineDot />
            <TimelineContent>
              <SchoolName>New York University</SchoolName>
              <Degree>Master of Science in Computer Science</Degree>
              <Duration>Expected May 2026 | New York City, NY</Duration>
              <p>Concentration in Artificial Intelligence</p>
              <CourseList>
                <strong>Relevant Coursework:</strong> Fundamental Algorithms, Functional Languages, Operating Systems, Advanced Database Systems, Software Engineering, Artificial Intelligence, Natural Language Processing, Machine Learning Libraries, DevOps and Agile, Big Data Analytics
              </CourseList>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineDot />
            <TimelineContent>
              <SchoolName>University of Washington</SchoolName>
              <Degree>Bachelor of Science in Human Centered Design and Engineering</Degree>
              <Duration>September 2020 – June 2024 | Seattle, WA</Duration>
              <p>Specialization in Data Science | Minor in Business Administration</p>
              <CourseList>
                <strong>Relevant Coursework:</strong> Computer and Data Programming, R Statistical Coding, Database Systems and SQL Queries, Data Structures, APIs, Microeconomics, Business Intelligence, Accounting, Tableau and Data Visualization, Embedded Computing using C/C++, UI/UX Design
              </CourseList>
            </TimelineContent>
          </TimelineItem>
        </EducationTimeline>
      </EducationContainer>
    </EducationSection>
  );
};

export default Education;