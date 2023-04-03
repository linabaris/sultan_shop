
function AdminComponent() {
  return (
    <>
        <form action="" className="admin__form form wrapper">
            <label htmlFor="">
                <span>Имя продукта</span>
                <input required type="text" className="form__name" placeholder="Введите название продукта"/>
            </label>
            <label htmlFor="">
                <span>Изображение продукта</span>
                <input required type="text" className="form__img_url" placeholder="Вставьте адрес изображения"/>
            </label>
            <label htmlFor="">
                <span>Тип продукта</span>
                <select name="" id="">
                    <option value="">Гигиена</option>
                    <option value="">Тело</option>
                    <option value="">Лицо</option>
                    <option value="">Ноги</option>
                </select>
            </label>
            <label htmlFor="">
                <span>Цена продукта</span>
                <input required type="number" className="form__price" placeholder="Введите стоимость продукта"/>
            </label>
            <label htmlFor="">
                <span>Описание продукта</span>
                <input type="text" className="form__disclaimer" />
            </label>
            <label htmlFor="">
                <span>Имя бренда</span>
                <input type="text" className="form__brand-name" />
            </label>
            <label htmlFor="">
                <span>Имя производителя</span>
                <input type="text" className="form__manudacture"/>
            </label>
            <label htmlFor="">
                <span>Размерность</span>
                <select name="" id="" className="form__measure">
                    <option value="">мл</option>
                    <option value="">г</option>
                    <option value="">шт</option>
                </select>
            </label>
            <label htmlFor="">
                <span>Объем</span>
                <input type="number" className="form__size"/>
            </label>
            <div className="form__add-btn">
                <button>Добавить товар</button>
            </div>
        </form>
    </>
  )
}

export default AdminComponent