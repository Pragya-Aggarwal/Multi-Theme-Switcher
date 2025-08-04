import { createGlobalStyle } from 'styled-components';
import type { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: ${({ theme }) => theme.colors.primary};
    --secondary: ${({ theme }) => theme.colors.secondary};
    --background: ${({ theme }) => theme.colors.background};
    --surface: ${({ theme }) => theme.colors.surface};
    --text: ${({ theme }) => theme.colors.text};
    --text-secondary: ${({ theme }) => theme.colors.textSecondary};
    
    --spacing-xs: ${({ theme }) => theme.spacing.xs};
    --spacing-sm: ${({ theme }) => theme.spacing.sm};
    --spacing-md: ${({ theme }) => theme.spacing.md};
    --spacing-lg: ${({ theme }) => theme.spacing.lg};
    --spacing-xl: ${({ theme }) => theme.spacing.xl};
    
    --border-radius: ${({ theme }) => theme.borderRadius};
    --box-shadow: ${({ theme }) => theme.boxShadow};
    --transition: ${({ theme }) => theme.transition};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.fonts.primary};
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.secondary};
    margin-top: 0;
    margin-bottom: ${(props) => props.theme.spacing.md};
    color: ${(props) => props.theme.colors.text};
  }

  a {
    color: var(--primary);
    text-decoration: none;
    transition: var(--transition);

    &:hover {
      color: var(--secondary);
    }
  }

  button, input, select, textarea {
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 1rem;
    transition: var(--transition);
  }

  ul, ol {
    list-style-position: inside;
    padding-left: ${({ theme }) => theme.spacing.md};
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .fade-in {
    animation: fadeIn 0.3s ease-in-out;
  }

  .slide-in {
    animation: slideIn 0.3s ease-out;
  }
`;
