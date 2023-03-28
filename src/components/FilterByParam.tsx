import Button from "./Button";
import Input from "./Input";

export function FilterByParam() {
  const companys = ['Benabi', 'Benabi', 'Benabi', 'Benabi', 'Benabi'];
  return (
    <div className="param">
      <div className="param__title">ПОДБОР ПО ПАРАМЕТРАМ</div>
      <div className="param__price param-price">
        <div className="param-price__title">Цена <span>₽</span></div>
        <div className="param-price__range">
          <input type="number" placeholder="0"/>
          <input type="number"  placeholder="10000"/>
        </div>
      </div>
      <div className="param__company param-company">
        <div className="param-company__title">Производитель</div>
        <div className="param-company__search">
          <Input text="Поиск..."/>
        </div>
        <ul className="param-company__list">
          {
            companys.map((item, index) => {
              return (
                <li key={index} className="param-company__item"><input type='checkbox' />{item}</li>
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
            companys.map((item, index) => {
              return (
                <li key={index} className="param-company__item"><input type='checkbox' />{item}</li>
              )
            })
          }
        </ul>
      </div>
      <Button text={'Показать'}/>
    </div>
  )
}
