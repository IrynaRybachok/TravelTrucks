import s from "./Location.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUniqueLocations } from "../../redux/campers/selectors";
import icons from "../../assets/icons/symbol-defs.svg";
import { components } from "react-select";
import { useEffect } from "react";
import { getLocations } from "../../redux/campers/operations";
import Select from "react-select";

const CustomPlaceholder = (props) => {
  return (
    <components.Placeholder {...props}>
      <span style={{ color: "#aaa", fontSize: "14px" }}>{props.children}</span>
    </components.Placeholder>
  );
};

// Налаштування стилів для Placeholder
const customStyles = {
  control: (provided) => ({
    ...provided,
    width: "360px",
    height: "52px",
    paddingLeft: "46px",
    paddingRight: "18px",
    paddingTop: "10px",
    paddingBottom: "10px",
    fontFamily: "Inter",
    fontSize: "16px",
    border: "none",
    borderRadius: "12px",
    color: "#333",
    boxSizing: "border-box",
    cursor: "pointer",
    backgroundColor: "#F7F7F7",
    textAlign: "left",
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: "14px",
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "14px",
    cursor: "pointer",
  }),
};

const Location = () => {
  const dispatch = useDispatch();
  const locations = useSelector(selectUniqueLocations);

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  const locationOptions = locations.map((location) => {
    const [country, city] = location.split(", ");
    return {
      value: location,
      label: `${country}, ${city}`,
    };
  });

  return (
    <div className={s.container}>
      <h3 className={s.title}>Location</h3>
      <div className={s.wrapInput}>
        <svg className={s.iconMap} width={20} height={20}>
          <use href={`${icons}#icon-map`} />
        </svg>
        <Select
          className={s.input}
          name="location"
          options={locationOptions}
          classNamePrefix="select"
          styles={customStyles}
          placeholder="City"
          components={{ Placeholder: CustomPlaceholder }} // використовується кастомний Placeholder
          isClearable
        />
      </div>
    </div>
  );
};

export default Location;
