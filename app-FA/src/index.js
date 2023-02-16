import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Maiz from './Maiz';
import Trigo from './Trigo';
import Arroz from './Arroz';
import CanaAzucar from './CanaAzucar';
import Papa from './Papa';
import Tomate from './Tomate';
import AnunciosBar from './AnunciosBar';
import Home from './Home';
import NavBar from './NavBar';
import NavBar_M from './NavBar_M';
import Footer from './Footer';
import LogIn from './LogIn';
import { BrowserRouter, matchRoutes, Route, Routes } from 'react-router-dom';




ReactDOM.render(
  
  <React.StrictMode>
    {console.log("index", sessionStorage.getItem("usuario"))}
    
    <BrowserRouter>
    <AnunciosBar/>
    <NavBar_M/>
    <NavBar/>
    <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/Maiz' element={<Maiz />}/>
    <Route path='/Trigo' element={<Trigo />}/>
    <Route path='/Arroz' element={<Arroz />}/>
    <Route path='/CanaAzucar' element={<CanaAzucar />}/>
    <Route path='/Papa' element={<Papa />}/>
    <Route path='/Tomate' element={<Tomate />}/>
    <Route path='/LogIn' element={<LogIn/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);



