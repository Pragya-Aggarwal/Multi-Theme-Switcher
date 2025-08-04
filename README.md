# Multi-Theme React Application

A modern React application with dynamic theming capabilities, built with TypeScript, Vite, and Styled Components. This application showcases how to implement a flexible theming system with multiple themes that can be switched on the fly.

## 🌟 Features

- 🎨 Three distinct themes with different colors, fonts, and layouts
- 🔄 Real-time theme switching with smooth transitions
- 📱 Fully responsive design for all device sizes
- 🛠 Built with modern React (v18+) and TypeScript
- 🎭 Styled Components for CSS-in-JS theming
- 🚀 Optimized with Vite for fast development and production builds
- 🔒 Security best practices including CSP, CSRF protection, and input validation
- 📱 Mobile-first responsive design
- 🎯 Accessible UI components

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   git clone <repository-url>
   cd multi-theme-app

2. Install dependencies:
   npm install
   # or
   yarn install

3. Start the development server:
   npm run dev
   # or
   yarn dev

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🎨 Available Themes

1. **Minimalist**
   - Clean, light interface
   - Sans-serif typography
   - Simple, uncluttered design

2. **Dark**
   - Dark color scheme
   - Serif typography
   - Sidebar navigation

3. **Colorful**
   - Vibrant color palette
   - Playful Google Font (Pacifico)
   - Card-based layout

## 🛠 Project Structure

src/
├── components/      # Reusable UI components
├── contexts/       # React context providers
├── hooks/          # Custom React hooks
├── pages/          # Page components
├── styles/         # Global styles and theme configurations
├── types/          # TypeScript type definitions

## 🛡 Security Features

- **Content Security Policy (CSP)** headers
- **Cross-Site Request Forgery (CSRF)** protection
- **Cross-Site Scripting (XSS)** prevention
- **Rate limiting** for API endpoints
- Input validation and sanitization
- Secure HTTP headers

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:

- Responsive navigation menu
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactive elements

## 🧪 Testing

Run the test suite:

npm test
# or
yarn test

## 🏗 Building for Production

To create a production build:

npm run build
# or
yarn build

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tooling
- [Styled Components](https://styled-components.com/) for CSS-in-JS theming
- [React](https://reactjs.org/) for the UI library
- [TypeScript](https://www.typescriptlang.org/) for type safety
