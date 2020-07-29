import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Pagina404 from './pages/Page404/index.js'
import CadastroVideo from './pages/Cadastro/Video'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact /> 
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route component={Pagina404}/>
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);
