import { Link } from 'react-router-dom';
import './home.css';


function Home() {
  return (
    <div className="page-home">

      <div className="contenido">
      <h1>El conocimiento es poder</h1>
      <article className="introduccion">Actualmente vivimos en una sociedad donde obtener la información a golpe de click
        se ha convertido en parte de nuestras vidas y es nuestro día a día. Esta web 
        mediante un grupo de profesionales ofrece una forma sencilla y amena de resolver todas las dudas, en los principales lenguajes de programación.
        Siendo una herramienta de consulta indispensable tanto para estudiantes que se inician en el mundo de la programación como para profesionales que
        cuentan con años de experiencia en el sector.
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
