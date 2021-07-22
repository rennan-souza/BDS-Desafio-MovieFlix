import { Switch } from "react-router-dom";
import List from "./List";
import PrivateRoute from "../../Components/PrivateRoute";
import Details from "./Details";

const Movies = () => {
  return (
    <Switch>
      <PrivateRoute path="/movies/list">
        <List />
      </PrivateRoute>
      <PrivateRoute path="/movies/:movieId">
        <Details />
      </PrivateRoute>
    </Switch>
  );
};

export default Movies;
