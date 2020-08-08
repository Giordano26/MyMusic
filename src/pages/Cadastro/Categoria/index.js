import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../PageDefault'
import './styles.css'
import FormField from '../../../components/Menu/components/FormFiled';


function CadastroCategoria(){
  function setValue(key, value){
    setValues({
      ...values,
      [key]: value,
    })

  }
  function Registro(palavra){
    setValue(palavra.target.getAttribute('name'),palavra.target.value);
   }
  const valoresIniciais = {nome: '',descrição: ''}
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais)

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias,values.nome]);
          setValues(valoresIniciais)
        }}>

          <FormField 
            texto= "Nome da Categoria: "
            type= "text"
            name= "nome"
            value={values.nome}
            onChange={Registro}
          />
          <br></br>
          <FormField
            texto= "Descrição: "
            type= "text"
            name= "descrição"
            value={values.descrição}
            onChange={Registro}
          />

          <br></br>
          
        <button className="button">
          Cadastrar
          </button>
        </form>
        <ul>
          <br></br>
          {categorias.map((categoria,indice) =>{
            return(
              <div className='listbox' key={`${categoria}${indice}`}>
              <li>
                {categoria}
              </li>
              </div>
            )
          })}
        </ul>
        
        
        <Link to="/cadastro/video">
          <br></br>
            Cadastro de Vídeo
        </Link>
        <br></br>
        <Link to="/">
           Voltar para Home 
        </Link>
       
      </PageDefault>
    )
  }

  export default CadastroCategoria;