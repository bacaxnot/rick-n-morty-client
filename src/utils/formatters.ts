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
