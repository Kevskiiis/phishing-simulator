import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page Layouts:
import LandingPageLayout from './layouts/LandingPageLayout.tsx';

// Pages:
import LandingPage from './pages/LandingPage/LandingPage.tsx';
import AuthPage from './pages/AuthPage/AuthPage.tsx';

// Routes:
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPageLayout/>}>
                <Route  index element={<LandingPage/>}/>
                <Route path='auth' element={<AuthPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
export default App;
