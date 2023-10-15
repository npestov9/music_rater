import { useAPIContext } from "../Configs/context";

export const getArtistAlbums = async (artistId: string, accessToken: string) => {
  const searchParams = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&market=US&limit=50`,
    searchParams
  );

  const data = await response.json();
  return data.items;
};
