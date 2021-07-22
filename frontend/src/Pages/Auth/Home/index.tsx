import "./styles.css";
import { Route, Switch } from 'react-router';
import { ReactComponent as MainImage } from "../../../assets/images/home-image.svg";
import Login from "../Login";


const Home = () => {
  return (
    <div className="home-container">
      <div className="row">
        <div className="col-md-6 home-image-container">
          <div className="home-text-content">
            <h1>Avalie Filmes</h1>
            <p>
              Diga o que você achou do seu <br /> filme favorito
            </p>
          </div>
          <div className="home-image-content">
            <MainImage />
          </div>
        </div>
        <div className="col-md-6">
        <Switch>
          <Route path="/auth/login">
            <Login />
          </Route>
          <Route path="/auth/signup">
            <h1>Card de signup</h1>
          </Route>
          <Route path="/auth/recover">
            <h1>Card de recover</h1>
          </Route>
        </Switch>
        </div>
      </div>
    </div>
  );
};

export default Home;
