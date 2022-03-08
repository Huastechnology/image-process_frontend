import React from "react";
import cabecera from "../../img/cabecera1.gif";
import "./styles.css";
const Titulo = () => {
  return (
    <div>
      <a href="#">
        <img src={cabecera} alt="" className="cabecera" />
      </a>
      <div className="portadaTec">
        <h3>SECRETARÍA DE EDUCACIÓN PÚBLICA</h3>
        <p>TECNOLÓGICO NACIONAL DE MÉXICO</p>
        <p>INSTITUTO TECNOLÓGICO DE MÉRIDA</p>
      </div>
    </div>
  );
};

export default Titulo;
