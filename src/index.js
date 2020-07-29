import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pagina404 from './pages/Page404/index.js'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function CadastroVideo(){
  return (
    <div>
      Página de Cadastro de Vídeo
    </div>
  )
}

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact /> 
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route component={Pagina404}/>
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
