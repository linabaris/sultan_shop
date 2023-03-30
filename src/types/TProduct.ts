export type TProduct = {
    id: string;
    code: number|string;
    name: string;
    image_url: string;
    category: string;
    type?: string;
    price: number;
    disclaimer: string;
    brand_name: string;
    country: string;
    manufacture: string;
    measure:string;
    size: string;
}