import {useTemaById} from '../api';
import {useTemaSelectedTema} from '../SelectedTema';
import { useAskSelectedAsk, useAskSetSelectedAsk } from '../SelectedAsk'
import CreateQuestion from './CreateQuestion'
import AnswerQuestion from './AnswerQuestion'
import AnswerViewer from './AnswerViewer'
import New_Ask from './Acordeon_P';
import New_Answer from './Acordeon_R';

function AskViewer(){
    const selectedAsk = useAskSelectedAsk();
    const setSelectedAsk = useAskSetSelectedAsk();
    
    const id = useTemaSelectedTema()

    const preguntas = useTemaById(id);

    if(!preguntas || preguntas.error) return 'Selecciona una temática'    

    return(
        <>
        <h2>Preguntas en esta tematica</h2>
        <ul className="pregunta-lista">
            {preguntas && preguntas.map(pregunta =>
                
                <li className={id === pregunta.id_tematica}>
                    <>
                     <h4>{pregunta.titulo}</h4>
                      <div>
                        <article>{pregunta.cuerpo}</article>
                        <span>{pregunta.fecha_consulta}</span>
                        <div>
                        <button className={selectedAsk===pregunta.id ? 'active' : ''} onClick={() => setSelectedAsk(pregunta.id)} key={pregunta.id}>Ver respuesta</button>
                        </div>
                        <div>
                        <AnswerViewer />
                        </div>
                      </div>
                      
                       <New_Answer>
                           <AnswerQuestion />
                       </New_Answer>
                    </>
                </li>

                )}

        </ul>
        <div>
            <New_Ask>
                <CreateQuestion />
            </New_Ask>
        </div>
        </>
    )


}

export default AskViewer;