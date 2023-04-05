import { useSelector, useDispatch } from 'react-redux';
import ProductTile from './ProductTile';
import { TProduct } from 'types';
import {
  getFilteredProduct, 
  getSortedProduct, 
  getFilteredProdByPrice, 
  getProductsPerPage, 
  getCheckedProducts,
  getSearchedProducts} from '../utils'; 

import { useEffect, useState } from 'react';
import { setPageAmount } from 'redux/slices/paginationSlice';


function ProductList() {

  const dispatch = useDispatch();

  const data = useSelector((state : any) => state.products.items); 
  const { ascSort, sortParam } = useSelector((state: any) => state.sort);
  const {priceMin, priceMax, filterParam, checkedParams, searchParam } = useSelector((state:any) => state.filter);
  const { currentPage, productPerPage } = useSelector((state:any) => state.pagination);


  const [visibleProducts, setVisibleProducts ] = useState<TProduct[]>([]);

  useEffect(() => {
    // const localData = localStorage.getItem('products');
    // let updateData = [];
    // if(localData) {
    //   updateData = [...data, ...JSON.parse(localData)]
    // } else {
    //   updateData = data;
    // }
    const sortedData = getSortedProduct(data, sortParam.sortProperty, ascSort);
    const filteredData = getFilteredProduct(sortedData, filterParam);
    const filteredByPriceData = getFilteredProdByPrice(filteredData, priceMin, priceMax);
    const checkedData = getCheckedProducts(filteredByPriceData, checkedParams);
    const searchedData = getSearchedProducts(checkedData, searchParam);
   
    if(searchedData) {
      const pageAmount = Math.ceil(searchedData.length/productPerPage);
      dispatch(setPageAmount(pageAmount));
    }
    const paginatedArray = getProductsPerPage(searchedData, productPerPage)[currentPage-1]
    setVisibleProducts(paginatedArray);
  },[data, sortParam, ascSort, filterParam, priceMin, priceMax, currentPage,productPerPage, checkedParams, searchParam])

  return (
    <section className='list list__wrapper' >
      {visibleProducts?.map((item: TProduct) => {
        return <ProductTile key={item.name} product={item}/>;
      })}
    </section>
  )
}

export default ProductList