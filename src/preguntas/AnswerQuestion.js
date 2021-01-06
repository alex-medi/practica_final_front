import { useState } from 'react'
import './respuesta.css';
import { respuesta } from '../api'
import {useUser} from '../usuarios/UserContext';

import { useParams } from 'react-router-dom';
function Respuestas({ reload }) {
    
  const [text, setText] = useState('')
  
  const me = useUser();
  
  const selectedQuestion = parseInt(useParams().idPregunta || "1")
  if(me.experto === 0) return null  
  const handleSubmit = async e => {
    e.preventDefault()
    const captura = e.target.captura.files[0]
    const fd = new FormData()
    fd.append('captura', captura)
    fd.append('descripcion', text)

    await respuesta(selectedQuestion, fd, me.token);
    reload()
  }

  return (
    <div className="respuesta">
      <h4>Responder pregunta</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Describir respuesta
          
        </label>
        <textarea className="cuerpo" type="texto" value={text} onChange={e => setText(e.target.value)} />
        <label className="user-image">
            <span>Añadir captura</span>
            <div className="value">
              
              <input name="captura" type="file" accept="image/*" />

            </div>
          </label>
                
        <button>Enviar Respuesta</button>
        
      </form>
    </div>
  );
}

export default Respuestas;