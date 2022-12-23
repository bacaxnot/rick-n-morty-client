import { ICharacter } from '@interfaces'
import React from 'react'
import { useFetchCharacters } from '@hooks/useFetchCharacters'
import CharacterCard from '@components/CharacterCard'
import '@styles/HomeView.sass'

const HomeView = () => {
    const characters = useFetchCharacters(1, 50)
    const charactersList = characters.map(character => (
        <CharacterCard key={character.id} character={character} />
    ))

    return <main className="home">{charactersList}</main>
}

export default HomeView
