import { useRef } from "react";
import "../css/projects.css"
import Observer from '../hooks/observerhook.js'

function Project(){
    const elementref =useRef();
    const intersecting =Observer(elementref,0.1)
    return(
        <section className="main-container" ref={elementref}>
            <div className="headings">
                <h1>Our Projects</h1>
                <button className="non-mobile-button">view all projects</button>
            </div>
            <div className="project-container">
            <div className="container-one">
                <div className={`project ${intersecting ? "active " :""}`}>
                    <img src="project1.webp"></img>
                    <h1>Villa with golf course</h1>
                    <p>Luxury vlla with golf course</p>
                    <h2> 3800m2</h2> 
                </div>
                <div className={`project ${intersecting ? "active " :""}`}>
                <img src="project1.webp"></img>
                    <h1>Villa with golf course</h1>
                    <p>Luxury vlla with golf course</p>
                    <h2> 3800m2</h2> 
                </div>
                <div className={`project ${intersecting ? "active " :""}`}>
                <img src="project1.webp"></img>
                    <h1>Villa with golf course</h1>
                    <p>Luxury vlla with golf course</p>
                    <h2> 3800m2</h2> 
                </div>
                <div className={`project ${intersecting ? "active " :""}`}>
                <img src="project1.webp"></img>
                    <h1>Villa with golf course</h1>
                    <p>Luxury vlla with golf course</p>
                    <h2> 3800m2</h2> 
                </div>
            </div>
            <div className="container-two">
            <img src="project1.webp"></img>
                <h1>Villa with golf course</h1>
                <p>Luxury vlla with golf course</p>
                <h2> 3800m2</h2> 
            </div>
            </div>
            <button className="mobile-button">view all projects</button>
        </section>
    )
}

export default Project;