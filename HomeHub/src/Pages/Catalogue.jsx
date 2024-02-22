import React from 'react';
import Navbar from '../components/Navbar'
import { Card, Button } from 'react-bootstrap';

export default function Catalogue() {
  return (
    <div>
    <Navbar />
    <div className="bg-white p-8">
      <h1 className="text-4xl font-bold text-center my-4">Connecting Hearts to Homes</h1>
      <div className="flex justify-center mb-6">
        <div className="w-16 h-1 bg-gray-300" />
      </div>
      <div className="row">
        <div className="col-md-6">
          <Card>
            <Card.Img variant="top" src="/img/room.avif" alt="Modern house" />
            <Card.Body>
              <Card.Title>Piso moderno de dos dormitorios en el corazón de la ciudad, calle de Muntaner</Card.Title>
              <Card.Text>
                Piso moderno de dos dormitorios en el centro de la ciudad. Luminoso y amplio, con suelos de madera, cocina totalmente equipada. Cuenta con aire acondicionado central y aire acondicionado. No se admiten mascotas. Disponible para alquiler a largo plazo.
              </Card.Text>
              <Button variant="primary">Contactar</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Footer content</Card.Footer>
          </Card>
        </div>
        <div className="col-md-6">
          <Card>
            <Card.Img variant="top" src="/img/room2.avif" alt="Cozy apartment" />
            <Card.Body>
              <Card.Title>Piso moderno de dos dormitorios en el corazón de la ciudad</Card.Title>
              <Card.Text>
                Piso moderno de dos dormitorios en el centro de la ciudad. Luminoso y amplio, con suelos de madera, cocina totalmente equipada. Cuenta con aire acondicionado central y aire acondicionado. No se admiten mascotas. Disponible para alquiler a largo plazo.
              </Card.Text>
              <Button variant="primary">Contactar</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Footer content</Card.Footer>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
}
