import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import Location from "../../components/Location/Location";
import s from "./CampersCatalogPage.module.css";
const CampersCatalogPage = () => {
  return (
    <div className={s.container}>
      <div className={s.filterBox}>
        <Location />
        <Filters />
      </div>
      <CampersList />
    </div>
  );
};

export default CampersCatalogPage;
