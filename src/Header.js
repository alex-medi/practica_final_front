import './header.css';
import { useUser } from './usuarios/UserContext';
import { Link } from 'react-router-dom';
import { useSetUser } from "./usuarios/UserContext";
function Header (){
    
    const me = useUser()
    const setMe = useSetUser()

    return(
        //para que los usuarios tengan foto de perfil
       <header>
        
       {me && 
       <div className="user">
           <div className="foto"></div>
           <div className="nombre">{me.login}</div>
           <button onClick={() => setMe()}>Cerrar cesion</button>
       </div>
               
       }    
                     
       <Link to="/user/editar-perfil" className="e">Ver/Editar perfil</Link>                     
       </header>

    )


}




export default Header;