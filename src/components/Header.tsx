import { Link, useNavigate } from 'react-router-dom';
import { Map, Mail, Logo, Tile, Download, Cart, Burger, TileBl, SearchBl } from '../assets/svg';
import { useSelector } from 'react-redux';
import Button from './Button';

function Header() {
  const navigate = useNavigate();
  const backClickHandle = () => {
    navigate('/sultan_shop');
  }

  const { totalCount, totalPrice } = useSelector((state:any) => state.cart); 
  return (
    <header className='header'>
      <div className="header__info wrapper">
        <div className="header__address">
          <Map/>
          <div className="header__text addres">
            <div className="header__text_bold">г. Кокчетав, ул. Ж. Ташенова 129Б</div>
            <div className="header__text_thin">(Рынок Восточный)</div>
          </div>
        </div>
        <div className="header__mail">
          <Mail/>
          <div className="header__text mail">
            <div className="header__text_bold">opt.sultan@mail.ru </div>
            <div className="header__text_thin">На связи в любое время</div>
          </div>
        </div>
        <ul className="header__actions">
          <li>О компании</li>
          <li>Доставка и оплата</li>
          <li>Возврат</li>
          <li>Контакты</li>
        </ul>
      </div>
      <nav>
        <div className="wrapper">
          <div className="header__nav">
            <div className="header__logo">
              <Logo/>
            </div>
            <Button text={'Каталог'} icon={<Tile/>} onClick={backClickHandle}/>
            <div className="header__seacrh header-search">
              <input type="text" placeholder='Поиск...' className='header-search__form'/>
            </div>
            <div className="header__contacts contacts">
              <div className="contacts__info contacts-info">
                <div className="contacts-info__phone">+7 (777) 490-00-91</div>
                <div className="contacts-info__mode">время работы: 9:00-20:00</div>
                <div className="contacts-info__call">Заказать звонок</div>
              </div>
              <div className="contacts__photo">
                <img src={require('../assets/img/callcenter.jpg')} alt="avatar" />
              </div>
            </div>
            <Button text={'Прайс-лист'} icon={<Download/>}/>
            <div className="header__cart">
              <Link to={`/cart/`}>
                <Cart className="header__cart-icon"/>
                <div className="header__cart-count">
                  <span>{totalCount}</span>
                </div>
              </Link>
              {totalPrice}
            </div>
            <div className="header__admin-act">
              <Link to={`/admin/`}>
                <button className='header-admin-act__btn'>Управление</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="header-mobile" >
        <div className="header-mobile__lineUp">
          <div className="header-mobile__burger">
            <button className='header-mobile__burger-btn'>
              <Burger/>
            </button>
          </div>
          <Logo className='header-mobile__logo'/>
          <div className="header-mobile__cart">
            <Link to={'/cart'}>
              <Cart/>
              <div className="header__cart-count">
                <span>{totalCount}</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="header-mobile__lineDown">
          <div className="header-mobile__catalog" onClick={backClickHandle}>
            <span>Каталог</span>
            <TileBl/>
          </div>
          <div className="header-mobile__search">
            <span>Поиск</span>
            <SearchBl/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;