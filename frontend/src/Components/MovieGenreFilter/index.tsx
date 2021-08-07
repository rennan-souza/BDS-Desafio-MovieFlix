import "./styles.css";

import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { useEffect, useState } from "react";
import { requestBackend } from "../../util/requests";

type Genre = {
  id: number;
  name: string;
};

export type GenreFilterData = {
  name: string;
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: GenreFilterData) => void;
};

const MovieGenreFilter = ({ onSubmitFilter }: Props) => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const { control, setValue, getValues, handleSubmit } =
    useForm<GenreFilterData>();

  const onSubmit = (formData: GenreFilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue("genre", value);

    const obj: GenreFilterData = {
      name: getValues("name"),
      genre: getValues("genre"),
    };

    onSubmitFilter(obj);
  };

  useEffect(() => {
    requestBackend({
      method: "GET",
      url: "/genres",
      withCredentials: true,
    }).then((response) => {
      setSelectGenres(response.data);
    });
  }, []);

  return (
    <div className="movies-list-select-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="genre"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              classNamePrefix="movies-list-genres-select"
              options={selectGenres}
              isClearable
              placeholder="Categorias"
              getOptionLabel={(genre: Genre) => genre.name}
              getOptionValue={(genre: Genre) => String(genre.id)}
              onChange={(value) => handleChangeGenre(value as Genre)}
            />
          )}
        />
      </form>
    </div>
  );
};

export default MovieGenreFilter;
