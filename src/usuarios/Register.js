import { useState, useRef } from 'react';
import { useSetUser } from './UserContext';
import { register } from '../api';
import './register.css';

function Register() {
  const setMe = useSetUser()
  const imageInput = useRef()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')
  const [experto, setExperto] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [error, setError] = useState()
  const [imageOverride, setImageOverride] = useState();

  const handleImage = e => {
    if (e.target.files.length) {
      const url = URL.createObjectURL(e.target.files[0])
      setImageOverride(url)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const imagen = e.target.imagen.files[0]
    const fd = new FormData()
    fd.append('nombre',username)
    fd.append('email', email)
    fd.append('imagen', imagen)
    fd.append('login', login)
    fd.append('password', password)
    fd.append('repeatedPassword', repeatedPassword)
    fd.append('experto', experto === 'si' ? 1 : 0)
    fd.append('empresa', empresa)
    const data = await register(fd)
    
    if (data.token) {
      setMe(data)
    } else {
      setError(data.error || true)
    }
        
  }

  const ruta = imageOverride
  const photoStyle = ruta && { backgroundImage: 'url(' + ruta +')'}

  return (
    <div className="registro">
      <form onSubmit={handleSubmit}>
           <div>
           <label>
           <span className="new-photo">Añadir foto de perfil</span>
           <div>
           <div className="photo" style={photoStyle}/>
          <input id="j" name="imagen" placeholder="foto de perfil" type="file" accept="image/*" ref={imageInput} onChange={handleImage} />
          </div>
          </label>
          </div>
          <div>     
          <input placeholder="nombre y apellidos" value={username} onChange={e => setUsername(e.target.value)} />
               
         <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                 
         <input placeholder="nombre de usuario" type="login" value={login} onChange={e => setLogin(e.target.value)} />
               
        <input placeholder="contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />

        <input placeholder="repetir contraseña" type="password" value={repeatedPassword} onChange={e => setRepeatedPassword(e.target.value)} />
         
        <label>
          ¿Eres experto?
          <select className="experiencia" value={experto} onChange={e => setExperto(e.target.value)}>
               <option className="no">No</option>
               <option className="si">Si</option>
         </select>
        </label>
                  
          <input placeholder="empresa" type="text" value={empresa} onChange={e => setEmpresa(e.target.value)} />
          </div>
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
