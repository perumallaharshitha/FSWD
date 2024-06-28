import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/logotodo.png';
import { userLoginContext } from '../contexts/userLoginContext';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const { userLoginStatus, setCurrentUser, setUserLoginStatus, currentUser } = useContext(userLoginContext);

  function logoutUser() {
    setCurrentUser({});
    setUserLoginStatus(false);
    navigate('/login'); // Navigate to Register page after logout
  }

  return (
    <div className="w-auto h-100 justify-content-around bg-dark-subtle d-flex flex-wrap">
      <Link to="">
        <img className="m-2 rounded-circle" src={image} width="70" alt="" />
      </Link>
      <ul className="nav justify-content-end p-3 fs-5">
        <li className='nav-item'><Link to="" className="nav-link text-black">Home</Link></li>
        <li className='nav-item'><Link to="register" className="nav-link text-black">Register</Link></li>
        {userLoginStatus && (
          <li className='nav-item'>
            <button onClick={logoutUser} className='nav-link text-black'>Logout</button>
          </li>
        )}
        {
          !userLoginStatus && <li className='nav-item'>
            <Link to="login" className='nav-link text-black'>Login</Link>
          </li>
        }
        {
          !userLoginStatus && <li className='nav-item'>
            <Link to="about" className='nav-link text-black'>About</Link>
          </li>
        }
        {userLoginStatus && (
          <li className='nav-item'>
            <Link to="/user-profile/cart" className='nav-link text-black'>Cart</Link>
          </li>
        )}
        {userLoginStatus && (
          <li className='userProfile nav-item'>
            <Link to="user-profile" className='rounded-circle'>
              <img src={currentUser.profileImage} width={50} height={50} alt="profile" className='ms-3 me-3 profile-img' />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
