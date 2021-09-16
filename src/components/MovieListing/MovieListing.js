// import axios from 'axios';
import axios from "../../api/fakeApi";
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setMovies } from '../../redux/actions/movieAction';

function MovieListing() {
    
    const movies = useSelector((state) => state);
    const dispatch = useDispatch();

    // const fetchMovies = async () => {
    //     const response = await axios.get("https://api.themoviedb.org/3/").catch((err) => {
    //     console.log("Error",err)
    //     });
    //     dispatch(setMovies(response.data));
    // }

    useEffect(() => {
        async function fetchMovies(){
            const request = await axios.get(baseURL);
            setMovies(request.data);
            return request
        }
        fetchMovies();
    },[baseURL]);

   console.log("Movies",movies)
    return (
        <div>
            <h1>Movie Listining</h1>
        </div>
    )
}

export default MovieListing
