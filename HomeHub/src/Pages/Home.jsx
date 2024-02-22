import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <section>
            <Navbar/>
            <main className='background-home'>
                <div className='blue-container card'>
                    <div className='card-body'>
                        <h2 className='h2'>Tu hogar perfecto te espera aquí</h2>
                        <div className='select-container'>
                            <input className="text-input" type="text" placeholder="Escribe una ciudad" />

                            <select className="form-select" aria-label="Default select example">
                            <option selected>¿Dónde?</option>
                            <option value="1">Madrid</option>
                            <option value="2">Barcelona</option>
                            <option value="2">Gijón</option>
                            </select>
                        </div>
                        <div className='button-container'>
                            <button className='button-home'>Buscar</button>
                        </div>
                        
                    </div>
                    
                    
                </div>
            </main>
        </section>
    )
}
