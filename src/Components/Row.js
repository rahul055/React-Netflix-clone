import React, { useState, useEffect } from 'react'
import axios from '../Api/axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setmovies] = useState([]);
    const [trailerUrl, settrailerUrl] = useState("")
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setmovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }
    const HandleClick = (movie) => {
        if (trailerUrl) {
            settrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    settrailerUrl(urlParams.get('v'));
                }).catch(error => console.log(error))
        }
    }
    return (
        <div className="row" >
            <h3>{title}</h3>
            <div className="row_posters">
                {
                    movies.map((movie) => {
                        return <img className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            key={movie.id} alt={movie.name}
                            onClick={() => HandleClick(movie)}
                        />
                    })
                }
            </div>
            {
                trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
            }

        </div>
    )
}

export default Row

