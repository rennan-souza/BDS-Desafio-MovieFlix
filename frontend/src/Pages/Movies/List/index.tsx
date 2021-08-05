import { Link } from "react-router-dom";
import "./styles.css";

const movie = {
  id: 6,
  title: "A Voz do Silêncio",
  subTitle: "Koe no Katachi",
  year: 2016,
  imgUrl:
    "https://image.tmdb.org/t/p/w533_and_h300_bestv2/5lAMQMWpXMsirvtLLvW7cJgEPkU.jpg",
};

const List = () => {
  return (
    <div className="movies-container">

      <div className="shadow bg-secondary-light movies-list-select-genre">
        <h1>Select genre</h1>
      </div>

      <div className="row">

        <div className="col-sm-6 col-xl-3">
          <div className="movies-list-card-container shadow bg-secondary-light">
            <div className="movies-list-img-container">
              <img src={movie.imgUrl} alt={movie.title} />
            </div>
            <div className="movies-list-description-container">
              <div className="movies-list-description-title">{movie.title}</div>
              <div className="movies-list-description-year">{movie.year}</div>
              <div className="movies-list-description-subtitle">
                {movie.subTitle}
              </div>
            </div>
          </div>
        </div>




        <div className="col-sm-6 col-xl-3">
          <div className="movies-list-card-container shadow bg-secondary-light">
            <div className="movies-list-img-container">
              <img src={movie.imgUrl} alt={movie.title} />
            </div>
            <div className="movies-list-description-container">
              <div className="movies-list-description-title">{movie.title}</div>
              <div className="movies-list-description-year">{movie.year}</div>
              <div className="movies-list-description-subtitle">
                {movie.subTitle}
              </div>
            </div>
          </div>
        </div><div className="col-sm-6 col-xl-3">
          <div className="movies-list-card-container shadow bg-secondary-light">
            <div className="movies-list-img-container">
              <img src={movie.imgUrl} alt={movie.title} />
            </div>
            <div className="movies-list-description-container">
              <div className="movies-list-description-title">{movie.title}</div>
              <div className="movies-list-description-year">{movie.year}</div>
              <div className="movies-list-description-subtitle">
                {movie.subTitle}
              </div>
            </div>
          </div>
        </div><div className="col-sm-6 col-xl-3">
          <div className="movies-list-card-container shadow bg-secondary-light">
            <div className="movies-list-img-container">
              <img src={movie.imgUrl} alt={movie.title} />
            </div>
            <div className="movies-list-description-container">
              <div className="movies-list-description-title">{movie.title}</div>
              <div className="movies-list-description-year">{movie.year}</div>
              <div className="movies-list-description-subtitle">
                {movie.subTitle}
              </div>
            </div>
          </div>
        </div><div className="col-sm-6 col-xl-3">
          <div className="movies-list-card-container shadow bg-secondary-light">
            <div className="movies-list-img-container">
              <img src={movie.imgUrl} alt={movie.title} />
            </div>
            <div className="movies-list-description-container">
              <div className="movies-list-description-title">{movie.title}</div>
              <div className="movies-list-description-year">{movie.year}</div>
              <div className="movies-list-description-subtitle">
                {movie.subTitle}
              </div>
            </div>
          </div>
        </div><div className="col-sm-6 col-xl-3">
          <div className="movies-list-card-container shadow bg-secondary-light">
            <div className="movies-list-img-container">
              <img src={movie.imgUrl} alt={movie.title} />
            </div>
            <div className="movies-list-description-container">
              <div className="movies-list-description-title">{movie.title}</div>
              <div className="movies-list-description-year">{movie.year}</div>
              <div className="movies-list-description-subtitle">
                {movie.subTitle}
              </div>
            </div>
          </div>
        </div><div className="col-sm-6 col-xl-3">
          <div className="movies-list-card-container shadow bg-secondary-light">
            <div className="movies-list-img-container">
              <img src={movie.imgUrl} alt={movie.title} />
            </div>
            <div className="movies-list-description-container">
              <div className="movies-list-description-title">{movie.title}</div>
              <div className="movies-list-description-year">{movie.year}</div>
              <div className="movies-list-description-subtitle">
                {movie.subTitle}
              </div>
            </div>
          </div>
        </div><div className="col-sm-6 col-xl-3">
          <div className="movies-list-card-container shadow bg-secondary-light">
            <div className="movies-list-img-container">
              <img src={movie.imgUrl} alt={movie.title} />
            </div>
            <div className="movies-list-description-container">
              <div className="movies-list-description-title">{movie.title}</div>
              <div className="movies-list-description-year">{movie.year}</div>
              <div className="movies-list-description-subtitle">
                {movie.subTitle}
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default List;
