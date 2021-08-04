import "./styles.css";

import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as IconStar } from "../../../assets/images/icon-star.svg";
import { MovieReview } from "../../../types/movieReview";
import { hasAnyRoles, requestBackend } from "../../../util/requests";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { Movie } from "../../../types/movie";
import { toast } from 'react-toastify';

type UrlParams = {
  movieId: string;
};

type FormData = {
  review: string;
};

const Details = () => {
  const { movieId } = useParams<UrlParams>();

  const [movieReview, setMovieReview] = useState<MovieReview[]>();

  const [movie, setMovie] = useState<Movie>();

  const [hasError, setHasError] = useState(false);

  const [refresh, setRefresh] = useState(false);

  const getMovieReviews = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setMovieReview(response.data);
    });
  }, [movieId]);

  const getMovie = useCallback(() => {
    const params: AxiosRequestConfig = {
      method: "GET",
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  useEffect(() => {
    getMovieReviews();
    getMovie();
  }, [refresh, getMovieReviews, getMovie]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    const params: AxiosRequestConfig = {
      method: "POST",
      url: "/reviews",
      withCredentials: true,
      data: {
        text: formData.review,
        movieId: movieId,
      },
    };

    requestBackend(params)
      .then(() => {
        setRefresh(true);
        reset();
        setHasError(false);
        toast.success('Comentário salvo com sucesso');
      })
      .catch(() => {
        setHasError(true);
        setRefresh(false);
      })
      .finally(() => {
        setRefresh(false);
      });
  };

  return (
    <div className="movies-details-container">
      <div className="card bg-secondary-light movie-details-card-img-container shadow mt-3">
        <div className="row">
          <div className="col-xl-6">
            <div className="movie-details-img">
              <img src={movie?.imgUrl} alt={movie?.title} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="movie-details-title">
              <h1>{movie?.title}</h1>
            </div>
            <div className="movie-details-year">
              <h1>{movie?.year}</h1>
            </div>
            <div className="movie-details-subtitle">
              <p>{movie?.subTitle}</p>
            </div>
            <div className="movie-details-synopsis-container">
              <p>{movie?.synopsis}</p>
            </div>
          </div>
        </div>
      </div>

      {hasAnyRoles(["ROLE_MEMBER"]) && (
        <div className="card bg-secondary-light movie-details-form-container shadow mt-3">
          {hasError && (
            <div className="alert alert-danger">
              Erro ao salvar o comentário
            </div>
          )}

          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("review", {
                  required: "Campo obrigatório",
                })}
                type="text"
                className={`form-control ${errors.review ? "is-invalid" : ""}`}
                placeholder="Deixe sua avaliação aqui"
                name="review"
              />
              <small className="text-danger"> {errors.review?.message} </small>
              <div className="movies-details-btn-container">
                <button className="btn btn-primary movies-details-btn">
                  SALVAR AVALIAÇÃO
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="card bg-secondary-light movie-details-reviews-container shadow mt-3">
        <div className="card-body">
          {movieReview?.map((item) => (
            <div key={item.id}>
              <div className="movies-details-coments-header mt-4">
                <IconStar />{" "}
                <span className="text-white">{item.user.name}</span>
              </div>
              <div className="movies-details-coments-content">
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
