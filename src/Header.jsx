import React from 'react'
import logo from '/assets/Troll Face.png'

export default function Header() {
    return (
        <>
        <header className='header-bar'>
            <div className='header-logo'>
                <img className='logo-img' src={logo} alt="logo" />
                <h2 className='header-title'>Meme Generator</h2>
            </div>
            <h3 className='header-project'>React Course - Project 3</h3>
        </header>
        </> 
    )
}