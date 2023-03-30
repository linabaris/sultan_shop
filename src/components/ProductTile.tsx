import React from 'react';
import Button from './Button';
import { TProductProps } from 'types';
import { CartWhite } from 'assets/svg';
import { Link } from 'react-router-dom';


export default function Product({product}:TProductProps) {
  return (
    <div className="product">
      <div className="product__container">
        <div className="product__img">
          <img src={product.image_url} alt="product" />
          <span className='product__size'>{`${product.size} ${product.measure}`}</span>
        </div>
        <div className="product__info">
          <Link to={`/card/${product.code}`}>
            <div className="product__name">{product.name}</div>
          </Link>
          <ul className="product__prop">
            <li className='product__prop_li'>Производитель: <span>{product.country}</span></li>
            <li className='product__prop_li'>Бренд: <span>{product.brand_name}</span></li>
          </ul>
          <div className="product__add">
            <div className="product__price">
              {`${product.price} ₽`} 
            </div>
            <Button text={'В КОРЗИНУ'} icon={<CartWhite/>}/>
          </div>
        </div>
      </div>
    </div>
  )
}
