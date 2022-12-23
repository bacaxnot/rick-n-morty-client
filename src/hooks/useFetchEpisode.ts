import _API from '@classes/API'
import { IEpisode } from '@interfaces'
import { episodeFormatter } from '@utils/formatters'
import { useEffect, useState } from 'react'

/**
 * Custom hook to fetch a given episode data
 * @param id Character id
 * @returns
 */
export const useFetchEpisode = (id: number) => {
    const [episode, setepisode] = useState<IEpisode>({
        id: 0,
        attributes: {
            name: 'unknown',
            airDate: 'unknown',
            episode: 'unknown',
        },
        characters: ['0'],
    })
    const getepisode = async (id: number) => {
        const episodeResponse = await _API.getEpisode(id)
        if (episodeResponse) {
            const formattedepisode = episodeFormatter(episodeResponse)
            setepisode(formattedepisode)
        }
    }
    useEffect(() => {
        getepisode(id)
    }, [id])
    return episode
}
