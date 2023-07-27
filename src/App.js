import React from "react";
import Header from "./components/header"
import Footer from './components/footer'
import MainContent from "./components/mainContent";
import "./App.css"

const App = () => {
    return (
        <div className="mainContainer">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
};

export default App;
