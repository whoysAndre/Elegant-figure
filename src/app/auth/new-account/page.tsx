import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export default function () {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">

      <h1 className={`${titleFont.className} text-4xl mb-5`}>Nueva cuenta</h1>

      <div className="flex flex-col">

      <label className={`${titleFont.className}`} htmlFor="name">Nombre</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          id='nombre'
          type="text" />

        <label className={`${titleFont.className}`} htmlFor="email">Correo electrónico</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          id='email'
          type="email" />


        <label className={`${titleFont.className}`} htmlFor="password">Contraseña</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          id='password'
          type="password" />

        <button

          className="btn-primary">
          Crear cuenta
        </button>


        {/* divisor l ine */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link
          href="/auth/login"
          className={`btn-secondary text-center ${titleFont.className}`}>
          Volver
        </Link>

      </div>
    </div>
  );
}
