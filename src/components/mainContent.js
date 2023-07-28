import React, { useState } from "react";
import Header from "../components/header"
import Footer from '../components/footer'
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
        <div className="bodyContainer">
            <Header handlePageChange={handlePageChange} activePage={activePage} />
            {renderActivePage()}
            <Footer />
        </div>
    )
}

export default MainContent