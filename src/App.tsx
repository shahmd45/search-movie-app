import { useEffect, useState } from 'react';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Movies from './components/Movies/Movies';
import MovieDetails from './components/MovieDetails/MovieDetails';

import './App.css';

function App() {
  const url = `http://www.omdbapi.com/?s=star_wars&&apikey=${process.env.REACT_APP_API_KEY}`
  const [originalList, setOriginalList] = useState([]);
  const [movieSearchList, setMovieSearchList] = useState<any>([]);
  const [search, setSearch] = useState('');
  const [iconFlag, setIconFlag] = useState(false);
  const [movieDetail, setMovieDetail] = useState({});
  const [modalFlag, setModalFlag] = useState(false);

  const fetchMovies = async () => {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Search) {
      setOriginalList(data.Search)
    }
  }

  useEffect(() => {
    fetchMovies();
    setIconFlag(true);
    setSearch('');
  }, [])

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    if (event.target.value.length !== search.length) {
      setIconFlag(true);
    } else {
      setIconFlag(false);
    }
  }

  const handleReset = () => {
    setSearch('');
    setIconFlag(true);
    setMovieSearchList([]);
  }

  const handleClick = async () => {
    if (search !== '') {
      setIconFlag(false)
      const url = `http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API_KEY}`
      const res = await fetch(url);
      const data = await res.json();
      if (data.Search) {
        setMovieSearchList(data);
      }
    }
  }

  const handleMovieClick = (movie: any) => {
    setModalFlag(true);
    setMovieDetail(movie);
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={`App container-fluid ${modalFlag ? 'App-opacity' : ""}`}>
        <div className='row'>
          <Navbar
            search={search}
            iconFlag={iconFlag}
            onSearch={handleSearch}
            handleClick={handleClick}
            handleReset={handleReset}
          />
        </div>
        <Banner movieSearchList={movieSearchList} />

        <Movies
          moviesList={!iconFlag ? movieSearchList?.Search : undefined}
          title={!iconFlag ? 'Search List' : undefined}
          handleMovieClick={handleMovieClick}
        />
        <Movies
          title={'Original Movie List'}
          moviesList={originalList}
          handleMovieClick={handleMovieClick}
        />
      </div>

      {modalFlag && (
        <MovieDetails
          modalFlag={modalFlag}
          movieDetail={movieDetail}
          handleCancel={setModalFlag}
        />
      )}
    </>
  );
}

export default App;
