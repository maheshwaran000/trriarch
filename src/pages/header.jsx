import { useState } from 'react';
import '../css/header.css';
import {Link} from 'react-router-dom'

function Header(){
    const [menu,setmenu]=useState(false);

    function handleMenu(){
        setmenu(!menu)
    }
    

    return(
        <div className="header">
            <div className="title">
                <img src="trri-arch.png"></img>
                <div className="name">
                <h1>Trriarch</h1>
                <h1>Studios</h1>
                </div>
            </div>
            <button className="wide-menu" onClick={handleMenu}>menu</button>
            <ul className={menu ? "active-nav ": "nav"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/founderInfo">Founder</Link></li> 
                <li><Link to="/projectsInfo">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contactInfo">Contact Us</Link></li>
            </ul>
        </div>
    )
}
export default Header;