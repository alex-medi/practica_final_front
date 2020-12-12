import { Switch, Route } from 'react-router-dom';
import CreateQuestion from './preguntas/CreateQuestion';
import AnswerQuestion from './preguntas/AnswerQuestion'
import Tema from './Tema';
import AskViewer from './preguntas/AskViewer';
import AnswerViewer from './preguntas/AnswerViewer';

function TemaLayout() {
        
    return (

        <div className="principal">

            <aside>
                <Tema />
            </aside>

            <Switch>
                <Route path="/temas/:idTema" exact>
                    <AskViewer />

                </Route >
                <Route path="/temas/:idTema/new-question" exact>

                    <CreateQuestion />

                </Route>

                <Route path="/temas/:idTema/pregunta/:idPregunta/responder" exact>
                    <AnswerQuestion />
                </Route>

                <Route path="/temas/:idTema/pregunta/:idPregunta" exact>

                    <AnswerViewer />

                </Route>


            </Switch>

        </div>
    )
}

export default TemaLayout;