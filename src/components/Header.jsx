import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>    
        <header>
            <img className='logo' src={logo} alt="logo" />
            <div>            
                <select>                  
                    <option value="eng">English</option>
                    <option value="rus">русски</option>
                </select>
                <Link to="/signin">
                  <button>sign in</button>
                </Link>
            </div>
            <p className='screen'>Please use device with bigger screen resolution</p>
        </header>
          
    </>
  )
}

export default Header