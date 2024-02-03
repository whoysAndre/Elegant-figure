'use client'
import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import Link from "next/link";
import {IoMenuOutline, IoSearchOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

export const TopMenu = () => {

  const openSideMenu = useUIStore(state=>state.openSideMenu)
  const path = usePathname();
  
  const reload = ()=>{
    window.location.replace('/');
  };

  
  return (
    <nav className="flex px-2 sm:px-5 justify-between items-center w-full">

      {/* Logo */}
      <div>
        <Link href="/" className="text-[1.2rem]" onClick={()=>reload()} >
          <span className={`${titleFont.className} antialiased font-bold`}>Elegant</span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* Menu center ategory links  */}

      <div className="hidden sm:block">
        <Link
          href="/gender/men"
          className={ `${path==='/gender/men' ? 'bg-black text-white': ''} ${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-gray-100`} 
        >
          hombres
        </Link>

        <Link
          href="/gender/women"
          className= { `${path==='/gender/women' ? 'bg-black text-white': ''} ${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-gray-100`} 
          
        >
          mujeres
        </Link>

        <Link
          href="/gender/kid"
          className={ `${path==='/gender/kid' ? 'bg-black text-white': ''} ${titleFont.className} m-2 p-2 rounded-md transition-all hover:bg-gray-100`} 
        >
          niños
        </Link>

      </div>

      {/* Search, cart, menu */}

      <div className="flex items-center">
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
