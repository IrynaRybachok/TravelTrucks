import s from "./CampersItem.module.css";
import icons from "../../../public/icons/symbol-defs.svg";
import Button from "../Botton/Botton";
import { Link } from "react-router-dom";
const CampersItem = ({ data }) => {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    gallery,
    reviews,
  } = data;
  return (
    <li className={s.item}>
      <img className={s.imageCar} src={gallery[0].thumb} />
      <div className={s.infoCar}>
        <div className={s.wrapNamePrice}>
          <h2 className={s.name}>{name}</h2>
          <div className={s.wrapPrice}>
            <p className={s.price}>&#x20AC;{Number(price).toFixed(2)}</p>
            <svg className={s.iconsHeart} width={26} height={24}>
              <use href={`${icons}#icon-Property-1Default`} />
            </svg>
          </div>
        </div>
        <div className={s.wrapStr2}>
          <div className={s.wrapRating}>
            <svg className={s.iconsStar} width={16} height={16}>
              <use href={`${icons}#icon-star-white`} />
            </svg>
            <p className={s.rating}>
              {rating}({reviews.length} Reviews)
            </p>
          </div>
          <div className={s.wrapLocation}>
            <svg className={s.iconsMap} width={16} height={16}>
              <use href={`${icons}#icon-map`} />
            </svg>
            <p className={s.location}>{location}</p>
          </div>
        </div>
        <div className={s.wrapDesc}>
          <p className={s.desc}>{description}</p>
        </div>
        <ul className={s.badgesWrap}>
          <li className={s.badge}>
            <svg className={s.iconsDiagram} width={20} height={20}>
              <use href={`${icons}#icon-diagram`} />
            </svg>
            <p className={s.badgeText}>{transmission}</p>
          </li>
          <li className={s.badge}>
            <svg className={s.iconsGroup} width={20} height={20}>
              <use href={`${icons}#icon-Group`} />
            </svg>
            <p className={s.badgeText}>{engine}</p>
          </li>
          {AC && (
            <li className={s.badge}>
              <svg className={s.iconsWind} width={20} height={20}>
                <use href={`${icons}#icon-wind`} />
              </svg>
              <p className={s.badgeText}>AC</p>
            </li>
          )}
          {bathroom && (
            <li className={s.badge}>
              <svg className={s.iconsShower} width={20} height={20}>
                <use href={`${icons}#icon-ph_shower`} />
              </svg>
              <p className={s.badgeText}>Bathroom</p>
            </li>
          )}
          {kitchen && (
            <li className={s.badge}>
              <svg className={s.iconsCup} width={20} height={20}>
                <use href={`${icons}#icon-cup-hot`} />
              </svg>
              <p className={s.badgeText}>Kitchen</p>
            </li>
          )}
          {TV && (
            <li className={s.badge}>
              <svg className={s.iconsTV} width={20} height={20}>
                <use href={`${icons}#icon-tv`} />
              </svg>
              <p className={s.badgeText}>TV</p>
            </li>
          )}
          {radio && (
            <li className={s.badge}>
              <svg className={s.iconsRadio} width={20} height={20}>
                <use href={`${icons}#icon-ui-radios`} />
              </svg>
              <p className={s.badgeText}>Radio</p>
            </li>
          )}
          {refrigerator && (
            <li className={s.badge}>
              <svg className={s.iconsFridge} width={20} height={20}>
                <use href={`${icons}#icon-solar_fridge-outline`} />
              </svg>
              <p className={s.badgeText}>Refrigerator</p>
            </li>
          )}
          {microwave && (
            <li className={s.badge}>
              <svg className={s.iconsMicrowave} width={20} height={20}>
                <use href={`${icons}#icon-lucide_microwave`} />
              </svg>
              <p className={s.badgeText}>Microwave</p>
            </li>
          )}
          {gas && (
            <li className={s.badge}>
              <svg className={s.iconsGas} width={20} height={20}>
                <use href={`${icons}#icon-hugeicons_gas-stove`} />
              </svg>
              <p className={s.badgeText}>Gas</p>
            </li>
          )}
          {water && (
            <li className={s.badge}>
              <svg className={s.iconsWater} width={20} height={20}>
                <use href={`${icons}#icon-ion_water-outline`} />
              </svg>
              <p className={s.badgeText}>Water</p>
            </li>
          )}
        </ul>
        <Link
          to={`/campers/${id}/features`}
          target="_blank"
          rel="noopener noreferrer"
          replace
        >
          <Button text="Show more" className={s.button} />
        </Link>
      </div>
    </li>
  );
};
export default CampersItem;
