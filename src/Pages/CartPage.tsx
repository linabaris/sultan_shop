import { useSelector } from 'react-redux';
import Footer from 'components/Footer';
import Header from 'components/Header';
import CartItem from 'components/CartItem';
import { TProduct } from 'types';
import Button from 'components/Button';

function CartPage() {
  const {goods, totalPrice} = useSelector((state : any) => state.cart);

  return (
    <>
      <Header/>
      <div className="cart__container wrapper">
        <div className="cart__title">Корзина</div>
        {
          goods.map((product:TProduct) => {
            return <CartItem product={product} key={product.id}/>
          })
        }
        <Button text={'Оформить заказ'}/>
        <div className="cart__total-price">{totalPrice}</div>
      </div>
      <Footer/>
    </>
  )
}

export default CartPage