import './header.css';
import { useUser } from './usuarios/UserContext';
import { Link } from 'react-router-dom';
import { useSetUser } from "./usuarios/UserContext";
function Header (){
    
    const me = useUser()
    const setMe = useSetUser()

    return(
        //para que los usuarios tengan foto de perfil
       <header className='topbar'>
          
       <span className="a">{me && me.login}</span>
        
        <div>
            <Link to="/editar-perfil">Ver/Editar perfil</Link>
        </div>

        <button onClick={() => setMe()}>Cerrar cesion</button> 
                              
       </header>

    )


}




export default Header;