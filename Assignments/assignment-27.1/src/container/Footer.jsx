import './Footer.css'
import image from '../assets/enter.png'

function Footer(){
    return (
        <div className="foot">
            <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Account</a></li>
            </ul>
            <ul>
                <li><a href="#">Terms of use</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Media Center</a></li>
            </ul>
        </div>
    )
}
export default Footer;