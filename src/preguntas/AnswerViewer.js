import {usePreguntaById} from '../api'

import { useParams } from 'react-router-dom';

function AnswerViewer() {
  
  const selectedQuestion = parseInt(useParams().idPregunta || "1")
  
  const respuestas = usePreguntaById(selectedQuestion)
  if (!respuestas || respuestas.error) return null
    
  return (
   <>
        <h4>Respuesta</h4>
        <ul className="pregunta-lista">
            {respuestas && respuestas.map(respuesta =>
                
                <li className={selectedQuestion === respuesta.id_pregunta}>
                    <>
                     
                      <ul>
                        <li>{respuesta.descripcion}</li>
                        <li>{respuesta.fecha_respuesta}</li>
                      </ul>
                       
                    </>
                </li>

                )}

        </ul>
        
        </>
        
  )
}

export default AnswerViewer