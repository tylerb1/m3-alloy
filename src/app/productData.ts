import { 
  openSans, 
  sangbleuEmpireBlackItalic, 
  sangbleuKingdomLight, 
} from './fonts'

export const m3HowItWorksItems = [
  "Increases collagen production",
  "Retains and restores skin moisture",
  "Increases skin firmness",
  "Decreases pore size",
  "Decreases wrinkle depth",
  "Increases skin elasticity",
]  

export const m3InfoItems = [
  {
    text: "Prescription included",
    icon: "/images/hero-icons/prescription-icon.svg",
  },
    {
    text: "Free shipping, cancel anytime",
    icon: "/images/hero-icons/truck-icon.svg",
  },
  {
    text: "Unlimited messaging with a menopause-trained doctor",
    icon: "/images/hero-icons/mobile-icon.svg",
  },
]

export const ingredientData = [
  {
    title: "Estriol",
    info: "Topical Estriol can help maintain skin health by increasing collagen production, retaining and restoring skin moisture, increasing skin firmness, decreasing pore size, decreasing wrinkle depth, and increasing skin elasticity.",
    image: "/images/ingredients/estriol.png"
  },
  {
    title: "Glycerin",
    info: "Glycerin info goes here.",
    image: "/images/ingredients/glycerin.png"
  },
    {
    title: "Oleic acid",
    info: "Oleic acid info goes here.",
    image: "/images/ingredients/oleic-acid.png"
  },
    {
    title: "Vitamin E",
    info: "Vitamin E info goes here.",
    image: "/images/ingredients/vitamin-e.png"
  },
]

export const didYouKnowCopy = [
  {
    text: "DID YOU KNOW?",
    fontClass: `${openSans.className} tracking-wider font-semibold`,
    colorClass: 'white',
    sizeClass: 'text-xl mb-4',
  },
  {
    text: "Up to 30%",
    fontClass: sangbleuEmpireBlackItalic.className,
    colorClass: 'white',
    sizeClass: 'text-6xl',
  },
  {
    text: "of dermal collagen is lost during the",
    fontClass: `${sangbleuKingdomLight.className}`,
    colorClass: 'white',
    sizeClass: 'text-4xl',
  },
  {
    text: "first 5 years of menopause",
    fontClass: sangbleuEmpireBlackItalic.className,
    colorClass: 'text-primary-100',
    sizeClass: 'text-6xl mb-2',
  },
  {
    text: "and decreases by an additional 2.1% every year after",
    fontClass: `${sangbleuKingdomLight.className}`,
    colorClass: 'white',
    sizeClass: 'text-4xl',
  },
]