import {BrowserRouter, Route} from 'react-router-dom'

import Dominio01 from './dominio01/Dominio01';
import Home from './Home';
import Informacao from './Informacao';
import React from 'react';
import SegundoDominio from './SegundoDominio/SegundoDominio';

function App(props) {
  return (
    <div className="App">      
            <BrowserRouter>
              <Route exact path="/" component={Home} />
              <Route path="/dominio01" component={Dominio01} />
              <Route path="/segundodominio" component={SegundoDominio} />
              <Route path="/informacoes" component={Informacao} />
            </BrowserRouter>
            
    </div>
  );
}

export default App;