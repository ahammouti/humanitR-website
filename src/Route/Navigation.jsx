import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import WellDrilling from '../Pages/WellDrilling'
import Sponsorship from '../Pages/Sponsorship'
import CulturalProjects from '../Pages/CulturalProjects'

const Navigation = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forages" element={<WellDrilling />} />
                <Route path="/parrainage" element={<Sponsorship />} />
                <Route path="/projets-culturels" element={<CulturalProjects />} />
            </Routes>
        </>
    )
}

export default Navigation
