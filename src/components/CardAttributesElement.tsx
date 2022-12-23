import React from 'react'
import '@styles/CardAttributesElement.sass'
import { attributeValueFormatter, titleFormatter } from '@utils/formatters'

export type ICardAttribute = [string, string]

interface Props extends React.HTMLProps<HTMLDivElement> {
    attribute: ICardAttribute
}

const CardAttributeElement: React.FC<Props> = ({ attribute }) => {
    const name = attribute[0]
    const value = attribute[1]
    return (
        <div className="card-attribute">
            <span className="attribute-name">{titleFormatter(name)}</span>
            <span className="attribute-value">
                {attributeValueFormatter(value)}
            </span>
        </div>
    )
}

export default CardAttributeElement
