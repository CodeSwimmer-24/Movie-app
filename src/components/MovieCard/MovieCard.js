import React from 'react'
import "../../css/MovieCard.css";
function MovieCard(props) {
    const {data} = props;
    return (
        <div className="card__items">
           <img src={data.Poster} />
           <h3>{data.Title}</h3>
        </div>
    )
}

export default MovieCard

