import { useRespuestaByIdP } from '../api'
import AnswerItem from './AnswerItem'
import { useParams, Redirect } from 'react-router-dom';
import { useUser } from '../usuarios/UserContext';

function AnswerViewer() {
  const me = useUser()

  const selectedQuestion = parseInt(useParams().idPregunta || "1")

  const respuestas = useRespuestaByIdP(selectedQuestion)
  if (!me) return "Para poder ver las respuestas, registrate!",<Redirect to="/user/acceso" />
  if (!respuestas || respuestas.error) return null
 
  return (
    <>
      <h4>Respuesta</h4>
      <ul className="pregunta-lista">
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