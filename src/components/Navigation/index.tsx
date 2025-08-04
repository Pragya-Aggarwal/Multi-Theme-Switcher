import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  margin-left: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;
  
const NavItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  transition: var(--transition);
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: var(--transition);
  }
  
  &:hover {
    color: var(--primary);
    
    &::after {
      width: 70%;
    }
  }
  
  &.active {
    color: var(--primary);
    
    &::after {
      width: 70%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: var(--surface);
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  
  ${NavItem} {
    padding: 0.75rem 1rem;
    border-radius: 0;
    border-bottom: 1px solid var(--border);
    
    &:last-child {
      border-bottom: none;
    }
    
    &::after {
      display: none;
    }
  }
`;

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when a link is clicked
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <Nav>
        <NavItem to="/" end onClick={handleNavClick}>
          Home
        </NavItem>
        <NavItem to="/about" onClick={handleNavClick}>
          About
        </NavItem>
        <NavItem to="/contact" onClick={handleNavClick}>
          Contact
        </NavItem>
        <NavItem to="/theme-test" onClick={handleNavClick}>
          Theme Tester
        </NavItem>
      </Nav>

      <MobileMenuButton onClick={toggleMobileMenu}>
        ☰
      </MobileMenuButton>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <NavItem to="/" end onClick={handleNavClick}>
          Home
        </NavItem>
        <NavItem to="/about" onClick={handleNavClick}>
          About
        </NavItem>
        <NavItem to="/contact" onClick={handleNavClick}>
          Contact
        </NavItem>
        <NavItem to="/theme-test" onClick={handleNavClick}>
          Theme Tester
        </NavItem>
      </MobileMenu>
    </>
  );
};

export default Navigation;
