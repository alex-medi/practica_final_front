import {useUser} from '../usuarios/UserContext';
import { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { puntuar } from '../api';
import './addrating.css';

function AddRating() {
 
    const [score, setScore] = useState('')
         
    const me = useUser();
    const selectedAnswer = parseInt(useParams().idRespuesta)
    if (!me) return <Redirect to="/user/acceso" />
    const handleSubmit = async e => {
      e.preventDefault()
      await puntuar(selectedAnswer, score, me.token);
      
   }
  
    return (
      <div className="review">
        <form onSubmit={handleSubmit}>
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
          
        </form>
      </div>
    );
  }

  export default AddRating;