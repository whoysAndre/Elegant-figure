'use client'
import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import Link from "next/link";
import {IoMenuOutline, IoSearchOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

export const TopMenu = () => {

  const openSideMenu = useUIStore(state=>state.openSideMenu)
  const path = usePathname();

  
  return (
    <nav className="flex px-2 sm:px-5 justify-between items-center w-full">

      {/* Logo */}
      <div>
        <Link href="/" className="text-[1.2rem]">
          <span className={`${titleFont.className} antialiased font-bold`}>Elegant</span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* Menu center ategory links  */}

      <div className="hidden sm:block">
        <Link
          href="/category/men"
          className={ `${path==='/category/men' ? 'bg-black text-white': ''} ${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-gray-100`} 
        >
          hombres
        </Link>

        <Link
          href="/category/women"
          className= { `${path==='/category/women' ? 'bg-black text-white': ''} ${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-gray-100`} 
        >
          mujeres
        </Link>

        <Link
          href="/category/kid"
          className={ `${path==='/category/kid' ? 'bg-black text-white': ''} ${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-gray-100`} 
        >
          niños
        </Link>

      </div>

      {/* Search, cart, menu */}

      <div className="flex items-center">
        
        <Link href="/search" className="mx-2 ">
          <IoSearchOutline className="size-6"/>
        </Link>

        <button 
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          onClick={openSideMenu}        
        >
          <IoMenuOutline className="size-6"/>
        </button>

      </div>

    </nav>
  )
};
