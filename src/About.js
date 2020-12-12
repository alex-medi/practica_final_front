import { Link } from 'react-router-dom';
import './about.css';

function About() {
             
    return (
      <div className="page-about">

          <div className="content">
        
        <h1>Sobre Nosotros</h1>

        <article>Contamos con un gran equipo de expertos, cada uno profesional en su materia con
            los que nos es posible llevar a cabo nuetra principal tarea: la Formación, crecemos día a día
            con el objetivo de ofrecer nuestros servicios cada vez a más estudiantes, puesto que entre ellos
            es donde estan los futuros programadores
        </article>
        
        <Link to="/">Volver</Link>
        </div>
        
      </div>
    );
  }
  
  export default About;
  