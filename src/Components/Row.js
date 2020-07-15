import React, { useState, useEffect } from 'react'
import axios from '../Api/axios';
import './Row.css'

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setmovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setmovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl])

    return (
        <div className="row" >
            <h3>{title}</h3>
            <div className="row_posters">
                {
                    movies.map((movie) => {
                        return <img className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            key={movie.id} alt={movie.name} />
                    })
                }
            </div>
        </div>
    )
}

export default Row

