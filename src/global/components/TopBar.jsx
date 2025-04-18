import React from 'react'
import './topbar.css'
import Image from 'next/image'

const TopBar = () => {
  return (
    <div id="top-bar">
      <Image src="/topbar/icons.svg" alt="Logo" className="logo" width={36} height={16} />
    </div>
  )
}

export default TopBar