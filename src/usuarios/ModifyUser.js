import { useState } from 'react'
import './modifyuser.css';
import { Link } from 'react-router-dom';
import { edit } from '../api'
import {useUser, useSetUser} from './UserContext';
function ModifyUser() {
    const me = useUser();
    const setMe = useSetUser()
  
  const [login, setLogin] = useState(''|| me.login)
  const [password, setPassword] = useState('')
  const [experto, setExperto] = useState('si')
  const [empresa, setEmpresa] = useState('' || me.empresa)
    
  
  const handleSubmit = async e => {
    e.preventDefault()
    const data = await edit(me.id, login, password, experto === 'si', empresa, me.token);
    
    if(data.token) {
      setMe(data)
  }

  }

  return (
    <div className="edit">
      <div className="formulario">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <label>{me.nombre}</label>
        </label>
        <label>
          Email:
          <label>{me.email}</label>
        </label>
        <label>
          Nombre de usuario actual:
          <label>{me.login}</label>
        </label>
        <label>
          Nuevo nombre de usuario:
          <input type="text" value={login} onChange={e => setLogin(e.target.value)} />
        </label>
        
        <label>
          Introducir nueva contraseña:
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
          Empresa actual:
          <label>{me.empresa}</label>
        </label>
        <label>
        Nueva Empresa:
          <input type="text" value={empresa} onChange={e => setEmpresa(e.target.value)} />
        </label>
        
        <button>Guardar Cambios</button>
                         
      </form>
      </div>
      <div>
     <Link to="/">Volver a inicio</Link>
    </div>       
    
    </div>
    
  );
}

export default ModifyUser;