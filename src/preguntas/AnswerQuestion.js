import { useState } from 'react'
import './respuesta.css';

import { respuesta } from '../api'
import {useUser} from '../usuarios/UserContext';

import { useParams } from 'react-router-dom';
function Respuestas() {
    
  const [text, setText] = useState('')
  
  const experto = useUser();
  const selectedQuestion = parseInt(useParams().idPregunta || "1")
    
  const handleSubmit = async e => {
    e.preventDefault()
    await respuesta(selectedQuestion, text, experto);
    
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