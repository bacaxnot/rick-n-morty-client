import _API from '@classes/API'
import { ICharacter } from '@interfaces'
import { characterFormatter } from '@utils/formatters'
import { useEffect, useState } from 'react'

/**
 * Custom hook to fetch a given character data
 * @param id Character id
 * @returns
 */
export const useFetchCharacter = (id: number) => {
    const [character, setCharacter] = useState<ICharacter>({
        id: 0,
        name: 'Unknown',
        image: '',
        attributes: {
            status: 'Unknown',
            species: 'Unknown',
            gender: 'Unknown',
            origin: 'Unknown',
        },
        episodes: [0],
    })
    const getCharacter = async (id: number) => {
        const characterResponse = await _API.getCharacter(id)
        if (characterResponse) {
            const formattedCharacter = characterFormatter(characterResponse)
            setCharacter(formattedCharacter)
        }
    }
    useEffect(() => {
        getCharacter(id)
    }, [id])
    return character
}
