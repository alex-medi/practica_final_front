import { Link, useParams } from 'react-router-dom';
import { useTemaById, buscar, pregunta } from '../api';
import { useUser } from '../usuarios/UserContext';
import { useState } from 'react';

function SearchAsk() {

    const [clave, setClave] = useState('')
    const [resultados, setResultados] = useState()
    const selectedTema = parseInt(useParams().idTema || "1")

    const preguntas = useTemaById(selectedTema);

    if (!preguntas || preguntas.error) return 'Selecciona una temática'

    const handleChange = event => {
        setClave(event.target.value);

    };

    const handleSubmit = async e => {
        e.preventDefault()
        const resultados = await buscar(clave);
        setResultados(resultados)

    }

    return (
        <>
            <form className="busqueda" onSubmit={handleSubmit}>
                <h4>Buscar por palabra clave</h4>

                <input placeholder="busqueda" value={clave} onChange={handleChange}></input>
                <button>🔍</button>

            </form>

            {resultados &&
                <div className="resultados">
                    <h4>Resultados:</h4>
                    {resultados.map(pregunta =>

                        <Link to={'/temas/' + pregunta.id_tematica + '/pregunta/' + pregunta.id}>
                            <h4>{pregunta.titulo}</h4>
                        </Link>
                    )}

                </div>
            }
        </>

    )


}

export default SearchAsk;