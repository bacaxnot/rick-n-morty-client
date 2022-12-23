import React from 'react'
import '@styles/CardListSection.sass'

/**
 * Defining typing of the props
 */
interface Props extends React.HTMLProps<HTMLDivElement> {
    title: string
    elements: string[]
}
/**
 * Card List section Component. It receives an array of strings and render a flex-based component containing them all. It also receives a title to describe the list content.
 *
 * @param {*} { title, elements }
 * @return {*}
 */
const CardListSection: React.FC<Props> = ({ title, elements }) => {
    const contentFormatter = (content: string) => `- ${content}`

    const elementsList = elements.map((element, indx) => (
        <span key={`elm-${indx}`} className="list-element">
            {contentFormatter(element)}
        </span>
    ))

    return (
        <section className="card-list-section">
            <h2 className="list-title">{title}</h2>
            <div className="list-container">{elementsList}</div>
        </section>
    )
}

export default CardListSection
