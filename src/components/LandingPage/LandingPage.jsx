import React from "react";
import "./Landingpage.css";

const LandingPage = ({ onButtonClick }) => {
  return (
    <div className="container text-center mt-5 text-light rounded">
      <h1 className="mb-4">¡Encuentra Farmacias de Turno en Tu Área!</h1>
      <p className="lead lpp">
        <strong>
          ¿Necesitas encontrar una farmacia abierta en momentos críticos?
        </strong>
        <hr></hr>Nuestra aplicación te permite buscar y ubicar fácilmente las
        farmacias de turno cercanas a ti. <br />
        Con información actualizada y fácil de usar, ¡nunca te quedarás sin
        opciones!
      </p>
      <p className="lead lpp">
        <strong>Características Destacadas:</strong>
        <ul>
          <li>Busca farmacias por nombre, dirección o comuna.</li>
          <li>Horarios y día de funcionamiento. </li>
          <li>Filtra los resultados según tus necesidades. </li>
        </ul>
      </p>
      <p className="lead lpp"><strong>¡Cuidamos de ti y de tu salud en todo momento!</strong></p>
      <button className="btn btn-primary" onClick={onButtonClick}>
        Continuar
      </button>
    </div>
  );
};

export default LandingPage;
