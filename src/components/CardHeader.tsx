import React from 'react'
import '@styles/CardHeader.sass'

/**
 * Defining typing of the props
 */
interface Props extends React.HTMLProps<HTMLDivElement> {
    title: string
}
/**
 * Card Header Component
 *
 * @param {Props} { title, children } = title will be the title in the card, children will be an icon in the left side of the header with a max-height of 25px.
 * @return {*} - Relative positioned component
 */
const CardHeader: React.FC<Props> = ({ title, children }: Props) => {
    return (
        <section className="card-header">
            <span className="card-icon">{children}</span>
            <h2 className="card-title">{title}</h2>
        </section>
    )
}

export default CardHeader
