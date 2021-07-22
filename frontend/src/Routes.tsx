import { BrowserRouter, Route, Switch, Redirect  } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Auth/Home";
import Movies from "./Pages/Movies";


const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Redirect from="/" to="/auth/login" exact />
      <Redirect from="/auth" to="/auth/login" exact />
      <Route path="/auth">
        <Home />
      </Route>

      <Redirect from="/movies" to="/movies/list" exact />
      <Route path="/movies">
        <Movies/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;