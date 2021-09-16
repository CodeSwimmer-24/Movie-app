import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import MovieCard from '../MovieCard/MovieCard'
import MovieListing from '../MovieListing/MovieListing'

function Home() {
    return (
        <div>
            <Header />
            <MovieListing />
            <Footer />
        </div>
    )
}

export default Home
