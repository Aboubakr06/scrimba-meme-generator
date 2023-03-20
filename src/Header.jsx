import React from 'react'
import logo from '../public/assets/Troll Face.png'

export default function Header() {
    return (
        <>
        <header className='header-bar'>
            <div className='header-logo'>
                <img className='logo-img' src={logo} alt="logo" />
                <h2>Meme Generator</h2>
            </div>
            <h3>React Course - Project 3</h3>
        </header>
        </> 
    )
}