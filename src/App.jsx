import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./pages/Home";
import Forecast from "./pages/Forecast";
import FengShui from "./pages/FengShui";
import Service from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import './App.css'


function App() {
  

  return (
     
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path ="/" element = {<Home/>} />
      <Route path ="/forecast" element = {<Forecast/>} />
      <Route path ="/fengshui" element = {<FengShui/>} />
      <Route path ="/service" element = {<Service/>} />
      <Route path ="/contact" element = {<Contact/>} />
     </Routes>
     <Footer />
    </BrowserRouter>
     
     
   
  
     
    
  )
}

export default App
