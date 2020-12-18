import { useState } from 'react'
import './createquestion.css';
import { useParams, Redirect } from 'react-router-dom';
import { pregunta } from '../api'
import {useUser} from '../usuarios/UserContext';
import Auth from '../Auth';

function Preguntas() {
 
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
   
  const me = useUser();
      

  const selectedTema = parseInt(useParams().idTema || "1")
  if (!me) return <Redirect to="/user/acceso" />
  
  const handleSubmit = async e => {
    e.preventDefault()
    const captura = e.target.captura.files[0]
    const fd = new FormData()
    fd.append('captura', captura)
    fd.append('title', title)
    fd.append('text', text)
    await pregunta(selectedTema, fd, me.token);
    
  }

  return (
    <div className="pregunta">
      <form onSubmit={handleSubmit}>
      <label>
          Título:
          <input value={title} onChange={e => setTitle(e.target.value)} >
              
          </input>
        </label>
        <label className="cuerpo">
          Cuerpo:
          <textarea type="texto" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <label className="user-image">
            <span>Añadir captura</span>
            <div className="value">
              <div className="captura"/>
              <input name="captura" type="file" accept="image/*" />

            </div>
          </label>
                
        <button>Enviar Pregunta</button>
        
      </form>
    </div>
  );
}

export default Preguntas;