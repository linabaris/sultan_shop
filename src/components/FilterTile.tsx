
function FilterTile(props : {text : string} ) {
  const clickHandler = () => {
    console.log('click')
}
  return (
    <div className="filter-tile" onClick={() => clickHandler()}>
        <div className="filter-tile__name">
            {props.text}
        </div>
    </div>
  )
}

export default FilterTile