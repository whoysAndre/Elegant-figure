import { initialData } from "./seed";
import prisma from '../lib/prisma';





async function main(){
  
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();
  

  const { products,categories, users } = initialData;


  const categoriesData = categories.map((category)=>({
    name: category
  }));

  await prisma.category.createMany({
    data: categoriesData
  });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((map,category)  =>{
    map[category.name.toLowerCase()] = category.id;
    return map;
  },{} as Record<string, string>);

  
  products.forEach(async(product)=> {
    const {  images , ...rest } = product;
     
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[product.type]
      }
    });
    const imagesData = images.map(image=>({
      url: image,
      productId: dbProduct.id
    }));
    await prisma.productImage.createMany({
      data: imagesData
    });
    await prisma.user.createMany({
      data : users
    });

  })



}



(()=>{
  if(process.env.NODE_ENV === 'production') return;
  
  main();

})();
