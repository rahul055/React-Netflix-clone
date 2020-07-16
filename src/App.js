import React from 'react';
import './App.css';
import Row from './Components/Row';
import request from './Api/request'
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';

function App() {
  return (

    <div className="app">
      <Navbar />
      <header> <Banner /></header>
      <Row title='NETFLIX ORIGINALS' fetchUrl={request.fetchNetflixOriginals} isLargeRow />
      <Row title='Trending Now' fetchUrl={request.fetchTrending} />
      <Row title='Top Rated' fetchUrl={request.fetchToprated} />
      <Row title='Action Movies' fetchUrl={request.fetchAction} />
      <Row title='Comedy Movies' fetchUrl={request.fetchComedy} />
      <Row title='Horror Movies' fetchUrl={request.fetchHorror} />
      <Row title='Romance Movies' fetchUrl={request.fetchRomance} />
      <Row title='Documentaries' fetchUrl={request.fetchDocumentry} />
    </div>
  );
}

export default App;
