import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <section>
        
        <header>
          <Link to="/">
              <img className="logo-navbar" src="/icons/Logo.png"></img>
            </Link>
                <ul className="nav justify-content-end navbar">
                    <li className="nav-item">
                      <Link className='link-navbar' to="/details">Details</Link>
                    </li>
                    <li className="nav-item">
                      <Link className='link-navbar' to="/contact">Contacto</Link>
                    </li>
                </ul>
            </header>
    </section>
  )
}
