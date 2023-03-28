import FilterTile from "./FilterTile"

function FilterByCat() {
    const filterObj = {
        body: "Уход за телом", 
        face: "Уход за лицом", 
        feet: "Уход за ногами",
        hand: "Уход за руками",
        hair: "Уход за волосами",
        tan: "Средства для загара",
        shave: "Средства для бртиья",
        paper: "Бумажная продукция",
        hygiene: "Гигиеническая продукция"
    }

  return (
    <div className="filter-line wrapper">
        {
            Object.values(filterObj).map((item, index) => {
                return (
                    <FilterTile text={item} key={index}/>
                )
            })
        }
    </div>
  )
}

export default FilterByCat