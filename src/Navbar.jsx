import React from 'react'
import logo from '../public/assets/Troll Face.png'

export default function Navbar() {
    return (
        <>
        <nav className='nav-bar'>
            <div className='nav-logo'>
                <img className='logo-img' src={logo} alt="logo" />
                <p className='logo-text'>Meme Generator</p>
            </div>
            <p className='nav-course'>React Course - Project 3</p>
        </nav>
        </> 
    )
}