import React, { useState, useEffect } from 'react';
import axios from '../Api/axios';
import request from '../Api/request'

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
    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className='banner_content'>
                <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_button">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>

                </div>
                <h1 className='banner_description' >{movie?.overview}</h1>
            </div>

        </header>
    )
}

export default Banner
