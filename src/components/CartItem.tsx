import {  TProductProps } from "types";

function CartItem({product}:TProductProps) {

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
            <button className="manage-btn__dec">-</button>
            <span></span>
            <button className="manage-btn__dec">+</button>
        </div>
        <div className="cart-item__total-price">
            {product.count?product.price*product.count:product.price} ₽
        </div>
        <div className="cart-item__delete-btn">
            <button></button>
        </div>
    </div>
  )
}

export default CartItem