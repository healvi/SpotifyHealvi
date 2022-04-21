export const query = 'ghost'
export const uri = 'spotify:track:6I3mqTwhRpn34SLVafSH7G'
export const idartsit = '1uNFoZAHBGtllmzznpCI3s'
export const idplaylist = '3EbFZCxa3TfbcfL7QJFgTm'
export const id = 'zg8yzyhbwlju129yafigcgt7d'

export const track = 
    {
        tracks: {
          href: "https://api.spotify.com/v1/search?query=ghost&type=track&market=ID&locale=en-US%2Cen%3Bq%3D0.9%2Cid%3Bq%3D0.8&offset=0&limit=1",
          items: [
            {
              album: {
                album_type: "album",
                artists: [
                  {
                    external_urls: {
                      spotify: "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
                    },
                    href: "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
                    id: "1uNFoZAHBGtllmzznpCI3s",
                    name: "Justin Bieber",
                    type: "artist",
                    uri: "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
                  }
                ],
                external_urls: {
                  spotify: "https://open.spotify.com/album/5dGWwsZ9iB2Xc3UKR0gif2"
                },
                href: "https://api.spotify.com/v1/albums/5dGWwsZ9iB2Xc3UKR0gif2",
                id: "5dGWwsZ9iB2Xc3UKR0gif2",
                images: [
                  {
                    height: 640,
                    url: "https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431",
                    width: 640
                  },
                  {
                    height: 300,
                    url: "https://i.scdn.co/image/ab67616d00001e02e6f407c7f3a0ec98845e4431",
                    width: 300
                  },
                  {
                    height: 64,
                    url: "https://i.scdn.co/image/ab67616d00004851e6f407c7f3a0ec98845e4431",
                    width: 64
                  }
                ],
                name: "Justice",
                release_date: "2021-03-19",
                release_date_precision: "day",
                total_tracks: 16,
                type: "album",
                uri: "spotify:album:5dGWwsZ9iB2Xc3UKR0gif2"
              },
              artists: [
                {
                  external_urls: {
                    spotify: "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
                  },
                  href: "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
                  id: "1uNFoZAHBGtllmzznpCI3s",
                  name: "Justin Bieber",
                  type: "artist",
                  uri: "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
                }
              ],
              disc_number: 1,
              duration_ms: 153190,
              explicit: false,
              external_ids: {
                isrc: "USUM72102635"
              },
              external_urls: {
                spotify: "https://open.spotify.com/track/6I3mqTwhRpn34SLVafSH7G"
              },
              href: "https://api.spotify.com/v1/tracks/6I3mqTwhRpn34SLVafSH7G",
              id: "6I3mqTwhRpn34SLVafSH7G",
              is_local: false,
              is_playable: true,
              name: "Ghost",
              popularity: 91,
              preview_url: null,
              track_number: 11,
              type: "track",
              uri: "spotify:track:6I3mqTwhRpn34SLVafSH7G"
            }
          ],
          limit: 1,
          next: "https://api.spotify.com/v1/search?query=ghost&type=track&market=ID&locale=en-US%2Cen%3Bq%3D0.9%2Cid%3Bq%3D0.8&offset=1&limit=1",
          offset: 0,
          previous: null,
          total: 10022
        }
      }


export const getMePlaylist = {
  "href": "https://api.spotify.com/v1/users/zg8yzyhbwlju129yafigcgt7d/playlists?offset=0&limit=1",
  "items": [
    {
      "collaborative": false,
      "description": "this is for module 3 sesssion 3",
      "external_urls": {
        "spotify": "https://open.spotify.com/playlist/1HgOLU6Ddl1cRmGcSRviet"
      },
      "href": "https://api.spotify.com/v1/playlists/1HgOLU6Ddl1cRmGcSRviet",
      "id": "1HgOLU6Ddl1cRmGcSRviet",
      "images": [],
      "name": "HOMEWORK 9",
      "owner": {
        "display_name": "Mohammad Irvan",
        "external_urls": {
          "spotify": "https://open.spotify.com/user/zg8yzyhbwlju129yafigcgt7d"
        },
        "href": "https://api.spotify.com/v1/users/zg8yzyhbwlju129yafigcgt7d",
        "id": "zg8yzyhbwlju129yafigcgt7d",
        "type": "user",
        "uri": "spotify:user:zg8yzyhbwlju129yafigcgt7d"
      },
      "primary_color": null,
      "public": true,
      "snapshot_id": "NDQsZjI0YjI0YTYxNGY1OTQ1OTc4ZWNhYzRjYjI4YzY0ZjMzOTczOTUxMQ==",
      "tracks": {
        "href": "https://api.spotify.com/v1/playlists/1HgOLU6Ddl1cRmGcSRviet/tracks",
        "total": 0
      },
      "type": "playlist",
      "uri": "spotify:playlist:1HgOLU6Ddl1cRmGcSRviet"
    }
  ],
  "limit": 1,
  "next": "https://api.spotify.com/v1/users/zg8yzyhbwlju129yafigcgt7d/playlists?offset=1&limit=1",
  "offset": 0,
  "previous": null,
  "total": 2
}

export const getArtist = {
  "external_urls": {
    "spotify": "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
  },
  "followers": {
    "href": null,
    "total": 59476723
  },
  "genres": [
    "canadian pop",
    "pop"
  ],
  "href": "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
  "id": "1uNFoZAHBGtllmzznpCI3s",
  "images": [
    {
      "height": 640,
      "url": "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36",
      "width": 640
    },
    {
      "height": 320,
      "url": "https://i.scdn.co/image/ab676161000051748ae7f2aaa9817a704a87ea36",
      "width": 320
    },
    {
      "height": 160,
      "url": "https://i.scdn.co/image/ab6761610000f1788ae7f2aaa9817a704a87ea36",
      "width": 160
    }
  ],
  "name": "Justin Bieber",
  "popularity": 96,
  "type": "artist",
  "uri": "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
}

export const getArtistAlbum = {
  "href": "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s/albums?offset=0&limit=1&include_groups=single&market=ID&locale=en-US,en;q=0.9,id;q=0.8",
  "items": [
    {
      "album_group": "single",
      "album_type": "single",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0cGUm45nv7Z6M6qdXYQGTX"
          },
          "href": "https://api.spotify.com/v1/artists/0cGUm45nv7Z6M6qdXYQGTX",
          "id": "0cGUm45nv7Z6M6qdXYQGTX",
          "name": "Kehlani",
          "type": "artist",
          "uri": "spotify:artist:0cGUm45nv7Z6M6qdXYQGTX"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
          },
          "href": "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
          "id": "1uNFoZAHBGtllmzznpCI3s",
          "name": "Justin Bieber",
          "type": "artist",
          "uri": "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/3vnJxSrVldmInhRwtcUG89"
      },
      "href": "https://api.spotify.com/v1/albums/3vnJxSrVldmInhRwtcUG89",
      "id": "3vnJxSrVldmInhRwtcUG89",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/ab67616d0000b27349625a48446d599a7e1cecce",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/ab67616d00001e0249625a48446d599a7e1cecce",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/ab67616d0000485149625a48446d599a7e1cecce",
          "width": 64
        }
      ],
      "name": "up at night (feat. justin bieber)",
      "release_date": "2022-03-30",
      "release_date_precision": "day",
      "total_tracks": 1,
      "type": "album",
      "uri": "spotify:album:3vnJxSrVldmInhRwtcUG89"
    }
  ],
  "limit": 1,
  "next": "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s/albums?offset=1&limit=1&include_groups=single&market=ID&locale=en-US,en;q=0.9,id;q=0.8",
  "offset": 0,
  "previous": null,
  "total": 48
}

export const postItemToPlaylist = {
  "snapshot_id": "NDUsOTExNjc1ZGM2OTg2NjllODRkNzc1OTdhOGZlNzRjODNiNTYwYzFhOA=="
}

export const deleteItemToPlaylist = {
  "snapshot_id": "NDUsOTExNjc1ZGM2OTg2NjllODRkNzc1OTdhOGZlNzRjODNiNTYwYzFhOA=="
}

export const creatPlaylist = {
  "collaborative": false,
  "description": "ABJADdescription",
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/3EbFZCxa3TfbcfL7QJFgTm"
  },
  "followers": {
    "href": null,
    "total": 0
  },
  "href": "https://api.spotify.com/v1/playlists/3EbFZCxa3TfbcfL7QJFgTm",
  "id": "3EbFZCxa3TfbcfL7QJFgTm",
  "images": [],
  "name": "ABJAD",
  "owner": {
    "display_name": "Mohammad Irvan",
    "external_urls": {
      "spotify": "https://open.spotify.com/user/zg8yzyhbwlju129yafigcgt7d"
    },
    "href": "https://api.spotify.com/v1/users/zg8yzyhbwlju129yafigcgt7d",
    "id": "zg8yzyhbwlju129yafigcgt7d",
    "type": "user",
    "uri": "spotify:user:zg8yzyhbwlju129yafigcgt7d"
  },
  "primary_color": null,
  "public": false,
  "snapshot_id": "MSxhNmY5MjUyZDhhNmE4MDczNmE0ZDQyZDk1OTEwODBlNGE2MzQ0MGIy",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/3EbFZCxa3TfbcfL7QJFgTm/tracks",
    "items": [],
    "limit": 100,
    "next": null,
    "offset": 0,
    "previous": null,
    "total": 0
  },
  "type": "playlist",
  "uri": "spotify:playlist:3EbFZCxa3TfbcfL7QJFgTm"
}