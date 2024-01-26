import { ProductGrid, Title } from "@/components";
import { Catgory } from "@/interfaces";
import { initialData } from "@/seed/seed";

const seedProducts = initialData.products;

interface Props{
  params:{
    id: Catgory,
  }
}

export default function({params}:Props) {
  
  const { id } = params;
  const products = seedProducts.filter( product => product.gender === id);
  const labels: Record<Catgory, string> = {
    'men': 'hombres',
    'women': 'mujeres',
    'kid': 'niños',
    'unisex': 'para todos'
  }

  return (
    <>
      <Title
        title = {`Articulos de ${ labels[id] }`}
        subtitle="Todos los productos"
        className="mb-2"
      />
      
      <ProductGrid
        products={ products }
      />
    </>
  );
}