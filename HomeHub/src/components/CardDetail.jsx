import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CardDetail() {
    return (
        <section className="d-flex justify-content-center">
            <div className="card mx-auto" style={{ width: "60rem", backgroundColor: "#F4F4FB", borderRadius: "8px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", border: "none" }}>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active d-flex justify-content-center align-items-center">
                            <img src="/img/house-1-fv.png" className="d-block w-100" alt="..." style={{ maxWidth: "70%", maxHeight: "70%",  marginTop: "20px" }} />
                        </div>
                        <div className="carousel-item d-flex justify-content-center align-items-center">
                            <img src="..." className="d-block w-100" alt="..." style={{ maxWidth: "100%", maxHeight: "300px" }} />
                        </div>
                        <div className="carousel-item d-flex justify-content-center align-items-center">
                            <img src="..." className="d-block w-100" alt="..." style={{ maxWidth: "100%", maxHeight: "300px" }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden" style={{ color: '#003459'}}>Next</span>
                    </button>
                </div>
                <div className="card-body d-flex flex-column align-items-center">
                    <h5 className="card-title">Piso calle de Muntaner</h5>
                    <p className="card-text">Piso moderno de dos dormitorios en el centro de la ciudad, luminoso y amplio, con cocina totalmente equipada y baño completo. Suelos de parqué, calefacción central y aire acondicionado. No se admiten mascotas. Disponible para alquiler a largo plazo.</p>
                    <div className="mt-auto d-flex align-items-center justify-content-end">
                        <a href="#" className="btn btn-primary btn-lg" style={{ backgroundColor: "#003459", width: "200px", textAlign: "center" }}>Contactar</a>
                        <img src="/icons/Like.png" alt="..." style={{ width: "30px", marginLeft: "30px" }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
