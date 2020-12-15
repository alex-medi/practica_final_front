import Register from './usuarios/Register'
import Login from './usuarios/Login'
import './auth.css'

import { useState } from 'react';
import { useUser } from './usuarios/UserContext';
import { Redirect } from 'react-router-dom';


function Auth(){
    const [isLogged, setLogged] = useState(false)
    const me = useUser()

    if(me){
        return <Redirect to="/temas/1" />
    }

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