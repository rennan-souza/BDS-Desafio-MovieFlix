import { Link } from 'react-router-dom';
import './styles.css';

const List = () => {
  return (
    <div className="movies-container">
      <div className="card shadow bg-secondary-light">
        <div className="card-body">
          <h1 className="text-white mb-4">Tela de listagem de filmes</h1>
          <Link to="/movies/1"> Acessar /movies/1</Link> <br /><br />
          <Link to="/movies/2"> Acessar /movies/2</Link>
        </div>
      </div>
    </div>
  );
};

export default List;
