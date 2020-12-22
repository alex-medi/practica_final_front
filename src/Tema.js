import './Tema.css';
import { useTemaList } from './api';
import { Link, useParams } from 'react-router-dom';

function Tema (){

    const selectedTema = parseInt(useParams().idTema || "1")
    console.log(selectedTema)
    const etiquetas = useTemaList();
      
    return(
       <div className='tematicas'>

           <h4>Temáticas</h4>

           <ul className='tematic-column'>
               {etiquetas && etiquetas.map(etiqueta =>
                <li className={selectedTema === etiqueta.id ? 'active' : ''} key={etiqueta.id}>
                    <Link to={'/temas/' + etiqueta.id}>
                        {etiqueta.nombre}

                    </Link>
                </li>
                
                )}

           </ul>

           <>
           <Link to="/">Volver a inicio</Link>
           </>
       </div>

    )


}




export default Tema;