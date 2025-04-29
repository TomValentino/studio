import React from 'react'
import '@/global/css/components/navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import OpenCart from './OpenCart'

const navItems = [
  { label: 'Packages', hasIcon: true, href: "/packages"},
  { label: 'Work',  href: '/work'},
  { label: 'Results', href: '/results' },
  { label: 'Contact',  href: '/' }
]



const NavBar = () => {


  return (
    <div id="nav-bar-wrapper">
        <div id="nav-bar">
            <Link href="/">
                <Image id="nav-logo" src="/logo.svg" alt="Logo" width={95} height={30} />
            </Link>
            <div id="nav-center">
                {navItems.map((item, index) => (
                    <Link href={item.href} className="nav-item" key={index}>
                        <h6 className="nav-text">{item.label}</h6>
                        {item.hasIcon && (
                            <Image className="nav-icon" src="/navbar/dropdown-icon.svg" alt="Arrow" width={16} height={16} />
                        )}
                    </Link>
                ))}
            </div>
            <div id="nav-right">
                <h6 id="nav-right-text">Login</h6>
                <OpenCart />
      
                
            </div>
        </div>
    </div>
  )
}

export default NavBar
