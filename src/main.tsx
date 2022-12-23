import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@components/App'
import Router from '@components/Router'
import '@styles/_global.sass'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <App>
                <Router />
            </App>
        </BrowserRouter>
    </React.StrictMode>
)
