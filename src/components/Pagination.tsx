import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage, changePage } from "redux/slices/paginationSlice";
import { ArrowNext, ArrowPrev } from "assets/svg";


function Pagination() {

    const dispatch = useDispatch();
    const { currentPage, amountPage } = useSelector((state:any) => state.pagination);

    const prevPageHandler = () => {
        dispatch(prevPage());
    }

    const nextPageHandler = () => {
        dispatch(nextPage());
    }
    const changePageHandler = (i:number) => {
        dispatch(changePage(i));
    }
    const pagesArr = [...new Array(amountPage)];
  return (
    <div className="pagination">
        <div 
            className={`pagination__item_prev ${currentPage === 1 ? 'inactive' : ''}`}
            onClick={prevPageHandler}>
            <ArrowPrev/>
        </div>
        {pagesArr.map((_,index) => {
            const i = index +1;
            return (
                <div 
                    key={index}
                    className={`pagination__item ${currentPage === i ? 'active' : ''}`}
                    onClick={() => changePageHandler(i)}>
                        {i}
                </div>
            )
        })}
        <div className={`pagination__item_next ${currentPage === amountPage ? 'inactive' : ''}`}
            onClick={nextPageHandler}>
            <ArrowNext/>        
        </div>
    </div>
  )
}

export default Pagination;