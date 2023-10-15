import React from "react";
import "./Card.css";

const Card = ({ local }) => {
  const formatoHora = (hora) => {
    return hora.slice(0, 5);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">■ {local.local_nombre}</h5>
        <h6 className="card-subtitle text-muted">
          <i className="fa-solid fa-location-dot"></i> {local.local_direccion},{" "}
          {local.comuna_nombre}
        </h6>
        <p className="card-text font-weight-light">
          <br />
          Día(s): {local.funcionamiento_dia} <br />
          Horario: De {formatoHora(local.funcionamiento_hora_apertura)} hrs. a
          las {formatoHora(local.funcionamiento_hora_cierre)} hrs. <br />
          Telefono: {local.local_telefono}
        </p>
        <p className="card-text"></p>
      </div>
    </div>
  );
};

export default Card;
