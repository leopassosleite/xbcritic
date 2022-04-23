import React from 'react'
import './styles.css'
import { GiWideArrowDunk } from "react-icons/gi";
import { MoviePage } from 'types/movie';

type Props = {
    page: MoviePage;
    onChange: Function;
}

function Pagination({ page, onChange }: Props) {

    return (
        <div className="xbcritic-pagination-container">
            <div className="xbcritic-pagination-box">
                <button className="xbcritic-pagination-button" disabled={page.first} onClick={() => onChange(page.number - 1)} >
                    <GiWideArrowDunk />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="xbcritic-pagination-button" disabled={page.last} onClick={() => onChange(page.number + 1)}>
                    <GiWideArrowDunk className="xbcritic-flip-horizontal" />
                </button>
            </div></div>
    )
}

export default Pagination