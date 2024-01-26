import { QuantitySelector, Title } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const productsInCart = [
  initialData.products[0],
  // initialData.products[1],
  // initialData.products[2],
];

export default function () {
  
  // redirect('/empty');

  
  
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar más productos</span>
            <Link 
              href="/" 
              className={`mb-5 mt-2 bg-[#00000025] hover:bg-[#0000005c] font-bold rounded-md p-2 w-[250px] flex justify-center items-center ${titleFont.className}`}
            >
              Continuar comprando
            </Link>


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
                    <QuantitySelector quantity={3} />
                    <button className={`underline mt-3 ${titleFont.className}`}>
                      Eliminar
                    </button>
                  </div>
                </div>
              ))
            }
          </div>


          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className={`text-2xl mb-2 ${titleFont.className}`}>Resumen de su orden</h2>

            <div className="w-full flex flex-col gap-3">
              
              <div className="flex justify-between w-full text-[1.1rem] sm:text-xl">
                <span>N° Productos:</span>
                <span>3 articulos </span>
              </div>

              <div  className="flex justify-between w-full text-[1.1rem] sm:text-xl">
                <span>Subtotal:</span>
                <span className="">s/.100 </span>
              </div>
              
              <div className="flex justify-between w-full text-[1.1rem] sm:text-xl">
                <span>Impuestos (15%):</span>
                <span className="">s/.100 </span>
              </div>

              <div  className="flex justify-between w-full text-xl mt-5">
                <span className="text-2xl ">Total:</span>
                <span className="text-2xl">s/.100 </span>
              </div>

            </div>

            <div className="mt-5 mb-2 w-full">
              <Link 
                href="/checkout/address"
                className={`btn-primary flex justify-center ${titleFont.className} font-bold`}
              >
                Checkout
              </Link>
            </div>

          </div>


        </div>


      </div>

    </div>
  );
}