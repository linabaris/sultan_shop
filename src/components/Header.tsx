import React from 'react';
import {ReactComponent as Map} from '../assets/svg/map.svg';
import { ReactComponent as Mail} from '../assets/svg/mail.svg';

function Header() {
  return (
    <header className='header'>
      <div className="header__info">
        <div className="header__address">
          <Map/>
          <div className="header__text addres">
          <div className="header__text_bold">г. Кокчетав, ул. Ж. Ташенова 129Б</div>
          <div className="header__text_thin">(Рынок Восточный)</div>
          </div>
        </div>
        <div className="header__text mail">
          <Mail/>
          <div className="header__text_bold">opt.sultan@mail.ru </div>
          <div className="header__text_thin">На связи в любое время</div>
        </div>
        <div className="header__actions">
          <ul>
            <li>О компании</li>
            <li>Доставка и оплата</li>
            <li>Возврат</li>
            <li>Контакты</li>
          </ul>
        </div>
      </div>    
    </header>
  )
}

export default Header;