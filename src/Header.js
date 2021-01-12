import './header.css';
import { useUser } from './usuarios/UserContext';
import { Link, useHistory } from 'react-router-dom';
import { useSetUser } from "./usuarios/UserContext";

function Header (){
    
    const history = useHistory()
    const me = useUser()
    const setMe = useSetUser()
    const photoStyle = me && me.imagen && { backgroundImage: 'url(' + me.imagen +')'}
    const handleLogOut = e => {
          setMe()
          history.push("/")     
        
      }

    return(
        
       <header>
    
        <div className="logo-titulo">
            <div className="logo"></div>   
            
            <div className="titulo-w">
                <label className="nombre-web">Brain</label>
                <label className="nombre-web2">Ask</label>
                <label className="slogan">Conectados a la nube del programador</label>
            </div>
       </div>
               
       {me && 
       <>
               
       <div className="user">
           <div className="photo" style={photoStyle}/>
           <div className="nombre">{me.login}</div>
           <Link to="/user/editar-perfil"><label className="e">perfil</label></Link>
           <label onClick={handleLogOut}>Cerrar cesion</label>
       </div>
        </>     
       }    
                     
                           
       </header>

    )


}




export default Header;