import { useState } from 'react'
import './respuesta.css';

import { respuesta } from '../api'
import {useUser} from '../usuarios/UserContext';
import {useAskSelectedAsk} from '../SelectedAsk'
function Respuestas() {
    
  const [text, setText] = useState('')
    
  const me = useUser();
  const id = useAskSelectedAsk();
  const handleSubmit = async e => {
    e.preventDefault()
    await respuesta(id, text, me.token);
    
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