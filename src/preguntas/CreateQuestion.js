import { useState } from 'react'
import './createquestion.css';

import { pregunta } from '../api'
import {useUser} from '../usuarios/UserContext';
import {useTemaSelectedTema} from '../SelectedTema';
function Preguntas() {
 
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  
  
  const me = useUser();
  const id = useTemaSelectedTema()

  const handleSubmit = async e => {
    e.preventDefault()
    await pregunta(id, title, text, me.token);
    

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