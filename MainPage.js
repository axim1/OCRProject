// src/components/MainPage.js

import React from 'react';
// Add this line at the top of your src/components/Login.js
import './MainPage.css';

const MainPage = ({ onLogout }) => {
  return (
    <div className="main-container">
      <h2>RICHTER BAUSTOFFE</h2>
      <ul>
        <li>Excel Lagerliste über pdf Datenblätter erzeugen</li>
        <li>Excel Abrechnungsliste für Prohibis Eingabe aus pdf erzeugen</li>
        <li>Mehrere Produktdatenblätter zu einheitlicher Excelliste</li>
      </ul>
      <button onClick={onLogout}>Ausloggen</button>
    </div>
  );
};

export default MainPage;
