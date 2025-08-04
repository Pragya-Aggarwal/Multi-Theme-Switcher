// Theme type definitions
export type ThemeType = 'theme1' | 'theme2' | 'theme3';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  success: string;
  warning: string;
  error: string;
}

export interface ThemeFonts {
  primary: string;
  secondary: string;
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface Theme {
  name: ThemeType;
  colors: ThemeColors;
  fonts: ThemeFonts;
  spacing: ThemeSpacing;
  borderRadius: string;
  boxShadow: string;
  transition: string;
}

const baseTheme = {
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  borderRadius: '8px',
  transition: 'all 0.3s ease-in-out',
};

export const theme1: Theme = {
  ...baseTheme,
  name: 'theme1',
  colors: {
    primary: '#4a6fa5',
    secondary: '#6c757d',
    background: '#f8f9fa',
    surface: '#ffffff',
    text: '#212529',
    textSecondary: '#6c757d',
    border: '#dee2e6',
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
  },
  fonts: {
    primary: '"Inter", "Helvetica", "Arial", sans-serif',
    secondary: '"Inter", "Helvetica", "Arial", sans-serif',
  },
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
};

export const theme2: Theme = {
  ...baseTheme,
  name: 'theme2',
  colors: {
    primary: '#6c5ce7',
    secondary: '#a29bfe',
    background: '#2d3436',
    surface: '#1e272e',
    text: '#f8f9fa',
    textSecondary: '#b2bec3',
    border: '#3d484d',
    success: '#00b894',
    warning: '#fdcb6e',
    error: '#ff7675',
  },
  fonts: {
    primary: '"Georgia", "Times New Roman", serif',
    secondary: '"Georgia", "Times New Roman", serif',
  },
  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
};

export const theme3: Theme = {
  ...baseTheme,
  name: 'theme3',
  colors: {
    primary: '#ff6b6b',
    secondary: '#4ecdc4',
    background: '#f7fff7',
    surface: '#ffffff',
    text: '#2f3640',
    textSecondary: '#718093',
    border: '#dcdde1',
    success: '#1dd1a1',
    warning: '#ff9f43',
    error: '#ff6b6b',
  },
  fonts: {
    primary: '"Pacifico", cursive',
    secondary: '"Comic Neue", cursive',
  },
  borderRadius: '16px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
};

export const themes: Record<ThemeType, Theme> = {
  theme1,
  theme2,
  theme3,
};

export const getTheme = (theme: ThemeType): Theme => themes[theme];
