import React from 'react'
import '../css/components/producttile.css'
import { Image as IKImage } from '@imagekit/next'; // Rename ImageKit component to avoid conflict
import Image from 'next/image'; // Import Next.js Image
import Link from 'next/link'

const ProductTile = ({ tileMaxWidth, product }) => {
    

    return (
        <a href={`/package/${product.id}`} className="product-tile-wrapper" >
           
            <div className="product-tile" style={tileMaxWidth ? { maxWidth: `${tileMaxWidth}` } : {}}>
                <div className="tile-img-wrapper">
                    <IKImage
                        className="tile-img"
                        src={product?.images?.[0]?.src || "/product-tile/tile-1.png"}
                        alt="Product Image"
                        width={1000}
                        height={747}
                    />
                </div>
                <div className="tile-content">
                    <IKImage
                        className="tile-icon"
                        src={product.icon || "/product-tile/icon-1.svg"}
                        alt="Product Icon"
                        width={45}
                        height={45}
                    />
                    <div className="tile-btn">
                        <Image
                            className="tile-btn-icon"
                            src="/product-tile/arrow-right.svg"
                            alt="Button Icon"
                            width={12}
                            height={12}
                        />
                    </div>
                    <div className="tile-title-wrap">
                        <h6 className="tile-title">{product.name || "Default Title"}</h6>

                        {product?.versions && product.versions.length >= 2 ? (
                            <div className="tile-price-wrap">
                                <span className="tile-price">
                                From ${Math.min(...product.versions.map(v => v.price))} 
                                </span>
                            </div>
                        ) : (
                            <div className="tile-price-wrap">
                                <span className="tile-price">
                                    ${product?.versions?.[0].price } (${product?.versions?.[0].priceRRP})
                                </span>
                            </div>
                        )}

                    </div>
                </div>
            </div>
       
        </a>
    )
}

export default ProductTile;
