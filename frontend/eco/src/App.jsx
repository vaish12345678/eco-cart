import { useState } from 'react'
import './App.css'
import RetailerDashboard from './components/RetailerDashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AddProduct from './components/AddProduct';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<RetailerDashboard/>}/>
        <Route path="/d" element={<AddProduct/>}/>
        </Routes>
       
    </Router>
    

      </>
  )
}

export default App
