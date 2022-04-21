export interface postPlaylist {
    name: string,
    description: string,
    public: boolean
}

export interface searchTrack {
    q: string,
    type: string,
    limit: number,
    market: string,
}