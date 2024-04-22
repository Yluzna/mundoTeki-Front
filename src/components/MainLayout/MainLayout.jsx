import { Outlet } from "react-router-dom"


import React from 'react'

function MainLayout() {
    return (
        <main>
            <Outlet />
        </main>
    )
}

export default MainLayout
