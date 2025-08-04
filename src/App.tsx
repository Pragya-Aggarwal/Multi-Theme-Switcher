import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as CustomThemeProvider, useTheme } from './contexts/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { getTheme, type ThemeType } from './styles/theme';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ThemeTest from './pages/ThemeTest';

// Wrapper component to access theme context
const ThemedApp: React.FC = () => {
  const { theme } = useTheme();
  const currentTheme = getTheme(theme as ThemeType);

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/theme-test" element={<ThemeTest />} />
        </Routes>
      </main>
    </StyledThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <CustomThemeProvider>
        <ThemedApp />
      </CustomThemeProvider>
    </Router>
  );
};

export default App;
