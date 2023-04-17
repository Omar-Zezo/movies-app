import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from './components/MovieDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  const [data, setData] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const getData = async ()=>{
    await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=2d1450a575e2dcacc1d2e19b768fdfdf&language=en-US&page=1')
    .then((movies)=>{
      setData(movies.data.results)
      setPageCount(movies.data.total_pages)
    })
  }  


  const getPage = async (number)=>{
    await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2d1450a575e2dcacc1d2e19b768fdfdf&language=en-US&page=${number}`)
    .then((movies)=>{
      setData(movies.data.results)
    })
  }  

  //Search movies
  const search = async (word)=>{
    if(word !== ""){
      await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2d1450a575e2dcacc1d2e19b768fdfdf&query=${word}&language=en-US&page=1&include_adult=false`)
      .then((movies)=>{
        setData(movies.data.results)
        setPageCount(movies.data.total_pages)
      })
    }else{
      getData()
    }
  } 

  useEffect(()=>{
    getData()
    },[])

  return (
    <div className="font color-body ">
      <NavBar search={search}/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList  movies={data} pageCount={pageCount} getPage={getPage}/>} />

            <Route path="movie/:id" element={<MovieDetails/>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
