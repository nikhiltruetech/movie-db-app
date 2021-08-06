import { GET_MOVIE_LIST, OPEN, SELECTED_MOVIE } from "./actionTypes";
import axios from "axios";
import { baseUrl } from "../../Service/service";

//Async call for fetching Movies
export const getMovies = () => async (dispatch) => {
  const res = await axios.post(`${baseUrl}`);
  dispatch({ type: GET_MOVIE_LIST, payload: res.data.results });
};
// Storing single movie details in Redux state
export const selectedMovie = (payload) => (dispatch) => {
  dispatch({ type: SELECTED_MOVIE, payload });
};
// For opening Toast message on Favorite add
export const openToast = (payload) => (dispatch) => {
  dispatch({ type: OPEN, payload });
};
