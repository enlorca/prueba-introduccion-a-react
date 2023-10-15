import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Buscador from "./components/Buscador/Buscador";
import MiApi from "./components/MiApi/MiApi";
import Interfaz from "./components/UI/Interfaz";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [showLandingPage, setShowLandingPage] = useState(true);

  const handleInputChange = (value) => {
    setTerminoBusqueda(value);
  };

  return (
    <>
      {showLandingPage ? (
        <LandingPage onButtonClick={() => setShowLandingPage(false)} />
      ) : (
        <Interfaz>
          <main className="container custom-gradient text-light rounded">
            <div className="titulo rounded">
              <h1 className="text-center">Farmacias de turno</h1>
              <h5 className="text-muted d-flex justify-content-center">
                (Ordenadas alfabeticamente)
              </h5>
              <Buscador handleInputChange={handleInputChange} />

              <hr></hr>
            </div>
            <section className="sectionMain">
              <MiApi
                terminoBusqueda={terminoBusqueda}
                handleInputChange={handleInputChange}
              />
            </section>
          </main>
        </Interfaz>
      )}
    </>
  );
}

export default App;
