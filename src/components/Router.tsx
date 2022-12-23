import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeView from './HomeView'
import ErrorView from './ErrorView'
import CharacterView from './CharacterView'

const Router = () => {
    return (
        <Routes>
            <Route index element={<HomeView />} />
            <Route path="/character/:id" element={<CharacterView />} />
            <Route path="*" element={<ErrorView />} />
        </Routes>
    )
}

export default Router
