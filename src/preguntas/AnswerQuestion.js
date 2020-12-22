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
    const captura = e.target.captura.files[0]
    const fd = new FormData()
    fd.append('captura', captura)
    fd.append('descripcion', text)

    await respuesta(selectedQuestion, fd, me.token);
    
  }

  return (
    <div className="respuesta">
      <form onSubmit={handleSubmit}>
        <label className="cuerpo">
          Describir respuesta:
          <textarea type="texto" value={text} onChange={e => setText(e.target.value)} />
        </label>
        <label className="user-image">
            <span>Añadir captura</span>
            <div className="value">
              <div className="captura"/>
              <input name="captura" type="file" accept="image/*" />

            </div>
          </label>
                
        <button>Enviar Respuesta</button>
        
      </form>
    </div>
  );
}

export default Respuestas;