import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeView from '@views/HomeView'
import ErrorView from '@views/ErrorView'
import CharacterView from '@views/CharacterView'
import EpisodeView from '@views/EpisodeView'

const Router = () => {
    return (
        <Routes>
            <Route index element={<HomeView />} />
            <Route path="/character/:id" element={<CharacterView />} />
            <Route path="/episode/:id" element={<EpisodeView />} />
            <Route path="*" element={<ErrorView />} />
        </Routes>
    )
}

export default Router
