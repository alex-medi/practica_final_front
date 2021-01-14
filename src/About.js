import { Link } from 'react-router-dom';
import './about.css';

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
            <img className="registrate"></img>
            <h4></h4>

          </div>
          <div className="informacion">
          <img className="materias"></img>
          <h4></h4>

          </div>
          <div className="informacion">
          <img className="expertos"></img>
          <h4></h4>

          </div>



        </section>
        
        <button><Link to="/">Volver</Link></button>
        </div>
        
      </div>
    );
  }
  
  export default About;
  