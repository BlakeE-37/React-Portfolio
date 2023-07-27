import React, { useState } from "react";
import Header from "../components/header"
import AboutMe from './pages/aboutMe'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'
import Contact from './pages/contact'

function MainContent() {

    const [activePage, setActivePage] = useState('aboutMe')

    function renderActivePage() {
        switch (activePage) {
            case 'aboutMe':
                return <AboutMe />
            case 'portfolio':
                return <Portfolio />
            case 'resume':
                return < Resume />
            case 'contact':
                return <Contact />
        }
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