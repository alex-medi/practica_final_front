import { Link, useParams } from 'react-router-dom';
import { buscar, pregunta } from '../api';
import { useState } from 'react';
import './searchask.css';

function SearchAsk() {

    const [clave, setClave] = useState('')
    const [resultados, setResultados] = useState()
    const selectedTema = parseInt(useParams().idTema || "1")

    // const preguntas = useTemaById(selectedTema);

    if (!pregunta || pregunta.error) return 'Selecciona una temática'

    const handleChange = event => {
        setClave(event.target.value);

    };

    const handleSubmit = async e => {
        e.preventDefault()
        const resultados = await buscar(clave);
        setResultados(resultados)

    }

    return (
        <div className="buscador">
            <div>

                <Link to={'/temas/' + selectedTema + '/new-question'}>
                    <button className="nueva">Crear nueva pregunta</button>
                </Link>

            </div>
            <form className="busqueda" onSubmit={handleSubmit}>
                
                <input placeholder="buscar por palabra clave" value={clave} onChange={handleChange}></input>
                <button>🔍</button>

            </form>
           
            {resultados &&
                <div className="resultados">
                    <h4>Resultados:</h4>

                    {
                     (Array.isArray(resultados)&& resultados.length > 0)?
                                                             
                    resultados.map(pregunta =>

                        <Link to={'/temas/' + pregunta.id_tematica + '/pregunta/' + pregunta.id}>
                            <h4>{pregunta.titulo}</h4>
                        </Link>
                    ): 'tu busqueda no obtuvo resultados'}

                    

                </div>
            }
        </div>

    )


}

export default SearchAsk;