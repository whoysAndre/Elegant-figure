import { QuantitySelector, Title } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";


const productsInCart = [
  initialData.products[0],
  // initialData.products[1],
  // initialData.products[2],
];

interface Props{
  params: {
    id: string
  }
}

export default function OrderPageById({params}:Props) {
  
  const {id} = params;

  //TODO:Verificar

  
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">
        <Title title= {`Orden #${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col ">
            
            <div className = {
              clsx(
                "flex  items-center rounded-lg py-2 px-3.5 text-xs  text-white mb-5",
                {
                  'bg-red-500': false,
                  'bg-green-700': true
                }
              )
            }>
              <IoCardOutline size={30}/>
              {/* <span className={`mx-2 ${titleFont.className}`}>Pago pendiente</span> */}
              <span className={`mx-2 ${titleFont.className} text-[1.1rem]`}>Pago exitoso</span>

            </div>


            {/* Items */}
            {
              productsInCart.map((product) => (
                <div className="flex mb-5" key={product.slug}>
                  <Image
                    src={`/products/${product.images[0]}`}
                    width={100}
                    height={100}
                    style={{
                      width: '130px',
                      height: '130px'
                    }}
                    alt={product.title}
                    className="mr-5 rounded"
                  />

                  <div className="">
                    <p className={titleFont.className}>{product.title}</p>
                    <p>s/.{product.price}</p>
                    <p>Subtotal: s/.{product.price} x 3</p>
                  </div>
                </div>
              ))
            }
          </div>


          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7">

            <h2 className={`text-2xl mb-2 ${titleFont.className}`}>Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Rodrigo</p>
              <p>Av. San juan</p>
              <p>Col. centro</p>
              <p>Lima</p>
              <p>CP 1809</p>
              <p>987654321</p>
            </div>

            {/* divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className={`text-2xl mb-2 ${titleFont.className}`}>Resumen de su orden</h2>

            <div className="w-full flex flex-col gap-3">

              <div className="flex justify-between w-full text-[1.1rem] sm:text-xl">
                <span>N° Productos:</span>
                <span>3 articulos </span>
              </div>

              <div className="flex justify-between w-full text-[1.1rem] sm:text-xl">
                <span>Subtotal:</span>
                <span className="">s/.100 </span>
              </div>

              <div className="flex justify-between w-full text-[1.1rem] sm:text-xl">
                <span>Impuestos (15%):</span>
                <span className="">s/.100 </span>
              </div>

              <div className="flex justify-between w-full text-xl mt-5 mb-5">

                <span className="text-2xl ">Total:</span>
                <span className="text-2xl">s/.100 </span>
              </div>

            </div>

            <div className = {
              clsx(
                "flex  items-center rounded-lg py-2 px-3.5 text-xs  text-white mb-5",
                {
                  'bg-red-500': false,
                  'bg-green-700': true
                }
              )
            }>
              <IoCardOutline size={30}/>
              {/* <span className={`mx-2 ${titleFont.className}`}>Pago pendiente</span> */}
              <span className={`mx-2 ${titleFont.className} text-[1.1rem]`}>Pago exitoso</span>

            </div>

          </div>


        </div>


      </div>

    </div>
  );
}