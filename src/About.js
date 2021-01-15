import { Link } from 'react-router-dom';
import './about.css';
import logo from './imagenes/registrate.png';
import logo2 from './imagenes/lenguaje_programacion.png';
import logo3 from './imagenes/programadora.jpg'

function About() {
             
    return (
      <div className="page-about">

          <div className="content">
        
        <h1>Sobre Nosotros</h1>

        <article className="acerca">Contamos con un gran equipo de expertos, cada uno profesional en su materia con
            los que nos es posible llevar a cabo nuetra principal tarea: la Formación, crecemos día a día
            con el objetivo de ofrecer nuestros servicios cada vez a más usuarios, actualizando y ampliando
            los conocimientos permanentemente.
            
        </article>

        <section className="padre">
          <div className="informacion">
            <img  src={logo} />
            <strong>Registrate</strong>
            <p>Los usuarios registrados cuentan con la ventaja de leer las respuestas y puntuarlas
              si les son de utilidad. Además de poder formular nuevas preguntas. únete a esta
              gran comunidad. </p>

          </div>
          <div className="informacion">
          <img  src={logo2} />
          <strong>Multilenguaje</strong>
          <p>Nuestra web cuenta con una amplia variedad de lenguajes de programación. Así
            los usuarios pueden resolver sus cuestiones en el lenguaje de progrmación 
            que estan estudiando o manejando.
          </p>

          </div>
          <div className="informacion">
          <img src={logo3} />
          <strong>Profesionales</strong>
          <p>Contamos con una amplia variedad de profesionales, cada uno experto en su lenguaje de
            programación, que podrá resolver de forma clara consisa cualquier duda planteada por los
            usuarios.
          </p>

          </div>



        </section>
        
        <button><Link to="/">Volver</Link></button>
        </div>
        
      </div>
    );
  }
  
  export default About;
  