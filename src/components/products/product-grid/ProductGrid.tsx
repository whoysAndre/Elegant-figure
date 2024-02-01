'use client'

import { Product } from '@/interfaces';
import { ProductGridItem } from "./ProductGridItem";
import { useProductsStore } from "@/store";

interface Props {
  products: Product[];
};



export const ProductGrid = ({ products}: Props) => {

  const { filters } = useProductsStore();
  
  
  const productsFilter = products.filter(product => {
    return (
      
      filters.brand === 'all' ||
      product.brands === filters.brand &&
      (
        filters.categorySelected === 'all' ||
        product.type === filters.categorySelected
      )
      
    )
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mb-10 px-5 sm:px-0 w-full">
      {
        productsFilter.map(product => (
          <ProductGridItem
            product={product}
            key={product.slug}
          />
        ))
      }
    </div>
  )
}
