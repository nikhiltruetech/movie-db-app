import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { history } from "../../config/history";
import MovieDetailsCard from "../Comman/Card";

const MovieDetails = () => {
  const movie = useSelector((state) => state.movie.selectedMovie);
  return (
    <div className="container m-5">
      <Button onClick={() => history.push("/")}>Back</Button>
      <div className="text-center text-secondary">Detailed Overview</div>
      <div className="d-flex justify-content-center p-3">
        <MovieDetailsCard movie={movie} />
      </div>
    </div>
  );
};

export default MovieDetails;
