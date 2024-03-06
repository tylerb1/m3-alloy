"use client";

import { openSans } from "../fonts"
import Image from "next/image"

interface ButtonProps {
  text: string
}

export default function GetM3Button(props: ButtonProps) {
  const { text } = props
  return (
    <button 
      className={`flex flex-row tracking-widest px-4 py-3 text-xs font-semibold w-fit bg-secondary ${openSans.className}`}
      onClick={() => console.log("Go somewhere")}
    >
      {text} <Image className="ml-2" src="/images/arrow-icons/white-arrow-icon.svg" width={12} height={12} alt="white-arrow"/>
    </button>
  )
}