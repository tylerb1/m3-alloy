import Image from 'next/image';
import { 
  sangbleuEmpireBlack, 
  sangbleuEmpireBlackItalic,
  sangbleuKingdomRegular, 
  sangbleuKingdomLight, 
} from '../fonts'
import GetM3Button from './GetM3Button';

const readySteps = [
  "Complete Alloy’s online assessment in one minute.",
  "A menopause-trained doctor reviews your information and writes your prescription.",
  "Your prescription is shipped right to your door.",
  "Free and unlimited follow-up with your doctor.",
]

export default function ReadyToGet() {
  return (
    <div className="ready-to-get-m3-container bg-white px-8 py-16 w-full flex flex-col items-center">
      <div className="ready-to-get-m3-content flex flex-col items-center gap-8 lg:gap-12">
        <div className="ready-info-container flex flex-col gap-4 lg:gap-16 lg:flex-row items-center">
          <Image className="object-fit" src="/images/other/JaTawn-1270.png" alt="ready-to-get-image" width={587} height={429} />
          <div className="ready-steps-container max-w-[500px] flex flex-col gap-6">
            <div className="ready-title">
              <p className={`text-primary-900 text-2xl ml-6 lg:ml-0 ${sangbleuKingdomLight.className}`}>Ready to get</p>
              <p className={`text-primary-900 text-5xl lg:text-5xl lg:ml-12 ${sangbleuEmpireBlackItalic.className}`}>M3?</p>
            </div>
            {readySteps.map((step, index) => {
              return (
                <div className="flex flex-row items-center" key={index}>
                  <p className={`text-spacegray text-4xl min-w-12 ${sangbleuEmpireBlack.className}`}>{(index + 1) + '.'}</p>
                  <p className={`text-spacegray text-xl ${sangbleuKingdomRegular.className}`} key={index}>{step}</p>
                </div>
              )
            })}
          </div>
        </div>
        <GetM3Button text="GET YOUR M3" />
      </div>
    </div>
  );
}