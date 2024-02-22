import { useEffect, useState } from "react";
// import "./styles.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);
  const [texto, settTexto] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        try {
          const response = await fetch(
            "https://hackaton-sala9.onrender.com/property/findByCity?city=madrid"
          );
          if (response.ok) {
            const dog = await response.json();
            settTexto(dog.name);
            setError(null);
            setIsLoading(false);
          } else {
            setError("Hubo un error al obtener el perrito");
          }
        } catch (error) {
          setError("No pudimos hacer la solicitud para obtener el perrito");
        }
      }
      fetchData();
    }
  }, [isLoading]);

  const randomDog = () => {
    setIsLoading(true);
  };

  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }

  if (error) { // ⬅️ mostramos el error (si es que existe)
    return (
      <div className="App">
        <h1>{error}</h1>
        <button onClick={randomDog}>Volver a intentarlo</button>
      </div>
    );
  }

  return (
    <div className="App">
      <img src={imageUrl} alt="Imagen de perrito aleatoria" />
      <button onClick={randomDog}>
        ¡Otro!{" "}
        <span role="img" aria-label="corazón">
          ❤️
        </span>
      </button>
    </div>
  );
}

// export default function Home1() {

//     const [cityInput, setCityInput] = useState('');
   

//         return (
//         <section>
//         <Navbar />
//         <main className='background-home'>
//           <div className='blue-container card'>
//             <div className='card-body'>
//               <h2 className='h2'>Tu piso de Alquiler perfecto te espera aquí</h2>
//               <div className='select-container'>
                
//                 <select className="form-select" 
//                 aria-label="Default select example"
//                 onChange={(e) => setCityInput(e.target.value)}
//                                 value={cityInput}
//                 >
//                   <option selected>¿Dónde buscas Alquilar?</option>
//                   <option value="1">Madrid</option>
//                   <option value="2">Barcelona</option>
//                   <option value="3">Gijón</option>
//                 </select>
//               </div>
//               <div className='button-container'>
//                 {/* Utiliza Link para redirigir a la página /catalogue */}
//                 <Link to={`/catalogue?city=${cityInput}`}>
//                   <button className='button-home'>Buscar</button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </main>
//       </section>
//     );
// }
