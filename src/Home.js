import { Link } from 'react-router-dom';
import './home.css';


function Home() {
  return (
    <div className="page-home">

      <div className="contenido">
      <h1>El conocimiento es poder</h1>
      <article className="introduccion">Actualmente vivimos en una sociedad donde obtener la informació a golpe de click
        se ha convertido en parte de nuestras vidas y forma parte de nuestras vidas. Esta web 
        a partir de un grupo de profesionales ofrece al estudiante en programación, una forma
        sencilla y amena de resolver todas sus dudas.
      </article>
      <ul className="enlaces">
        <li><Link to="/temas/">Explorar</Link></li>
        <li><Link to="/about">Acerca de</Link></li>
        <li><Link to="/user/acceso">Acceso</Link></li>
        
        
                                
      </ul>
      </div>
    </div>
  );
}

export default Home;
