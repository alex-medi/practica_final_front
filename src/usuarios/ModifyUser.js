import { useState } from 'react'
import './modifyuser.css';

import { edit } from '../api'
import {useUser} from './UserContext';
function ModifyUser() {
    const me = useUser();
    console.log(me)
  const [login, setLogin] = useState(me.login)
  const [password, setPassword] = useState('')
  const [experto, setExperto] = useState(me.experto)
  const [empresa, setEmpresa] = useState(me.empresa)
  
  

  const handleSubmit = async e => {
    e.preventDefault()
    await edit(me.id, login, password, experto === 'si', empresa, me.token);
    

  }

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label>
          Nuevo login:
          <input type="text" value={login} onChange={e => setLogin(e.target.value)} />
        </label>
        <label>
          Nueva contraseña:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <label>
          experto:
          <select value={experto} onChange={e => setExperto(e.target.value)}>
               <option value="si">Si</option>
               <option value="no">No</option>
         </select>
        </label>
        <label>
        Empresa:
          <input type="text" value={empresa} onChange={e => setEmpresa(e.target.value)} />
        </label>
        
        <button>Guardar Cambios</button>
        
      </form>
    </div>
  );
}

export default ModifyUser;