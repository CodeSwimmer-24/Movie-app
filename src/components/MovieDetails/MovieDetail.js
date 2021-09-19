import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import movieApi from "../api/fakeApi";
import { APIKey } from '../api/fakeApiKey';
import {selectedMovies} from "../../redux/actions/movieAction";
import axios from 'axios';

function MovieDetail() {
    const movie = useSelector((state) => state.movie)
    const { movieId } = useParams();
     const dispatch = useDispatch();
    console.log(movie);
    const fetrchMoviesDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${movieId}`).catch((err) => {
            console.log("Err",err)
        });
        dispatch(selectedMovies(response.data));
    };
    useEffect (() => {
       if(movieId && movieId !== "" ) fetrchMoviesDetails(movieId);
        },[movieId])
    return (
        <div>
         <h1>Movie details</h1>   
        </div>
    )
}

export default MovieDetail
