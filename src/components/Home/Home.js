import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addMovies } from '../../redux/movies/movieSlice';
import MovieListing from "../MovieListing/MovieListing";

 
function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await axios.get('https://fake-movie-database-api.herokuapp.com/api?s=batman').catch ((err) => {
              console.log("Err",err); 
            });
            console.log("The response from Api ",response);
            dispatch(addMovies(response.data));
        };

        fetchMovies();
    },[]);

    return (
        <div>
            <div className="banner__image"></div>
           <MovieListing />
        </div>
    )
}

export default Home
