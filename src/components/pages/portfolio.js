import React from "react";
import './pages.css'
import { v4 as uuidv4 } from 'uuid';

function MappedProjects() {

    // Each image is hosted on google photos with a size ratio of 2:1
    const projects = [
        {
            id: uuidv4(),
            title: "Ecommerce Website",
            github: "https://github.com/Sohzo/Ecommerce-Website-CodeCrusaders",
            deployed: "https://code-crusaders.herokuapp.com/",
            image: "https://lh3.googleusercontent.com/pw/AIL4fc81r4roE7IzSgXqa42ulStVxEsPJt0xTUwSCdBrE9a7oBTqCWtbKSlv3tGJej7kPfjx9p6wYqWKAF659voOf7ZektE_5VdkTw08SIL3OCQCtfSwfl5IJA_PilRvpWcVIwo8UMdtdJQKGdzDaGJXX_Tj=w696-h348-s-no?authuser=0",
        },
        {
            id: uuidv4(),
            title: "Weather API Website",
            github: "https://github.com/BlakeE-37/Weather-Dashboard",
            deployed: "https://blakee-37.github.io/Weather-Dashboard/",
            image: "https://lh3.googleusercontent.com/pw/AIL4fc862OcjR0VFHWSCE7TjcLtf0MVS95x8mOIpJp7PKg0GrJw4WhhyzgAc09buEm-7V-M0JITwZ7HRBVwnhB4GkjJxkl6V7L-o_AMeUkpVGokA8Z8H-wfJ9ObBud2aCQb37cPD1VEd9WeJB2JBjkVmV1Uz=w1592-h796-s-no?authuser=0",
        },
        {
            id: uuidv4(),
            title: "Note Taker",
            github: "https://github.com/BlakeE-37/Note-Taker",
            deployed: "https://peaceful-castle-40527.herokuapp.com/notes",
            image: "https://lh3.googleusercontent.com/pw/AIL4fc-7QFE05nDt_XJe_sjV0_nDuPNQkiRMtiyvZNEnZWmEMaiweIjFvgtBHl6mYjgdrdvlrQaYi5UJuq_u492r3NVx-auU1MsZy9b2jqHAkC3B74GAAVW4WDwgcjd8YvEgDktN1LYXs884eU7lM_fiSpkB=w1386-h693-s-no?authuser=0",
        },
        {
            id: uuidv4(),
            title: "Workday Scheduler",
            github: "https://github.com/BlakeE-37/Work-Day-Scheduler",
            deployed: "https://blakee-37.github.io/Work-Day-Scheduler/",
            image: "https://lh3.googleusercontent.com/pw/AIL4fc-s7A6undIhYCFygKrHW-4DRV7cVt7Y1VXer7To9mfFW-5H5NHpwE8uR3Bh8eFgr6CXnB__YzoEQIT-XiZKdF3tDTaaRfPWJ9bVkQiD5ee0I-t5t1RvTmGnvez9US9ATGTwzbXj_OyRiKwYoZexQMu5=w1651-h826-s-no?authuser=0",
        },
        {
            id: uuidv4(),
            title: "Random Password Generator",
            github: "https://github.com/BlakeE-37/Random-Password-Generator",
            deployed: "https://blakee-37.github.io/Random-Password-Generator/",
            image: "https://lh3.googleusercontent.com/pw/AIL4fc9jE5ycVa1PGLbexjHp2K1g42uWiDgi-k8MCpBIF1Yz623Zui5cVXWFB3OEM1zD1GXYP2TLAudLBm57emiHMfBdM2bWu7CxpZ292_a-4ctJlbZppO7eT_WmVOZm6NZ1qP_wQep2mjmfsgZUYAvhK4k_=w985-h493-s-no?authuser=0",
        },
        {
            id: uuidv4(),
            title: "Javascript Quiz",
            github: "https://github.com/BlakeE-37/web-dev-quiz",
            deployed: "https://blakee-37.github.io/web-dev-quiz/",
            image: "https://lh3.googleusercontent.com/pw/AIL4fc_ECIABRFtwi1nY9K9rB4ufK6Fpw2qicWhDjOkNFEhdFtlhRfVUinYu39o4OXNT3_OahgNC8-UV-sxyjfIw2d-F86UKFzZr-XUNtMxDFWjQ-VfGO_gFWKFj8bgb8ocFiuQbUsUg2U5fPHWykkPS2D2e=w1063-h531-s-no?authuser=0",
        }
    ]

    return (
        <div className="allProjects">
            {projects.map(project => (
                <div key={project.id} className="projectContainer">
                    <img className="projectImage" alt={project.title} src={project.image}></img>
                    <p className="projectTitle">{project.title}</p>
                    <a className="projectLink" href={project.github} target="_blank" rel="noreferrer">GitHub Repo</a>
                    <a className="projectLink" href={project.deployed} target="_blank" rel="noreferrer">Deployed Website</a>
                </div>
            ))}
        </div>

    )

}

function Portfolio() {

    return (
        <div className="pageContainer">
            <MappedProjects />
        </div>
    )
}

export default Portfolio