import React from 'react'
import MovieScore from '../MovieScore'

const movie = {
    id: 1,
    title: 'The Witcher III - Wild Hunt',
    image: 'https://store-images.s-microsoft.com/image/apps.28990.69531514236615003.8f0d03d6-6311-4c21-a151-834503c2901a.d629260e-2bc4-4588-950c-f278cbc22a64?q=90&w=177&h=265',
    score: 4.5,
    count: 150
}
function MovieCard() {
    return (
        <div className="xbcritic-form-container">
            <img className="xbcritic-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="xbcritic-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <div className="btn btn-primary xbcritic-btn">Avaliar</div>
            </div>
        </div>
    )
}

export default MovieCard