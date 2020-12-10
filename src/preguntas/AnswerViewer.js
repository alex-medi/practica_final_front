import {usePreguntaById} from '../api'
import {useAskSelectedAsk} from '../SelectedAsk'

function AnswerViewer() {

  const  id  = useAskSelectedAsk()
  
  const respuestas = usePreguntaById(id)
  if (!respuestas || respuestas.error) return null
    
  return (
   <>
        <h4>Respuesta</h4>
        <ul className="pregunta-lista">
            {respuestas && respuestas.map(respuesta =>
                
                <li className={id === respuesta.id_pregunta}>
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