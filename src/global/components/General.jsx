import '@/global/css/components/general.css'
import React from 'react';
import Image from 'next/image';


export const BulletList = ({ bullets = [], wrapperClass = '', itemClass = '', iconClass = '', textClass = '' }) => {
    return (
      <div className={`bullet-wrapper ${wrapperClass}`}>
        {bullets.map((bullet, i) => (
          <div key={i} className={`bullet-item ${itemClass}`}>
            <Image
              src={bullet.icon || '/white-round-bullet.svg'}
              alt={bullet.alt || 'Check'}
              className={`bullet-icon ${iconClass}`}
              width={16}
              height={16}
            />
            <h6 className={`bullet-text ${textClass}`}>
              {bullet.text}
            </h6>        
          </div>
        ))}
      </div>
    )
  }

  

export const BenefitPill = ({ title, icon }) => {
    const isColor = icon && icon.startsWith('#');

    return (
        <div className="benefit-pill">
            {isColor ? (
                <div
                    className="benefit-pill-color"
                    style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: icon,
                    }}
                />
            ) : (
                <Image src={icon} alt="Icon" className="benefit-pill-icon" />
            )}
            <h6 className="benefit-pill-text">{title}</h6>
        </div>
    );
};
