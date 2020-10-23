import React from 'react';
import './App.css'
import Row from './components/Row'
import requests from './requests'
import Banner from './components/Banner'
import Nav from './components/Nav'

class App extends React.Component{
    render(){
        return (
            // isLargeRow props means true but no need to write that
            <div className="app-component">
                {/* all this is giving me url */}
                <Nav/>
                <Banner fetchUrl={requests.fetchTrending}/>
                <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
                <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
                <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
                <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
                <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
                <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
                <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
                <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
            </div>
        )
    }
}

export default App; 