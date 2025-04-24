import Image from 'next/image';
import './globalcomponents.css'




export const BenefitItem = ( { icon = "/white-round-bullet.svg" , text }) => {
  return (
    <div className="poop">
      <Image src={icon} width={20} height={20} alt="" />
      <h6 className="">{text}</h6>
    </div>
  )
}