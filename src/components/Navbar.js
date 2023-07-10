import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <>
            <div>Welcome to react redux-toolkit</div>
            <h1>Admin Table</h1>

            <section>
                <div>One Destinstion for complete Web Development</div>
                <nav>
                    <ul className='menuItems'>
                      <li className='menulist'>
                        <a href="/" data-item="Home">Home</a>
                      </li>
                      <li className='menulist'>
                        <a href="/" data-item="About">About</a>
                      </li>
                      <li className='menulist'>
                        <a href="/" data-item="Projects">Projects</a>
                      </li>
                      <li className='menulist'>
                        <a href="/" data-item="Code">Code</a>
                      </li>
                      <li className='menulist'>
                        <a href="/" data-item="Contact">Contact</a>
                      </li>
                    </ul>
                </nav>
            </section>
    </>
  )
}

export default Navbar