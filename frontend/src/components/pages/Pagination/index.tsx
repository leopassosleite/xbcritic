import React from 'react'
import './styles.css'
import { GiWideArrowDunk } from "react-icons/gi";

function Pagination() {
    return (
        <div className="xbcritic-pagination-container">
            <div className="xbcritic-pagination-box">
                <button className="xbcritic-pagination-button" disabled={true} >
                    <GiWideArrowDunk />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="xbcritic-pagination-button" disabled={false}>
                    <GiWideArrowDunk className="xbcritic-flip-horizontal" />
                </button>
            </div></div>
    )
}

export default Pagination