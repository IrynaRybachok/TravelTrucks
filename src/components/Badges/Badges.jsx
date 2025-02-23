import icons from "../../assets/icons/symbol-defs.svg";
import s from "./Badges.module.css";
const Bades = ({ data }) => {
  const {
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
  } = data;
  return (
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
  );
};

export default Bades;
