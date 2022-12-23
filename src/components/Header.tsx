import logo from '@assets/app-logo.svg'
import '@styles/Header.sass'
import StatusIndicator from './StatusIndicator'
import { Link } from 'react-router-dom'

/**
 * Gobal header component of the application. When clicking the logo, should return to '/' route.
 *
 * @return {*} - Renders the header
 */
const Header = () => {
    return (
        <header className="navbar">
            <Link to="/" className="app-logo">
                <img src={logo} alt="app-logo" />
            </Link>
            <h1 className="app-title">
                <span>Wubba Lubba</span>
                <span>Dub-Dub</span>
            </h1>
        </header>
    )
}

export default Header
