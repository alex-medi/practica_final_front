import './App.css';

import Main from './Main'
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
function App() {
    
  return (
    
    <div className="App">
       
      <Switch>
        <Route path="/temas">
          <Main />
        </Route>
        <Route path="/">
        <Home />
        </Route>

      </Switch>
            
    </div>


  );
}

export default App;
