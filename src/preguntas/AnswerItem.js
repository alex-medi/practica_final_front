import './answeritem.css';
import AddRating from './AddRating';
import { useRespuestaById } from '../api';
import { useParams } from 'react-router-dom';

const moment = require('moment');

function AnswerItem({ respuesta }) {

  const selectedAnswer = parseInt(useParams().idRespuesta || "1")
  const respuestas = useRespuestaById(selectedAnswer)

  //const photoStyle = respuesta.captura && { backgroundImage: 'url(' + respuesta.captura + ')' }

  return (
    <ul className="answer-list">
    <li>
      <>
        <div className="descripcion">{respuesta.descripcion}</div>
        {respuesta.captura &&
          <div className="captura2-wrapper">
            <img className="captura2" src={respuesta.captura} />
          </div>
        }
        <div className="card-datos2">
        <div>
          <label>Respondido por:<label className="separacion"> ''</label></label> 
                   
          <label className="experto">{respuesta.login}</label>
        </div>
        <div className="fecha">{moment(respuesta.fecha_respuesta).format('DD/MM/YYYY HH:mm')}</div>
        </div>
        <div>
          <div className="puntuacion">
            Puntuacion:
              
              {respuesta.rating >= 1 && '⭐'}
              {respuesta.rating >= 2 && '⭐'}
              {respuesta.rating >= 3 && '⭐'}
              {respuesta.rating >= 4 && '⭐'}
              {respuesta.rating >= 5 && '⭐'}

          </div>
        </div>
        <div>
          <AddRating />
        </div>

      </>
    </li>
    </ul>
  )


}

export default AnswerItem;