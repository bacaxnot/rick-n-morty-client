import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import { useFetchCharacter } from '@hooks/useFetchCharacter'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'
import CardImage from './CardImage'
import CardAttributes from './CardAttributes'
import CardListSection from './CardListSection'
import { episodesListFormatter } from '@utils/formatters'
import '@styles/CharacterView.sass'

const CharacterView = () => {
    const { id } = useParams()
    const character = useFetchCharacter(+id!)
    const attributesArr = Object.entries(character.attributes)
    return (
        <main className="character-view">
            <div className="character-card-expanded">
                <CardHeader title={character.name} />
                <div className="character-info">
                    <CardImage
                        imgSrc={character.image}
                        imgAlt={character.name}
                    />
                    <CardAttributes
                        title="attributes"
                        attributes={attributesArr}
                    />
                </div>
                <CardListSection
                    title="Episodes appeared in"
                    elements={episodesListFormatter(character.episodes)}
                />
                <CardFooter text="" />
            </div>
        </main>
    )
}

export default CharacterView
