import React from 'react'
import './navbar.css'
import Image from 'next/image'

const navItems = [
  { label: 'Services', hasIcon: true },
  { label: 'Work' },
  { label: 'Pricing' },
  { label: 'Contact' }
]

const NavBar = () => {
  return (
    <div id="nav-bar-wrapper">
        <div id="nav-bar">
            <Image id="nav-logo" src="/logo.svg" alt="Logo" width={94.6} height={30} />
            <div id="nav-center">
                {navItems.map((item, index) => (
                    <div className="nav-item" key={index}>
                    <h6 className="nav-text">{item.label}</h6>
                    {item.hasIcon && (
                        <Image className="nav-icon" src="/navbar/dropdown-icon.svg" alt="Arrow" width={16} height={16} />
                    )}
                </div>
                ))}
            </div>
            <div id="nav-right">
                <h6 id="nav-right-text">Login</h6>
                <button id="nav-button">
                    <Image src="/magic.svg" alt="Icon" width={18} height={18} />
                    <h6>Get started</h6>
                </button>
            </div>
        </div>
    </div>
  )
}

export default NavBar
