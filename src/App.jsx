import React from 'react'
import { BrowserRouter as Router,
    Routes, 
    Route } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import QuienesSomosPage from './pages/QuienesSomosPage'

const App = () => {
    return (

            <Router>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />

                    <Route path="/main" element={<MainPage />}/>

                    <Route path="/¿Quienessomos?"  element={<QuienesSomosPage/>}/>

                    <Route path="*" element={<NotFoundPage />}/>
                                                      
                </Routes>
            </Router>

    )
}

export default App
