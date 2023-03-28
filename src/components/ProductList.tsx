import { useSelector } from 'react-redux';
import ProductTile from './ProductTile';
import { TProduct } from 'types';
import getSortedProduct from '../utils'; 
import { useEffect, useState } from 'react';


function ProductList() {

  const data = useSelector((state : any) => state.products.items);
  const { ascSort, sortParam } = useSelector((state: any) => state.sort);

  const [visibleProducts, setVisibleProducts ] = useState<TProduct[]>([]);

  useEffect(() => {
    const sortedData = getSortedProduct(data, sortParam.sortProperty, ascSort);
    setVisibleProducts(sortedData);
  },[data, sortParam, ascSort])

  return (
    <section className='list list__wrapper' >
      {visibleProducts?.map((item: TProduct) => {
        return <ProductTile key={item.name} product={item}/>;
      })}
    </section>
  )
}

export default ProductList