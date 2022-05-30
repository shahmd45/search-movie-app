import { useEffect, useState } from "react";
import './Banner.css';

const bannerList: any = {
    "Search": [{
        "Title": "Star Wars",
        "Year": "1977",
        "imdbID": "tt0076759",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
    }, {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "Year": "1980",
        "imdbID": "tt0080684",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    }, {
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "Year": "1983",
        "imdbID": "tt0086190",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }, {
        "Title": "Star Wars: Episode VII - The Force Awakens",
        "Year": "2015",
        "imdbID": "tt2488496",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
    }, {
        "Title": "Star Wars: Episode I - The Phantom Menace",
        "Year": "1999",
        "imdbID": "tt0120915",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }, {
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
        "Year": "1999–2001",
        "imdbID": "tt0147746",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTBiZjFlZDQtZjc1MS00YzllLWE5ZTQtMmM5OTkyNjZjMWI3XkEyXkFqcGdeQXVyMTA1OTEwNjE@._V1_SX300.jpg"
    }, {
        "Title": "Batman: Gotham Knight",
        "Year": "2008",
        "imdbID": "tt1117563",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2I0YTFjOTUtMWYzNC00ZTgyLTk2NWEtMmE3N2VlYjEwN2JlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }, {
        "Title": "Star Wars: Episode III - Revenge of the Sith",
        "Year": "2005",
        "imdbID": "tt0121766",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
    }, {
        "Title": "Star Wars: Episode II - Attack of the Clones",
        "Year": "2002",
        "imdbID": "tt0121765",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
    }, {
        "Title": "Star Wars: Episode VIII - The Last Jedi",
        "Year": "2017",
        "imdbID": "tt2527336",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
    }, {
        "Title": "Rogue One: A Star Wars Story",
        "Year": "2016",
        "imdbID": "tt3748528",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
    }, {
        "Title": "Star Wars: Episode IX - The Rise of Skywalker",
        "Year": "2019",
        "imdbID": "tt2527338",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"
    }],
    "totalResults": "732",
    "Response": "True"
}

type BannerProps = {
    movieSearchList: any;
}

function Banner({ movieSearchList }: BannerProps) {
    const [bannerMovie, setBannerMovie] = useState<any>([]);
    const [toggle, setToggle] = useState<boolean>(false);
    
    const movieList = movieSearchList.length > 0 ? movieSearchList : bannerList;

    useEffect(() => {
        let flag = true;
        let timer: any = null;
        if (flag) {
            flag = false;
            timer = setInterval(() => {
                const index = Math.floor(Math.random() * movieList.Search.length)
                setBannerMovie(movieList.Search[index]);
                flag = true;
            }, 3000);
        }

        return () => clearInterval(timer);
    }, []);

    const handleDetails = () => {
        setToggle(prevToggle => !prevToggle);
    }

    const truncate = (str: string, n: number) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }


    if (bannerList.Search.length > 0) {
        return (
            <header
                className="movie__banner--container"
                style={{
                    backgroundImage: `url(${bannerMovie.Poster})`,
                }}
            >
                <div className="movie__banner--contents">
                    <h1 className="movie__banner--title">
                        {truncate(bannerMovie?.Title, 35)}
                    </h1>


                    <div className="movie__banner--buttons">
                        <button className="movie__banner--button" onClick={handleDetails}>Details</button>
                    </div>

                    {toggle && (
                        <h1 className="movie__banner--description">
                            Year of release: {bannerMovie?.Year} <br />
                            Genre:  {bannerMovie?.Type.toUpperCase()}
                        </h1>
                    )}
                </div>
                <div className="movie__banner--fadeBottom" />
            </header>
        )
    } else return <></>
}

export default Banner