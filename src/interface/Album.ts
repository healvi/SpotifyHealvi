import { artistSearch} from "./SearchData"

export interface AllAlbum {
    href: string,
    items: album[],
    limit: number,
    next: string | null,
    offset: number,
    previous: string | null,
    total: number
}

export interface album {
    album_type: string,
    artists: artistSearch[],
    external_urls: {
        spotify: string
    },
    href: string
    id: string,
    images: imagesAlbum[],
    name: string,
    release_date: string,
    release_date_precision: string,
    total_tracks: number,
    type: string,
    uri: string

}

export interface imagesAlbum {
    height : number,
    url : string,
    width : number
}