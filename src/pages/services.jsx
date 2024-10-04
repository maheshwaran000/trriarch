import { useEffect, useRef, useState } from "react";
import Observer from "../hooks/observerhook";
import '../css/services.css'

function Service(){
    // const [loading,setloading]=useState(false);
    const elementref=useRef();
    const intersecting=Observer(elementref,0.1);


    return(
        <div className={`services ${intersecting ? "active " : ""}`} ref={elementref}>
            <h2>What We Do</h2>
            <h1>Our Expertise</h1>
            <div className="list">
                <div className={`box ${intersecting ? "active" : ""}`}>
                    <h2>MASTER PLANNING</h2>
                    <p>• Institutional • Multi storied Housing & Villas • Hospitality • Infrastructure </p>
                </div>
                <div className={`box ${intersecting ? "active" : ""}`}>
                   <h2>ARCHITECTURAL DESIGN</h2>
                   <p>• Residential • Educational • Commercial • Hospitals • Religious • Industrial</p>
                </div>
                <div className={`box ${intersecting ? "active" : ""}`}> 
                <h2>INTERIOR DESIGN</h2>
                <p>• Corporate Offices • High end Villas • Institutional • Furniture Design </p>
                </div>
                <div className={`box ${intersecting ? "active" : ""}`}>
                <h2>DESIGN & BUILD</h2>
                <p>• Corporate Offices • Luxury Houses • Hospitality </p>
                </div>
            </div>
        </div>
    )
}

export default Service;