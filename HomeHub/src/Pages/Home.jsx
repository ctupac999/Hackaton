import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar'



export default function Home() {

    const [cityInput, setCityInput] = useState('');
   

        return (
        <section>
        <Navbar />
        <main className='background-home'>
          <div className='blue-container card'>
            <div className='card-body'>
              <h2 className='h2'>Tu piso de Alquiler perfecto te espera aquí</h2>
              <div className='select-container'>
                
                <select className="form-select" 
                aria-label="Default select example"
                onChange={(e) => setCityInput(e.target.value)}
                                value={cityInput}
                >
                  <option selected>¿Dónde buscas Alquilar?</option>
                  <option value="1">Madrid</option>
                  <option value="2">Barcelona</option>
                  <option value="3">Gijón</option>
                </select>
              </div>
              <div className='button-container'>
                {/* Utiliza Link para redirigir a la página /catalogue */}
                <Link to={`/catalogue?city=${cityInput}`}>
                  <button className='button-home'>Buscar</button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </section>
    );
}
