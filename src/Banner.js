import React, { useState, useEffect } from 'react'
import axios from './axios'
import request from './request'
import './Banner.css'

function Banner() {
    const [movie, setmovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const requests = await axios.get(request.fetchActionMovies);
            //console.log(request);
            setmovie(
                requests.data.results[
                    Math.floor(Math.random() * requests.data.results.length - 1)
                ]
            );
          return requests;
        }
        fetchData();     
    }, []);

    //console.log(movie);
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) +"..." : str;
    }
    return (
        <header className="banner"
          style ={{
              backgroundSize: "cover",
              background: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              backgroundPosition: "center center",
          }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">
                    {/*title*/}
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                {/* div 2 button*/}
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                    {/*description*/}
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner-fadeBottom"></div>
            
            
        </header>
    )
}

export default Banner
