import React from "react";
import './MainApp.css';

function Footer() {
    return (
      <div className="footer-wrapper">
        <footer className="footer">
        <span>
            <h4>Service Client</h4>
            <a href="nous contacter">Nous contacter</a>
            <br/>
            <a href="sav">SAV</a>
        </span>
        <span>
            <h4>Informations pratiques</h4>
            <a href="mentions légales">Mentions légales</a>
            <br/>
            <a href="cdv">Conditions générales de vente</a>
        </span>
        <span>
            <h4>Réseaux sociaux</h4>
            <a href="facebook">Facebook</a>
            <br/>
            <a href="instagram">Instagram</a>
        </span>
        </footer>
      </div>
    );
  }

export default Footer;