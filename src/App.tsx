import { Routes, Route } from 'react-router-dom';
import CatalogPage from 'Pages/CatalogPage';
import CardPage from 'Pages/CardPage';
import CartPage from 'Pages/CartPage';
import AdminPage from 'Pages/AdminPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <CatalogPage/> } />
        <Route path='card/:id' element={ <CardPage/> } />
        <Route path='cart/' element={ <CartPage/> } />
        <Route path='admin/' element={ <AdminPage/>} />
      </Routes>
    </>
  )
}

export default App;
