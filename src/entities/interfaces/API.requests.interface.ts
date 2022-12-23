interface IRawPlace {
    name: string
    url: string
}

export interface IRawCharacter {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: IRawPlace
    location: IRawPlace
    image: string
    episode: string[]
    url: string
    created: string
}

export interface IRawEpisode {
    id: number
    name: string
    air_date: string
    episode: string
    characters: string[]
    url: string
    created: string
}
