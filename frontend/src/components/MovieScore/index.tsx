import React from 'react'
import './styles.css'
import MovieStars from '../MovieStars'

type Props = {
    score: number;
    count: number;
}

function MovieScore({ score, count} : Props) {

    return (
        <div className="xbcritic-score-container">
            <p className="xbcritic-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars score={score}/>
            <p className="xbcritic-score-count">{count} avaliações</p>
        </div>
    )
}

export default MovieScore