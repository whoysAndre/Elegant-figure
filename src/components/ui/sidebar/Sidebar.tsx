'use client'

import { IoArrowForwardOutline, IoCloseOutline, IoKeyOutline, IoLogInOutline, IoLogOutOutline, IoMaleFemaleOutline, IoMaleOutline, IoManOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline, IoWomanOutline } from "react-icons/io5"
import { FaChildren } from "react-icons/fa6";
import Link from "next/link"
import { titleFont } from "@/config/fonts"
import { useUIStore } from "@/store"
import clsx from "clsx"
import { logout } from "@/actions"
import { useSession } from "next-auth/react"


export const Sidebar = () => {

  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
  const closeMenu = useUIStore(state => state.closeSideMenu);

  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  // @ts-ignore: Ignora el error sobre la propiedad 'role'
  const isAdmin = (session?.user.role === 'admin');

  return (
    <div className="">

      {/* Background black */}

      {
        isSideMenuOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
          />
        )
      }


      {/* Blur */}

      {
        isSideMenuOpen && (
          <div
            onClick={closeMenu}
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          />
        )
      }

      {/* SideMenu */}
      <nav
        className={
          clsx(
            "fixed bg-white w-[250px]  md:w-[500px] h-screen z-20 top-0 right-0 shadow-2xl transform transition-all duration-300 p-5",
            {
              "translate-x-full": !isSideMenuOpen
            }
          )
        }
      >
        <IoCloseOutline
          size={50}
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => closeMenu()}
        />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar producto"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl boder-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>


        {/* Menu */}



        {
          isAuthenticated && (
            <>
              <Link
                href="/profile"
                onClick={() => closeMenu()}
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all gap-2"
              >
                <IoPersonOutline size={30} />
                <span className={`${titleFont.className} text-xl`}>Perfil</span>
              </Link>

              <Link
                href="/"
                className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all gap-2"
              >
                <IoTicketOutline size={30} />
                <span className={`${titleFont.className} text-xl`}>Ordenes</span>
              </Link>

            </>
          )
        }



        {
          isAuthenticated && (
            <button

              className="w-full flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all gap-2 pl-3"
              onClick={() => logout()}
            >
              <IoLogOutOutline size={30} />
              <span className={`${titleFont.className} text-xl`}>Salir</span>
            </button>

          )
        }

        {/* Menu */}
        <div className="flex flex-col gap-5 pl-4 mt-10">
          <Link href="/gender/men" className="flex items-center gap-2 hover:bg-gray-100 rounded transition-all py-2">
            <IoMaleOutline size={30} />
            <span className={`${titleFont.className} text-xl`}>Hombres</span>
          </Link>

          <Link href="/gender/women" className="flex items-center hover:bg-gray-100 rounded transition-all gap-2 py-2">
            <IoMaleFemaleOutline size={30} />
            <span className={`${titleFont.className} text-xl`}>Mujeres</span>
          </Link>

          <Link href="/gender/kid" className="flex items-center gap-2 hover:bg-gray-100 rounded transition-all py-2">
            <FaChildren size={30} />
            <span className={`${titleFont.className} text-xl`}>Niños</span>
          </Link>
        </div>



        {
          !isAuthenticated && (
            <>
              <div className="w-full h-px bg-gray-200 my-10" />
              <Link
                href="/auth/login"
                className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all gap-2 pl-3"
                onClick={() => closeMenu()}
              >
                <IoKeyOutline size={30} />
                <span className={`${titleFont.className} text-xl`}>Ingresar</span>
              </Link>
            </>
          )
        }


        

        

    

      {
        isAdmin && (
          <>
            {/* Line separator */}
            <div className="w-full h-px bg-gray-200 my-10" />

            {/* Menu */}
            <Link
              href="/admin/products"
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all gap-2"
            >
              <IoShirtOutline size={30} />
              <span className={`${titleFont.className} text-xl`}>Productos</span>
            </Link>

            <Link
              href="/"
              className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all gap-2"
            >
              <IoTicketOutline size={30} />
              <span className={`${titleFont.className} text-xl`}>Ordenes</span>
            </Link>

            <Link
              href="/"
              className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all gap-2"
            >
              <IoPeopleOutline size={30} />
              <span className={`${titleFont.className} text-xl`}>Usuarios</span>
            </Link>

          </>
        )
      }

    </nav>
    </div >
  )
}
