import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';
import type { ThemeType } from '../../styles/theme';
import Navigation from '../Navigation';

const HeaderContainer = styled.header<{ themeName: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Higher than mobile menu */
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition);
  background-color: ${({ themeName }) => 
    themeName === 'theme2' ? 'rgba(30, 39, 46, 0.95)' : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid var(--border);
  height: 70px;
  
  ${({ themeName }) => 
    themeName === 'theme3' && 
    css`
      background-color: rgba(255, 255, 255, 0.95);
      border-bottom: none;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    `}
  
  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 1rem;
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const ThemeSelector = styled.div`
  position: relative;
`;

const Select = styled.select`
  padding: 0.5rem 1.75rem 0.5rem 0.75rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--border);
  background-color: var(--surface);
  color: var(--text);
  font-size: 0.9rem;
  cursor: pointer;
  appearance: none;
  transition: var(--transition);
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 480px) {
    padding: 0.4rem 1.5rem 0.4rem 0.6rem;
    font-size: 0.85rem;
    max-width: 100px;
  }
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(74, 111, 165, 0.2);
  }
`;

const SelectArrow = styled.span`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--text);
`;

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as ThemeType);
  };

  return (
    <HeaderContainer themeName={theme}>
      <HeaderContent>
        <Logo>
          <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
          </svg>
          <span>ThemeSwitcher</span>
        </Logo>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Navigation />
          <ThemeSelector>
            <Select 
              value={theme} 
              onChange={handleThemeChange}
              aria-label="Select theme"
            >
              <option value="theme1">Light</option>
              <option value="theme2">Dark</option>
              <option value="theme3">Colorful</option>
            </Select>
            <SelectArrow>▼</SelectArrow>
          </ThemeSelector>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
