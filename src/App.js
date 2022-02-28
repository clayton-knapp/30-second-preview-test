import './App.css';
import data from './data.js';


function App() {

  // console.log(data);
  // console.log(data.items);
  const songs = data.items.map((song, i) => 
  {
    console.log(song.track);
    const triviaObj = {};
    triviaObj.artist = song.track.artists[0].name;
    triviaObj.album = song.track.album.name;
    // console.log('OBJ', triviaObj);

    // const url = song.track.preview_url;
    // console.log(url);
  }
  );



  return (
    <div className="App">
      do stuff here
    </div>
  );
}

export default App;
