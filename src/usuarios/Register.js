import { useState } from 'react';
import { useSetUser } from './UserContext';
import { register } from '../api';
import './register.css';

function Register() {
  const setMe = useSetUser()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [experto, setExperto] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [error, setError] = useState()

  const handleSubmit = async e => {
    e.preventDefault()
    const photo = e.target.photo.files[0]
    const fd = new FormData()
    fd.append('photo', photo)
    fd.append('login', login)
    fd.append('password', password)
    fd.append('experto', experto === 'si' ? 1 : 0)
    fd.append('empresa', empresa)
    const data = await register(fd)
    
    if (data.token) {
      setMe(data)
    } else {
      setError(data.error || true)
    }

    
  }

  return (
    <div className="registro">
      <form onSubmit={handleSubmit}>
           <label>
           Añadir foto
          <input placeholder="foto de perfil" className="photo" type="file" accept="image/*" />
          </label>       
          <input placeholder="nombre" value={username} onChange={e => setUsername(e.target.value)} />
               
         <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                 
         <input placeholder="nombre de usuario" type="login" value={login} onChange={e => setLogin(e.target.value)} />
               
        <input placeholder="contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        
        <label>
          ¿Eres experto?
          <select className="experiencia" value={experto} onChange={e => setExperto(e.target.value)}>
               <option className="no">No</option>
               <option className="si">Si</option>
         </select>
        </label>
                  
          <input placeholder="empresa" type="text" value={empresa} onChange={e => setEmpresa(e.target.value)} />
        
        {error &&
          <div className="error">
            {error}
          </div>
        }
        <button>Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
