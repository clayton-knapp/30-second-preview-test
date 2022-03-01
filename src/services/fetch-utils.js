import { client, checkError } from './client';

export async function fetchAllPlaylists() {
  const response = await client
    .from('playlists')
    .select();

  return checkError(response);
}
