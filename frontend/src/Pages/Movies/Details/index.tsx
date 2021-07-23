import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as IconStar } from "../../../assets/images/icon-star.svg";
import { Movie } from "../../../types/movie";
import { hasAnyRoles, requestBackend } from "../../../util/requests";
import "./styles.css";

type UrlParams = {
  movieId: string;
}

const Details = () => {

  const { movieId } = useParams<UrlParams>();

  const [movie, setMovie] = useState<Movie[]>();


  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params)
      .then((response) => {
        setMovie(response.data);
      })
  }, [movieId]);

  return (
    <div className="movies-details-container">
      <div className="movies-details-header">
        <h1>Tela detalhes do filme id: {movieId}</h1>
      </div>
      {hasAnyRoles(["ROLE_MEMBER"]) && (
        <div className="card bg-secondary-light shadow mt-3">
          <div className="card-body">
            <input
              type="text"
              className="form-control"
              placeholder="Deixe sua avaliação aqui"
            />
            <div className="movies-details-btn-container">
              <button className="btn btn-primary movies-details-btn">
                SALVAR AVALIAÇÃO
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="card bg-secondary-light shadow mt-3">
        <div className="card-body">

        {movie?.map((item) => (
          <div key={item.id}>
              <div className="movies-details-coments-header mt-4">
                <IconStar /> <span className="text-white">{item.user.name}</span>
              </div>
              <div className="movies-details-coments-content">
                <p>
                  {item.text}
                </p>
              </div>
          </div>
            
        ))}

              
       

              

          


        </div>
      </div>

     
  
    </div>
  );
};

export default Details;
