import '../css/about.css'
import Service from './services';
import Observer from '../hooks/observerhook';
import { useRef } from 'react';
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

function About(){
    const elementref=useRef();
    const intersecting=Observer(elementref,0.3);
    return (
        <div className="main" ref={elementref}>
            <div className="content" >
                <div className="about" >
                    <h2>WE ARE A STUDIO LOCATED IN HYDERABAD, TELENGANA, INDIA</h2>
                    <h1>About Us</h1>
                    <p>Trriarch Studios is a dynamic, design-driven studio focused on delivering unique, functional and affordable results through continuous research and experiments.
                        We are a core design studio working in four different verticals of Master Planning and Architecture, Interior Design, Landscape and Design Build coupled with all other allied engineering design consultancy services.
                        We also do advanced turnkey solutions to our esteemed clients using latest technologies and construction materials. We believe in elevating the brand identity and lifestyle of our clients through tailor cut innovative design ideas. 
                        We don’t follow any specific design style. Instead we develop every project with utmost skill and care to be a tailor made design solution inspired by the storyline of the project, the site or the client requirements.
                    </p>
                    <p>
                    The firm handles every project with an attention to detail that would enhance the user experience of the spaces and built environment.
                    Since 2013 we have collaborated across disciplines and industries to bring buildings and infrastructure projects to life earning several awards and recognitions.
                    Grabbing multiple architecture projects through design competitions in and around the country and abroad along the way.
                    The firm is credited with a variety of work portfolio ranging from residences, hospitality, institutional, healthcare, commercial, industrial and religious projects in pan India level. 
                    </p>
                    <button className={`butt ${intersecting ? "active" : ""}`}>Read more <HiOutlineArrowSmallRight id='arrow'/></button>
                </div>
                <div className="logo">Logo</div>
            </div>
    </div>)
    
}



export default About;