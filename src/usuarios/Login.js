import { useState } from "react"
import './login.css'
import { useSetUser } from "./UserContext";
import { login } from "../api";

function Login() {
  const setMe = useSetUser()
    
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const handleSubmit = async e => {
      e.preventDefault()
      const data = await login(userEmail, password)
      
      if(data.token) {
          setMe(data)
      }else{
         setError(data.error || true)
      }
  }
  
  return (
    <div className='login'>
        <form onSubmit={handleSubmit}>
                         
               <input placeholder="usuario/email" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
                   
               
               <input placeholder="contraseña" type='password' value={password} onChange={e => setPassword(e.target.value)} />
           
           {error &&
             <div className='error'>
                 {error}
             </div>
           }
           <button>Iniciar sesion</button>
           </form>
                
    </div>
);

}

export default Login;

