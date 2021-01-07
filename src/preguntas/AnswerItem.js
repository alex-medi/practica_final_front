import './answeritem.css';

const moment = require('moment');

function AnswerItem({ respuesta }) {

  const photoStyle = respuesta.captura && { backgroundImage: 'url(' + respuesta.captura + ')' }
  return (
    <ul className="answer-list">
    <li>
      <>
        <div className="descripcion">{respuesta.descripcion}</div>
        <div className="captura2" style={photoStyle} />
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
              <label >{respuesta.rating}</label>
          </div>
        </div>

      </>
    </li>
    </ul>
  )


}

export default AnswerItem;