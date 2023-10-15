import React, { useState, useEffect } from "react";
import "./MiApi.css";
import Card from "../Card/Card";

function MiApi({ terminoBusqueda, handleInputChange }) {
  const [info, setInfo] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const url = "https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php";
      const response = await fetch(url);
      const data = await response.json();
      const aggregatedData = aggregateData(data);
      setInfo(aggregatedData);
      setFilteredInfo(aggregatedData);
    } catch (error) {
      console.error("Error consiguiendo datos:", error);
    }
  };

  const aggregateData = (data) => {
    const aggregatedData = {};

    data.forEach((local) => {
      const { local_id, funcionamiento_dia, local_nombre } = local;
      const trimmedName = local_nombre.trim();

      if (aggregatedData[local_id]) {
        aggregatedData[
          local_id
        ].funcionamiento_dia += `, ${funcionamiento_dia}`;
      } else {
        aggregatedData[local_id] = { ...local, local_nombre: trimmedName };
      }
    });

    return Object.values(aggregatedData);
  };

  useEffect(() => {
    if (terminoBusqueda.trim() !== "") {
      const filteredData = info.filter((local) =>
        Object.values(local).some((value) =>
          value.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        )
      );
      const sortedData = [...filteredData].sort((a, b) =>
        a.local_nombre.localeCompare(b.local_nombre)
      );
      setFilteredInfo(sortedData);
    } else {
      const sortedData = [...info].sort((a, b) =>
        a.local_nombre.localeCompare(b.local_nombre)
      );
      setFilteredInfo(sortedData);
    }
  }, [terminoBusqueda, info]);

  return (
    <div className="row">
      {filteredInfo.map((local) => (
        <div className="col-md-4" key={local.local_id}>
          <Card local={local} />
        </div>
      ))}
    </div>
  );
}

export default MiApi;
