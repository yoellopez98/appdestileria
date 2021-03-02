import React from 'react'
import { useFetch } from "../hooks/useFetch";

export const Cards = () => {
  const consulta = useFetch(
    "http://localhost:3000/api/select"
  );

  const { datos, carga } = consulta;

  const mostrarDatos = () => {
    return datos.data.map((destileria, index) => {

      return(
        <div   className="col animate__animated animate__fadeInUp fadeInDown col-3 mt-3"
        key={index}>
            <div class="card" style={{width: "18rem;", 'margin':'8%'}} >
  <div class="card-body">
    <img src={destileria.imagen}/>
    <h5 class="card-title">Nombre: {destileria.nombre}</h5>
    <p class="card-text">Tipo: {destileria.tipo}</p>
    <p class="card-text">Origen: {destileria.origen}</p>
    <p class="card-text">Grados: {destileria.grados}º</p>
    
  </div>
</div>
        </div>

      );
    });
  };
return (
  <>

    <div className="row">
      {carga ? (
        mostrarDatos()
      ) : (
        <div class="alert alert-primary animate__animated" role="alert" style={{'margin-left':'1%', 'margin-right':'10%', 'textAlign':'center', 'marginTop':'1%'}} >
          Cargando datos
        </div>
      )}


    </div>
    </>


);
};


