import React from 'react'

function Footer() {
  return (
    <>
        <footer>
            <div>
                <p className='footer-text1'>Questions? Contact us.</p>
            </div>
            <div className='footer-nav'>
                <div className='footer-nav-items'>
                    <a href='/'>FAQ</a>
                    <a href='/'>Investor Relations</a>
                    <a href='/'>Privacy</a>
                    <a href='/'>Speed Test</a>
                </div>
                <div className='footer-nav-items'>
                    <a href='/'>Help Center</a>
                    <a href='/'>Jobs</a>
                    <a href='/'>Cookie Preferences</a>
                    <a href='/'>Legal Notices</a>
                </div>
                <div className='footer-nav-items'>
                    <a href='/'>Account</a>
                    <a href='/'>Ways to Watch</a>
                    <a href='/'>Corporate Information</a>
                    <a href='/'>Only on Netflix</a>
                </div>
                <div className='footer-nav-items'>
                    <a href='/'>Media Center</a>
                    <a href='/'>Terms of Use</a>
                    <a href='/'>Contact Us</a>
                </div>
            </div>
            <select>
                <option value="eng">English</option>
                <option value="rus">русски</option>
            </select>
            <p className='footer-text2'>Netflix Georgia</p>
        </footer>
    </>
  )
}

export default Footer