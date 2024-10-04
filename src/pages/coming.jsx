import Observer from "../hooks/observerhook";
import Footer from "./footer";
import Header from "./header";
import { useRef } from "react";
import '../css/coming.css'
import Service from "./services";
import About from './about.jsx'
import Project from "./projects.jsx";

function Coming(){
    const elementref=useRef();
    const intersecting=Observer(elementref,0.5)
    return(
        <div className="coming">
            <Header/>
            <div class className="content">
            <div  className="soon" ref={elementref}>
                <div className="text">
                    <div className={`h ${intersecting ? "active" : ""}`}>
                    <h1>Consult </h1>
                    <h1>Our Chief Architect</h1>
                    <h1>-AR.Aravinda Chary</h1>
                    <button>Book Appointment</button>
                    </div>
                {/* <h1 className={`h ${intersecting ? "active" : ""}`}>Coming Soon</h1> */}
                </div>
            </div>
            </div>
            <div>
            <About/>
            </div>
            <div>
            <Service/>
            </div>
            <div>
            <Project/>
            </div>
            <div>
            <Footer/>
            </div>
        </div>
    )
}


export default Coming;