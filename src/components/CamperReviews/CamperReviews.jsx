import { useDispatch, useSelector } from "react-redux";
import s from "./CamperReviews.module.css";
import { selectCurrentCamper } from "../../redux/campers/selectors";
import icons from "../../assets/icons/symbol-defs.svg";
import { useEffect } from "react";
import { getCamperById } from "../../redux/campers/operations";
import { useParams } from "react-router-dom";

const CamperReviews = () => {
  const camper = useSelector(selectCurrentCamper);

  const reviews = camper?.reviews || [];

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (!camper || camper.id !== id) {
      dispatch(getCamperById(id));
    }
  }, [id, camper, dispatch]);

  const renderStars = (rating, id) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        i <= rating ? (
          <svg
            className={s.starYelow}
            width={16}
            height={16}
            key={`${id} - ${i}`}
          >
            <use href={`${icons}#icon-star-white`} />
          </svg>
        ) : (
          <svg
            className={s.starGrey}
            width={16}
            height={16}
            key={`${id} - ${i}`}
          >
            <use href={`${icons}#icon-star-white`} />
          </svg>
        )
      );
    }

    return stars;
  };

  return (
    <div className={s.reviewsBox}>
      {reviews.length > 0 ? (
        <ul className={s.list}>
          {reviews.map((review, index) => {
            return (
              <li className={s.item} key={index}>
                <div className={s.headerUser}>
                  <div className={s.wrapAvatar}>
                    <span className={s.avatar}>
                      {review.reviewer_name.slice(0, 1).toUpperCase()}
                    </span>
                  </div>
                  <div className={s.mainInfo}>
                    <h4 className={s.name}>{review.reviewer_name}</h4>
                    <div className={s.stars}>
                      {renderStars(review.reviewer_rating, index)}
                    </div>
                  </div>
                </div>
                <p className={s.comment}>{review.comment}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={s.noReviews}>No reviews available</p>
      )}
      ;
    </div>
  );
};

export default CamperReviews;
