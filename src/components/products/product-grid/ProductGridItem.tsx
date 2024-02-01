'use client'

import { ProductImage } from "@/components";
import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  product: Product
}

export const ProductGridItem = ({ product }: Props) => {

  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <div className="rounded-md  fade-in">
      <Link href={`/product/${product.slug}`} >
        <ProductImage
          src={displayImage}
          alt={product.title}
          className="w-full object-cover rounded-md shadow-md"
          width={800}
          height={800}

        />
      </Link>


      <div className="p-4 flex flex-col">
        <Link href={`/product/${product.slug}`} className="hover:text-blue-800">
          {product.title}
        </Link>

        <span className="font-bold">s/.{product.price}</span>
      </div>

    </div>
  )
};
