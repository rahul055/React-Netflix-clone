import React, { useState, useEffect } from 'react';
import axios from '../Api/axios';
import request from '../Api/request';
import './Banner.css'

function Banner() {
    const [movie, setmovie] = useState([])

    useEffect(() => {

        async function fetchData() {
            const req = await axios.get(request.fetchNetflixOriginals)
            setmovie(
                req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]
            )
            console.log(req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]);
        }
        fetchData()
    }, [])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className='banner_content'>
                <h1 className='banner_title' >{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>

                </div>
                <h1 className='banner_description' >
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className='banner_fadeBottom' />
        </header>
    )
}

export default Banner
