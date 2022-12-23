import { IAPI, IRawEpisode, IRawCharacter } from '@interfaces'
import { numberSequenceArray } from '@utils/api.utils'

export class API implements IAPI {
    private URL = 'https://rickandmortyapi.com/api'
    private httpLib = fetch

    /**
     * Fetches a characters batch from a given id's interval
     * @param startId Start of id's batch
     * @param endId End of id's batch
     * @returns
     */
    async getCharacters(
        startId: number,
        endId: number
    ): Promise<IRawCharacter[] | undefined> {
        const charactersList = numberSequenceArray(startId, endId)
        const response = await window.fetch(
            `${this.URL}/character/[${charactersList}]`
        )
        if (!response.ok) return undefined
        const result: IRawCharacter[] = await response.json()
        return result
    }
    /**
     * Fetches a character by its Id
     * @param id id of the character
     * @returns
     */
    async getCharacter(id: number): Promise<IRawCharacter | undefined> {
        const response = await window.fetch(`${this.URL}/character/${id}`)
        if (!response.ok) return undefined
        const result: IRawCharacter = await response.json()
        return result
    }
    /**
     * Fetches a episode by its id
     * @param id id of the episode
     * @returns
     */
    async getEpisode(id: number): Promise<IRawEpisode | undefined> {
        const response = await window.fetch(`${this.URL}/episode/${id}`)
        if (!response.ok) return undefined
        const result: IRawEpisode = await response.json()
        return result
    }
}
const _API = new API()
export default _API
