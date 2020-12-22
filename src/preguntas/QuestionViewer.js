import { useParams } from "react-router-dom";
import { usePreguntaById } from "../api";
import { useUser } from '../usuarios/UserContext';
import AnswerQuestion from './AnswerQuestion';
import AnswerViewer from "./AnswerViewer";

const moment = require('moment');

function QuestionViewer() {
    
    const me = useUser()
    const { idPregunta } = useParams()
    const pregunta = usePreguntaById(idPregunta)
    const photoStyle = pregunta && pregunta.captura && { backgroundImage: 'url(' + pregunta.captura +')'}
    console.log(pregunta)
    if (!pregunta) return 'Cargando'
    return (
        <div>
            <h4>{pregunta.titulo}</h4>
            <article>{pregunta.cuerpo}</article>
            <div className="captura" style={photoStyle}/>
            <span>{moment(pregunta.fecha_consulta).format('lll')}</span>
            {me &&
            <div className="respuesta">
            <AnswerViewer />
            </div>
            }
            {me && 
            <div className="responder">
                <AnswerQuestion />
            </div>
            }
        </div>
          
    )
  }
  
  export default QuestionViewer;