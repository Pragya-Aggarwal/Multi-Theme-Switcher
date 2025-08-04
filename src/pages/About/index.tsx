import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.main`
  padding: 6rem 2rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--primary);
  position: relative;
  padding-bottom: 1rem;
  text-align: center;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: var(--primary);
    border-radius: 2px;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
  background: var(--surface);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SectionTitle = styled.h2`
  color: var(--primary);
  margin-bottom: 1rem;
  font-size: 1.75rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const TeamMember = styled.div`
  text-align: center;
  
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 4px solid var(--primary);
    transition: var(--transition);
    
    &:hover {
      transform: scale(1.05);
    }
  }
  
  h3 {
    margin: 0.5rem 0;
    color: var(--text);
  }
  
  p {
    color: var(--text-secondary);
    margin: 0;
    font-size: 0.9rem;
  }
`;

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Jane Smith',
      role: 'Lead Designer',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      image: 'https://randomuser.me/api/portraits/men/68.jpg'
    },
    {
      name: 'Sarah Williams',
      role: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/women/28.jpg'
    }
  ];

  return (
    <AboutContainer>
      <PageTitle>About Us</PageTitle>
      
      <Section className="fade-in">
        <SectionTitle>Our Story</SectionTitle>
        <p>
          Welcome to ThemeSwitcher, where we believe in the power of personalization. 
          Our journey began in 2023 with a simple idea: to create a seamless experience 
          for users to customize their digital environment according to their preferences.
        </p>
        <p>
          What started as a small project has now grown into a platform that serves 
          thousands of users worldwide, helping them express their unique style through 
          customizable themes and interfaces.
        </p>
      </Section>
      
      <Section className="fade-in" style={{ animationDelay: '0.2s' }}>
        <SectionTitle>Our Mission</SectionTitle>
        <p>
          Our mission is to empower users by providing them with intuitive tools to 
          personalize their digital experience. We believe that technology should adapt 
          to people, not the other way around.
        </p>
        <p>
          We're committed to creating beautiful, accessible, and performant themes 
          that enhance user experience across all devices and platforms.
        </p>
      </Section>
      
      <Section className="fade-in" style={{ animationDelay: '0.4s' }}>
        <SectionTitle>Meet Our Team</SectionTitle>
        <p>
          We're a diverse group of designers, developers, and creatives who are 
          passionate about building amazing user experiences.
        </p>
        
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} className="slide-in" style={{ animationDelay: `${0.2 * index}s` }}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </TeamMember>
          ))}
        </TeamGrid>
      </Section>
      
      <Section className="fade-in" style={{ animationDelay: '0.6s' }}>
        <SectionTitle>Our Values</SectionTitle>
        <ul>
          <li><strong>User-Centric:</strong> We put our users at the heart of everything we do.</li>
          <li><strong>Innovation:</strong> We're constantly exploring new ways to enhance the user experience.</li>
          <li><strong>Quality:</strong> We take pride in delivering high-quality, well-tested products.</li>
          <li><strong>Accessibility:</strong> We believe good design should be inclusive and accessible to everyone.</li>
          <li><strong>Community:</strong> We value our community and actively seek feedback to improve.</li>
        </ul>
      </Section>
    </AboutContainer>
  );
};

export default About;
