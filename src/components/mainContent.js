import React, { useState } from "react";
import Header from "../components/header"
import AboutMe from './pages/aboutMe'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'
import Contact from './pages/contact'

function MainContent() {

    const [activePage, setActivePage] = useState('aboutMe')

    function renderActivePage() {
        if (activePage === 'aboutMe') {
            return <AboutMe />
        } else if (activePage === 'portfolio') {
            return <Portfolio />
        } else if (activePage === 'resume') {
            return < Resume />
        } else
            return <Contact />
    }

    const handlePageChange = (page) => setActivePage(page)

    return (
        <div>
            <Header handlePageChange={handlePageChange} activePage={activePage} />
            {renderActivePage()}
        </div>
    )
}

export default MainContent