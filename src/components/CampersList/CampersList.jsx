import { useSelector, useDispatch } from "react-redux";
import {
  selectCampers,
  selectTotalCampers,
  selectIsLoading,
  selectPage,
} from "../../redux/campers/selectors";
import CampersItem from "../CampersItem/CampersItem";
import { useEffect } from "react";
import { getCampers } from "../../redux/campers/operations";
import s from "./CampersList.module.css";
import { setPage } from "../../redux/campers/slice";
import Button from "../Botton/Botton";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  const totalCampers = useSelector(selectTotalCampers);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const limit = 5;
  const totalPages = Math.ceil(totalCampers / limit);
  const buttonIsActive = page < totalPages;

  const loadMore = () => {
    if (buttonIsActive) {
      dispatch(setPage(page + 1));
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampers({ page, limit, filters: {} })); // Загружаем данные при монтировании
  }, [dispatch, page]);

  return (
    <>
      <ul className={s.list}>
        {campers.map((camper) => (
          <CampersItem key={camper.id} data={camper} />
        ))}
      </ul>
      {buttonIsActive && (
        <Button
          text={isLoading ? "Loading..." : "Load more"}
          onClick={loadMore}
        />
      )}
    </>
  );
};

export default CampersList;
