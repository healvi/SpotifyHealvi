
export interface AllPlaylist {
    href: string,
    items: Playlist[],
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number
  }

  export interface Playlist {
        collaborative: boolean,
        description: string,
        external_urls: {
          spotify: string
        },
        href: string,
        id: string,
        images: playlistImages[],
        name: string,
        owner: {
          display_name: string,
          external_urls: {
            spotify: string
          },
          href: string,
          id: string,
          type: string,
          uri: string
        },
        primary_color: string | null,
        public:boolean,
        snapshot_id: string,
        tracks: {
          href: string,
          total: number
        },
        type: string,
        uri: string
  
  }

  export interface playlistImages {
    height: number,
    url: string
    width: number
  }



