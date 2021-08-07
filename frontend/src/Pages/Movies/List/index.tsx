import "./styles.css";

import { AxiosRequestConfig } from "axios";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MovieGenre } from "../../../types/MovieGenre";
import { SpringPage } from "../../../types/SpringPage";
import { requestBackend } from "../../../util/requests";
import MovieGenreFilter, {
  GenreFilterData,
} from "../../../Components/MovieGenreFilter";
import Pagination from "../../../Components/Pagination";

type ControlComponentsData = {
  activePage: number;
  filterData: GenreFilterData;
};

const List = () => {
  const [page, setPage] = useState<SpringPage<MovieGenre>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { name: "", genre: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: GenreFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });
  };

  const getMovies = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `/movies`,
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        genreId: controlComponentsData.filterData.genre?.id,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="movies-container">
      <div className="shadow bg-secondary-light movies-list-select-genre">
        <MovieGenreFilter onSubmitFilter={handleSubmitFilter} />
      </div>

      <div className="row">
        {page?.content.map((movie) => (
          <div className="col-sm-6 col-xl-3" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <div className="movies-list-card-container shadow bg-secondary-light">
                <div className="movies-list-img-container">
                  <img src={movie.imgUrl} alt={movie.title} />
                </div>
                <div className="movies-list-description-container">
                  <div className="movies-list-description-title">
                    {movie.title}
                  </div>
                  <div className="movies-list-description-year">
                    {movie.year}
                  </div>
                  <div className="movies-list-description-subtitle">
                    {movie.subTitle}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Pagination
          forcePage={page?.number}
          pageCount={page ? page.totalPages : 0}
          range={3}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default List;
