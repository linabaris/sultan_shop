import { useSelector } from 'react-redux';
import ProductTile from './ProductTile';
import { TProduct } from 'types';
import {getFilteredProduct, getSortedProduct, getFilteredProdByPrice} from '../utils'; 
import { useEffect, useState } from 'react';


function ProductList() {

  const data = useSelector((state : any) => state.products.items);
  const { ascSort, sortParam } = useSelector((state: any) => state.sort);
  const {priceMin, priceMax} = useSelector((state:any) => state.filter);
  const filterParam = useSelector((state:any) => state.filter.filterParam);

  const [visibleProducts, setVisibleProducts ] = useState<TProduct[]>([]);

  useEffect(() => {
    const sortedData = getSortedProduct(data, sortParam.sortProperty, ascSort);
    const filteredData = getFilteredProduct(sortedData, filterParam);
    const filteredByPriceData = getFilteredProdByPrice(filteredData, priceMin, priceMax)
    setVisibleProducts(filteredByPriceData);
  },[data, sortParam, ascSort, filterParam, priceMin, priceMax])

  return (
    <section className='list list__wrapper' >
      {visibleProducts?.map((item: TProduct) => {
        return <ProductTile key={item.name} product={item}/>;
      })}
    </section>
  )
}

export default ProductList