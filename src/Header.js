
import './header.css';
import { useUser } from './usuarios/UserContext';

function Header (){
    
    const me = useUser()

    return(
        //para que los usuarios tengan foto de perfil
       <header className='topbar'>
           
         <img src={'ruta de la imagen'+ me.id+'.jpg'}></img> 
        <span className="a">{me && me.login}</span>
                      
       </header>

    )


}




export default Header;