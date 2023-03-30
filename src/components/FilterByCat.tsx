import FilterTile from "./FilterTile";

function FilterByCat() {

    const filterObj = [
        {
            name: 'Показать всё',
            filterProp: ''
        },
        {
            name: "Уход за телом",
            filterProp: 'body', 
        }, {
            name: "Уход за лицом",
            filterProp: 'face'
        }, {
            name: "Уход за ногами", 
            filterProp: 'feet',
        }, {
            name: "Уход за руками",
            filterProp: 'hand',
        }, {
            name:"Уход за волосами",
            filterProp: 'hair'
        } , {
            name: "Средства для загара",
            filterProp: 'tan'
        } , {
            name: "Средства для бртиья", 
            filterProp: 'shave'
        }, {
            name: "Бумажная продукция",
            filterProp: 'paper'
        } , {
            name: "Гигиеническая продукция",
            filterProp: 'hygiene'
        }
    ]
      
  return (
    <div className="filter-line wrapper">
        {
            filterObj.map((item, index) => {
                return (
                    <FilterTile text={item.name} key={index} param={item.filterProp}/>
                )
            })
        }
    </div>
  )
}

export default FilterByCat