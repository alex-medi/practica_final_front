import { Link, useParams } from 'react-router-dom';

const moment = require('moment');

function AskItem({pregunta, isExperto, selectedTema}) {
         
        const photoStyle = pregunta.captura && { backgroundImage: 'url(' + pregunta.captura + ')' }
        return (
            <li className={selectedTema === pregunta.id_tematica}>
                <>
                    <Link to={'/temas/' + pregunta.id_tematica + '/pregunta/' + pregunta.id}>
                        <h4>{pregunta.titulo}</h4>
                    </Link>
                    <div>
                        <article>{pregunta.cuerpo}</article>
                        <span>
                            <label>
                                Consultado por:
                       <label >{pregunta.login}</label>
                            </label>
                        </span>
                        <span>{moment(pregunta.fecha_consulta).format('lll')}</span>

                        <div className="captura" style={photoStyle} />

                    </div>

                    {isExperto &&
                        <Link to={'/temas/' + pregunta.id_tematica + '/pregunta/' + pregunta.id + '/responder'}>
                            <button>Responder esta pregunta</button>
                        </Link>
                    }


                </>

            </li>

        )
    

}

export default AskItem;