import React from 'react'
import './topbar.css'
import Image from 'next/image'

const TopBar = () => {
  return (
    <div id="top-bar">
      <Image src="/topbar/icons.svg" alt="Logo" className="logo" width={36} height={16} />
      <h6 id="top-text">
        <span className="underline">24 hour turnaround time</span>. Early bird special!
      </h6>
    </div>
  )
}

export default TopBar