import Footer from "components/Footer";
import Header from "components/Header";
import Card from "components/Card";
import { useLocation } from "react-router";
import data from 'products.json';

function CardPage() {
  //get id(name) product
  const location = decodeURI(useLocation().pathname.slice(6));
  const currentIndex = data.findIndex(product => product.name === location);

  return (
    <>
      <Header/>
      <Card product={data[currentIndex]}/>
      <Footer/>
    </>
  )
}

export default CardPage