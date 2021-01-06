import { useState } from 'react'
import './createquestion.css';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { pregunta } from '../api'
import { useUser } from '../usuarios/UserContext';

function Preguntas() {

  const history = useHistory()
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
    fd.append('titulo', title)
    fd.append('cuerpo', text)
    const q = await pregunta(selectedTema, fd, me.token);
    history.push('/temas/' + selectedTema + '/pregunta/' + q.id)
  }

  return (
    <div className="pregunta">
      <form onSubmit={handleSubmit}>
        <label>
          Título
      </label>
        <input className="titulo" value={title} onChange={e => setTitle(e.target.value)} >

        </input>
        <label>
          Cuerpo
          
        </label>
        <textarea className="cuerpo" type="texto" value={text} onChange={e => setText(e.target.value)} />
        <label className="user-image">
          <span>Añadir captura</span>
          <div className="value">

            <input name="captura" type="file" accept="image/*" />

          </div>
        </label>

        <button>Enviar Pregunta</button>

      </form>
    </div>
  );
}

export default Preguntas;