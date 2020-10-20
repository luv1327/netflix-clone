import React, {useState,useEffect} from 'react';
import axios from '../axios';
import '../Row.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Youtube from 'react-youtube'

//rfce creates this component

// i can also pass object as a parameter instead of props so that i will not have to say props.anything 

const baseUrl = 'https://image.tmdb.org/t/p/original/'

function Row({title,fetchUrl,isLargeRow}){
    const [movies,setMovies] = useState([]);
    // console.log(movies)

    useEffect(()=>{
      
        async function fetchData(){
            // even if it takes 5 sec wait for the request then do something
            const request = await axios.get(fetchUrl)
            const moviesData = request.data.results
            setMovies(moviesData)
            // console.log(movies);
            return request
        }
        fetchData()
          // if [] is empty then this code will run only once but if we pass movies to the array as a dependency then the page will load every time the movie var changes
          
    },[fetchUrl,movies])


    // const opts = {
    //     height: '390',
    //     width : '100%',
    //     playerVars : {
    //         autoplay : 1,
    //     }
    // }

    return(
        <div className='container'>
            {/* title */}
            <h3 className='row-title'>{title}</h3>
                <div className='row-posters'>
                    {/* container posters */}
                        {movies.map(movie=>(
                            // everything gets posters class but if its a large row we will give it extra class 
                            <img className={`posters ${isLargeRow && 'posters-large'}`}
                            key={movie.id}
                             src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                             alt={movie.name}>
                            </img>
                        ))}
                </div>
                {/* when we have trailer url then i want to youtube video */}
        </div>
    )
}


export default Row;