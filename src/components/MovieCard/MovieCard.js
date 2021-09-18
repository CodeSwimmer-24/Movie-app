import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
 
function MovieCard(props) {
    // const movies = useSelector((state) => state.allMovies.movies);
    const renderList = movies.map((movie) => {
        const {id,title,price,image,rating} = props;
        console.log(movie);
        return(
            <div className="product-components">
                <Link to={`/movies/${props.id}`}>
                   <div className="four wide column" key ={props.id}>
                       <h1>{props.title}</h1>
                   </div>
                </Link>
            </div>
        );
    });
    return (
     <>{renderList}</>
    )
}

export default MovieCard
