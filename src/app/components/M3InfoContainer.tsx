import Image from 'next/image' 
import { 
  openSans, 
  sangbleuEmpireBlack, 
  sangbleuKingdomRegular, 
} from '../fonts'
import { m3HowItWorksItems } from '../productData'
import GetM3Button from './GetM3Button'

export default function M3InfoContainer() {
  return (
    <div className="m3-info-container flex flex-col gap-3">
      <div className="bg-primary-100 px-2 w-min">
        <p className={`text-primary-900 text-sm ${openSans.className}`}>NEW!</p>
      </div>

      <div className="m3-title flex flex-row">
        <p className={`m3-wordmark text-8xl mr-4 ${sangbleuEmpireBlack.className}`}>
          M3
        </p>

        <p className={`m3-name text-2xl tracking-widest leading-tight font-semibold ${openSans.className}`}>
          Miracle<br />Menopause<br />Moisturizer
        </p>
      </div>

      <p className={`text-xl ${sangbleuKingdomRegular.className}`}>A restorative & custom-blended estriol face cream to address signs of aging.</p>
      <p className={`text-xl ${openSans.className}`}><span className={sangbleuKingdomRegular.className}>$149.97</span> for a 3-month supply (1.52 oz / 45ml)</p>

      <div className="m3-how-it-works">
        <p className={`text-secondary text-2xl mb-1 ${sangbleuEmpireBlack.className}`}>How it works</p>
        <div className="m3-how-it-works-items flex flex-col gap-2 mb-4">
          {m3HowItWorksItems.map((item, index) => {
            return (
              <div className="flex flex-row" key={index}>
                <Image 
                  className="mr-4"
                  src="/images/arrow-icons/orange-arrow-icon.svg" 
                  alt="arrow-icon" 
                  width={40} 
                  height={20}
                />
                <p className={openSans.className}>{item}</p>
              </div>
            )
          })} 
        </div>
      </div>

      <GetM3Button text="GET IT NOW" />
    </div>
  )
}