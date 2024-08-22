import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #0077b6;
  margin-bottom: 2rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
`;

const Portfolio = () => {
  // Fetch your project data from an API or local source
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is a description of my first project.',
      imageUrl: 'https://via.placeholder.com/300x200',
    },
    // Add more project objects here
  ];

  return (
    <Container>
      <Heading>My Portfolio</Heading>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              {/* Add more project details here */}
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Container>
  );
};

export default Portfolio;
