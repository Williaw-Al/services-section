import './App.css';
import { AppRoutes } from './pages/app-routes';
import { BrowserRouter } from 'react-router';


function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
