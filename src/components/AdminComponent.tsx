import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLastIndex } from 'redux/slices/productsSlice';

function AdminComponent() {

    const [type, setType] = useState('');
    const [measure, setMeasure] = useState('');

    const lastId = useSelector((state:any) => state.products.lastIndex);
    console.log(lastId);
    
    const dispatch = useDispatch();
    let localData:any = [];

    const typeOptions = [
        {
            name: "Уход за телом",
            type: 'body', 
        }, {
            name: "Уход за лицом",
            type: 'face'
        }, {
            name: "Уход за ногами", 
            type: 'feet',
        }, {
            name: "Уход за руками",
            type: 'hand',
        }, {
            name:"Уход за волосами",
            type: 'hair'
        } , {
            name: "Средства для загара",
            type: 'tan'
        } , {
            name: "Средства для бртиья", 
            type: 'shave'
        }, {
            name: "Бумажная продукция",
            type: 'paper'
        } , {
            name: "Гигиеническая продукция",
            type: 'hygiene'
        }
    ]

    const setData = (data:{}):void => {
        localStorage.setItem('products', JSON.stringify(localData));
    }
    const getData = ():void => {
        if(localStorage.getItem('products')) {
            localData = JSON.parse(localStorage.getItem('products') || '{}');
        }
    }
    const formHanddler = (e:any) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        
        const addedProd = {
            id: `${+lastId+1}`,
            name: formData.get('name'),
            img_url : formData.get('img'),
            price : formData.get('price'),
            disclaimer: formData.get('disclaimer'),
            brand_name: formData.get('brand_name'),
            manufacture: formData.get('manufacture'),
            size: formData.get('value'),
            type: type,
            measure: measure,
            code: formData.get('code')
        }
        getData();
        localData.push(addedProd);
        setData(localData);
        dispatch(setLastIndex(`${+lastId+1}`));
    }

  return (
    <>
        <form action="#" className="admin__form form wrapper" onSubmit={(e) =>formHanddler(e)}>
            <label htmlFor="">
                <span>Имя продукта</span>
                <input required type="text" className="form__name" placeholder="Введите название продукта" name="name"/>
            </label>
            <label htmlFor="">
                <span>Изображение продукта</span>
                <input required type="text" className="form__img_url" placeholder="Вставьте адрес изображения" name="img"/>
            </label>
            <label htmlFor="">
                <span>Тип продукта</span>
                <select name="" id="" onChange={(e) => setType(e.target.value)}>
                    {
                        typeOptions.map((item, index) => {
                            return (
                                <option 
                                    key={index} 
                                    value={item.type}>
                                        {item.name}
                                </option>
                            )
                        })
                    }
                </select>
            </label>
            <label htmlFor="">
                <span>Цена продукта</span>
                <input required type="number" className="form__price" placeholder="Введите стоимость продукта" name="price"/>
            </label>
            <label htmlFor="">
                <span>Описание продукта</span>
                <input type="text" className="form__disclaimer" name="disclaimer" placeholder="Введите описание продукта"/>
            </label>
            <label htmlFor="">
                <span>Имя бренда</span>
                <input type="text" className="form__brand-name" name="brand_name" placeholder="Введите название бренда"/>
            </label>
            <label htmlFor="">
                <span>Имя производителя</span>
                <input type="text" className="form__manudacture" name="manufacture" placeholder="Введите название производителя продукта"/>
            </label>
            <label htmlFor="">
                <span>Размерность</span>
                <select name="" id="" className="form__measure" onChange={(e) => setMeasure(e.target.value)}>
                    <option value="">мл</option>
                    <option value="">г</option>
                    <option value="">шт</option>
                </select>
            </label>
            <label htmlFor="">
                <span>Объем</span>
                <input type="number" className="form__size" name="value" placeholder="Введите вес, количество или объем продукта"/>
            </label>
            <label htmlFor="">
                <span>Артикул</span>
                <input type="text"  className="form__code" name="code" placeholder="Введите артикул"/>
            </label>
            <div className="form__add-btn">
                <button type="submit">Добавить товар</button>
            </div>
        </form>
    </>
  )
}

export default AdminComponent;