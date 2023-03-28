import FilterByCat from 'components/FilterByCat';
import { FilterByParam } from 'components/FilterByParam';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ProductList from 'components/ProductList';
import Sort from 'components/Sort';

function CatalogPage() {
  return (
    <>
      <Header/>
      <div className="catalog__up-line wrapper">
        <h2 className='catalog__title'>Косметика и гигиена</h2>
        <Sort/>
      </div>
      <FilterByCat/>
      <div className="catalog__main wrapper">
        <FilterByParam/>
        <ProductList/>
      </div>
      <Footer/>
    </>
  )
}

export default CatalogPage;