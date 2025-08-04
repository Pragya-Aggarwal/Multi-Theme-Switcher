import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const TestContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin: 2rem 0;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  background-color: var(--surface);
  box-shadow: var(--box-shadow);
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  margin: 0.5rem;
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--primary);
  color: white;
  cursor: pointer;
  transition: var(--transition);
  font-family: ${({ theme }) => theme.fonts.primary};

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const ThemeTest: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <TestContainer>
      <h1>Theme Tester</h1>
      
      <Section>
        <h2>Theme Controls</h2>
        <div>
          <Button onClick={() => setTheme('theme1')} disabled={theme === 'theme1'}>
            Theme Light
          </Button>
          <Button onClick={() => setTheme('theme2')} disabled={theme === 'theme2'}>
            Theme Dark
          </Button>
          <Button onClick={() => setTheme('theme3')} disabled={theme === 'theme3'}>
            Theme Colorful
          </Button>
        </div>
        <p>Current Theme: {theme}</p>
      </Section>

      <Section>
        <h2>Typography</h2>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>This is a regular paragraph with some <strong>bold</strong> and <em>italic</em> text.</p>
        <p>Font Family: {theme === 'theme1' ? 'Sans-serif' : theme === 'theme2' ? 'Serif' : 'Display'}</p>
      </Section>

      <Section>
        <h2>Colors</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ 
            width: '100px', 
            height: '100px', 
            backgroundColor: 'var(--primary)',
            borderRadius: 'var(--border-radius)'
          }}>
            Primary
          </div>
          <div style={{ 
            width: '100px', 
            height: '100px', 
            backgroundColor: 'var(--secondary)',
            borderRadius: 'var(--border-radius)'
          }}>
            Secondary
          </div>
          <div style={{ 
            width: '100px', 
            height: '100px', 
            backgroundColor: 'var(--background)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--border-radius)'
          }}>
            Background
          </div>
          <div style={{ 
            width: '100px', 
            height: '100px', 
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--border-radius)'
          }}>
            Surface
          </div>
        </div>
      </Section>

      <Section>
        <h2>Components</h2>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <Button>Primary Button</Button>
          <Button style={{ backgroundColor: 'var(--secondary)' }}>Secondary Button</Button>
          <Button style={{ backgroundColor: 'var(--error)' }}>Error Button</Button>
        </div>
        
        <div style={{ margin: '1rem 0' }}>
          <input 
            type="text" 
            placeholder="Input field" 
            style={{ 
              padding: '0.5rem', 
              borderRadius: 'var(--border-radius)',
              border: '1px solid var(--border)',
              width: '100%',
              maxWidth: '300px'
            }} 
          />
        </div>
        
        <div style={{ 
          padding: '1rem', 
          backgroundColor: 'var(--surface)',
          borderRadius: 'var(--border-radius)',
          border: '1px solid var(--border)'
        }}>
          <p>Card component example with some content inside.</p>
        </div>
      </Section>
    </TestContainer>
  );
};

export default ThemeTest;
