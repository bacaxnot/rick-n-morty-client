import '@styles/StatusIndicator.sass'
import React from 'react'

export type statusType = 'Alive' | 'Dead' | 'Unknown'

/**
 * Defining typing of the props
 */
interface Props extends React.HTMLProps<HTMLDivElement> {
    status: statusType
}

/**
 * Component used to indicate wheter a character has status: alive, dead or unknown.
 *
 * @param {statusType} status - It sets the indicator class anf therefore its color (alive=green, dead=red, unknown=yellow).
 * @return {*} - Renders a small circle with a color defined by the status class on its stylesheet.
 *
 */
const StatusIndicator: React.FC<Props> = ({ status }: Props) => {
    return (
        <div className={`status-indicator ${status.toLocaleLowerCase()}`}></div>
    )
}

export default StatusIndicator
