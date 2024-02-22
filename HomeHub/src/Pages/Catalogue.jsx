import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Card, Button } from 'react-bootstrap';

export default function Catalogue() {

  const [filteredProperties, setFilteredProperties] = useState([]);
    
    
    const searchParams = new URLSearchParams(location.search);
    const city = searchParams.get('city');

    
    const properties = [     
      {
        "name": "",
        "releaseDate": "",
        "bedrooms": " ",
        "city": "",
        "meters": "",
        "description": "",
        "price": "",
        "igm1": "",
        "igm2": "",
        "igm3": ""
            },
        ];              
            

    // Filtrar propiedades por ciudad
    useEffect(() => {
      const filtered = properties.filter(property => property.city === city);
      setFilteredProperties(filtered);
  }, [city, properties]);


  return (
    <div>
      <Navbar />
      <div className="bg-white p-8">
        <h1 className="text-4xl font-bold text-center my-4">Connecting Hearts to Homes</h1>
        <div className="flex justify-center mb-6">
          <div className="w-16 h-1 bg-gray-300" />
        </div>
        <div className="row">
          {filteredProperties.map(property => (
            <div className="col-md-6" key={property._id}>
              <Card>
                <Card.Img variant="top" src={property.img1} alt={property.name} />
                <Card.Body>
                  <Card.Title>{property.name}</Card.Title>
                  <Card.Text>{property.description}</Card.Text>
                  <div className='buttons-catalogue'>
                    <Button variant="primary">Contactar</Button>
                    <Button variant="primary">Ver más</Button>
                  </div>
                </Card.Body>
                
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
