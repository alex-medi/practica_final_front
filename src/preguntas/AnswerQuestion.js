import { useState } from 'react'
import './respuesta.css';

import { respuesta } from '../api'
import {useUser} from '../usuarios/UserContext';

import { useParams } from 'react-router-dom';
function Respuestas() {
    
  const [text, setText] = useState('')
  
  const me = useUser();
  
  const selectedQuestion = parseInt(useParams().idPregunta || "1")
  if(me.experto === 0) return null  
  const handleSubmit = async e => {
    e.preventDefault()
    await respuesta(selectedQuestion, text, me.token);
    
  }

  return (
    <div className="respuesta">
      <form onSubmit={handleSubmit}>
        <label className="cuerpo">
          Describir respuesta:
          <textarea type="texto" value={text} onChange={e => setText(e.target.value)} />
        </label>
                
        <button>Enviar Respuesta</button>
        
      </form>
    </div>
  );
}

export default Respuestas;