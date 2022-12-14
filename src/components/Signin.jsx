import React from 'react'
import signinLogo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <>
    <section>
        <div className='signin-logo-box'>
            <Link to="/">
            <img className='logo' src={signinLogo} alt='logo'/>
            </Link>
        </div>
        <form className='signin-form'>
            <h3>Sign In</h3>
            <input type="email" name="email" id="signin-email" placeholder='Email or phone number'/>
            <input type="password" name="password" id="signin-pass" placeholder='Password' />
            <button>Sign In</button>
            <div>
                <div className="signin-check">
                    <div>
                        <input type="checkbox" name="remember" id="remember" />
                        <label for="remember">Remember me</label>
                    </div>   
                    <a href="/">Need help?</a>
                </div>                
            </div>
            <p className='signin-text1'>New to Jetflix?<a href="/">Sign up now.</a></p>
            <p className='signin-text2'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href="/">Learn more.</a></p>
        </form>
        <div className='signin-footer'>
            <a className='signin-footer-question' href="/">Questions? Contact us.</a>
            <div className='signin-footer-nav'>
                <div className='signin-footer-nav-items'>
                    <a href="/">FAQ</a>
                    <a href="/">Cookie Preferences</a>
                </div>
                <div className='signin-footer-nav-items'>
                    <a href="/">Help Center</a>
                    <a href="/">Corporate Information</a>
                </div>
                <div className='signin-footer-nav-items'>
                    <a href="/">Terms of Use</a>
                </div>
                <div className='signin-footer-nav-items'>
                    <a href="/">Privacy</a>
                </div>
            </div>
            <select>
                <option value="eng">English</option>
                <option value="rus">????????????</option>
            </select>
        </div>
    </section>
    </>
  )
}

export default Signin