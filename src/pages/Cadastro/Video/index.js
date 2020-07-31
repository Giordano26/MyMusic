import React from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../PageDefault'



function CadastroVideo(){

    return (
      <PageDefault>
        <Link to="/cadastro/categoria">
            Cadastro de Categoria
        </Link>
        <p></p>
        <Link to="/">
           Voltar para Home 
        </Link>

      </PageDefault>
    )
  }


  export default CadastroVideo;