import React from 'react'

function MovieCard(props) {
    const {data} = props;
    return (
        <div className="card__items">
           <img src={data.Poster} />
           <h1>{data.Title}</h1>
        </div>
    )
}

export default MovieCard

