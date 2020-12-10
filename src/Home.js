import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page home">
      <h1>Portada...</h1>
      <div>Insertar aqui la informacion de presentacion</div>
      <ul>
        <li><Link to="/temas/:idTema">temas</Link></li>
                
      </ul>
    </div>
  );
}

export default Home;
