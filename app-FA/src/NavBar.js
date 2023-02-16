import React from 'react'
import logo4 from './imgs/Logo_4.png'
import 'bootstrap'
import {Link} from 'react-router-dom'
export default function NavBar(props){
let user = sessionStorage.getItem("usuario")
  let msg = "";
  if(user != "" && user !== null){
    msg = "Bienvenido, " + user;
  }
    return(

        <nav className="navbar navbar-expand-sm  sticky-top justify-content-center" id="nav_pc">
        
        <Link className="navbar-brand" to="/Home">
            <img src={logo4}  className="logo" />
        </Link>
        <div>{msg}</div>
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link  className="nav-link" to="/Home">INICIO</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/HistoriaClinica">PERFIL</Link>
            </li>
            <li className="nav-item dropdown ">
            <a className="nav-link" href="#" >
                CULTIVOS
            </a>
            <div className="dropdown-menu ms-auto">
                <Link className="dropdown-item" to="/Maiz">MAIZ</Link>
                <Link className="dropdown-item" to="/Trigo">TRIGO</Link>
                <Link className="dropdown-item" to="/Arroz">ARROZ</Link>
                <Link className="dropdown-item" to="/CanaAzucar">CAÑA DE AZUCAR</Link>
                <Link className="dropdown-item" to="/Tomate">TOMATE</Link>
                <Link className="dropdown-item" to="/Papa">PAPA</Link>
            </div>
            </li>
            
        </ul>
        </nav>



    

    )   
}