'use client'
import { RegisterUser, login } from "@/actions";
import { titleFont } from "@/config/fonts"
import clsx from "clsx";
import Link from "next/link"

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
  password: string;
}

export const Register = () => {
  

  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, formState: {errors}  } = useForm<FormInputs>();
  const onSubmit = async (data:FormInputs)=>{
    const { email,name, password } = data;
    const resp = await RegisterUser(name,email,password);

    if(!resp.ok){
      setErrorMessage(resp.message);
      return;
    }

    await login(email.toLowerCase(),password);
    window.location.replace('/');
  };
  
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>

    
      <label className={`${titleFont.className}`} htmlFor="name">Nombre</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5",
            {
              'border-red-500' : errors.name
            }
          )
        }
        id='name'
        type="text"
        autoFocus
        {...register('name',{required:true})}

      />

      <label className={`${titleFont.className}`} htmlFor="email">Correo electrónico</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5",
            {
              'border-red-500' : errors.email
            }
          )
        }
        id='email'
        type="email"
        {...register('email',{required:true,pattern: /^\S+@\S+$/i})}
      />


      <label className={`${titleFont.className}`} htmlFor="password">Contraseña</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5",
            {
              'border-red-500' : errors.password
            }
          )
        }
        id='password'
        type="password"
        {...register('password',{required:true,minLength:6})}
      />

      <span className="text-red-500">{errorMessage}</span>

      <button
        className="btn-primary">
        Crear cuenta
      </button>


      {/* divisor line */}
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

    </form>
  )
}
