import Button from "./Button";
import Input from "./Input";
import { Search, Delete } from "assets/svg";
import { filterObj } from "./FilterByCat";
import { useSelector, useDispatch } from "react-redux";
import { useState  } from "react";
import { setFilterParam, setSearchParam, setPriceMin, setPriceMax } from "../redux/slices/filterSlice";
import { countParams } from "utils";

export function FilterByParam() {

  const products = useSelector((state : any) => state.products.items);
  const iterProducts = [...products];

  const countedManufact = countParams(iterProducts, 'manufacture');
  const countedBrands = countParams(iterProducts, 'brand_name');

  const [inputMinVal, setInputMinVal] = useState('');
  const [inputMaxVal, setInputMaxVal] = useState('');
  const [inputCompany, setInputCompany] = useState('');
  const [inputBrand, setInputBrand] = useState(''); 

  //показывать скрывать весь список брендов, производителей
  const [visibleManufact, setVisibleManufact] = useState(false);
  const [visibleBrands, setVisibleBrands ] = useState(false);

  const dispatch = useDispatch();
  
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
  const catFilterClickHandler = (param:string) => {
    dispatch(setFilterParam(param));
  }


  return (
    <div className="param">
      <div className="param__title">ПОДБОР ПО ПАРАМЕТРАМ</div>
      <div className="param__price param-price">
        <div className="param-price__title">Цена <span>₽</span></div>
        <div className="param-price__range">
          <input type="number" placeholder="0" value={inputMinVal} onChange={(e)=> setInputMinVal(e.target.value)}/>
          -
          <input type="number"  placeholder="10000" value={inputMaxVal} onChange={(e)=> setInputMaxVal(e.target.value)}/>
        </div>
      </div>
      <div className="param__company param-company">
        <div className="param-company__title">Производитель</div>
        <div className="param-company__search">
          <Input text="Поиск..." icon={<Search/>} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInputCompany(e.target.value)}/>
        </div>
        {visibleManufact? (
          <ul className="param-company__list">
          {
            countedManufact.map((item, index) => {
              return (
                <li key={index} className="param-company__item"><input type='checkbox' />{item[0]}({item[1]})</li>
              )
            })
          }
          <div className="param-company__show-btn" onClick={()=> setVisibleManufact(prev=>!prev)}>Скрыть ⮝</div>
        </ul>
        
        ) : (
          <ul className="param-company__list">
          {
            countedManufact.slice(0, 5).map((item, index) => {
              return (
                <li key={index} className="param-company__item"><input type='checkbox' />{item[0]}({item[1]})</li>
              )
            })
          }
          <div className="param-company__show-btn" onClick={()=> setVisibleManufact(prev=>!prev)}>Показать всё ⮟</div>
        </ul>
        )}
      </div>
      <div className="param__brand param-brand">
        <div className="param-brand__title">Бренд</div> 
        <div className="param-brand__search">
          <Input text="Поиск..." icon={<Search/>} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInputBrand(e.target.value)}/>
        </div>
        {visibleBrands? (
          <ul className="param-brand__list">
          {
            countedBrands.map((item, index) => {
              return (
                <li key={index} className="param-company__item"><input type='checkbox'/>{item[0]} ({item[1]})</li>
              )
            })
          }
          <div className="param-brand__show-btn" onClick={()=> setVisibleBrands(prev=>!prev)}>Скрыть ⮝</div>
        </ul>
        ):(
          <ul className="param-brand__list">
          {
            countedBrands.slice(0,5).map((item, index) => {
              return (
                <li key={index} className="param-company__item"><input type='checkbox' />{item[0]} ({item[1]})</li>
              )
            })
          }
          <div className="param-brand__show-btn" onClick={()=> setVisibleBrands(prev=>!prev)}>Показать всё ⮟</div>
        </ul>
        )}
      </div>
      <div className="param__actions-btn">
        <Button text={'Показать'} onClick={() => clickFilterHandle()}/>
        <button className="param__reset-btn"><Delete/></button>
      </div>
      <div className="param__filter-cat">
        {
          filterObj.map((item, index) => {
            return (
              <div 
                className="param__filter-tile" 
                key={index}
                onClick={()=>catFilterClickHandler(item.filterProp)}>
                  {item.name}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
