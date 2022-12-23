import React from 'react'
import '@styles/CardFooter.sass'

/**
 * Defining typing of the props
 */
interface Props extends React.HTMLProps<HTMLDivElement> {
    text: string
}

/**
 * Card Header Component.
 *
 * @param {Props} { text } - text is an optional string to put in the middle of the footer. It will be lowercased inside the component.
 * @return {*} - Renders the component.
 */
const CardFooter: React.FC<Props> = ({ text }) => {
    return (
        <section className="card-footer">
            <span className="card-footer-text">{text.toLowerCase()}</span>
        </section>
    )
}

export default CardFooter
