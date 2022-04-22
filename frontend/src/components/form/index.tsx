import React from 'react'
import './styles.css'

function Form() {
    const movie = {
        id: 1,
        title: 'The Witcher III - Wild Hunt',
        image: 'https://store-images.s-microsoft.com/image/apps.28990.69531514236615003.8f0d03d6-6311-4c21-a151-834503c2901a.d629260e-2bc4-4588-950c-f278cbc22a64?q=90&w=177&h=265',
        score: 4.5,
        count: 150
    }

    return (
        <div className="xbcritic-form-container">
            <img className="xbcritic-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="xbcritic-card-bottom-container">
                <h3>{movie.title}</h3>
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
                    <button className="btn xbcritic-btn mt-3">Cancelar</button>
                </div>

            </div>

        </div>
    )
}

export default Form