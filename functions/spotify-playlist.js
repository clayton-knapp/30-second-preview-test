
const fetch = require('node-fetch');
require('dotenv').config();


exports.handler = async (event, context) => {
  const playlistId = event.queryStringParameters.id;
  // const baseUrl = 'https://api.spotify.com/v1';
  // const playlistUrl = baseUrl + `/playlists/${playlistId}/tracks`;

  try {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?market=US`, 
      { headers: 
        { 
          Accept: 'application/json', 
          ['Content-Type']: 'application/json', 
          Authorization: `Bearer BQA6b5XIcEKcBZsLoTzvI38DaHlrhxibTCArfNngDc19fbpU_1MJQngTrSnrVwxHlGPmnHpTtLCTeBLf74Y` 
        } 
      });

    // console.log('RESPONSE', response);

    const data = await response.json();
    // console.log('DATA', data);

    const json = JSON.stringify({ data });
    console.log('JSON', json);
    
    return { 
      statusCode: 200, 
      body: json
    };

  } catch (error) {

    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};

