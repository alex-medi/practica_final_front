import { useState } from 'react'
import './createquestion.css';
import { useParams } from 'react-router-dom';
import { pregunta } from '../api'
import {useUser} from '../usuarios/UserContext';
import Auth from '../Auth';

function Preguntas() {
 
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
   
  const me = useUser();
      

  const selectedTema = parseInt(useParams().idTema || "1")
  if (!me) return <Auth />
  const handleSubmit = async e => {
    e.preventDefault()
    await pregunta(selectedTema, title, text, me.token);
    
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
                
        <button>Enviar Pregunta</button>
        
      </form>
    </div>
  );
}

export default Preguntas;