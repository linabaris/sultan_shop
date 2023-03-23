import { Routes, Route } from 'react-router-dom';
import CatalogPage from 'Pages/CatalogPage';
import CardPage from 'Pages/CardPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<CatalogPage/>}/>
        <Route path='card/:id' element={<CardPage/>}/>
      </Routes>
    </>
  )
}

export default App;
