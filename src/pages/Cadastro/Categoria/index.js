import React from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../PageDefault'


function CadastroCategoria(){
    return (
      <PageDefault>
        <h1>Cadastro de Categoria</h1>
        <form>
          <label>
            Nome da categoria:
            <input
                type="text"
                          />
            </label>
        <button>
          Cadastrar
          </button>
        </form>
        <Link to="/cadastro/video">
            Cadastro de video
        </Link>
        <p></p>
        <Link to="/">
           Voltar para Home 
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;