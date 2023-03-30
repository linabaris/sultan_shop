import React from 'react'

function CartItem() {
  return (
    <div className="cart__item cart-item">
        <div className="cart-item__pic">
            <img src="" alt="" />
        </div>
        <div className="cart-item__body">
            <div className="cart-item__volume"></div>
            <div className="cart-item__name"></div>
            <div className="cart-item__disc"></div>
        </div>
        <div className="cart-item__manage-btn">
            <button>-</button>
            <span></span>
            <button>+</button>
        </div>
        <div className="cart-item__total-price">

        </div>
        <div className="cart-item__delete-btn">
            <button></button>
        </div>
    </div>
  )
}

export default CartItem