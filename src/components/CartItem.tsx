import {  TProductProps } from "types";
import { Delete } from '../assets/svg';
import { useDispatch } from "react-redux";
import { addGood, removeGood, reduceGoods } from "redux/slices/cartSlice";

function CartItem({product}:TProductProps) {
    const dispatch = useDispatch();
    const decClickHandler = () => {
        if(product.count === 1) {
            dispatch(removeGood(product.id))
        } else {
            dispatch(reduceGoods(product));
        }
        
    }
    const incClickHandler = () => {
        dispatch(addGood(product));
    }
    const clickDeleteHandler = () => {
        dispatch(removeGood(product.id))
    }
  return (
    <div className="cart__item cart-item">
        <div className="cart-item__pic">
            <img src={product.image_url} alt={product.name} />
        </div>
        <div className="cart-item__body">
            <div className="cart-item__volume"></div>
            <div className="cart-item__name">{product.name}</div>
            <div className="cart-item__disc">{product.disclaimer}</div>
        </div>
        <div className="cart-item__manage-btn manage-btn">
            <button className="manage-btn__dec" onClick={() => decClickHandler()}>-</button>
            <span>{product.count?product.count:1}</span>
            <button className="manage-btn__inc" onClick={() => incClickHandler()}>+</button>
        </div>
        <div className="cart-item__total-price">
            {product.count?product.price*product.count:product.price} ₽
        </div>
        <div className="cart-item__delete-btn">
            <button onClick={() => clickDeleteHandler()}><Delete/></button>
        </div>
    </div>
  )
}

export default CartItem