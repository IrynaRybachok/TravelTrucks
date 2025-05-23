import { useSelector, useDispatch } from "react-redux";
import {
  selectCampers,
  selectTotalCampers,
  selectIsLoading,
  selectPage,
  selectFilters,
} from "../../redux/campers/selectors";
import CampersItem from "../CampersItem/CampersItem";
import { useEffect } from "react";
import { getCampers } from "../../redux/campers/operations";
import s from "./CampersList.module.css";
import { setPage } from "../../redux/campers/slice";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  const totalCampers = useSelector(selectTotalCampers);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const limit = 5;
  const totalPages = Math.ceil(totalCampers / limit);
  const buttonIsActive = page < totalPages;
  const filters = useSelector(selectFilters);

  const loadMore = () => {
    if (buttonIsActive) {
      dispatch(setPage(page + 1));
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(filters).length === 0) {
      dispatch(getCampers({ page, limit, filters: {} })); // Пустые фильтры при первом заходе
    } else {
      dispatch(getCampers({ page, limit, filters })); // Применение фильтров
    }
  }, [page, filters, dispatch]);

  return (
    <div>
      <ul className={s.list}>
        {campers.map((camper) => (
          <CampersItem key={camper.id} data={camper} />
        ))}
      </ul>
      {buttonIsActive && (
        <button className={s.btnLoadMore} onClick={loadMore}>
          {isLoading ? "Loading..." : "Load more"}
        </button>
      )}
      {campers.length === 0 && (
        <div className={s.boxNotResults}>
          <img src="/src/assets/images/no_result1.jpg" />
        </div>
      )}
    </div>
  );
};

export default CampersList;
