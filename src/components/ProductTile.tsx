import React from 'react';
import Button from './Button';
import { TProductProps } from 'types';
import { CartWhite } from 'assets/svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addGood } from 'redux/slices/cartSlice';
import { cutPtoductName } from 'utils';


export default function Product({product}:TProductProps) {

  const dispatch = useDispatch();

  const cartClickHandler = () => {
    const item = {
      id: product.id,
      image_url: product.image_url,
      name: product.name,
      disclaimer: product.disclaimer,
      price: product.price,
     }
     dispatch(addGood(item));
  }



  return (
    <div className="product">
      <div className="product__container">
        <div className="product__img">
          <img src={product.image_url} alt="product" />
          <span className='product__size'>{`${product.size} ${product.measure}`}</span>
        </div>
        <div className="product__info">
          <Link to={`/card/${product.code}`}>
            <div className="product__name">{cutPtoductName(product.name)}</div>
          </Link>
          <ul className="product__prop">
            <li className='product__prop_li'>Производитель: <span>{product.country}</span></li>
            <li className='product__prop_li'>Бренд: <span>{product.brand_name}</span></li>
          </ul>
          <div className="product__add">
            <div className="product__price">
              {`${product.price} ₽`} 
            </div>
            <Button text={'В КОРЗИНУ'} icon={<CartWhite/>} onClick={() => cartClickHandler()}/>
          </div>
        </div>
      </div>
    </div>
  )
}
