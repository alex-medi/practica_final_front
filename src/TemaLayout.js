import { Switch, Route } from 'react-router-dom';
import CreateQuestion from './preguntas/CreateQuestion';
import AnswerQuestion from './preguntas/AnswerQuestion'
import Tema from './Tema';
import AskViewer from './preguntas/AskViewer';
import AnswerViewer from './preguntas/AnswerViewer';
import './temalayout.css';
import Acordeon_P from './Acordeon_P';
import Acordeon_R from './Acordeon_R';

function TemaLayout() {
        
    return (

        <div className="principal">

            <aside className="navbar">
                <h2>Temáticas</h2>
                <Tema />
            </aside>
             
             <main>
            <Switch>
                <Route path="/temas/:idTema" exact>
                    <AskViewer />

                </Route >
                <Route path="/temas/:idTema/new-question" exact>
                     <Acordeon_P>
                    <CreateQuestion />
                    </Acordeon_P>

                </Route>

                <Route path="/temas/:idTema/pregunta/:idPregunta/responder" exact>
                    <Acordeon_R>
                    <AnswerQuestion />
                    </Acordeon_R>
                </Route>

                <Route path="/temas/:idTema/pregunta/:idPregunta" exact>

                    <AnswerViewer />

                </Route>


            </Switch>
            </main>

        </div>
    )
}

export default TemaLayout;