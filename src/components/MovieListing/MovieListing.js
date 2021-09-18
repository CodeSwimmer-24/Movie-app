// import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setMovies } from '../../redux/actions/movieAction';
import movieApi from "../api/fakeApi";
import {APIKey} from "../api/fakeApiKey";
import MovieCard from "../MovieCard/MovieCard"

function MovieListing() {
    
    const movies = useSelector((state) => state);
    const dispatch = useDispatch();

   useEffect(() => {
       const fetchMovies = async () => {
           const response = await movieApi.get(`?apiKey=${APIKey}`).catch((err) => {
               console.log("Error",err)
           });
          dispatch(setMovies(response.data));
           console.log("Movies ==>",response)
       };
       fetchMovies();
   },[]);
   console.log("Movies",movies)
    return (
     <div>
         <h1>
             <MovieCard />
         </h1>
     </div>
    )
}

export default MovieListing
