const client_id = process.env.SPOTIFY_CLIENT_ID; // Your client id
const client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret

const request = require('request'); // "Request" library


// yo ur application requests authorization
const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
  
      // use the access token to access the Spotify Web API
    const token = body.access_token;
    console.log(body);
    // return token;
    // return body.access_token;

    // return { 
    //   statusCode: 200, 
    // // this is where you shoot data back to the user. right now it's sending an empty object--replace this with the yelp data. remember, you do need to stringify it, otherwise netlify gets mad. ¯\_(ツ)_/¯
    //   body: JSON.stringify(json),

  }
});


// const fetch = require('node-fetch');

// require('dotenv').config();

// exports.handler = async (e) => {
//   try {
//     const response = await fetch(`https://accounts.spotify.com/api/token`, {
//       headers: {
//         // Authorization: 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//         Authorization: 'Basic ' + (client_id + ':' + client_secret).toString('base64'),
//         // ['Content-Type']: 'application/x-www-form-urlencoded'
//       },
//       form: {
//         grant_type: 'client_credentials'
//       },
//       json: true
//     });
//     // console.log(' RESPONSE HERE------------------------', response);

//     const json = await response.json();
//     console.log(' JSON HERE-----------------------------', json);

    
//     return { 
//       statusCode: 200, 
//     // this is where you shoot data back to the user. right now it's sending an empty object--replace this with the yelp data. remember, you do need to stringify it, otherwise netlify gets mad. ¯\_(ツ)_/¯
//       body: JSON.stringify(json),
//     };

//   } catch (error) {
//     // console.log(error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Failed fetching data' }),
//     };
//   }
// };