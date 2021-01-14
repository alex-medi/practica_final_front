import { Link} from 'react-router-dom';
import './askitem.css';
const moment = require('moment');

function AskItem({pregunta, isExperto, selectedTema}) {
         
        
        return (
            
            <ul className="ask-list">
            <li className={selectedTema === pregunta.id_tematica}>
                <>
                    <Link to={'/temas/' + pregunta.id_tematica + '/pregunta/' + pregunta.id}>
                        <h3>{pregunta.titulo}</h3>
                    </Link>
                    <div>
                        <article className="cuerpo-pregunta">{pregunta.cuerpo}</article>
                        
                        <div className="card-datos">
                            <div>
                               <label>Consultado por:<label className="separacion"> ''</label></label> 
                               <label className="user"> {pregunta.login} </label>
                            </div>
                            
                            <div className="fecha">{moment(pregunta.fecha_consulta).format('DD/MM/YYYY HH:mm')}</div>
                        </div>
                                                                       
                    </div>

                    {isExperto &&
                        <Link to={'/temas/' + pregunta.id_tematica + '/pregunta/' + pregunta.id + '/responder'}>
                            <button className="responder">Responder</button>
                        </Link>
                    }


                </>

            </li>
            </ul>
            
        )
    

}

export default AskItem;