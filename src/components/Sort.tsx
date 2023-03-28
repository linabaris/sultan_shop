import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortParam, setAscSort } from '../redux/slices/sortSlice';

function Sort() {
    const sortParams = [
        {
            name:'названию',
            sortProperty: 'name',
        }, 
        {
            name: 'цене',
            sortProperty: 'price'
        }
    ]; 
    const [isVisible, setVisible] = useState(false);
    // const [sortParam, setSortParam] = useState('названию');
    // const [asc, setAsc ] = useState(true);
    
    const dispatch = useDispatch();
    const isAsc = useSelector((state:any) => state.sort.ascSort);
    const sortParam= useSelector((state: any) => state.sort.sortParam);

    const handlerClick = (name : string) => {
        if(name === sortParam.name) {
            dispatch(setAscSort(!isAsc));
        } else {
            dispatch(setAscSort(true));
        }

        dispatch(setSortParam(sortParams.find((item) => item.name === name)))
        setVisible(false);
    }

    const setClassName = (name: string) => {
        if(sortParam.name === name && isAsc) {
            return 'asc'
        } else if ( sortParam.name === name && !isAsc) {
            return 'disc'
        }
        
    };

  return (
    <div className="sort">
        <span>Сортировать по: </span>
        <span className={`sort__param ${setClassName(sortParam.name)}`} onClick={()=> setVisible(prev => !prev)}>{sortParam.name}</span>
        {isVisible && (
            <ul className="sort__list">
                {
                    sortParams.map((param, index) => {
                        return (
                            <li className="sort__item" key={index} onClick={() => handlerClick(param.name)}>{param.name}</li>
                        )
                    })
                }
            </ul>
        )}
    </div>
  )
}

export default Sort