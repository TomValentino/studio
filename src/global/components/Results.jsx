import React from 'react'
import '../css/components/results.css'
import Image from 'next/image'

const Results = ({ topMargin=null }) => {
  return (
<div id="results" style={topMargin ? { marginTop: topMargin } : {}}>
    <h1 id="results-title">Multiple 7 Figures In Sales</h1>
        <div id="results-menu">
            <div id="results-menu-left">
                <h6 id="results-menu-title">Client Reviews</h6>
                <h6 id="results-menu-sub">18 Reviews</h6>
            </div>
            <div id="results-filter">
                <h6 id="results-filter-text">Recent</h6>
                <Image src="/results/dd.svg" width={16} height={16} alt="" />
            </div>
        </div>
        <div id="results-grid-wrapper">
            <div id="results-grid-gradient"></div>
            <div id="results-grid">
                <div className="results-col">
                    <FullResultsItem
                        image="/results/full-proof-1.png"
                        user={
                            {
                                img: '/results/user-1-img.png',
                                name: 'Holly Sherborne',
                                company: 'Sunny Clothing',
                                date: "11 Jul 2024",
                            }
                        }
                        text="Making $2,400 per day on average, great!"
                    />
                </div>
                <div className="results-col">
                    <ResultsItem
                        user={
                            {
                                img: '/results/user-1-img.png',
                                name: 'Holly Sherborne',
                                company: 'Sunny Clothing',
                                date: "11 Jul 2024",
                            }
                        }
                        text="The team applied the changes to our stores and we were blown away with how awesome it was, gone from a non beliver to making a shit ton of money over night. Cant thank you enough !!!"
                        images={[
                            {
                                url: '/results/user-1-proof-1.png',
                            }, 
                            {
                                url: '/results/user-1-proof-2.png',
                            }
                        ]}
                    />
                    <ResultsItem
                        user={
                            {
                                img: '/results/user-2-img.png',
                                name: 'Ruth Assasonator',
                                company: 'Blow My Balls',
                                date: "11 Jul 2024",
                            }
                        }
                        text="The team applied the changes to our stores and we were"
                    />
                    <ResultsItem
                        user={
                            {
                                img: '/results/user-3-img.png',
                                name: 'Simon Bendover',
                                company: 'Blow My Balls',
                                date: "11 Jul 2024",
                            }
                        }
                        text="The team applied the changes to our stores and we were blown away with how awesome it was, gone from a non beliver to making a shit ton of money over night. Cant thank you enough !!!"
                        images={[
                            {
                                url: '/results/user-1-proof-1.png',
                            }
                        ]}
                    />
                </div>
                <div className="results-col">
                    <ResultsItem
                        user={
                            {
                                img: '/results/user-3-img.png',
                                name: 'Thai Ladyboy',
                                company: 'Sunny Clothing',
                                date: "11 Jul 2024",
                            }
                        }
                        text="Making $2,400 per day on average, great!"
                        images={[
                            {
                                url: '/results/user-1-proof-1.png',
                                url: '/results/user-1-proof-2.png',
                            }
                        ]}
                    />
                    <ResultsItem
                        user={
                            {
                                img: '/results/user-4-img.png',
                                name: 'Steven Spearoff',
                                company: 'Blow My Balls',
                                date: "11 Jul 2024",
                            }
                        }
                        text="The team applied the changes to our stores and we were blown away with how awesome it was, gone from a non beliver to making a shit ton of money over night. Cant thank you enough !!!"
                    />
                    <ResultsItem
                        user={
                            {
                                img: '/results/user-5-img.png',
                                name: 'Ruth Assasonator',
                                company: 'Blow My Balls',
                                date: "11 Jul 2024",
                            }
                        }
                        text="The team applied the changes to our stores and we were blown away with how awesome it was, gone from a non beliver to making a shit ton of money over night. Cant thank you enough !!!"
                        images={[
                            {
                                url: '/results/user-1-proof-1.png',
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
        <div id="results-load-more-wrap">
            <h6 id="results-load-more-title">Showing 6 of 18 reviews</h6>
            <div id="results-load-more-line-wrap">
                <div id="results-load-more-line" style={{width: '60%'}}></div>
            </div>
            <div id="results-load-more">
                <Image src="/magic-grey.svg" width={18} height={18} alt="" />
                <h6 id="results-load-more-text">Load more</h6>
            </div>
        </div>
    </div>
  )
}

export default Results


const ResultsItem = ({ user = {}, text="", images={}}) => {
    return (
        <div className="results-item">
            <div className="results-item-top">
                <div className="results-item-top-flex">
                    <Image className="results-item-img" src={user.img} width={40} height={40} alt="" />
                    <div className="results-item-top-flex-inner">
                        <p className="results-item-title">{user.name}</p>
                        <p className="results-item-text">{user.company}</p>
                    </div>
                </div>
                <p className="results-item-text">{user.date}</p>
            </div>
            <p className="results-item-writing">{text}</p>
            <div className="results-img-wrap">
                {images.length > 0 && images.map((image, index) => 
                    <Image key={index} className="results-img" src={image.url} width={113} height={85} alt="" />
                )}
            </div>
        </div>
    )
}

const FullResultsItem = ( { image = null, user = {}, text = ""}) => {
    return (
        <div className="results-full-item">
            <Image className="results-full-img" src={image} width={365} height={575} alt="" />
            <div className="results-full-bottom">
                <div className="results-item-top">
                    <div className="results-item-top-flex">
                        <Image className="results-item-img" src={user.img} width={40} height={40} alt="" />
                        <div className="results-item-top-flex-inner">
                            <p className="results-item-title">{user.name}</p>
                            <p className="results-item-text">{user.company}</p>
                        </div>
                    </div>
                    <p className="results-item-text">{user.date}</p>
                </div>
            </div>
        </div>
    )
}