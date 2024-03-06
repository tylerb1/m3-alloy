import Image from 'next/image' 
import { openSans } from '../fonts'
import M3InfoContainer from './M3InfoContainer'
import { m3InfoItems } from '../productData'

export default function M3Hero() {
  return (
    <div className="m3-hero flex flex-col gap-4 lg:items-center bg-primary-900 p-8 pb-8 lg:p-16 lg:pb-6">
      <div className="m3-info grid grid-rows-[min-content_min-content] grid-cols-3 lg:grid-rows-1 lg:grid-cols-[1fr_1fr_1.5fr_1fr]"> 
        <div className="m3-rx-image-container h-min col-start-1 col-end-1 justify-self-start lg:justify-self-end">
          <Image className="object-contain"  src="/images/hero/Rx Icon_2 1.png" alt="Rx badge" width={70} height={70} />
        </div>

        <div className="m3-product-image-container h-min col-start-2 col-end-2 p-8 pb-0 lg:p-12">
          <Image className="object-contain" src="/images/hero/Asset 4@4x 1.png" alt="M3 product image" width={132} height={509} />
        </div>

        <div className="early-access-badge-container h-min col-start-3 col-end-3 lg:col-start-4 lg:col-end-4 ml-auto">
          <Image className="object-contain" src="/images/hero/Early access badge_1@4x 2.png" alt="early-access-badge" width={175} height={175}/>
        </div>

        <div className="m3-info col-start-1 col-end-4 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-1 lg:pt-8">
          <M3InfoContainer />
        </div>
      </div>

      <div className="m3-info-items flex flex-col gap-4 mt-2 lg:gap-28 lg:flex-row">
        {m3InfoItems.map((item, index) => {
          return (
            <div className="m3-info-item flex flex-row max-w-72 align-top" key={index}>
              <div className="relative icon-container min-w-6 h-6 mr-4 mt-1">
                <Image className="object-contain" src={item.icon} alt={`info icon ${index}`} fill />
              </div>
              <p className={openSans.className}>{item.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}