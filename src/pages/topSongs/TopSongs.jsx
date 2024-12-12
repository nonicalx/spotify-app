import React from "react";

export default function TopSongs() {
  // Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization

  // const token =
  //   "BQBYwhs3-W_xe7iLZaR63Vi0SxHVBY9G8aZo--UlePUWsXzUOq11HhaEFlUhKUqUE2iAE0-hUGxDkj10BD424QXy6zyug1a7BG_NnD94y2sZK5Vye32IS2t4t2Br2HZqIbcMERfZs0tpEwCWSQ7nzIBztpZkHBi2kZ9wb4iwwr6GMiRhJy2bTRZAEuu9Amy4lwQ3dm_WPJSFTfd4m_-Wjc-UNpj91ezTYziQi5AyND_rSQaRkwra4uhUC_vJPLpZ06MHxjfApJ1Jw0owu13Ndomrv8zG";
  // async function fetchWebApi(endpoint, method, body) {
  //   try {
  //     const res = await fetch(`https://api.spotify.com/${endpoint}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //       method,
  //       body: JSON.stringify(body),
  //     });
  //     return await res.json();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // async function getTopTracks() {
  //   // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  //   try {
  //     return (
  //       await fetchWebApi(
  //         "v1/me/top/tracks?time_range=long_term&limit=5",
  //         "GET"
  //       )
  //     )?.items;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // const topTracks = getTopTracks()
  //   .then((res) => res)
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // console.log(
  //   topTracks?.map(
  //     ({ name, artists }) =>
  //       `${name} by ${artists.map((artist) => artist.name).join(", ")}`
  //   )
  // );
  return <h1>Top Songs</h1>;
}
