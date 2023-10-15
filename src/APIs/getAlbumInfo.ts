import { useAPIContext } from "../Configs/context";

export const getAlbumInfo = async (albumId: string, accessToken: string) => {
  const searchParams = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const response = await fetch(
    `https://api.spotify.com/v1/albums/${albumId}`,
    searchParams
  );

  const data = await response.json();
  return data;
};
