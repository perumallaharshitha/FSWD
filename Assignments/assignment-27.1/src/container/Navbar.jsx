import './Navbar.css'
import image from '../assets/enter.png'

function Navbar(){
    return (
        <div className="nav">
            <ul>
                <li><a href=""><img className="photo" src={image} alt="" /></a></li>
            </ul>
            <ul>
                <li><a href="#">TV Shows</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Join</a></li>
                <li><a href="#">SignUp</a></li>
            </ul>
        </div>
    )
}
export default Navbar;