import React, { useState } from 'react'
import '@styles/CharacterCard.sass'
import CardHeader from './CardHeader'
import CardImage from './CardImage'
import CardFooter from './CardFooter'
import StatusIndicator from './StatusIndicator'
import { ICharacter } from '@interfaces'

/**
 * Defining typing of the props
 */
interface Props extends React.HTMLProps<HTMLDivElement> {
    character: ICharacter
    expanded: boolean
}

const CharacterCard: React.FC<Props> = ({ expanded, character }) => {
    // const attributesArr = Object.entries(character.attributes)

    return (
        <div className="character-card">
            <CardHeader title={character.name}>
                <StatusIndicator status={character.attributes.status} />
            </CardHeader>
            <CardImage imgSrc={character.image} imgAlt={character.name} />
            <CardFooter text={character.attributes.species} />
        </div>
    )
}

export default CharacterCard
