import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";
import Logo from "/"

export default function Navbar() {
  return (
    <section>
        <Link to="/">
            <img className="" src="src/assets/Logo.png"></img>
          </Link>
        <header>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Publica tu anuncio</a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#">Mis favoritos</a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Iniciar sesión</a>
                    </li>
                </ul>
            </header>
    </section>
  )
}
