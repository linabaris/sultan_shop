import { Box } from 'assets/svg';
import React from 'react';
import Button from './Button';


function Card() {
  return (
    <div className="card wrapper">
        <div className="card__left">
           <img src={require('../assets/img/testCard.jpg')} alt="" />
        </div>
        <div className="card__right">
            <div className="card__header">
                <div className="card__name">BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот</div>
                <div className="card__info">
                    <div className="card__weight">
                    <span><Box/></span>
                    90 г
                    </div>
                    <div className="card__price">500 Р</div>
                </div>
                <div className="card__actions">
                    <Button text={'В корзину'}/>
                </div>
            </div>
            <div className="card__body">
                <div className="card__prop">
                    <div className="card__country">
                        <span>Производитель:</span>
                        <span>BioMio</span>
                    </div>
                    <div className="card__brand">
                        <span>Бренд:</span>
                        <span>BioMio</span>
                    </div>
                </div>
                <div className="card__disclaim">
                    <div className='card-disclaim__title'>Описание</div>
                    <div className='card-disclaim__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</div>
                </div>
                <div className="card__charact card-charact">
                    <div className="card-charact__title">Характеристики</div>
                    <ul className='card-charact__list'>
                        <li className='card-charact__item'>Назначение: <span>BioMio</span></li>
                        <li className='card-charact__item'>Тип: <span>BioMio</span></li>
                        <li className='card-charact__item'>Производитель: <span>BioMio</span></li>
                        <li className='card-charact__item'>Бренд: <span>BioMio</span></li>
                        <li className='card-charact__item'>Вес: <span>90 г</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card