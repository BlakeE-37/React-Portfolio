import React from "react";
import './pages.css'

function AboutMe() {
    return (
        <div className="pageContainer">
            <img className="portrait" alt="My wife and Myself" src="portrait.jpg"></img>
            <h2 className="h2">About Me</h2>
            <p className="aboutMeParagraph">
                My name is Blake Hollingsworth and I am an aspiring computer programmer. I am 22 years old, living in Idaho Falls, ID but I grew up in Topeka, KS for the majority of my life. My wife and I were married on January 14th, 2023 in Logan, Utah and have now lived in Idaho for about 2 years but plan on moving wherever our family will be happiest. I am currently attending BYU-I, studying to get my bachelors in Computer Science. I love learning anything I can, not only about computers and different programming languages, but about all types of sciences. Some of my hobbies include, woodworking, fishing, watching movies, doing anything fun with my wife, and of course... programming.
            </p>
        </div>
    )
}

export default AboutMe