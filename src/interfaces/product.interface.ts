export interface Product {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: string[];
  slug: string;
  tags: string[];
  title: string;
  type: Type;
  gender: Catgory,
  brand: string
};

export type Catgory = 'men'|'women'|'kid'|'unisex';
export type Type = 'shirts'|'pants'|'hoodies'|'hats';
