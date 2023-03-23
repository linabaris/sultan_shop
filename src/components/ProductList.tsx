import ProductTile from './ProductTile';
import { TProduct } from 'types';
import data from '../products.json';

function ProductList() {
  return (
    <section className='list list__wrapper' >
      {data.map((item: TProduct) => {
        return <ProductTile key={item.name} product={item}/>;
      })}
    </section>
  )
}

export default ProductList