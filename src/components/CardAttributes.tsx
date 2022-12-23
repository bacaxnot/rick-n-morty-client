import React from 'react'
import '@styles/CardAttributes.sass'
import CardAttributeElement, { ICardAttribute } from './CardAttributesElement'
import { titleFormatter } from '@utils/formatters'

/**
 * Defining typing of the props
 */
interface Props extends React.HTMLProps<HTMLDivElement> {
    title: string
    attributes: ICardAttribute[]
}
/**
 * Attributes Section Component in Card.
 *
 * @param {*} {attributes} - array of ICardAttribute objects to render
 * @return {*}
 */
const CardAttributes: React.FC<Props> = ({ title, attributes }) => {
    const attributesElements = attributes.map((attr, indx) => (
        <CardAttributeElement key={`attr-${indx}`} attribute={attr} />
    ))
    return (
        <section className="card-attributes">
            <h2 className="attributes-title">{titleFormatter(title)}</h2>
            <div className="attributes-list">{attributesElements}</div>
        </section>
    )
}

export default CardAttributes
