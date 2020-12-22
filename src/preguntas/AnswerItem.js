
const moment = require('moment');

function AskItem({respuesta}){
  
    const photoStyle = respuesta.captura && { backgroundImage: 'url(' + respuesta.captura + ')'}
        return(
          <li>
            <>

              <ul>
                <li>{respuesta.descripcion}</li>
                <li>
                  <label>
                    Respondido por:
                        <label >{respuesta.login}</label>
                  </label>
                </li>
                <li>{respuesta.fecha_respuesta}</li>
                <div className="captura" style={photoStyle} />
              </ul>

            </>
          </li>
          )


}

export default AskItem;