import React from 'react'
import '@/global/css/components/allyouneed.css'
import Image from 'next/image'
import Link from 'next/link'

const AllYouNeed = ({topBorder=true}) => {
  return (
    <div id="ayn" style={topBorder ? { borderTop: '1px solid var(--divider-grey)'} : { paddingTop: '2em'  }}>
        <div id="ayn-title-wrap">
            <h1 id="ayn-title">
                Everything You Need <br id="ayn-title-break" />To  
                 <span className="gradient-text"> Level Up Your Store</span>
            </h1>
            <h6 id="ayn-text">
                We’ll start from a blank-canvas & create the exact designs & capabilities that your specific store needs.
            </h6>
            <Link href="/packages">
            <button id="ayn-btn">
                <Image src="/magic.svg" width={20} height={20} alt='' />
                <h6 id="ayn-btn-text">Talk To Sales</h6>
                <div className="btn-divider"></div>
                <h6 id="ayn-btn-sub-text">Best Price</h6>
            </button>
            </Link>
        </div>
        <div id="ayn-benefits">
            <div className="ayn-benefit-item">
                <Image src="/all-you-need/tick.svg" width={23} height={23} alt="" />
                <h6 className="ayn-benefit-text">Any Design</h6>
            </div>
            <div className="ayn-benefit-item">
                <Image src="/all-you-need/tick.svg" width={23} height={23} alt="" />
                <h6 className="ayn-benefit-text">Any Functionality</h6>
            </div>
            <div className="ayn-benefit-item">
                <Image src="/all-you-need/tick.svg" width={23} height={23} alt="" />
                <h6 className="ayn-benefit-text"><span className="underline">NO</span> Apps Needed</h6>
            </div>
        </div>
        <div id="ayn-slider" className="no-scrollbar no-select">
            <div id="ayn-slider-grad-top"></div>
            <div id="ayn-slider-grad-bottom"></div>
            <div className="ayn-slider-col-wrap">
                <div className="ayn-slider-col" id="ayn-slider-1">
                    <SliderItem
                        image="/all-you-need/slider-1.svg"
                        title="Automations"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                    <SliderItem
                        image="/all-you-need/slider-2.svg"
                        title="Custom Designs"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                    <SliderItem
                        image="/all-you-need/slider-3.svg"
                        title="Abandonment followup"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                    <SliderItem
                        image="/all-you-need/slider-1.svg"
                        title="Automations"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                    <SliderItem
                        image="/all-you-need/slider-2.svg"
                        title="Custom Designs"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                    <SliderItem
                        image="/all-you-need/slider-3.svg"
                        title="Abandonment followup"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                </div>
            </div>
            <div className="ayn-slider-col-wrap">
                <div className="ayn-slider-col" id="ayn-slider-2">
                    <SliderItem
                        image="/all-you-need/slider-4.svg"
                        title="Backend systems"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                    <SliderItem
                        image="/all-you-need/slider-5.svg"
                        title="Facebook CAPI"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                    <SliderItem
                        image="/all-you-need/slider-6.svg"
                        title="Email stuffs"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                    <SliderItem
                        image="/all-you-need/slider-4.svg"
                        title="Backend systems"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                    <SliderItem
                        image="/all-you-need/slider-5.svg"
                        title="Facebook CAPI"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                    <SliderItem
                        image="/all-you-need/slider-6.svg"
                        title="Email stuffs"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                </div>
            </div>
            <div className="ayn-slider-col-wrap">
                <div className="ayn-slider-col" id="ayn-slider-3">
                    <SliderItem
                        image="/all-you-need/slider-1.svg"
                        title="Facebook CAPI"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                    <SliderItem
                        image="/all-you-need/slider-3.svg"
                        title="Pixel Configuration"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                    <SliderItem
                        image="/all-you-need/slider-2.svg"
                        title="Customer Reviews"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                    <SliderItem
                        image="/all-you-need/slider-1.svg"
                        title="Facebook CAPI"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                    <SliderItem
                        image="/all-you-need/slider-3.svg"
                        title="Pixel Configuration"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                    <SliderItem
                        image="/all-you-need/slider-2.svg"
                        title="Customer Reviews"
                        text="Setup backend conversions to sync with our Facebook ads manager."
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllYouNeed


const SliderItem = ({ image, title, text }) => {
    return (
        <div className="ayn-slider-item">
            <div className="ayn-slider-top">
                <Image className="ayn-slider-img" src={image} width={30} height={30} alt="" />
                <h6 className="ayn-slider-title">{title}</h6>
            </div>
            <p className="ayn-slider-text">{text}</p>
        </div>
    )
}