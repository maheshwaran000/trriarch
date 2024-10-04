import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/welcome.css'

function Welcome(){
    const navigate=useNavigate();

    useEffect(()=>{
        const timer=setTimeout(()=>{
            navigate('/home')
        },3000)
        return ()=>{
            clearTimeout(timer);
        }
    },[])
    return(
        <div className="welcome">
            <div id="content">
                <img src="trri-arch.png"></img>
                <ul>
                    <span>T</span>
                    <span>r</span>
                    <span>r</span>
                    <span>i</span>
                    <span>a</span>
                    <span>r</span>
                    <span>c</span>
                    <span>h</span>
                    <span></span>
                    <span>S</span>
                    <span>t</span>
                    <span>u</span>
                    <span>d</span>
                    <span>i</span>
                    <span>o</span>
                    <span>s</span>
                </ul>
            </div>
        </div>
    )
}

export default Welcome;