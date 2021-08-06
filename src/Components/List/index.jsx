import { ListGroup, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectedMovie } from "../../store/actions/myactions";
import { history } from "../../config/history";
const List = ({ movies }) => {
  const dispatch = useDispatch();

  // Passing single movie detail to "/movie-details"
  const handleClick = (movie) => {
    history.push("/movie-details");
    dispatch(selectedMovie(movie));
  };
  return (
    <div>
      <h4 className="text-center">List of Movies Available</h4>
      <Container>
        <ListGroup>
          {movies
            ? movies.map((movie, index) => {
                const { original_title } = movie;
                return (
                  <div key={index} onClick={() => handleClick(movie)}>
                    <ListGroup.Item variant="light">
                      {index + 1}. {original_title}
                    </ListGroup.Item>
                  </div>
                );
              })
            : null}
        </ListGroup>
      </Container>
    </div>
  );
};

export default List;
