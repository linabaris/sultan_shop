import { TProduct } from './types/TProduct';

const compareNames = (a:TProduct, b:TProduct):number => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
}

const comparePrices = (a:TProduct, b:TProduct):number => {
    return a.price-b.price;
}

const getSortedProduct = (products:TProduct[], sortParam:string, isAsc:boolean) => {
    const sortedProducts: TProduct[] = [...products];
    if(sortParam === 'name') {
        sortedProducts.sort((a:TProduct,b:TProduct) => {
            return compareNames(a,b)
        })
    } 

    if( sortParam === 'price') {
        sortedProducts.sort((a:TProduct, b:TProduct) => {
            return comparePrices(a,b);
        })
    } 
        
    return isAsc ? sortedProducts : sortedProducts.reverse();
}

const getFilteredProduct = (products:TProduct[],filterParam:string ) => {
    const filteredProducts: TProduct[] = [...products];
    if(filterParam.length === 0) return filteredProducts;
    return filteredProducts.filter(product => product.type === filterParam)
}

const getFilteredProdByPrice = (products:TProduct[], priceMin:number, priceMax:number) => {
    const filteredProducts: TProduct[] = [...products];
    return filteredProducts.filter(product => product.price >= priceMin && product.price<=priceMax)
}

const getProductsPerPage = (products: TProduct[], productsPerPage:number) => {
    const pages = [];
    for(let i =0; i<products.length; i+=productsPerPage) {
        pages.push(products.slice(i, i+productsPerPage));
    };
    return pages;
}

export {getSortedProduct, getFilteredProduct, getFilteredProdByPrice, getProductsPerPage};