import React from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../PageDefault'


function CadastroVideo(){
    return (
      <PageDefault>
        <h1>Cadastro de Vídeo</h1>
        <form>

          <label>
            Nome da Categoria:
            <input
                type="text"
                          />
            </label>

        <button>
          Cadastrar
          </button>
        </form>

        <Link to="/cadastro/categoria">
           Cadastro Categoria 
        </Link>
        <p></p>
        <Link to="/">
          Voltar para Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo;