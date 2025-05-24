import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters, resetPage, clearCampers } from "../../redux/campers/slice";
import s from "./Filters.module.css";
import clsx from "clsx";
import Button from "../Botton/Botton";
const buildBtnClass = ({ isActive }) => {
  return clsx(s.btnOptions, isActive && s.activeBtnOptions);
};

const Filters = () => {
  const dispatch = useDispatch();
  const [selectedFilters, setSelectedFilters] = useState({
    equipment: [],
    form: "",
  });
  const spritePath = "/assets/icons/symbol-defs.svg";

  // Опции фильтра
  const equipmentOptions = [
    { label: "AC", icon: "icon-wind" },
    { label: "Automatic", icon: "icon-diagram" },
    { label: "Kitchen", icon: "icon-cup-hot" },
    { label: "TV", icon: "icon-tv" },
    { label: "Bathroom", icon: "icon-ph_shower" },
    { label: "Radio", icon: "icon-ui-radios" },
    { label: "Refrigerator", icon: "icon-solar_fridge-outline" },
    { label: "Microwave", icon: "icon-lucide_microwave" },
    { label: "Gas", icon: "icon-hugeicons_gas-stove" },
    { label: "Water", icon: "icon-ion_water-outline" },
  ];

  const typeOptions = [
    { label: "Van", icon: "icon-bi_grid-1x2" },
    { label: "Fully Integrated", icon: "icon-bi_grid" },
    { label: "Alcove", icon: "icon-bi_grid-3x3-gap" },
  ];

  // Обработчик для Vehicle Equipment
  const handleEquipmentChange = (value) => {
    setSelectedFilters((prev) => {
      const updatedEquipment = prev.equipment.includes(value)
        ? prev.equipment.filter((item) => item !== value) // Удаляем, если уже выбран
        : [...prev.equipment, value]; // Добавляем, если не выбран

      return { ...prev, equipment: updatedEquipment };
    });
  };

  // Обработчик для Vehicle Type
  const handleTypeChange = (value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      form: prev.form === value ? "" : value, // Если уже выбран, сбрасываем
    }));
  };

  // Применить фильтры
  const applyFilters = () => {
    const equipmentMapping = {
      AC: "AC",
      Automatic: "transmission",
      Kitchen: "kitchen",
      TV: "TV",
      Bathroom: "bathroom",
      Radio: "radio",
      Refrigerator: "refrigerator",
      Microwave: "microwave",
      Gas: "gas",
      Water: "water",
    };
    const equipmentFilters = selectedFilters.equipment.reduce((acc, item) => {
      const key = equipmentMapping[item];
      if (key) {
        // Если ключ - "transmission", нужно передавать строку "automatic", а не true/false
        acc[key] = key === "transmission" ? "automatic" : true;
      }
      return acc;
    }, {});

    const formattedFilters = {
      ...equipmentFilters,
      form: selectedFilters.form
        ? selectedFilters.form.toLowerCase()
        : undefined,
    };
    dispatch(clearCampers());
    dispatch(resetPage()); // Сбросить страницу на 1
    dispatch(setFilters(formattedFilters)); // Отправить фильтры в Redux
  };

  return (
    <div>
      <h3 className={s.title}>Filters</h3>

      <div className={s.equipmentBox}>
        <h4 className={s.subtitle}>Vehicle Equipment</h4>
        <div className={s.wrapBtnOptions}>
          {equipmentOptions.map(({ label, icon }) => (
            <button
              className={buildBtnClass({
                isActive: selectedFilters.equipment.includes(label),
              })}
              key={label}
              onClick={() => handleEquipmentChange(label)}
            >
              <svg width="32" height="32">
                <use href={`${spritePath}#${icon}`} />
              </svg>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className={s.typeBox}>
        <h4 className={s.subtitle}>Vehicle Type</h4>
        <div className={s.wrapBtnOptions}>
          {typeOptions.map(({ label, icon }) => (
            <button
              className={buildBtnClass({
                isActive: selectedFilters.form === label,
              })}
              key={label}
              onClick={() => handleTypeChange(label)}
            >
              <svg width="32" height="32">
                <use href={`${spritePath}#${icon}`} />
              </svg>
              {label}
            </button>
          ))}
        </div>
      </div>
      <Button text="Search" onClick={applyFilters} />
    </div>
  );
};

export default Filters;
