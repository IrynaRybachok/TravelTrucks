import { useSelector, useDispatch } from "react-redux";
import { selectCurrentCamper } from "../../redux/campers/selectors";
import s from "./CamperDetails.module.css";
import icons from "../../../public/icons/symbol-defs.svg";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCamperById } from "../../redux/campers/operations";

const CamperDetails = () => {
  const camper = useSelector(selectCurrentCamper);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!camper || camper.id !== id) {
      dispatch(getCamperById(id));
    }
  }, [id, camper, dispatch]);

  if (!camper) {
    return <p>Camper not found</p>;
  }

  const { name, rating, reviews, location, price, gallery, description } =
    camper;

  return (
    <div className={s.detailsBox}>
      <h2 className={s.name}>{name}</h2>
      <div className={s.wrapStr2}>
        <div className={s.wrapRating}>
          <svg className={s.iconsStar} width={16} height={16}>
            <use href={`${icons}#icon-star-white`} />
          </svg>
          <p className={s.rating}>
            {rating}({reviews?.length || 0} Reviews)
          </p>
        </div>
        <div className={s.wrapLocation}>
          <svg className={s.iconsMap} width={16} height={16}>
            <use href={`${icons}#icon-map`} />
          </svg>
          <p className={s.location}>{location}</p>
        </div>
      </div>
      <p className={s.price}>&#x20AC;{Number(price).toFixed(2)}</p>

      <div className={s.galleryBox}>
        <ul className={s.imageList}>
          {gallery.length > 0 ? (
            gallery.map((image, index) => (
              <li className={s.image} key={index}>
                <img
                  className={s.image}
                  width="292px"
                  height="312px"
                  src={image.thumb}
                  alt={`${name} - ${index + 1}`}
                />
              </li>
            ))
          ) : (
            <p className={s.noImage}>No images available</p>
          )}
        </ul>
      </div>
      <p className={s.desc}>{description}</p>
    </div>
  );
};

export default CamperDetails;
