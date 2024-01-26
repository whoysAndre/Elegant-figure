
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string
  }
};


export default function ({ params }: Props) {

  const { slug } = params;

  const product = initialData.products.find(product=> product.slug === slug);
  
  if(!product){
    notFound();
  };

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-5 gap-3">
      
      {/* Slideshow */}
      
      
      <div className="col-span-1 md:col-span-3">
        {/* Mobile slideshow */}
        <ProductMobileSlideshow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        {/* Desktop slideshow */}
        <ProductSlideshow 
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>

      {/* Detail Product */}
      <div className="col-span-2 px-5 ">
        
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5"> s/.{product.price}</p>

        {/* Sizes Selector */}
        <SizeSelector 
          selectedSize= {product.sizes[0]}
          avaibleSize= {product.sizes}
        />

        {/* Quantity Selector */}
        <QuantitySelector
          quantity={2}
        />

        {/* Button */}
        <button
          className={`btn-primary my-5 ${titleFont.className}`}
        >
          Agregar al carrito
        </button>


        {/* Description */}
        <h3 className="font-bold text-[1.1rem]">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>


    </div>
  );
}