import { useParams } from "react-router-dom";
import { usePreguntaById } from "../api";

const { default: AnswerViewer } = require("./AnswerViewer");



function QuestionViewer() {
    const { idPregunta } = useParams()
    const pregunta = usePreguntaById(idPregunta)
    console.log(pregunta)
    return (
        <div>
            Pregunta:
            .... datos de la pregunta...

            <AnswerViewer />
        </div>
          
    )
  }
  
  export default QuestionViewer;