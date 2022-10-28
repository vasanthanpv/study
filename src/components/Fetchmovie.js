import  React, { useState,useEffect,useCallback } from "react";
import MovieList from "./MovieList";
const Fetchmovie = () =>{
const [movies,setMovies] = useState([]);
const [isloading,setloading] = useState(false)
const [error,seterror] = useState(null);


const fetchmoviehandler = useCallback (async () => 
{
    setloading(true);
    seterror(null);

    try{

        const response = await fetch('https://swapi.dev/api/films');
        if(!response.ok) {
            throw new Error('something went wrong');
        }
    const data = await response.json();

    // console.log(data.results);
    const transforemedmoviedata = data.results.map((mymoviedata)=>{

        return {
id:mymoviedata.episode_id,
title:mymoviedata.title,
description:mymoviedata.opening_crawl
        };
    })

    setMovies(transforemedmoviedata);
   

    }catch(error){
        seterror(error.message);
    }
    setloading(false);

},[]);


useEffect(()=>{
    fetchmoviehandler();
},[fetchmoviehandler]);


    return(
        <div>
            <button onClick={fetchmoviehandler}>Fetch movies</button>
           {!isloading && movies.length>0 &&  <MovieList movies = {movies} /> }
           {!isloading && movies.length ===0 && !error &&  <p>No movies found!!</p>}
           {!isloading && error && <p>{error}</p>}
           {isloading &&  <p>......Loading</p>}
        </div>
    )

}

export default Fetchmovie;