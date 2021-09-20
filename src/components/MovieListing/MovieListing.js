import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../redux/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard";

function MovieListing() {

    const movies = useSelector(getAllMovies);

    // let renderMovies = "";

    // renderMovies = movies.Response === "True" ? (
    //     movies.Search.map((movie,index) => (
    //        <MovieCard key={index} data={movie} />
    //     ))
    // ) : (
    // <div>
    //     <h3>{movies.Error}</h3>
    // </div>
    // );

    return (
       <div className="movie-wrapper">
           <div className="movie-list">
               <div className="movie-container">
               { movies.Search.map((movie,index) => (
                     <MovieCard key={index} data={movie} />
                 )) }
               </div>
           </div>
       </div>
    )
}

export default MovieListing

