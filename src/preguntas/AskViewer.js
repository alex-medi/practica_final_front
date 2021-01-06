import { useTemaById} from '../api';

import { useUser } from '../usuarios/UserContext';
import { useParams } from 'react-router-dom';
import AskItem from './AskItem';

const moment = require('moment');

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

                    <AskItem
                        selectedTema={selectedTema}
                        isExperto={me && me.experto === 1}
                        pregunta={pregunta}
                        key={pregunta.id}
                    />


                )}

            </ul>

        </>
    )


}

export default AskViewer;