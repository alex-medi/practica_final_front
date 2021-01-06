import './answeritem.css'

const moment = require('moment');

function AnswerItem({ respuesta }) {

  const photoStyle = respuesta.captura && { backgroundImage: 'url(' + respuesta.captura + ')' }
  return (
    <ul className="answer-list">
    <li>
      <>

        <div>{respuesta.descripcion}</div>
        <div className="captura" style={photoStyle} />
        <div className="card-datos">
        <div>
          <label>
            Respondido por:
              <label >{respuesta.login}</label>
          </label>
        </div>
        <div className="fecha">{moment(respuesta.fecha_respuesta).format('DD/MM/YYYY HH:mm')}</div>
        </div>
        <div>
          <label>
            Puntuacion:
              <label >{respuesta.rating}</label>
          </label>
        </div>

      </>
    </li>
    </ul>
  )


}

export default AnswerItem;