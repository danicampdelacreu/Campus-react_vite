
import './App.css'

import Header from './components/header/Header'
import Home from './routes/home/Home'
import Campus from './routes/campus/Campus'
import Footer from './components/footer/Footer'
import Equipo from './routes/equipo/Equipo'
import MiniCampus from './routes/minicampus/Minicampus'
import Contacto from './routes/contacto/Contacto'

import { 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements,
  Route } 
  from "react-router-dom";

function App() {

  const router = createBrowserRouter (
    createRoutesFromElements(
      <Route path="/" element={[<Header/>, <Footer/>]} >
        <Route index element ={<Home />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/equipo" element ={<Equipo />} />
        <Route path="/minicampus" element ={<MiniCampus />} />
        <Route path="/contacto" element ={<Contacto />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router ={router} />
    </div>
  )
}

export default App
