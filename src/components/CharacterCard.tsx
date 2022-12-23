import React, { useState } from 'react'
import '@styles/CharacterCard.sass'
import CardHeader from './CardHeader'
import CardImage from './CardImage'
import CardFooter from './CardFooter'
import StatusIndicator from './StatusIndicator'
import { ICharacter } from '@interfaces'
import { Link } from 'react-router-dom'

/**
 * Defining typing of the props
 */
interface Props extends React.HTMLProps<HTMLDivElement> {
    character: ICharacter
}

const CharacterCard: React.FC<Props> = ({ character }) => {
    const formatName = (name: string) => {
        if (name.length > 18) return name.slice(0, 16) + '...'
        return name
    }

    return (
        <Link to={`/character/${character.id}`} className="character-card">
            <CardHeader title={formatName(character.name)}>
                <StatusIndicator status={character.attributes.status} />
            </CardHeader>
            <CardImage imgSrc={character.image} imgAlt={character.name} />
            <CardFooter text={character.attributes.species} />
        </Link>
    )
}

export default CharacterCard
