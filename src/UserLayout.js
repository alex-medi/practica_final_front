
import ModifyUser from './usuarios/ModifyUser'

import { useUser } from './usuarios/UserContext';
import { Switch, Route } from "react-router-dom"
import Auth from './Auth';

function UserLayout(){
      
               
   return(

      <Switch>
          <Route path="/user/editar-perfil" exact>
          <ModifyUser />
    
          </Route>
          <Route path="/user/acceso" exact>
              <Auth />
          </Route>

      </Switch>
              
   )

}

export default UserLayout;