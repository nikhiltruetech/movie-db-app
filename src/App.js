import { Router, Route, Switch,Redirect } from "react-router-dom";
import Home from "./Components/Home";
import MovieDetails from "./Components/MovieDetails";
import { history } from "./config/history";
import Header from "./Layout/Header";
const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/movie-db-app.github.io" />
        </Route>
        <Route exact path="/movie-db-app.github.io" component={Home} />
        <Route exact path="/movie-details" component={MovieDetails} />
      </Switch>
    </Router>
  );
};

export default App;
