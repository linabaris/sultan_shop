import { useSelector, useDispatch } from 'react-redux';
import ProductTile from './ProductTile';
import { TProduct } from 'types';
import {getFilteredProduct, getSortedProduct, getFilteredProdByPrice, getProductsPerPage} from '../utils'; 
import { useEffect, useState } from 'react';
import { setPageAmount } from 'redux/slices/paginationSlice';


function ProductList() {

  const dispatch = useDispatch();

  const data = useSelector((state : any) => state.products.items);
  const { ascSort, sortParam } = useSelector((state: any) => state.sort);
  const {priceMin, priceMax} = useSelector((state:any) => state.filter);
  const filterParam = useSelector((state:any) => state.filter.filterParam);
  const { currentPage, productPerPage } = useSelector((state:any) => state.pagination);

  const [visibleProducts, setVisibleProducts ] = useState<TProduct[]>([]);

  useEffect(() => {
    const sortedData = getSortedProduct(data, sortParam.sortProperty, ascSort);
    const filteredData = getFilteredProduct(sortedData, filterParam);
    const filteredByPriceData = getFilteredProdByPrice(filteredData, priceMin, priceMax);

    if(filteredByPriceData) {
      const pageAmount = Math.ceil(filteredByPriceData.length/productPerPage);
      dispatch(setPageAmount(pageAmount));
    }
    const paginatedArray = getProductsPerPage(filteredByPriceData, productPerPage)[currentPage-1]
    setVisibleProducts(paginatedArray);
  },[data, sortParam, ascSort, filterParam, priceMin, priceMax, currentPage,productPerPage])

  return (
    <section className='list list__wrapper' >
      {visibleProducts?.map((item: TProduct) => {
        return <ProductTile key={item.name} product={item}/>;
      })}
    </section>
  )
}

export default ProductList