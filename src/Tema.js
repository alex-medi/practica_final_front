
import './Tema.css';
import { useTemaSelectedTema,useTemaSetSelectedTema } from './SelectedTema';
import { useTemaList } from './api';
import { Link } from 'react-router-dom';

function Tema (){
    const selectedTema = useTemaSelectedTema();
    const setSelectedTema = useTemaSetSelectedTema();
    
    const etiquetas = useTemaList();
    
    

    return(
       <div className='tematicas'>

           <h4>Temáticas</h4>

           <ul className='tematic-column'>
               {etiquetas && etiquetas.map(etiqueta =>
                <li className={selectedTema === etiqueta.id ? 'active' : ''} onClick={() => setSelectedTema(etiqueta.id)} key={etiqueta.id}>{etiqueta.nombre}</li>
                
                )}

           </ul>

           <a>
           <Link to="/">Volver a inicio</Link>
           </a>
       </div>

    )


}




export default Tema;