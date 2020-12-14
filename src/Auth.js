import Register from './usuarios/Register'
import Login from './usuarios/Login'
import './auth.css'

import { useState } from 'react';

function Auth(){
    const [isLogged, setLogged] = useState(false)

return (
    <div className="acceso">
        
        {isLogged ? <Register /> : <Login />}
        <div onClick={() => setLogged(!isLogged)} className="toggle">
            {isLogged ? 'Ya tienes cuenta? Accede' : 'No tienes cuenta? Registrate'}
        
        </div>
    </div>
)

}
export default Auth