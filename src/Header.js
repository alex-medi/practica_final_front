import './header.css';
import { useUser } from './usuarios/UserContext';
import { Link, useHistory } from 'react-router-dom';
import { useSetUser } from "./usuarios/UserContext";

function Header (){
    
    const history = useHistory()
    const me = useUser()
    const setMe = useSetUser()
    console.log(me)
    const photoStyle = me && me.imagen && { backgroundImage: 'url(' + me.imagen +')'}
    const handleLogOut = e => {
          setMe()
          history.push("/")     
        
      }

    return(
        
       <header>
       <div className="logo"></div>
        
       {me && 
       <>
               
       <div className="user">
           <div className="photo" style={photoStyle}/>
           <div className="nombre">{me.login}</div>
           <Link to="/user/editar-perfil"><button className="e">perfil</button></Link>
           <button onClick={handleLogOut}>Cerrar cesion</button>
       </div>
        </>     
       }    
                     
                           
       </header>

    )


}




export default Header;