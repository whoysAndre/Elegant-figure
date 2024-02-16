"use client";

import { createUpdateteProduct, deleteProductImage } from "@/actions";
import { ProductImage  } from "@/components";
import { Category, Product } from "@/interfaces";
import { ProductImage as ProductWithImage } from "@prisma/client";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";


interface Props {
  product: Partial<Product> & { ProductImage?: ProductWithImage[] };
  categories: Category[];
}

const sizes: string[] = 
  [
    'XXL', 'XS', 'L', 'M', 'XL', 'S', 
    '20','21.5','22','22.5','23','23.5','24',
    '24.5','25','25.5','26','26.5','27','27.5','28',
    '28.5','29','29.5','30','30.5','31','31.5','32','32.5',
    '33','33.5','34','34.5','35','35.5',
    '36', '37', '38', '39', '40', 
    '40.5', '41', '41.5', '42', '42.5', '43', '43.5', '44', '44.5', 
    '45', '45.5'
  ];

interface FormInputs {
  title: string;
  slug: string;
  description: string;
  price: number;
  inStock: number;
  sizes: string[];
  brands: string;
  tags: string;
  gender: 'women' | 'men' | 'kid' | 'unisex'
  type: string;
  categoryId: string;
  images?: FileList
}

export const ProductForm = ({ product, categories }: Props) => {
  const router = useRouter();
  const { handleSubmit, register, formState: { isValid }, getValues, setValue, watch } = useForm<FormInputs>({
    defaultValues: {
      ...product,
      tags: product.tags?.join('-'),
      sizes: product.sizes ?? [],
      images: undefined
    }
  });

  watch('sizes');

  const onSizeChanged = (size: string) => {
    const sizes = new Set(getValues('sizes'));
    sizes.has(size) ? sizes.delete(size) : sizes.add(size);
    setValue('sizes', Array.from(sizes));
  }

  const onSumit = async (data: FormInputs) => {
    const formData = new FormData();
    const { images,...productToSave } = data;
    if(product.id){
      formData.append('id', product.id ?? '');
    }
    formData.append('title', productToSave.title);
    formData.append('slug', productToSave.slug);
    formData.append('description', productToSave.description);
    formData.append('price', productToSave.price.toString());
    formData.append('inStock', productToSave.inStock.toString());
    formData.append('sizes', productToSave.sizes.toString());
    formData.append('brands', productToSave.brands);
    formData.append('tags', productToSave.tags);
    formData.append('type', productToSave.type);
    formData.append('gender', productToSave.gender);
    formData.append('categoryId', productToSave.categoryId);

    if(images){
      for(let i=0; i<images.length;i++){
        formData.append('images',images[i]);
      };
    }
    formData.append('categoryId', productToSave.categoryId);
    const { ok, product:updatedProduct } = await createUpdateteProduct(formData);
    if(!ok){
      alert('No se pudo actualizar el producto');
      return;
    }
    router.replace(`/admin/product/${updatedProduct?.slug}`)
  }

  return (
    <form className="grid px-5 mb-16 grid-cols-1 sm:px-0 sm:grid-cols-2 gap-3" onSubmit={handleSubmit(onSumit)}>
      {/* Textos */}
      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Título</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200"
            {...register('title', { required: true })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Slug</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200"
            {...register('slug', { required: true })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Descripción</span>
          <textarea
            rows={5}
            className="p-2 border rounded-md bg-gray-200"
            {...register('description', { required: true })}
          ></textarea>
        </div>

        <div className="flex flex-col mb-2">
          <span>Price</span>
          <input type="number" className="p-2 border rounded-md bg-gray-200"
            {...register('price', { required: true, min: 0 })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Tags</span>
          <input type="text" className="p-2 border rounded-md bg-gray-200"
            {...register('tags', { required: true })}
          />
        </div>

        <div className="flex flex-col mb-2">
          <span>Gender</span>
          <select className="p-2 border rounded-md bg-gray-200" {...register('gender', { required: true })}>
            <option value="">[Seleccione]</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kid">Kid</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>

        <div className="flex flex-col mb-2">
          <span>Marca</span>
          <select className="p-2 border rounded-md bg-gray-200" {...register('brands', { required: true })}>
            <option value="">[Seleccione]</option>
            <option value="nike">Nike</option>
            <option value="adidas">Adidas</option>
            <option value="puma">Puma</option>
            <option value="reebok">Reebok</option>
          </select>
        </div>

        <div className="flex flex-col mb-2">
          <span>Tipo de prenda</span>
          <select className="p-2 border rounded-md bg-gray-200" {...register('type', { required: true })}>


            <option value="">[Seleccione]</option>
            <option value="pants">pantalon</option>
            <option value="shirts">polo</option>
            <option value="caps">gorra</option>
            <option value="sets">conjunto</option>
            <option value="sneakers">zapatilla</option>
          </select>
        </div>

        <div className="flex flex-col mb-2">
          <span>Categoria</span>
          <select className="p-2 border rounded-md bg-gray-200" {...register('categoryId', { required: true })}>


            <option value=''>[Seleccione]</option>
            {
              categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))
            }
          </select>
        </div>

        <button className="btn-primary w-full">
          Guardar
        </button>
      </div>

      {/* Selector de tallas y fotos */}
      <div className="w-full">
        <div className="flex flex-col mb-2">
          <span>Inventario</span>
          <input type="number" className="p-2 border rounded-md bg-gray-200"
            {...register('inStock', { required: true, min: 0 })}
          />
        </div>
        {/* As checkboxes */}
        <div className="flex flex-col">

          <span>Tallas</span>
          <div className="flex flex-wrap">

            {
              sizes.map(size => (
                // bg-blue-500 text-white <--- si está seleccionado
                <div
                  key={size}
                  onClick={() => onSizeChanged(size)}
                  className={
                    clsx(
                      "flex  items-center justify-center w-10 h-10 mr-2 border rounded-md cursor-pointer",
                      {
                        'bg-blue-500 text-white': getValues('sizes').includes(size)
                      }
                    )
                  }>
                  <span>{size}</span>
                </div>
              ))
            }

          </div>


          <div className="flex flex-col mb-2">

            <span>Fotos</span>

            <input
              type="file"
              multiple
              className="p-2 border rounded-md bg-gray-200"
              accept="image/png, image/jpeg, image/avif, image/webp, image/jpg"
              {...register('images')}
            />

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {
              product.ProductImage?.map(image => (
                <div key={image.id}>
                  <ProductImage
                    alt={product.title ?? ''}
                    src={image.url}
                    width={300}
                    height={300}
                    className="rounded shadow-md"
                  />
                  <button className="btn-danger w-full rounded-b-xl" type="button"
                    onClick={() => deleteProductImage(image.id, image.url)}
                  >Eliminar</button>
                </div>
              ))
            }

          </div>

        </div>
      </div>
    </form>
  );
};