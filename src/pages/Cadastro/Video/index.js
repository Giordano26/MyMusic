import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import PageDefault from '../../PageDefault'
import './styles.css'
import FormField from '../../../components/Menu/components/FormFiled';


function CadastroVideo(){
  function setValue(key, value){
    setValues({
      ...values,
      [key]: value,
    })

  }
  function Registro(palavra){
    setValue(palavra.target.getAttribute('name'),palavra.target.value);
   }
  const valoresIniciais = {nome: '',descrição: '',url:''}
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
            texto= "Nome do Vídeo: "
            type= "text"
            name= "nome"
            value={values.nome}
            onChange={Registro}
          />
          
          <FormField
            texto= "Descrição: "
            type= "text"
            name= "descrição"
            value={values.descrição}
            onChange={Registro}
          />

          <FormField
            texto= "Url do Vídeo: "
            type= "text"
            name= "url"
            value={values.url}
            onChange={Registro}
          />

          
        <button>
          Cadastrar
          </button>
        </form>
        <ul>

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