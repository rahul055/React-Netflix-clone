import React from 'react';
import './App.css';
import Row from './Components/Row';
import request from './Api/request'
import Banner from './Components/Banner';

function App() {
  return (

    <div className="app">
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
