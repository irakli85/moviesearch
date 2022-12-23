import MovieList from "./components/MovieList";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import loading from "./assets/sample.gif";
import {Routes, Route, Link} from "react-router-dom";
import Signin from "./components/Signin";

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const changeTheSearch = (event) => {
    
    setSearch(event.target.value);
  }

  const getAllMovies = () => {
    axios.get(APIURL)
      .then(
        (response) => {
          // console.log(response.data.results)
          setMovies(response.data.results);
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  const getSearchedMovies = () => {
    
    axios.get(
      SEARCHAPI + search
    )
      .then(
        (response) => {
          // console.log(response.data.results)
          setMovies(response.data.results);
        }
      )
      .catch(
        (error) => { 
          console.log(error);
        }
      )
  }

  useEffect(
    () => {
      setMovies([]);
      
      if (search === "") {
        getAllMovies();
      } else {
        getSearchedMovies();
      }
    },
    [search]
  )

  return (
    <>
     
    <Header/>
    <Main/>
    <div className="search-bar">
      <div className="input-box">
        <input type="search" placeholder="&#128269; Search here" value={search} onChange={changeTheSearch} />
        <p>Get Started</p>
      </div>
      {
        movies.length === 0
          ?
          <div className="loading-box">
            <img className="loading" src={loading} alt="loading"/>
          </div>
          :
          <MovieList movies={movies} />

      }            
    </div>    
    <Footer/>            
    {/* <Signin/> */}
    </>
  );
}

export default App;