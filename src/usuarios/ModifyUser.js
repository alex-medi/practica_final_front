import { useState, useRef } from 'react'
import './modifyuser.css';
import { edit } from '../api'
import { useUser, useSetUser } from './UserContext';
import { Link, Redirect, useHistory } from 'react-router-dom';

function ModifyUser() {
  const me = useUser();
  const setMe = useSetUser();
  const history = useHistory();
  const theInput = useRef();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [experto, setExperto] = useState(me.experto === 1 ? 'si' : me.experto === 0 ? 'no' : '');
  const [empresa, setEmpresa] = useState('');
  if (!me) return <Redirect to="/user/acceso" />
  
  const handlePick = e =>{
    theInput.current.click()
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const imagen = e.target.imagen.files[0]
    const fd = new FormData()
    fd.append('imagen', imagen)
    fd.append('login', login)
    fd.append('password', password)
    fd.append('experto', experto === 'si' ? 1 : 0)
    fd.append('empresa', empresa)
    const data = await edit(fd,  me.token);
    if (data.token) {
      setMe(data)
      history.push("/temas/1")
    }
         
    
  }

  const photoStyle = me && me.imagen && { backgroundImage: 'url(' + me.imagen +')'}
  
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
          <label className="user-image">
            <span>Cambiar foto de perfil</span>
            <div className="value">
              <div className="photo-user" style={photoStyle} onClick={handlePick}/>
              <input id="i" name="imagen" type="file" accept="image/*" ref={theInput}/>
              

            </div>
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
            Nivel actual:
            <label className="alinear">{me.experto === 1 ?'experto':'usuario'}</label>
          </label>
                      
          <label>
            Experto:
          <select className="alinear" value={experto} onChange={e => setExperto(e.target.value)}>
              <option value="" hidden>Selecciona...</option>
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
        <Link className="vuelve" to="/temas/:idTema" >Volver a los temas</Link>
      </div>

    </div>

  );
}

export default ModifyUser;