import _API from '@classes/API'
import { ICharacter } from '@interfaces'
import { characterArrFormatter } from '@utils/formatters'
import { useEffect, useState } from 'react'

/**
 * Custom hook to fetch a given character data
 * @param id Character id
 * @returns
 */
export const useFetchCharacters = (stardId: number, endId: number) => {
    const [characters, setCharacters] = useState<ICharacter[]>([])
    const getCharacters = async (startId: number, endId: number) => {
        const charactersResponse = await _API.getCharacters(stardId, endId)
        if (charactersResponse) {
            const formattedCharacters =
                characterArrFormatter(charactersResponse)
            setCharacters(formattedCharacters)
        }
    }
    useEffect(() => {
        getCharacters(stardId, endId)
    }, [stardId, endId])
    return characters
}
