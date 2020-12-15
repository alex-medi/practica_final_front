import './App.css';
import TemaLayout from './TemaLayout'
import { Switch, Route } from 'react-router-dom';
import Home from './Home'

import About from './About';


import Header from './Header'
import UserLayout from './UserLayout'
import Login from './usuarios/Login';
function App() {

  return (

    <div className="App">
      <Header />
      <Switch>
       
        <Route path="/user">
          <UserLayout />

        </Route>
        <Route path="/temas">
          <TemaLayout />

        </Route>
        <Route path="/about" exact>
          <About />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>

      </Switch>

    </div>


  );
}

export default App;
