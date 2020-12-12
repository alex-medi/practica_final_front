import { useTemaById } from '../api';
import CreateQuestion from './CreateQuestion'
import AnswerQuestion from './AnswerQuestion'
import New_Ask from './Acordeon_P';
import New_Answer from './Acordeon_R';
import { useUser } from '../usuarios/UserContext';
import { Link, useParams } from 'react-router-dom';


function AskViewer() {
    const me = useUser()

    const selectedTema = parseInt(useParams().idTema || "1")

    const preguntas = useTemaById(selectedTema);

    if (!preguntas || preguntas.error) return 'Selecciona una temática'

    return (
        <>
            <h2>Preguntas en esta tematica</h2>
            <ul className="pregunta-lista">
                {preguntas && preguntas.map(pregunta =>

                    <li className={selectedTema === pregunta.id_tematica}>
                        <>
                            <Link to={'/temas/' + pregunta.id_tematica + '/pregunta/' + pregunta.id}>
                                <h4>{pregunta.titulo}</h4>
                            </Link>
                            <div>
                                <article>{pregunta.cuerpo}</article>
                                <span>{pregunta.fecha_consulta}</span>

                            </div>

                            {me.experto === 1 &&
                                <Link to={'/temas/' + pregunta.id_tematica + '/pregunta/' + pregunta.id + '/responder'}>
                                    <button>Responder esta pregunta</button>
                                </Link>
                            }
                        </>
                        <div>
                        <Link to={'/temas/' + pregunta.id_tematica + '/new-question'}>
                            <button>Crear nueva pregunta</button>
                        </Link>
                    </div>
                    </li>

                    

                )}

            </ul>

        </>
    )


}

export default AskViewer;