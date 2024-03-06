import { Open_Sans } from 'next/font/google' 
import localFont from "next/font/local";

export const openSans = Open_Sans({
  subsets: ["latin"],
})

export const sangbleuEmpireBlack = localFont({
  src: [
    {
      path: '../../public/fonts/sangbleuempire-black.woff',
      weight: '700',
    },
  ],
})

export const sangbleuEmpireBlackItalic = localFont({
  src: [
    {
      path: '../../public/fonts/sangbleuempire-black-italic.woff',
      weight: '900',
    },
  ],
})

export const sangbleuKingdomLight = localFont({
  src: [
    {
      path: '../../public/fonts/sangbleukingdom-light.woff',
      weight: '300',
    },
  ],
})

export const sangbleuKingdomRegular = localFont({
  src: [
    {
      path: '../../public/fonts/sangbleukingdom-regular.woff',
      weight: '400',
    },
  ],
})