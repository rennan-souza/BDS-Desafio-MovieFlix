import { ReactComponent as IconStar } from '../../../assets/images/icon-star.svg';
import './styles.css';

const Details = () => {
    return (
        <div className="movies-details-container">
            <div className="movies-details-header">
                <h1>Tela detalhes do filme id: 1</h1>
            </div>
            <div className="card bg-secondary-light shadow mt-3">
                <div className="card-body">
                    <input type="text" className="form-control" placeholder="Deixe sua avaliação aqui"/>
                    <div className="movies-details-btn-container">
                        <button className="btn btn-primary movies-details-btn">SALVAR AVALIAÇÃO</button>
                    </div>
                </div>
            </div>
            <div className="card bg-secondary-light shadow mt-3">
                <div className="card-body">
                    <div className="movies-details-coments-header">
                        <IconStar /> <span className="text-white">Maria Silva</span>
                    </div>
                    <div className="movies-details-coments-content">
                        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;