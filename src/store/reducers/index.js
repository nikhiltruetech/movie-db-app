import { GET_MOVIE_LIST, OPEN, SELECTED_MOVIE } from "../actions/actionTypes"

const initialState = {
    movieList:[],
    selectedMovie:[],
    open:false
}
const movieReducer = (state=initialState,action) => {
    switch(action.type){
        case GET_MOVIE_LIST:
            return {
                ...state,
                movieList:action.payload
            }
        case SELECTED_MOVIE:
            return{
                ...state,
                selectedMovie: action.payload
            }
        case OPEN:
            return{
                ...state,
                open: action.payload
            }
        default:
            return state;
    }
}

export default movieReducer
