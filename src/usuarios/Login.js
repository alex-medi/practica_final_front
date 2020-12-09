import { useState } from "react"
import './login.css'
import { useSetUser } from "./UserContext";
import { login } from "../api";

function Login() {
  const setMe = useSetUser()
   
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setError] = useState(false);

  const handleSubmit = async e => {
      e.preventDefault()
      const data = await login(useremail, password)
      
      if(data.token) {
          setMe(data)
      }else{
         setError(true)
      }
  }
  
  return (
    <div className='login'>
        <form onSubmit={handleSubmit}>
           <label>
               Usuario:
               <input value={useremail} onChange={e => setUseremail(e.target.value)} />
           </label>
           <label>
               Contraseña:
               <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
           </label>
           {isError &&
             <div className='error'>
                 Usuario o contraseña incorrectos
             </div>
           }
           <button>Iniciar sesion</button>
           </form>
                
    </div>
);

}

export default Login;

