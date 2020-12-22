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
      <div className="enlaces">
        <button><Link to="/temas/:idTema">Explorar</Link></button>
        <button className="center"><Link to="/user/acceso">Acceso</Link></button>
        <button><Link to="/about">Acerca de</Link></button>
                                                        
      </div>
      </div>
    </div>
  );
}

export default Home;
