import React from 'react'
import './styles.css'
import MovieStars from '../MovieStars'

const score = 3.5;
const count = 13;

function MovieScore() {
    return (
        <div className="xbcritic-score-container">
            <p className="xbcritic-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="xbcritic-score-count">{count} avaliações</p>
        </div>
    )
}

export default MovieScore