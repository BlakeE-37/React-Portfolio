import React from "react";
import Footer from './components/footer'
import MainContent from "./components/mainContent";
import "./App.css"

const App = () => {
    return (
        <div className="mainContainer">
            <MainContent />
            <Footer />
        </div>
    )
};

export default App;
