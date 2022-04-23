import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from 'services/requests';
import { Movie } from 'types/movie';
import './styles.css'

type Props = {
    movieId: string;
}

function FormCard({ movieId }: Props) {

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            });
    }, [movieId]);

    return (
        <div className="xbcritic-form-container">
            <img className="xbcritic-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="xbcritic-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="xbcritic-form">
                    <div className="xbcritic-form-group">
                        <label htmlFor="email">Informe ser email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="xbcritic-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="xbcritic-form-btn-container">
                        <button type="submit" className="btn xbcritic-btn">Salvar</button>
                    </div>
                </form>
                <div className="xbcritic-formsx-btn-container">
                    <Link to="/">
                        <button className="btn xbcritic-btn mt-3">Cancelar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FormCard