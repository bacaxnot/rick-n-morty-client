import React from 'react'
import Header from '@components/Header'
import '@styles/App.sass'

/**
 * Defining typing of the props
 */
interface Props extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode
}
/**
 * Main App layout
 *
 * @param {*} { children } - Nodes to insert below the header
 * @return {*}
 */
const App: React.FC<Props> = ({ children }) => {
    return (
        <div className="App">
            <Header />
            {children}
        </div>
    )
}

export default App
