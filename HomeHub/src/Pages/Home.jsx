
// import { useState } from "react";
// import Navbar from '../components/Navbar.jsx'
// import { Link } from 'react-router-dom';
// import { Card, Button } from 'react-bootstrap';


// export default function Home() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchResults, setSearchResults] = useState([]);

//   const search = async (city) => {
//     try {
//       setIsLoading(true);
//       let apiUrl = '';
//       if (city === 'madrid') {
//         apiUrl = 'https://hackaton-sala9.onrender.com/property/findByCity?city=madrid';
//       } else if (city === 'barcelona') {
//         apiUrl = 'https://hackaton-sala9.onrender.com/property/findByCity?city=barcelona';
//       } else if (city === 'gijon') {
//         apiUrl = 'https://hackaton-sala9.onrender.com/property/findByCity?city=gijon';
//       }

//       const response = await fetch(apiUrl);
//       if (response.ok) {
//         const result = await response.json();
//         setSearchResults(result); 
//       } else {
//         setError("Hubo un error al cargar los datos");
//       }
//     } catch (error) {
//       setError("No se pudo completar la solicitud");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section>
//       <Navbar />
//       <main className='background-home'>
//         <div className='blue-container card'>
//           <div className='card-body'>
//             <h2 className='h2'>Tu piso de Alquiler perfecto te espera aquí</h2>
//             <div className='button-container'>
//               <button className='button-home' onClick={() => search("madrid")}>Madrid</button>
//               <button className='button-home' onClick={() => search("barcelona")}>Barcelona</button>
//               <button className='button-home' onClick={() => search("gijon")}>Gijón</button>
//             </div>
//           </div>
//         </div>


//         {/* Mostrar mensaje de error si hubo un error */}
//         {error && <p>{error}</p>}
//       </main>
//         <div className="bg-white p-8">
//         <h1 className="text-4xl font-bold text-center my-4">Connecting Hearts to Homes</h1>
//         <div className="flex justify-center mb-6">
//           <div className="w-16 h-1 bg-gray-300" />
//         </div>
//         <div className="row">
//           {searchResults.map((result, index) => (
//             <div className="col-md-6" key={index}>
//               <Card>
//                 <Card.Img variant="top" src={result.img1} alt={`Imagen de ${result.name}`} />
//                 <Card.Body>
//                   <Card.Title>{result.name}</Card.Title>
//                   <Card.Text>{result.description}</Card.Text>
//                   <div className="buttons-catalogue">
//                   <Link to="/contact">
//                       <Button variant="primary">Contactar</Button>
//                     </Link>
//                     <Button variant="primary">Ver más</Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';


export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const search = async (city) => {
    try {
      setIsLoading(true);
      let apiUrl = '';
      if (city === 'madrid') {
        apiUrl = 'https://hackaton-sala9.onrender.com/property/findByCity?city=madrid';
      } else if (city === 'barcelona') {
        apiUrl = 'https://hackaton-sala9.onrender.com/property/findByCity?city=barcelona';
      } else if (city === 'gijon') {
        apiUrl = 'https://hackaton-sala9.onrender.com/property/findByCity?city=gijon';
      }

      const response = await fetch(apiUrl);
      if (response.ok) {
        const result = await response.json();
        setSearchResults(result); 
      } else {
        setError("Hubo un error al cargar los datos");
      }
    } catch (error) {
      setError("No se pudo completar la solicitud");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section>
      <Navbar />
      <main className='background-home'>
        <div className='blue-container card'>
          <div className='card-body'>
            <h2 className='h2'>Tu piso de Alquiler perfecto te espera aquí</h2>
            <div className='button-container'>
              <button className='button-home' onClick={() => search("madrid")}>Madrid</button>
              <button className='button-home' onClick={() => search("barcelona")}>Barcelona</button>
              <button className='button-home' onClick={() => search("gijon")}>Gijón</button>
            </div>
          </div>
        </div>

        {/* Mostrar mensaje de error si hubo un error */}
        {error && <p>{error}</p>}
      </main>
      <div className="bg-white p-8">
        <h1 className="text-4xl font-bold text-center my-4">Connecting Hearts to Homes</h1>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-gray-300" />
        </div>
        <div className="row">
          {searchResults.map((result, index) => (
            <div className="col-md-6" key={index}>
              <Card>
                <Card.Img variant="top" src={result.img1} alt={`Imagen de ${result.name}`} />
                <Card.Body>
                  <Card.Title>{result.name}</Card.Title>
                  <Card.Text>{result.description}</Card.Text>
                  <div className="buttons-catalogue">
                    <Link to="/details">
                      <Button variant="primary">Ver más</Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
