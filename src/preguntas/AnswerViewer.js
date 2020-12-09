import {usePreguntaById} from '../api'
import {useAskSelectedAsk} from '../SelectedAsk'

function AnswerViewer() {

  const  id  = useAskSelectedAsk()
  
  const respuestas = usePreguntaById(id)
    
  return (
   <>
        <h4>Respuestas</h4>
        <ul className="pregunta-lista">
            {respuestas && respuestas.map(respuesta =>
                
                <li className={id === respuesta.id_pregunta}>
                    <>
                     
                      <ul>
                        <li>{respuesta.cuerpo}</li>
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