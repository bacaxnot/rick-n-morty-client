import { ICharacter } from '@interfaces'
import React from 'react'
import CharacterCard from './CharacterCard'
import '@styles/HomeView.sass'
import { useFetchCharacters } from '@hooks/useFetchCharacters'
import Header from './Header'

const HomeView = () => {
    const characters = useFetchCharacters(1, 50)
    const charactersList = characters.map(character => (
        <CharacterCard key={character.id} character={character} />
    ))

    return <main className="home">{charactersList}</main>
}

export default HomeView
