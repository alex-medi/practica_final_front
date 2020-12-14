import { useState } from 'react'
import './modifyuser.css';
import { edit } from '../api'
import {useUser, useSetUser} from './UserContext';
import { Link } from 'react-router-dom';
import Auth from '../Auth'

function ModifyUser() {
    const me = useUser();

    const setMe = useSetUser()
  
  const [login, setLogin] = useState(me && me.login || '')
  const [password, setPassword] = useState('')
  const [experto, setExperto] = useState('si')
  const [empresa, setEmpresa] = useState(me && me.empresa ||'')
  if (!me) return <Auth />
    
  
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
          <label className="invariable">{me.nombre}</label>
        </label>
        <label>
          Email:
          <label className="invariable">{me.email}</label>
        </label>
        <label>
          Nombre de usuario actual:
          <label className="alinear">{me.login}</label>
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
          <select className="alinear" value={experto} onChange={e => setExperto(e.target.value)}>
               <option value="si">Si</option>
               <option value="no">No</option>
         </select>
        </label>
        <label>
          Empresa actual:
          <label className="alinear">{me.empresa}</label>
        </label>
        <label>
        Nueva Empresa:
          <input type="text" value={empresa} onChange={e => setEmpresa(e.target.value)} />
        </label>
        
        <button>Guardar Cambios</button>
                         
      </form>
      </div>

      <div className="volver">
        <Link className="vuelve" to="/temas" >Volver a los temas</Link>
      </div>
         
    </div>
    
  );
}

export default ModifyUser;