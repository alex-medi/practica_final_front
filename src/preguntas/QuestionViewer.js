import { useState } from 'react'
import { useParams } from "react-router-dom";
import { usePreguntaById } from "../api";
import { useUser } from '../usuarios/UserContext';
import AnswerQuestion from './AnswerQuestion';
import AnswerViewer from "./AnswerViewer";
import './questionviewer.css';
const moment = require('moment');

function QuestionViewer() {

    const me = useUser()
    const { idPregunta } = useParams()
    const pregunta = usePreguntaById(idPregunta)
    const [key, setKey] = useState(1)
        
    if (!pregunta) return 'Cargando'
    return (
        <div className="question-answer">
            <div className="question-vista">
            <h4>{pregunta.titulo}</h4>
            <article>{pregunta.cuerpo}</article>

            {pregunta.captura &&
            <div className="captura-wrapper">
            <img className="captura" src={pregunta.captura} />
            </div>
            }
            <div className="card-data">
                <div>
                    <label>Consultado por:<label className="separacion"> ''</label></label>
                    <label className="user">{pregunta.login}</label>
                </div>
                <div className="fecha">{moment(pregunta.fecha_consulta).format('DD/MM/YYYY HH:mm')}</div>
                </div>
            </div>
            {me &&
                <div className="ver-respuesta">
                    <AnswerViewer key={key} reload={() => setKey(key + 1)} />
                </div>
            }
            {me &&
                <div className="contestar">
                    <AnswerQuestion reload={() => setKey(key + 1)} />
                </div>
            }
        </div>

    )
}

export default QuestionViewer;