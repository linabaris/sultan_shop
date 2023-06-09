import { Box } from 'assets/svg';
import Button from './Button';
import { TProductProps } from 'types';
import { useDispatch } from 'react-redux';
import { addGood, removeGood, reduceGoods } from "redux/slices/cartSlice";


function Card({product} : TProductProps) {
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

    const clickAddHandler = () => {
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
    <div className="card wrapper">
        <div className="card__left">
           <div className="card__pic">
                <img src={product.image_url} alt="" />
           </div>
        </div>
        <div className="card__right">
            <div className="card__header">
                <div className="card__name">{product.name}</div>
                <div className="card__info">
                    <div className="card__weight">
                    <span><Box/></span>
                    {product.size} {product.measure}
                    </div>
                </div>
                <div className="card__actions">
                    <div className="card__price">{product.price} Р</div>
                    <div className="card__manage-btn manage-btn">
                        <button className="manage-btn__dec" onClick={() => decClickHandler()}>-</button>
                        <span>{product.count?product.count:1}</span>
                        <button className="manage-btn__inc" onClick={() => incClickHandler()}>+</button>
                    </div>
                    <Button text={'В корзину'} onClick={() => clickAddHandler( )}/>
                </div>
            </div>
            <div className="card__body">
                <div className="card__prop">
                    <div className="card__country">
                        <span>Производитель:</span>
                        <span>{product.country}</span>
                    </div>
                    <div className="card__brand">
                        <span>Бренд:</span>
                        <span>{product.brand_name}</span>
                    </div>
                </div>
                <div className="card__disclaim">
                    <div className='card-disclaim__title'>Описание</div>
                    <div className='card-disclaim__text'>{product.disclaimer}</div>
                </div>
                <div className="card__charact card-charact">
                    <div className="card-charact__title">Характеристики</div>
                    <ul className='card-charact__list'>
                        <li className='card-charact__item'>Назначение: <span>{product.category}</span></li>
                        <li className='card-charact__item'>Производитель: <span>{product.manufacture}</span></li>
                        <li className='card-charact__item'>Страна бренда: <span>{product.country}</span></li>
                        <li className='card-charact__item'>Бренд: <span>{product.brand_name}</span></li>
                        <li className='card-charact__item'>Вес: <span>{product.size}{product.measure}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card