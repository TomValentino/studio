import React from 'react'
import '../css/components/producttile.css'
import Image from 'next/image'

const ProductTile = ({ img, icon, title, price, tileMaxWidth }) => {
  return (
    <div className="product-tile" style={tileMaxWidth ? { maxWidth: `${tileMaxWidth}` } : {}} >
        <div className="tile-img-wrapper">
            <Image className="tile-img" src={img} alt="Product Image" width={296} height={174} />
        </div>
        <div className="tile-content">
            <Image className="tile-icon" src={icon} alt="Product Icon" width={45} height={45} />
            <div className="tile-btn">
                <Image className="tile-btn-icon" src="/product-tile/arrow-right.svg" alt="Button Icon" width={12} height={12} />
            </div>
            <div className="tile-title-wrap">
                <h6 className="tile-title">{title}</h6>
                <div className="tile-price-wrap">
                    <span className="tile-price">{price}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductTile