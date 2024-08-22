import React from 'react';
import styled from 'styled-components';
import Orbitron from 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #0d0d0d;
  color: #00ffff;
  font-family: 'Orbitron', sans-serif;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #ff00ff;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #1c1c1c;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 204, 255, 0.5);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 20px rgba(0, 204, 255, 0.8);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: brightness(70%) contrast(120%);
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #00ffff;
  margin-bottom: 1rem;
  text-shadow: 0 0 5px #00ffff;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 5px #ff0066;
`;

function App() {
  const projects = [
    {
      id: 1,
      title: 'Neon City',
      description: 'A futuristic cityscape in a cyberpunk world.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Neon+City',
    },
    {
      id: 2,
      title: 'Tech Glitch',
      description: 'A glitchy tech-inspired design project.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Tech+Glitch',
    },
    {
      id: 3,
      title: 'Neon Grid',
      description: 'A digital grid with vibrant neon lights.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Neon+Grid',
    },
  ];

  return (
    <Container>
      <Heading>My Cyberpunk Portfolio</Heading>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Container>
  );
}

export default App;
