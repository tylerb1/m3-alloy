import Image from 'next/image'   
import { didYouKnowCopy } from '../productData'
import GetM3Button from './GetM3Button';

export default function DidYouKnow() {
  return (
    <div className={`
      did-you-know-container 
      justify-center 
      bg-gradient-to-b
      from-white 
      from-30% 
      to-primary-900 
      to-30%
      lg:bg-gradient-to-r 
      lg:from-primary-900 
      lg:from-65% 
      lg:to-white 
      lg:to-35%
    `}>
      <div className="did-you-know-content flex flex-col lg:gap-12 lg:flex-row-reverse p-12 py-16 lg:px-16 lg:py-20 justify-around items-center">
        <Image className="object-contain" src="/images/other/Humu-1119 1.png" width={540} height={454} alt="did-you-know-image" />
        <div className="did-you-know-info text-center max-w-[40rem] pt-8 lg:pt-0 items-center">
          {didYouKnowCopy.map((item, index) => {
            return <p className={`${item.fontClass} ${item.colorClass} ${item.sizeClass}`} key={index}>{item.text}</p>
          })}
          <div className="flex flex-col items-center lg:items-start lg:ml-[25%] mt-8">
            <GetM3Button text="TRY M3 NOW" />
          </div>
        </div>
      </div>
    </div>
  );
}