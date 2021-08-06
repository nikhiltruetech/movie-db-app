import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../../store/actions/myactions"
import List from "../List"
const Home = () => {
    //Accessing Movies array from Redux store
    const moviesArray = useSelector(state => state.movie.movieList)
    const dispatch = useDispatch()
    useEffect(()=>{
        getMovieList()
    },[])
    // Fetching Movies
    const getMovieList=()=>{
        dispatch(getMovies())
    }
    return (
        <div className="m-5 cursor-pointer">
            <List movies={moviesArray}/>
        </div>
    )
}

export default Home
