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
            title: "JH Medical Client Requested Website",
            github: "https://github.com/BrockHanni/JHMedical",
            deployed: "https://jh-medical-6686065930da.herokuapp.com/",
            image: "https://lh3.googleusercontent.com/pw/AIL4fc8iHPwoTB0QnqJlrKxm2mtMFN01TfBRXhPSGCOiMQ8y0iYIxWMBuEm-RWnjq-wcPN1YvcfYbTFHH2ulNR27uDmbLYTond0ovx_QXZvLtVcEXBQE7kXEGkp3R4ZPTiLWkV5h_v0keUclj5GX2e74bIR3A6nxMdJ1PURd1zzLNyx4DMtoyuOHg39ZpZmMVPdwaHUPUNMLIQfsyA-exOVG2gsADyM7KQVj6iTkdFEKRLlJluzLr6ELY7MESizkFLfCWPAR3mR7RXpTDFlqTL8aJ6oP4EQs9Bfw7ld-2smSkiQDUT0OwC34gY39hdxWoNDS8WOTmZrU5SQ81c_kuJdmKG-i0tgsnLF-9F1okf0yUMXUUqvVzo-DlBco_1DR5ECgKQNukWX2KmHIgmMqkBPdzPzkiWu7ogBXtO56k_FQ7V8MvYtq-78t_waMCkFHE5GyxhzLYrDAfh7N6vIyM8KpYQDO_B3ukuWx8p5UWU_KjSgcrNVW8Uje0ezYbIUKoIeeiN3DGNzlv95ZfZjYndFl3IFEybhYZKc9k5vH0isLt5MuQ3V1K1f7SHJcES4NzqTE0AR83HByx5tdh3g3i8iuDXHyVLqHYxhslGqar1EI0eZPmKHlDwJHpiQoDOmrhtVnT-AQ2ETTq2zpYNfG88T2IbEefLGqD1WBI97lYIkI_jK2yeN-aOSJ9p40trL_W_u7SPJ1UJrLUUfQne2MFD2K6EZ9Cm_ggULi17jaEZUFArTxowT16HBgcFTWv7IdqcBOe06G8uuCBv8z1lsRAUZ1c2xkGh8HmOGP5OQaFTBh9v-5dukX-H-AfdbgpKWSqRmlNWB_a6VOQw-xD8oiKiN3bhv8nJSurjvEyTmGLWAm2eR04IDtYyMrfMiMc45HMSNlw281zzf-Au4QLDt64yNjIA=w360-h180-s-no?authuser=0",
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