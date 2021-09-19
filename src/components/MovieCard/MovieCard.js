import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
 
function MovieCard() {
    const movies = useSelector((state) => state.allMovies.movies);
    const renderList = movies.map((movie) => {
        const {id,title,price,image,rating} = movie;
         console.log(movie);
        return(
            <div className="product-components">
                <Link to={`/movie/${id}`}>
                   <div className="four wide column" key ={id}>
                       <p>{title}</p>
                   </div>
                </Link>
            </div>
        );
    });
    return (
     <div>
         {renderList}
         </div>
    )
}

export default MovieCard
