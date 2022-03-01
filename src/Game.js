import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Game() {
  const params = useParams();
  const playlistId = params.id;
  const playlistName = params.name;

  // const [token, setToken] = useState();

  const [playlistData, setPlaylistData] = useState([]);

  // useEffect(() => {
  //   async function something() {
  //     const response = await fetch(`/.netlify/functions/spotify-oauth`);

  //     // const json = await response.json;
  //     console.log('RESPONSE', response);
  //   }
  //   something();

  // }, []);

  useEffect(() => {
    async function something() {
      const response = await fetch(`/.netlify/functions/spotify-playlist?id=${playlistId}`);

      const json = await response.json();

      setPlaylistData(json.data.items);
    }
    something();
    
  }, [playlistId]);
  console.log(playlistData);
  


  return (
    <div>GAME PAGE
      <h2>{playlistName}</h2>
      {
        playlistData.map((item, i) => 
          <audio controls key={i} src={item.track.preview_url}></audio>
        )
      }

    </div>
  );
}
