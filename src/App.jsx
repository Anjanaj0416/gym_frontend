import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import HomePage from './page/homepage';



function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-center"/>
      <Routes>
        <Route path="/*" element={<HomePage/>} /> 
        
      </Routes>
    </BrowserRouter>
  );
}


export default App