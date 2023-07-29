import React from "react";
import './pages.css'
import { v4 as uuidv4 } from 'uuid';

function MappedProjects() {

    const projects = [
        {
            id: uuidv4(),
            title: "News API Website",
            github: "https://github.com/Sohzo/Ecommerce-Website-CodeCrusaders",
            deployed: "https://code-crusaders.herokuapp.com/",
            image: "https://lh3.googleusercontent.com/pw/AIL4fc81r4roE7IzSgXqa42ulStVxEsPJt0xTUwSCdBrE9a7oBTqCWtbKSlv3tGJej7kPfjx9p6wYqWKAF659voOf7ZektE_5VdkTw08SIL3OCQCtfSwfl5IJA_PilRvpWcVIwo8UMdtdJQKGdzDaGJXX_Tj=w696-h348-s-no?authuser=0",
        }
    ]

    return (
        projects.map(project => (
            <div key={project.id} className="projectContainer">
                <img className="projectImage" alt={project.title} src={project.image}></img>
                <p className="projectTitle">{project.title}</p>
                <a className="projectLink" href={project.github} target="_blank" rel="noreferrer">GitHub Repo</a>
                <a className="projectLink" href={project.deployed} target="_blank" rel="noreferrer">Deployed Website</a>
            </div>
        )))

}

function Portfolio() {

    return (
        <div className="pageContainer">
            <MappedProjects />
        </div>
    )
}

export default Portfolio