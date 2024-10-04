import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa";
import '../css/footer.css'

function Footer(){
    return(
        <div className="footer">
            <div>
                <img  src="trri-arch.png"/>
            </div>
            <div>
                <h3>Trriarch studios</h3>
                {/* <h3>Contact us</h3> */}
                <p>Founder -Ar.Aravinda Chary</p>
                <p>Call  +91 9182706360 , +91 9640094686</p>
                <p>Trriarchstudios@gmail.com</p>
                <h3>loctaion</h3>
                <p>Located in Hyderabad</p>
                <p>#2/22/95, 2nd fllor ,Vijaya Nagar Colony,HUDA Park,Kukatpally</p>
                <p>Hyderabad -500072</p>
            </div>
            <div className="logos">
                <h3>Get in touch with us</h3>
                <div>
                    <ul>
                        <li><FaInstagram/></li>
                        <li> <FaTwitter/></li>
                        <li><FaFacebook/></li>
                        <li> <FaLinkedin/></li>
                        <li><FaYoutube/></li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;