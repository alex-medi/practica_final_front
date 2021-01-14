import './answeritem.css';
import AddRating from './AddRating';

const moment = require('moment');

function AnswerItem({respuesta, reload }) {
    
  
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
         
          <h4>Puntuar</h4>
          
          <AddRating 
            id={respuesta.id}
            reload={reload}
          />
        </div>

      </>
    </li>
    </ul>
  )


}

export default AnswerItem;