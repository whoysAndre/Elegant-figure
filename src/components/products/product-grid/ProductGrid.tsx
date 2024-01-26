import { Product } from "@/interfaces"
import { ProductGridItem } from "./ProductGridItem";

interface Props{
  products: Product[];
};

export const ProductGrid = ({products}:Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-10 px-5 sm:px-0 w-full">
      {
        products.map(product=>(
          <ProductGridItem
            product={product}
            key={product.slug}
          />
        ))
      }
    </div>
  )
}
