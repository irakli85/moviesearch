import React from 'react'
import logo from '../assets/logo.png'

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
                <button>sign in</button>
            </div>
            <p className='screen'>Please use device with bigger screen resolution</p>
        </header>    
    </>
  )
}

export default Header