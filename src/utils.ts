import { TProduct } from './types/TProduct';

const compareFn = (a:TProduct, b:TProduct):number => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
}
const getSortedProduct = (products:TProduct[], sortParam:string, isAsc:boolean) => {
    const sortedProducts :TProduct[]= [...products];
    if(sortParam === 'name') {
        sortedProducts.sort((a:TProduct,b:TProduct) => {
            return compareFn(a,b)
        })
    } 

    if( sortParam === 'price') {
        sortedProducts.sort((a:TProduct, b:TProduct) => {
            return compareFn(a,b);
        })
    } 
        
    return isAsc ? sortedProducts : sortedProducts.reverse();
}
export default getSortedProduct;