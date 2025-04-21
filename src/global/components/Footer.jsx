import React from 'react'
import '@/global/css/components/footer.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div id="footer">
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
                title="Power ups"
                texts={['What\'s New', 'AI Sitebuilder', 'Webflow Library']}
            />
            <FooterItem
                title="Company"
                texts={['About Us', 'Blog', 'Contact']}
            />
            <FooterItem
                title="Legal"
                texts={['Terms of Service', 'Privacy Policy']}
            />
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
    </div>
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
