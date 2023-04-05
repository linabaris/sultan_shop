import Button from "./Button";
import Input from "./Input";
import { Search, Delete } from "assets/svg";
import { filterObj } from "./FilterByCat";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setFilterParam,  setPriceMin, setPriceMax,setCheckedParams, removeCheckedParams, setSearchParam, resetFilter } from "../redux/slices/filterSlice";
import { countParams } from "utils";

export function FilterByParam() {

  const products = useSelector((state : any) => state.products.items);
  const iterProd = [...products];
  const countedManufact = countParams(iterProd, 'manufacture');
  const countedBrands = countParams(iterProd, 'brand_name');

  //initialState of input field in parametrs panel
  const [inputMinVal, setInputMinVal] = useState('');
  const [inputMaxVal, setInputMaxVal] = useState('');
  const [inputCompany, setInputCompany] = useState('');
  const [inputBrand, setInputBrand] = useState('');

  const [companyList, setCompanyList] = useState(countedManufact);
  const [brandList, setBrandList] = useState(countedBrands);

  //show or hide full lists of brand/manufacture(company)
  const [visibleManufact, setVisibleManufact] = useState(false);
  const [visibleBrands, setVisibleBrands ] = useState(false);

  const dispatch = useDispatch();
  
  //filter by price
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
  //filter by care category : body, hands, etc 
  const catFilterClickHandler = (param:string) => {
    dispatch(setFilterParam(param));
  }

  const checkClickHandler = (e:React.ChangeEvent<HTMLInputElement>, item:string) => {
    if(e.target.checked) {
      dispatch(setCheckedParams(item))
    } else {
      dispatch(removeCheckedParams(item));
    }
  }


  const searchClickHandler = () => {
    if(inputCompany) {
      dispatch(setSearchParam(inputCompany));
    } else {
      dispatch(setSearchParam(inputBrand));
    }
  }
  const resetClickHandler = () => {
    setInputMinVal('');
    setInputMaxVal('');
    setInputBrand('');
    setInputCompany('');
    dispatch(resetFilter());

  }
  useEffect(() => {
    if(!inputCompany) {
      setCompanyList(countedManufact);
      dispatch(setSearchParam(''));
    } else {
      const arr = countedManufact.filter(item => {
        return item[0].toLowerCase().includes(inputCompany.toLowerCase());
      })
      setCompanyList(arr);
    }
  
  },[inputCompany])

  useEffect(() => {
    if(!inputBrand) {
      setBrandList(countedBrands);
      dispatch(setSearchParam(''));
    } else {
      const arr = countedBrands.filter(item => {
        return item[0].toLowerCase().includes(inputBrand.toLowerCase());
      })
      setBrandList(arr);
    }
  
  },[inputBrand])


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
          <Input 
            value={inputCompany}
            text="Поиск..." 
            icon={<Search/>} 
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInputCompany(e.target.value)}
            onClick={() => searchClickHandler()}/>
        </div>
        {visibleManufact? (
          <ul className="param-company__list">
          {
            companyList.map((item, index) => {
              return (
                <li key={index} className="param-company__item">
                  <input 
                  type='checkbox' 
                  onChange={(e) => checkClickHandler(e,item[0])}/>
                  {item[0]}({item[1]})
                </li>
              )
            })
          }
          <div className="param-company__show-btn" onClick={()=> setVisibleManufact(prev=>!prev)}>Скрыть ⮝</div>
        </ul>
        
        ) : (
          <ul className="param-company__list">
          {
            companyList.slice(0, 5).map((item, index) => {
              return (
                <li key={index} className="param-company__item">
                  <input 
                    type='checkbox' 
                    onChange={(e) => checkClickHandler(e, item[0])}/>
                    {item[0]}({item[1]})
                </li>
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
          <Input 
            value={inputBrand}
            text="Поиск..." 
            icon={<Search/>} 
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInputBrand(e.target.value)}
            onClick={() => searchClickHandler()}/>
        </div>
        {visibleBrands? (
          <ul className="param-brand__list">
          {
            brandList.map((item, index) => {
              return (
                <li key={index} className="param-company__item">
                  <input 
                    type='checkbox' 
                    onChange={(e) => checkClickHandler(e, item[0])}/>
                    {item[0]} ({item[1]})
                </li>
              )
            })
          }
          <div className="param-brand__show-btn" onClick={()=> setVisibleBrands(prev=>!prev)}>Скрыть ⮝</div>
        </ul>
        ):(
          <ul className="param-brand__list">
          {
            brandList.slice(0,5).map((item, index) => {
              return (
                <li key={index} className="param-company__item">
                  <input 
                    type='checkbox' 
                    onChange={(e) => checkClickHandler(e, item[0])}/>
                    {item[0]} ({item[1]})
                  </li>
              )
            })
          }
          <div className="param-brand__show-btn" onClick={()=> setVisibleBrands(prev=>!prev)}>Показать всё ⮟</div>
        </ul>
        )}
      </div>
      <div className="param__actions-btn">
        <Button text={'Показать'} onClick={() => clickFilterHandle()}/>
        <button className="param__reset-btn" onClick={() => resetClickHandler()}><Delete/></button>
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
