import AskViewer from './preguntas/AskViewer'
import './App.css';
import Tema from './Tema';
import Login from './usuarios/Login';
import { useState } from 'react';
import Header from './Header';
import { useUser } from './usuarios/UserContext';
import Register from './usuarios/Register';
import ModifyUser from './usuarios/ModifyUser';
import Acordeon2 from './usuarios/Acordeon2';
import AnswerViewer from './preguntas/AnswerViewer';

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
        <div className="columna">
         <aside className="temas-list">       
        <Tema />
        </aside> 
      <main className="preguntas-list">
        
        <AskViewer />
        <AnswerViewer />
      </main>
      <div>
        <Acordeon2>
        <ModifyUser />
        </Acordeon2>
      </div>
      
      </div>
      </div>
    
  );
}

export default App;
