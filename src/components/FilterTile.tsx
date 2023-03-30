import { useDispatch } from "react-redux";
import { setFilterParam } from "redux/slices/filterSlice";

interface FilterProp {
    text: string;
    param: string;
}

function FilterTile(props: FilterProp) {

  const dispatch = useDispatch();
  const clickHandler = (param : string) => {
    dispatch(setFilterParam(param));
}

  return (
    <div className="filter-tile" onClick={() => clickHandler(props.param)}>
        <div className="filter-tile__name">
            {props.text}
        </div>
    </div>
  )
}

export default FilterTile