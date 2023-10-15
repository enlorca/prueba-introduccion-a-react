import React from "react";
import "./Buscador.css";

const Buscador = ({ searchTerm, handleInputChange }) => {
  const handleChange = (e) => {
    handleInputChange(e.target.value);
  };

  return (
    <div className="sectionBuscar">
      <input
        type="text"
        placeholder="Busca una farmacia"
        name="busqueda"
        className="form-control"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Buscador;
