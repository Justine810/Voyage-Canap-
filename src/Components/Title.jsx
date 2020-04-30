import React from 'react';
import './MainApp.css';
import kenny from '../img/kenny02.png'

function Title() {
  return (
    <div className="title-wrapper">
      <img src={kenny} alt="logo" className="kenny" />
      <div>
        <h1 className="title"> KENNY'S TRAVEL AGENCY </h1>
        <h2 className = "baseline"> KENNY'S TRAVEL AGENCY vous permet de voyager depuis votre canapé ! <br/> Notre agence est spécialisée 
dans l'organisation de voyages virtuels pour les petits revenus.<br />Grâce à nous, vous pourrez découvrir le monde gratuitement tout en restant chez vous #RestezChezVous</h2>
      </div>
  
    </div>
  );
}

export default Title;
