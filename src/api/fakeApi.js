import axios from "axios";

export default axios.create({
    baseURL: "https://fake-movie-database-api.herokuapp.com/api?s=batman",
})

