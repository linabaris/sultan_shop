import Button from "./Button";
import Input from "./Input";
import { useSelector, useDispatch } from "react-redux";
import { setPriceMin, setPriceMax } from '../redux/slices/filterSlice';
import { TProduct } from "types";
import { useState } from "react";

export function FilterByParam() {

  const [inputMinVal, setInputMinVal] = useState('');
  const [inputMaxVal, setInputMaxVal] = useState('');

  const dispatch = useDispatch();

  const products = useSelector((state : any) => state.products.items);
  
  const clickFilterHandle = () => {
    if(inputMinVal && inputMaxVal ) {
      if(+inputMaxVal>=+inputMinVal) {
        dispatch(setPriceMin(+inputMinVal));
        dispatch(setPriceMax(+inputMaxVal));
      } else {
        setInputMaxVal(inputMinVal);
        dispatch(setPriceMin(+inputMinVal));
        dispatch(setPriceMax(+inputMaxVal));
      }
    } else {
      if(inputMinVal) {
        dispatch(setPriceMin(+inputMinVal));
        return;
      }
      if(inputMaxVal) {
        dispatch(setPriceMax(+inputMaxVal));
        return;
      }
      return;
    }
  }

  return (
    <div className="param">
      <div className="param__title">ПОДБОР ПО ПАРАМЕТРАМ</div>
      <div className="param__price param-price">
        <div className="param-price__title">Цена <span>₽</span></div>
        <div className="param-price__range">
          <input type="number" placeholder="0" value={inputMinVal} onChange={(e)=> setInputMinVal(e.target.value)}/>
          <input type="number"  placeholder="10000" value={inputMaxVal} onChange={(e)=> setInputMaxVal(e.target.value)}/>
        </div>
      </div>
      <div className="param__company param-company">
        <div className="param-company__title">Производитель</div>
        <div className="param-company__search">
          <Input text="Поиск..."/>
        </div>
        <ul className="param-company__list">
          {
            products.map((item:TProduct, index:number) => {
              return (
                <li key={index} className="param-company__item"><input type='checkbox' />{item.manufacture}</li>
              )
            })
          }
        </ul>
      </div>
      <div className="param__brand param-brand">
        <div className="param-brand__title">Бренд</div>
        <div className="param-brand__search">
          <Input text="Поиск..."/>
        </div>
        <ul className="param-brand__list">
          {
            products.map((item:TProduct, index:number) => {
              return (
                <li key={index} className="param-company__item"><input type='checkbox' />{item.brand_name}</li>
              )
            })
          }
        </ul>
      </div>
      <Button text={'Показать'} onClick={() => clickFilterHandle()}/>
    </div>
  )
}
