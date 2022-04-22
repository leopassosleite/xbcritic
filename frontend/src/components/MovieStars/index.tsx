import React from 'react'
import './styles.css'
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs"

function MovieStars() {
    return (
        <div className="xbcritic-stars-container">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
            <BsStar />

        </div>
    );
}

export default MovieStars