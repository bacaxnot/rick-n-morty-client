import _API from '@classes/API'
import charactersExpected from './characters.test.response.json'
import characterExpected from './character.test.response.json'
import episodeExpected from './episode.test.response.json'

describe.skip('API Wrapper Class', () => {
    it('should fetch a list of all the characters', async () => {
        const result = await _API.getCharacters(1, 3)
        expect(result).toEqual(charactersExpected)
    })
    it('should fetch a single character', async () => {
        const result = await _API.getCharacter(1)
        expect(result).toEqual(characterExpected)
    })
    it('should fetch a single episode', async () => {
        const result = await _API.getEpisode(1)
        expect(result).toEqual(episodeExpected)
    })
})
