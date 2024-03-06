"use client";

import { useState } from "react";
import { openSans } from "../fonts";
import Image from "next/image";
import { ingredientData } from "../productData";

interface Ingredient { 
  title: string, 
  info: string, 
  image: string 
}

export default function Ingredients() {
  const [ingredientClicked, setIngredientClicked] = useState<Ingredient>(ingredientData[0]);

  return (
    <div className="ingredients-container flex flex-col gap-6 px-8 pt-8 lg:px-24 lg:py-12 lg:flex-row bg-white">
      <div className="ingredients-title basis-1/3">
        <p className={`text-primary-900 text-4xl lg:p-4 font-extrabold lg:font-semibold ${openSans.className}`}>
          Science-backed ingredients
        </p>
      </div>

      <div className="ingredient-info-list basis-2/3">
        <div className="ingredient-buttons flex flex-row gap-4 w-full justify-between overflow-x-scroll">
          {ingredientData.map((ingredient, index) => {
            return (
              <div 
                className="ingredient flex flex-col text-center items-center cursor-pointer"
                key={index} 
                onClick={() => setIngredientClicked(ingredient)}
              >
                <div className="ingredient-image-container mb-4 h-[80px] w-[80px] lg:w-[140px] lg:h-[140px]">
                  <Image className="object-contain" src={ingredient.image} alt={ingredient.title} width={140} height={140}/>
                </div>
                <p className={`text-xl text-primary-900 ${openSans.className} ${ingredientClicked.title === ingredient.title ? 'font-bold' : 'opacity-25'}`}>{ingredient.title}</p>
                {ingredientClicked.title === ingredient.title && (
                  <div className="bg-secondary h-1 w-16"></div>
                )}
              </div>
            )
          })}
        </div>

        <p className={`ingredient-info text-primary-900 text-xl mt-4 lg:mt-8 ${openSans.className}`}>
          {ingredientClicked.info}
        </p>
      </div>
    </div>
  );
}