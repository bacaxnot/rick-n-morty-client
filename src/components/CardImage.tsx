import React from 'react'
import '@styles/CardImage.sass'

/**
 * Defining typing of the props
 */
interface Props extends React.HTMLProps<HTMLDivElement> {
    imgSrc: string
    imgAlt: string
}
/**
 * Component used to render a width-responsive and height-fixed image container for a Card. Receives the img src & alt attributes as props.
 *
 * @param {*} { imgSrc, imgAlt }
 * @return {*}
 */
const CardImage: React.FC<Props> = ({ imgSrc, imgAlt }) => {
    return (
        <figure className="card-img">
            <img src={imgSrc} alt={imgAlt} />
        </figure>
    )
}

export default CardImage
