import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
  
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
  padding: 0.5rem;
  z-index: 1002;
  margin-left: 0.5rem;
  position: relative;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    padding: 0.4rem;
  }
`;

// Mobile menu overlay with backdrop blur
const MobileMenuOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

// Mobile menu panel with enhanced styling
const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 85%;
  max-width: 280px;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  z-index: 1001;
  padding: 1.5rem 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.1);
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.border};
    border-radius: 2px;
  }
  
  ${NavItem} {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    margin: 0.5rem 1rem;
    border-radius: 8px;
    background: transparent;
    transition: all 0.2s ease;
    border: none;
    text-align: left;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
    font-size: 1rem;
    
    &:hover {
      background: ${({ theme }) => theme.colors.hover};
      transform: translateX(4px);
    }
    
    &:active {
      transform: translateX(4px) scale(0.98);
      background: ${({ theme }) => theme.colors.hover};
    }
    
    &::before {
      content: '';
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.primary};
      margin-right: 12px;
      opacity: 0;
      transition: opacity 0.2s ease;
    }
    
    &.active {
      background: ${({ theme }) => theme.colors.hover};
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 600;
      
      &::before {
        opacity: 1;
      }
    }
  
  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
    top: 60px;
    
    ${NavItem} {
      padding: 0.9rem 1rem;
      margin: 0.2rem 0;
    }
  }
`;

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { theme } = useTheme();
  const menuRef = React.useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setIsMobileMenuOpen(!isMobileMenuOpen);
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const closeMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setIsMobileMenuOpen(false);
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const menu = menuRef.current;
      const menuButton = document.querySelector('button[aria-label="Toggle menu"]');
      
      if (menu && !menu.contains(target) && target !== menuButton) {
        closeMobileMenu(e as unknown as React.MouseEvent);
      }
    };

    // Add event listeners for both click and touch events
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('touchstart', handleClickOutside, true);
    
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('touchstart', handleClickOutside, true);
    };
  }, [isMobileMenuOpen]);


  return (
    <>
      <Nav>
        <NavItem 
          to="/" 
          end
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/';
          }}
        >
          Home
        </NavItem>
        <NavItem 
          to="/about"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/about';
          }}
        >
          About
        </NavItem>
        <NavItem 
          to="/contact"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/contact';
          }}
        >
          Contact
        </NavItem>
      </Nav>

      <MobileMenuButton 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </MobileMenuButton>

      <MobileMenuOverlay 
        isOpen={isMobileMenuOpen} 
        onClick={closeMobileMenu}
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        ref={menuRef}
      >
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          padding: '0.5rem 0'
        }}>
          <NavItem 
            to="/" 
            end 
            onClick={(e) => {
              e.preventDefault();
              closeMobileMenu(e);
              window.location.href = '/';
            }}
            style={{ marginTop: '0.5rem' }}
          >
            Home
          </NavItem>
          <NavItem 
            to="/about" 
            onClick={(e) => {
              e.preventDefault();
              closeMobileMenu(e);
              window.location.href = '/about';
            }}
            style={{ margin: '0.5rem 0' }}
          >
            About
          </NavItem>
          <NavItem 
            to="/contact" 
            onClick={(e) => {
              e.preventDefault();
              closeMobileMenu(e);
              window.location.href = '/contact';
            }}
            style={{ marginBottom: '1rem' }}
          >
            Contact
          </NavItem>
          
          
        </div>
      </MobileMenu>
    </>
  );
};

export default Navigation;
