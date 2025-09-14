import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages:
import Home from './pages/Home.tsx';
import InstructionsMail from './pages/emailSim/InstructionsMail.tsx';
import InstructionsMessage from './pages/messagesSim/InstructionsMessage.tsx';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/email-phishing-instructions' element={<InstructionsMail/>}/>
            <Route path='/message-phishing-instructions' element={<InstructionsMessage/>}/>
        </Routes>
    </BrowserRouter>
  )
}
export default App
