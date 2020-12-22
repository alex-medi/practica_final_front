import { Switch, Route } from 'react-router-dom';
import CreateQuestion from './preguntas/CreateQuestion';
import AnswerQuestion from './preguntas/AnswerQuestion'
import Tema from './Tema';
import AskViewer from './preguntas/AskViewer';
import AnswerViewer from './preguntas/AnswerViewer'
import QuestionViewer from './preguntas/QuestionViewer';
import './temalayout.css';
import Acordeon_P from './Acordeon_P';
import Acordeon_R from './Acordeon_R';
import SearchAsk from './preguntas/SearchAsk';

function TemaLayout() {

    return (

        <div className="principal">

            <aside className="navbar">
                <h2>Temáticas</h2>
                <Tema />
            </aside>

            <main className="seccion">
                <Switch>
                    <Route path="/temas/:idTema" exact>
                        <AskViewer />

                    </Route >
                    <Route path="/temas/:idTema/new-question">

                        <CreateQuestion />

                    </Route>

                    <Route path="/temas/:idTema/pregunta/:idPregunta/responder">

                        <QuestionViewer />

                    </Route>

                    <Route path="/temas/:idTema/pregunta/:idPregunta">
                        <QuestionViewer />

                    </Route>

                </Switch>

            </main>
            <div className="buscar">
                <SearchAsk />

            </div>

        </div>
    )
}

export default TemaLayout;