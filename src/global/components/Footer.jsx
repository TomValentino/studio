import React from 'react'
import '@/global/css/components/footer.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer id="footer">
        <div id="footer-divider">
            <div id="footer-bar">
            <h6 id="footer-bar-text">© 2025  –  VYBE</h6>
            </div>
        </div>
        <div id="footer-content">
            <div id="footer-left">
            <Image src="/logo.svg" id="footer-logo" width={58} height={23} alt="" />
            <div id="footer-shopify-wrap">
                <Image src="/shopify-partners.png" width={92} height={25} alt="" />
            </div>
            <Image src="/google-proof.svg" id="footer-proof" width={127} height={30} alt="" />
            </div>
                <div id="footer-right">
                <FooterItem
                    title="Packages"
                    texts={[
                        'Slider Cart',
                        'Product Pages',
                        'Announcement Bars',
                        'Wishlist',
                        'Quick View',
                        'Sticky Add to Cart',
                        'Upsells',
                        'More...'
                        // 'Free Gift Logic',
                        // 'Advanced Filtering',
                        // 'Shoppable Videos',
                        // 'Custom Product Bundles',
                        // 'Mega Menu'
                    ]}
                    />

                    <FooterItem
                        title="Services"
                        texts={[
                            'Full Stores',
                            'Product Pages',
                            'Collection Pages',
                            'Cart Pages',
                            'Hire Per Hour'
                        ]}
                    />
                    <FooterItem
                        title="Company"
                        texts={[
                            'Hiring',
                            'Work',
                            'Contact',
                            'Terms Of Service',
                            'Privacy Policy',
                            'Docs',

                        ]}
                    />
                    <div id="footer-locations-wrap">
                        <div className="footer-locations-item">
                            <div className="footer-locations-top">
                                <Image src="/footer/country-1.svg" width={20} height={20} alt="" />
                                <h6 className="footer-location-title">United Kingdom</h6>
                            </div>
                            <p className="footer-location-text">223 E Summit Ave Stockton, IL 61085 </p>
                        </div>
                        <div className="footer-locations-item">
                            <div className="footer-locations-top">
                                <Image src="/footer/country-2.svg" width={20} height={20} alt="" />
                                <h6 className="footer-location-title">Thailand</h6>
                            </div>
                            <p className="footer-location-text">Milutina Milankovica 11g 11070 New Belgrade </p>
                        </div>
                    </div>
                </div>
        </div>
        <div id="footer-bottom">
            <p className="footer-bottom-text">© 2025 VYBE. All rights reserved.</p>
            <div id="footer-bottom-flex">
                <p className="footer-bottom-text">Join our community</p>
                <div id="footer-bottom-divider"></div>
                <div id="footer-bottom-icons-flex">
                    <Image src="/footer/icon-1.svg" width={17} height={17} alt="" />
                    <Image src="/footer/icon-2.svg" width={17} height={17} alt="" />
                    <Image src="/footer/icon-3.svg" width={17} height={17} alt="" />
                    <Image src="/footer/icon-4.svg" width={17} height={17} alt="" />
                    <Image src="/footer/icon-5.svg" width={17} height={17} alt="" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer

const FooterItem = ({ title, texts }) => {
  return (
    <div className="footer-right-item">
      <h4 className="footer-right-title">{title}</h4>
      <div className="footer-text-wrap">
        {texts.map((text, index) => (
          <p className="footer-text" key={index}>{text}</p>
        ))}
      </div>
    </div>
  )
}
