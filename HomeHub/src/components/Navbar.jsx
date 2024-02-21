import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <section>
        <Link to="/">
            <img className="h-12 w-auto px-2" src="/icons/Logo.png"></img>
          </Link>
        <header>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Publica tu anuncio</a>
                    </li>
                    <li className="nav-item">
                       <Link to="/favorites">Favoritos</Link>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </header>
    </section>
  )
}
