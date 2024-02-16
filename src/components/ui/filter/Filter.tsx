'use client'
import { titleFont } from "@/config/fonts";
import { useProductsStore } from "@/store";
import { ChangeEventHandler, useState } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";


export const Filter:React.FC = () => {
  
  const {setFilters } = useProductsStore();
  const changeBrands = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    
    setFilters({
      brand: e.target.value
    })
  };
  const changeCategories = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    setFilters({
      categorySelected: e.target.value
    })
  };

  

  return (
    <div className="w-full flex items-center gap-5 text-lg py-3 border-4 rounded transition-all justify-center my-10">
      
      <IoArrowForwardOutline size={30}/>

      <div className="flex gap-5 justify-center">
        <select name="" id="" className= {`${titleFont.className} rounded-md px-2 py-1 bg-gray-50 outline-none border-2`}
          onChange={changeBrands}  
        >
          <option value="all">Marca</option>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="puma">Puma</option>
          <option value="reebok">Rebook</option>
        </select>

        <select className= {`${titleFont.className} rounded-md px-2 py-1  bg-gray-50 outline-none border-2`}
          onChange={changeCategories}
        >
          <option value="all" >Categoria</option>
          <option value="shirts">Polos</option>
          <option value="sneakers">Zapatillas</option>
          <option value="pants">Pantalones</option>
          <option value="sets">Conjuntos</option>
          <option value="caps">Gorros</option>
          
        </select>
      </div>

      <IoArrowBackOutline size={30}/>

    </div>

  )
};
