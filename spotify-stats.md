---
title: Spotify Stats
description: Functions to fetch Spotify stats from the Spotify API.
date: 2022-06-30
tags:
  - TypeScript
  - Spotify
property: value
---

## Spotify Stats

This is assuming you have authenticated on Spotify and saved your token.

```ts
const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${clientId}:${clientSecret}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    // @ts-ignore
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token
    })
  });

  return response.json();
};

const topTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term",
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }
  );
};

const topArtists = async () => {
  const { access_token } = await getAccessToken();

  return fetch(
    "https://api.spotify.com/v1/me/top/artists?time_range=short_term",
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }
  );
};

type SpotifyTrack = {
  name: string;
  artists: { name: string }[];
  external_urls: { spotify: string };
};

type SpotifyArtist = {
  name: string;
  images: { url: string }[];
  external_urls: { spotify: string };
  followers: { total: number };
};

export { topTracks, topArtists };
export type { SpotifyTrack, SpotifyArtist };
```