export interface allArtist {
    href: string,
    items: artist[],
    limit: number,
    next: string | null,
    offset: number,
    previous: string | null,
    total: number
  }

export interface artist  {
    external_urls: {
        spotify: string
    },
    followers: {
        href: string,
        total: number
    },
    genres: string[],
    href: string,
    id: number,
    images: ImagesArtist[],
    name: string,
    popularity: number,
    type: string,
    uri: string
  }

  export interface ImagesArtist {
    height : number,
    url : string,
    width : number
}
