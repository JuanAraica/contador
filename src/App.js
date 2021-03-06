import React from 'react';
import logo from './logo.svg';
import './App.css';

import SoyJuan from './SoyJuan'
import Contador from './Contador'

function App() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-intro">
          {/*Incluimos nuestro componente*/}
          <SoyJuan/>
          <Contador/>
        </div>
        <br></br>
        <a
          className="App-link"
          href="https://github.com/JuanAraica/contador.git"
          target="_blank"
          rel="noopener noreferrer"
        >
CLICK AQUI
        </a> para ir al repositorio.
        <a
          className="App-link"
          href="https://drive.google.com/drive/folders/1-MrqCMJ6d_XXcGalfRmgCw28PZBQFZ9H?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
Video Explicativo
        </a>
      </header>
    </div>
  );
}

export default App;
