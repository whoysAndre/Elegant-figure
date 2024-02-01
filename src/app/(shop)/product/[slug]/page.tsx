export const revalidate = 60480;



import { getProductBySlug } from "@/actions";
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector, StockLabel } from "@/components";
import { titleFont } from "@/config/fonts";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from 'next'


interface Props {
  params: {
    slug: string
  }
};


export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;
 
  // fetch data
  const product = await getProductBySlug(slug);
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product?.title,
    openGraph: {
      images: [`products/${product?.images[1]}`],
    },
  }
}


export default async function ProductBySlugPage({ params }: Props) {

  const { slug } = params;

  const product = await getProductBySlug(slug);

  if (!product) {
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

        <StockLabel slug={product.slug} />
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5"> s/.{product.price}</p>

        {/* Sizes Selector */}
        <SizeSelector
          selectedSize={product.sizes[0]}
          avaibleSize={product.sizes}
        />

        {/* Quantity Selector */}
        <QuantitySelector
          quantity={2}
        />

        {/* Button */}
        <button
          className={`btn-primary my-5 ${titleFont.className}`}
        >
          muy pronto opcion a compra
        </button>


        {/* Description */}
        <h3 className="font-bold text-[1.1rem]">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>


    </div>
  );
}