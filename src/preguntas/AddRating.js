import {useUser} from '../usuarios/UserContext';
import { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { puntuar } from '../api';
import './addrating.css';

function AddRating({id, reload}) {
 
    const [score, setScore] = useState('')
         
    const me = useUser();
    
    if (!me) return <Redirect to="/user/acceso" />
    const handleSubmit = async e => {
      e.preventDefault()
      await puntuar(id, score, me.token);
      reload()
   }
  
    return (
      <div className="review">
        <form onSubmit={handleSubmit}>
          <div className="votar">
        <label>
            Añadir valoracion
            <select className="estrella" value={score} onChange={e => setScore(e.target.value)}>
                <option value="" hidden>Selecciona...</option>
                <option value='1'>⭐</option>
                <option value='2'>⭐⭐</option>
                <option value='3'>⭐⭐⭐</option>
                <option value='4'>⭐⭐⭐⭐</option>
                <option value='5'>⭐⭐⭐⭐⭐</option>
  
            </select>
          </label>
         
                            
          <button>Valorar</button>
          </div>
        </form>
      </div>
    );
  }

  export default AddRating;