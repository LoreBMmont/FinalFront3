import React from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from "./utils/global.context";
import estadoInicial from './utils/global.context';
//const {darkMode } = useContext(estadoInicial);

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/favs">Favorito</Link> 
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/contact">Contacto</Link> 
        </li>
        <li className="nav-item">
        <button type="button" class="btn btn-dark">Dark</button>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar
