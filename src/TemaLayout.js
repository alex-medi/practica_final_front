import { Switch, Route } from 'react-router-dom';
import CreateQuestion from './preguntas/CreateQuestion';
import Tema from './Tema';
import AskViewer from './preguntas/AskViewer';
import QuestionViewer from './preguntas/QuestionViewer';
import './temalayout.css';
import SearchAsk from './preguntas/SearchAsk';

function TemaLayout() {

    return (

        <div className="principal">

            <aside className="navbar">
                
                <Tema />
            </aside>

            <main className="seccion">
                <Switch>
                    <Route path="/temas/:idTema" exact>
                        <AskViewer />

                    </Route >
                    <Route path="/temas/:idTema/new-question" exact>

                        <CreateQuestion />

                    </Route>

                    <Route path="/temas/:idTema/pregunta/:idPregunta/responder" exact>

                        <QuestionViewer />

                    </Route>

                    <Route path="/temas/:idTema/pregunta/:idPregunta" exact>
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