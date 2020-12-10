import ModifyUser from './usuarios/ModifyUser';
import { Switch, Route, Link } from 'react-router-dom';
import AskViewer from './preguntas/AskViewer'
import Tema from './Tema';
import Header from './Header'
import Register from './usuarios/Register';
import Login from './usuarios/Login';
import { useUser } from './usuarios/UserContext';
import { useState } from 'react';
import AnswerViewer from './preguntas/AnswerViewer';

function Main() {

    const [isLogged, setLogged] = useState(false)

    const me = useUser()
    if (!me) {
        return (
            <div>
                {isLogged ? <Register /> : <Login />}
                <div onClick={() => setLogged(!isLogged)} className="toggle">
                    {isLogged ? 'Ya tienes cuenta? Accede' : 'No tienes cuenta? Registrate'}
                </div>
            </div>
        )
    }

    return (

        <div className="principal">
            <Header />
            <Switch>
                <Route path="/editar-perfil">
                    <ModifyUser />
                </Route>
                <Route path="/temas/:idTema">

                    <div className="columna">
                        <aside className="temas-list">

                            <Tema />
                        </aside>
                        <main className="preguntas-list">

                            <AskViewer />
                            <Route path="/temas/:idTema/pregunta/:idPregunta">

                                <AnswerViewer />

                            </Route>

                        </main>

                    </div>
                </Route>

                <Route path="/editar-perfil">
                    <div>
                        <ModifyUser />

                    </div>
                </Route>
                <Route path="/">
                    <div className="page">
                        <h2>Inicio</h2>
                        <Link to="/temas/:id">Tematicas</Link>
                    </div>
                </Route>
            </Switch>

        </div>
    )
}

export default Main;