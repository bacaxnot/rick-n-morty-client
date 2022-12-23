import { statusType } from '@components/StatusIndicator'
import { ICharacter, IRawCharacter } from '@interfaces'

/**
 *  Title formatter function.
 * @param title - Title string to format
 * @returns - The title formatted according to the parameters specified in the function (First letter capitalized and ':' at the end)
 */
export const titleFormatter = (title: string) =>
    title.charAt(0).toUpperCase() + title.slice(1) + ':'

/**
 * Attribute Values formatter function.
 * @param value - The string value to format
 * @returns - The value formatted according to the parameters specified in the function (lowercased)
 */
export const attributeValueFormatter = (value: string) => value.toLowerCase()

/**
 * Transforms an episodes number array into an equivalent string array
 * @param episodes - Episodes list as number array
 * @returns - Episodes list as string array
 */
export const episodesListFormatter = (episodes: number[]): string[] =>
    episodes.map(episode => 'Episode ' + episode.toString())

/**
 * Formats a Raw Character request result to the propper app format
 * @param character Raw Character result
 * @returns
 */
export const characterFormatter = (character: IRawCharacter): ICharacter => {
    let extractEpisodes = (episodesList: string[]): number[] =>
        episodesList.map(
            episode =>
                +episode.replace('https://rickandmortyapi.com/api/episode/', '')
        )
    let res: ICharacter = {
        id: character.id,
        name: character.name,
        image: character.image,
        attributes: {
            status: character.status as statusType,
            species: character.species,
            gender: character.gender,
            origin: character.origin.name,
        },
        episodes: extractEpisodes(character.episode),
    }
    return res
}

/**
 * Formats an array of Raw Characters into an array of proper app formatted Characters
 * @param characterArr Array of Raw Characters
 * @returns
 */
export const characterArrFormatter = (
    characterArr: IRawCharacter[]
): ICharacter[] => {
    let res = characterArr.map(character => characterFormatter(character))
    return res
}
