import logo from '@assets/app-logo.svg'
import '@styles/Header.sass'
import StatusIndicator from './StatusIndicator'

/**
 * Gobal header component of the application. When clicking the logo, should return to '/' route.
 *
 * @return {*} - Renders the header
 */
const Header = () => {
    return (
        <header className="navbar">
            <figure className="app-logo">
                <img src={logo} alt="app-logo" />
            </figure>
            <h1 className="app-title">
                <span>Wubba Lubba</span>
                <span>Dub-Dub</span>
            </h1>
        </header>
    )
}

export default Header
