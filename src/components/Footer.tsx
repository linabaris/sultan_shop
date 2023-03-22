import React from 'react';
import { Download, LogoWhite, Mastercard, Telegram, Visa, WhatsApp } from 'assets/svg'
import Input from './Input';
import Button from './Button';


function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__wrapper wrapper">
        <div className="footer__section">
          <div className="footer__about footer-about">
            <LogoWhite/>
            <div className="footer-about__text">
              <span>Компания «Султан» — снабжаем розничные магазины товарами 
"под ключ" в Кокчетаве и Акмолинской области</span>
            </div>
            <div className="footer-about__subscription">
              <span>Подпишись на скидки и акции</span>
              <Input text={'Введите ваш E-mail'}/>
            </div>
          </div>
          <ul className="footer__menu footer-menu">
            <div className="footer-menu__title">Меню сайта:</div>
            <li className='footer-menu__item'>О компании</li>
            <li className='footer-menu__item'>Доставка и оплата</li>
            <li className='footer-menu__item'>Возврат</li>
            <li className='footer-menu__item'>Контакты</li>
          </ul>
          <ul className="footer__categories footer-categories">
            <div className="footer-categories__title">Категории:</div>
            <li className='footer-categories__item'>Бытовая химия</li>
            <li className='footer-categories__item'>Косметика и гигиена</li>
            <li className='footer-categories__item'>Товары для дома</li>
            <li className='footer-categories__item'>Товары для детей и мам</li>
            <li className='footer-categories__item'>Посуда</li>
          </ul>
          <div className="footer__price-list price-list">
            <div className="price-list__title">Скачать прайс-лист:</div>
            <Button text={'Прайс-лист'} icon={<Download/>}/>
            <span className='price-list__connect'>Связь в мессенджерах:</span>
            <div className="price-list__messangers">
              <WhatsApp/>
              <Telegram/>
            </div>
          </div>
          <div className="footer__contacts footer-contacts">
            <div className="footer-contacts__title">Контакты:</div>
            <div className="footer-contacts__phone">+7 (777) 490-00-91</div>
            <div className="footer-contacts__mode">время работы: 9:00-20:00</div>
            <div className="footer-contacts__call">Заказать звонок</div>
            <div className="footer-contacts__mail">opt.sultan@mail.ru </div>
            <div className="footer-contacts__text">На связи в любое время</div>
            <div className="footer-contacts__payment">
              <Visa/>
              <Mastercard/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer