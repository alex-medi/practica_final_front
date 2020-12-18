import './header.css';
import { useUser } from './usuarios/UserContext';
import { Link, useHistory } from 'react-router-dom';
import { useSetUser } from "./usuarios/UserContext";

function Header (){
    
    const history = useHistory()
    const me = useUser()
    const setMe = useSetUser()
    const photoStyle = me && me.photo && { backgroundImage: 'url(' + me.photo + ')'}
    const handleLogOut = e => {
          setMe()
          history.push("/")     
        
      }

    return(
        //para que los usuarios tengan foto de perfil
       <header>
        
       {me && 
       <>
       <div className="user">
           <div className="photo" style={photoStyle}/>
           <div className="nombre">{me.login}</div>
           <button onClick={handleLogOut}>Cerrar cesion</button>
       </div>
       <Link to="/user/editar-perfil" className="e">Ver/Editar perfil</Link> 
        </>     
       }    
                     
                           
       </header>

    )


}




export default Header;