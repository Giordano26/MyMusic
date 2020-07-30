import React from 'react'
import './styles.css'
import PageDefault from '../PageDefault'


function Pagina404 (){
    return(
      <PageDefault>
        <div className="Description">
          <div><h1 className="text">Não há nada aqui ¯\_(ツ)_/¯</h1></div>
        </div>
        <div className="error404">
          <div className="image"><img src="http://gif.co/bbhXK.gif" alt="gif" /></div>
        </div>
      </PageDefault>
        )
}

export default Pagina404
