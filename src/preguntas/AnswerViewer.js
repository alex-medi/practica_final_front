import { useRespuestaByIdP } from '../api'
import AnswerItem from './AnswerItem'
import { useParams, Redirect } from 'react-router-dom';
import { useUser } from '../usuarios/UserContext';
import { useRespuestaById } from '../api';
import './answerviewer.css';

function AnswerViewer() {
  const me = useUser()

  const selectedQuestion = parseInt(useParams().idPregunta || "1")
  const selectedAnswer = parseInt(useParams().idRespuesta || "1")

  const respuestas = useRespuestaByIdP(selectedQuestion)
  const respuestaElegida = useRespuestaById(selectedAnswer)
  if (!me) return "Para poder ver las respuestas, registrate!",<Redirect to="/user/acceso" />
  if (!respuestas || respuestas.error) return null
 
  return (
    <>
      <h3 className="r">Respuestas</h3>
      <ul className="respuesta-lista">
        {respuestas && respuestas.map(respuesta =>
        
        <AnswerItem 
           
        respuesta={respuesta}
        key={respuesta.id}
        
        />

        )}

      </ul>

    </>

  )
}

export default AnswerViewer