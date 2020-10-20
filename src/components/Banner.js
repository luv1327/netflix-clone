
import React, {useState,useEffect} from 'react';
import axios from '../axios';
import '../Banner.css'


const baseUrl = 'https://image.tmdb.org/t/p/original/'

function Banner({fetchUrl}) {
    const [movie,setMovie] = useState([]);

    useEffect(()=>{
       async function fetchData(){
           const request = await axios.get(fetchUrl)
           const movieData = request.data.results
        //    alert(request.data.results)
        //    console.log(requests)
        const randomNumber = Math.floor(Math.random() * movieData.length -1) 
        
           setMovie(
               movieData[randomNumber]
           )
        //    console.log(movie);
           return request;
       }
       fetchData();
    },[fetchUrl]);

    function truncate(str,n) {
        // if str.length is greater then n then substring from 0 to n -1 and add ... or return the str
        return str?.length > n ? str.substr(0,n - 1) + '...' : str;
    }

    return(
         <header className='banner'
         style={{
             backgroundSize : 'cover',
             backgroundImage : `url(${baseUrl}${movie?.backdrop_path})`,
             backgroundPosition : 'center center' 
         }}
         >
             <div className='banner-contents'>

                 {/* telling to look for movie.name if movie.title is not found by ? mark */}

                 <h4 className='banner-title'>{movie?.title || movie?.name || movie.original_name}</h4>

                 {/* <img class='banner-image' src={`${baseUrl}${movie.poster_path}`} alt={movie.name}></img> */}

                 <div className='banner-buttons'>
                     <button className='banner-button'>Play</button>
                     <button className='banner-button'>My List</button>
                 </div>
                 <h1 className='banner-description'
                 > {truncate(movie?.overview,150)} </h1>
             </div>
            {/* header has background image
             inside header it has title
             a div with 2 buttons 
             and description */}
             {/* creating empty div to style and create shadow in the bottom of the banner so that the text will be clear */}
             <div className="banner--fadeBottom"/>
        </header>
    )
}


export default Banner;