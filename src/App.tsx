import { Routes, Route } from 'react-router-dom';
import CatalogPage from 'Pages/CatalogPage';
import CardPage from 'Pages/CardPage';
import CartPage from 'Pages/CartPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <CatalogPage/> } />
        <Route path='card/:id' element={ <CardPage/> } />
        <Route path='cart/' element={ <CartPage/> } />
      </Routes>
    </>
  )
}

export default App;
