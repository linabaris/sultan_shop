import { Box } from 'assets/svg';
import Button from './Button';
import { TProductProps } from 'types';


function Card({product} : TProductProps) {

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
                    <div className="card__price">{product.price} Р</div>
                </div>
                <div className="card__actions">
                    <Button text={'В корзину'}/>
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
                        <li className='card-charact__item'>Тип: <span>BioMio</span></li>
                        <li className='card-charact__item'>Производитель: <span>{product.country}</span></li>
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