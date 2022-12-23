import { IRawCharacter, IRawEpisode } from '@interfaces'

export interface IAPI {
    getCharacters(
        startId: number,
        endId: number
    ): Promise<IRawCharacter[] | undefined>
    getCharacter(id: number): Promise<IRawCharacter | undefined>
    getEpisode(id: number): Promise<IRawEpisode | undefined>
}
