import bcryptjs from "bcryptjs";

interface SeedProduct {
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: string[];
    slug: string;
    tags: string[];
    title: string;
    type: ValidTypes;
    gender: 'men'|'women'|'kid'|'unisex';
    brands: 'nike'| 'adidas'| 'puma'|'reebok';
}

interface SeedUser {
    name: string;
    email: string;
    role: 'admin' | 'user';
    password: string;
}

type ValidTypes = 'shirts'|'pants'| 'hats' | 'sneakers' | 'sandals' | 'hoodies';

interface SeedData {
    categories: string[];
    products: SeedProduct[];
    users: SeedUser[];
}




export const initialData: SeedData = {
    
    users: [
        {
            email: 'johan@gmail.com',
            name: 'johan',
            password: bcryptjs.hashSync('123456'),
            role: 'admin'
        },
        {
            email: 'rodrigo@gmail.com',
            name: 'rodrigo',
            password: bcryptjs.hashSync('123456'),
            role: 'user'
        }
    ],
    
    categories: [
        'Shirts','Pants', 'Hats' , 'Sneakers' , 'Sandals', 'Hoodies'
    ],

    products: [
        {
            description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
            images: [
                '1740176-00-A_0_2000.jpg',
                '1740176-00-A_1.jpg',
            ],
            inStock: 7,
            price: 75,
            sizes: ['XS','S','M','L','XL','XXL'],
            slug: "mens_chill_crew_neck_sweatshirt",
            type: 'shirts',
            tags: ['sweatshirt'],
            title: "Men’s Chill Crew Neck Sweatshirt",
            gender: 'men',
            brands: 'nike'
        },
    ]
}