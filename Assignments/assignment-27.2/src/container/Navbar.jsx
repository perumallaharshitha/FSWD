import './Navbar.css';
import News from '../assets/News.png';
import Twitter from '../assets/twitter.png';
import LinkedIn from '../assets/linkedin.png';

function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li><a href="#"><img className="photo" src={News} alt="News Logo" /></a></li>
        <li><a href="#">Writer's Portal</a></li>
        <li><a href="#">Donate</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <ul>
        <li><a href="#"><img className="pic" src={Twitter} alt="Twitter" /></a></li>
        <li><a href="#"><img className="pic" src={LinkedIn} alt="LinkedIn" /></a></li>
      </ul>
    </div>
  );
}

export default Navbar;
