import React, { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [pregunta, setPregunta] = useState('');
    const [politicaPrivacidad, setPoliticaPrivacidad] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleTelefonoChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setTelefono(value);
    };

    const handlePreguntaChange = (e) => {
        setPregunta(e.target.value);
    };

    const handlePoliticaPrivacidadChange = (e) => {
        setPoliticaPrivacidad(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform form validation
        if (!nombre || !email || !telefono || !pregunta || !politicaPrivacidad) {
            alert('Por favor, complete todos los campos y acepte la política de privacidad.');
            return;
        }

            // Question validation
    if (pregunta.length < 10) { // Check if question is at least 10 characters long
        alert('Por favor, introduzca una pregunta de al menos 10 caracteres.');
        return;
    }

        // Name validation
    const nameRegex = /^[a-zA-Z\s]*$/; // Only allows letters and spaces
    if (!nameRegex.test(nombre)) {
        alert('Por favor, introduzca un nombre válido.');
        return;
    }

        // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, introduzca un correo electrónico válido.');
        return;
    }

        // Phone validation
        const phoneRegex = /^[0-9]{7}$/; // Allows 10 to 15 digits
        if (!phoneRegex.test(telefono)) {
            alert('Por favor, introduzca un número de teléfono válido.');
            return;
        }

        // Show modal window
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setNombre('');
        setEmail('');
        setTelefono('');
        setPregunta('');
        setPoliticaPrivacidad(false);

    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                    <h2>Pregunta al anunciante</h2>
                    <br/>
                <label>
                    <textarea placeholder='Escribe tu mensaje...' value={pregunta} onChange={handlePreguntaChange} />
                </label>
                <br />
                <label className="email">
                    Tu email
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label>
                    Tu teléfono
                    <input type="tel" value={telefono} onChange={handleTelefonoChange} />
                </label>
                <br />
                <label className="name">
                    Tu nombre
                    <input type="text" value={nombre} onChange={handleNombreChange} />
                </label>
                <label className="checkbox-privacy">
                    <input className="checkbox-privacy" type="checkbox" checked={politicaPrivacidad} onChange={handlePoliticaPrivacidadChange} />
                    Acepto la política de privacidad
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>

            {modalVisible && (
                <div className="modal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-content" style={{ backgroundColor: '#f4f4fb', padding: '20px', borderRadius: '5px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>Su mensaje ha sido enviado con éxito, pronto el anunciante se contactará con usted!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Formulario;
