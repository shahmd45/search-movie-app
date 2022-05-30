import React from 'react'
import './MovieDetails.css';
import Close from '../../assets/WhiteClose.svg';

type MovieDetailsProps = {
    movieDetail: any;
    modalFlag: boolean;
    handleCancel: (value: boolean) => void;
}

function MovieDetails({ movieDetail, modalFlag, handleCancel }: MovieDetailsProps) {
    console.log(movieDetail)
    return (
        <div>
            <div className='movieDetails__backdrop'></div>
            <div className='movieDetails__container'>
                <img src={Close} alt='Close' className='closeIcon' onClick={() => handleCancel(false)} />
                <section className='movieDetails__section'>
                    <img className='moviePoster' src={movieDetail?.Poster} alt='poster' />
                    <div className='movieContent'>
                        <p>Title: </p>
                        <h1>{movieDetail.Title}</h1>
                        <p>Year Of Release:</p>
                        <h3>{movieDetail.Year}</h3>
                        <p>Genre / Type:</p>
                        <h5>{movieDetail.Type}</h5>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MovieDetails