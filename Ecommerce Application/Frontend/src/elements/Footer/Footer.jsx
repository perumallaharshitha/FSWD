import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className=' h-100 justify-content-around bg-dark-subtle d-flex flex-wrap flex-column'>
    <ul className='nav fs-5 justify-content-between d-flex flex-row m-auto'>
    
    <li><Link className='nav-link text-black'>Privacy policy</Link></li>
    <li><Link  className='nav-link text-black'>Contact Us</Link></li>
    
    
    </ul>
    <ul  className='nav m-auto fs-5 text-black'>
    <li><Link  className='nav-link text-black'>Social Media</Link></li>
    <li ><Link className='nav-link text-black'>Email</Link></li>
    </ul>
    
    </div>
  )
}

export default Footer