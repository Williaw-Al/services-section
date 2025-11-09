import './App.css';
import { AppRoutes } from './pages/app-routes';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from './contexts/theme-context';
import { HeaderThemeToggler } from './components/header-theme-toggler';


function App() {

  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <HeaderThemeToggler />
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
