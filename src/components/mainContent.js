import React, { useState } from "react";
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
            case 'Resume':
                return < Resume />
            case 'Contact':
                return <Contact />
        }
    }

    return (
        <div>
            {renderActivePage()}
        </div>
    )
}

export default MainContent