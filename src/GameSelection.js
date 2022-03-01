import React from 'react';
import { useEffect, useState } from 'react';
import { fetchAllPlaylists } from './services/fetch-utils';
import { Link } from 'react-router-dom';

export default function GameSelection() {

  const [playlists, setPlaylists] = useState([]);

  // const netlifyUrl = '/.netlify/functions/spotify';

  useEffect(() => {
    async function fetchAndSetPlaylists() {
      const response = await fetchAllPlaylists();
      setPlaylists(response);
    }
    fetchAndSetPlaylists();
  }, []);
  console.log(playlists);


  useEffect(() => {
    async function something() {
      const response = await fetch(`/.netlify/functions/spotify-oauth`);

      const json = await response.json();

      // const json = await response.json;
      console.log('RESPONSE', json);
    }
    something();

  }, []);



  return (
    <div>
      <h2>Choose Your Trivia Round</h2>
      {
        playlists.map((playlist, i) =>
          <Link to={`/game/${playlist.playlist_id}/${playlist.playlist_name}`} key={i} >
            <div className='playlist'>
              <h2>{playlist.playlist_name}</h2>
            </div>
          </Link>
        )
      }
    </div>
  );
}
