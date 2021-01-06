import {useUser} from '../usuarios/UserContext';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { puntuar } from '../api'

function AddRating({ reload }) {
 
    const [score, setScore] = useState('')
         
    const me = useUser();
    const selectedAnswer = parseInt(useParams().idRespuesta || "1")
    if (!me) return <Redirect to="/user/acceso" />
    const handleSubmit = async e => {
      e.preventDefault()
      await puntuar(selectedAnswer, score, me.token);
      reload()
   }
  
    return (
      <div className="review">
        <form onSubmit={handleSubmit}>
        <label>
            Añadir valoracion:
            <select value={score} onChange={e => setScore(e.target.value)} >
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