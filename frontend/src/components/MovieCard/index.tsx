import React from 'react'
import { Link } from 'react-router-dom'
import { Movie } from 'types/movie'
import MovieScore from '../MovieScore'

type Props = {
    movie: Movie;
}

function MovieCard( { movie } : Props) {
    return (
        <div className="xbcritic-form-container">
            <img className="xbcritic-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="xbcritic-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore count={movie.count} score={movie.score}/>
                <Link to={`/formulario/${movie.id}`}>
                    <div className="btn btn-dark xbcritic-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    )
}

export default MovieCard