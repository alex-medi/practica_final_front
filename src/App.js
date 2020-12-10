import AskViewer from './preguntas/AskViewer'
import './App.css';
import Tema from './Tema';
import Login from './usuarios/Login';
import { useState } from 'react';
import Header from './Header';
import { useUser } from './usuarios/UserContext';
import Register from './usuarios/Register';
import ModifyUser from './usuarios/ModifyUser';

import { Switch, Route, Link } from 'react-router-dom';

function App() {
  
  const me = useUser()

  const [isLogged, setLogged] = useState(false)

  if(!me) return(
    
     <>
    {isLogged ? <Register /> : <Login />}
    <div className="logged" onClick={() => setLogged(!isLogged)}>
    {isLogged ? 'Acceder' : '¿Aún no tienes cuenta? Registrate'}
    </div>
    </>
    
  ) 
  
  return (
    <div className="App">
      
        <Header />
        <Switch>
        <Route path="/temas">
        <div className="columna">
         <aside className="temas-list">       
        <Tema />
        </aside> 
      <main className="preguntas-list">
        
        <AskViewer />
        
      </main>
            
      </div>
      </Route>
      <Route path="/editar perfil">
        <div>
        <ModifyUser />
        
      </div>
      </Route>   
      <Route path="/">
            <div className="page">
            <h2>Inicio</h2>
            <Link to="/temas">Tematicas</Link>
            </div>
          </Route>
      </Switch>
          
      
      </div>
    
  );
}

export default App;
