import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'; 
import { resetCart } from 'redux/slices/cartSlice';
import Footer from 'components/Footer';
import Header from 'components/Header';
import CartItem from 'components/CartItem';
import { TProduct } from 'types';
import Button from 'components/Button';

function CartPage() {

  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);
  const {goods, totalPrice} = useSelector((state : any) => state.cart);
 
  const orderClickHandler = () => {
    dispatch(resetCart());
    setShowMessage(true);
  }

  return (
    <>
      <Header/>
      <div className="cart__container wrapper">
        <div className="cart__title">Корзина</div>
        {(showMessage)? (
          <div className="cart__order_sucsess">Заказ оформлен!</div>
        ):('')
        }
        {goods.length === 0 ? (
          <div className="cart__empty">Добавьте что-нибудь в корзину...</div>
          ):(
            goods.map((product:TProduct) => {
              return <CartItem product={product} key={product.id}/>
            })
          )
        }
        <div className="cart__bottom">
          <Button text={'Оформить заказ'} onClick={() => orderClickHandler()}/>
          <div className="cart__total-price">{totalPrice}₽</div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default CartPage