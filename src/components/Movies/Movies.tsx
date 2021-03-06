import './Movies.css';

type MoviesProps = {
    title?: string | undefined
    moviesList?: any
    handleMovieClick: (value: any) => void;
}

const defaultList = [{
    "Title": "Batman: The Killing Joke",
    "Year": "2016",
    "imdbID": "tt4853102",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}, {
    "Title": "Batman: The Dark Knight Returns, Part 1",
    "Year": "2012",
    "imdbID": "tt2313197",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"
}, {
    "Title": "Batman: Mask of the Phantasm",
    "Year": "1993",
    "imdbID": "tt0106364",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTRiMWM3MGItNjAxZC00M2E3LThhODgtM2QwOGNmZGU4OWZhXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
}, {
    "Title": "Batman: The Dark Knight Returns, Part 2",
    "Year": "2013",
    "imdbID": "tt2166834",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTEzMmE0ZDYtYWNmYi00ZWM4LWJjOTUtYTE0ZmQyYWM3ZjA0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
}, {
    "Title": "Batman v Superman: Dawn of Justice Ultimate Edition",
    "Year": "2016",
    "imdbID": "tt18689424",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzgyMTMzZjUtNGNjMy00NTJjLWIzNDYtMTc2YzQwOGE5MGM4XkEyXkFqcGdeQXVyMTUwODYzMjcw._V1_SX300.jpg"
}, {
    "Title": "Batman",
    "Year": "1966",
    "imdbID": "tt0060153",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BODVjNjdlYTQtMWIwYy00MWIyLWI2ZmMtZWFhMTdjNjAzNGVlXkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SX300.jpg"
}, {
    "Title": "Batman: Year One",
    "Year": "2011",
    "imdbID": "tt1672723",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTJjMmVkZjctNjNjMS00ZmI2LTlmYWEtOWNiYmQxYjY0YWVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}, {
    "Title": "Batman: Assault on Arkham",
    "Year": "2014",
    "imdbID": "tt3139086",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDU1ZGRiY2YtYmZjMi00ZDQwLWJjMWMtNzUwNDMwYjQ4ZTVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}, {
    "Title": "Batman Beyond",
    "Year": "1999???2001",
    "imdbID": "tt0147746",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTBiZjFlZDQtZjc1MS00YzllLWE5ZTQtMmM5OTkyNjZjMWI3XkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SX300.jpg"
}, {
    "Title": "Batman: Gotham Knight",
    "Year": "2008",
    "imdbID": "tt1117563",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2I0YTFjOTUtMWYzNC00ZTgyLTk2NWEtMmE3N2VlYjEwN2JlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
}]

function Movies({ title = 'Default', moviesList = defaultList, handleMovieClick }: MoviesProps) {

    return (
        <div className='movies__container'>
            <h2 className='movies--title'>{title}</h2>
            <div className='movies__posters'>
                {moviesList.map((movie: any) => {
                    return movie.Poster !== 'N/A' && (
                        <img
                            className="movie__poster movie__posterLarge"
                            src={movie?.Poster}
                            alt={movie.Title}
                            key={movie.imdbID}
                            onClick={() => handleMovieClick(movie)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Movies;